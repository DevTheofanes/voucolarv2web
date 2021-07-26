import { fabric as Fabric } from 'fabric';
import FontFaceObserver from 'fontfaceobserver';
import { useEffect, useState, useRef } from "react";

import { useUser } from "../../../../hooks/useUser";
import { useCustomize } from "../../../../hooks/useCustomize";

import { CasePreview as CasePreviewComponent } from './styles';

const CasePreview = () => {
  const { host } = useUser();
  const {
    isMobile,
    photo, setPhoto,
    setColor, color,
    setText, text, currentFont, setCurrentFont, fontByName,
    sticker,
    background,
    modelDetail,
    modelDimensions, setModelDimensions,
    canvas, setCanvas,
    modelGroup, setModelGroup,
  } = useCustomize();

  const casePreviewRef = useRef();

  const [textGroup, setTextGroup] = useState(null);
  const [photoGroup, setPhotoGroup] = useState(null);
  const [backgroundGroup, setBackgroundGroup] = useState(null);

  const [stickerGroups, setStickerGroups] = useState([]);

  const defaultModelImage = './default-model.jpg';

  const resolveImagePath = (imageName) => {
    return `${host}/files/${imageName}`;
  };

  const addControlsToCanvas = () => {
    const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

    const img = document.createElement('img');
    img.src = deleteIcon;

    const deleteObject = (eventData, transform) => {
      const target = transform.target;
      const canvas = target.canvas;

      canvas.remove(target);
      canvas.renderAll();

      if (target.name === 'text') {
        setText('');
        setColor('#000000');
        setCurrentFont('');
        setTextGroup(null);
      }

      if (target.name.includes('stickers')) {
        const filteredStickers = stickerGroups.filter((stickerGroup) => stickerGroup !== target);
        setStickerGroups(filteredStickers);
      }
    }
  
    function renderIcon(ctx, left, top, styleOverride, FabricObject) {
      const size = this.cornerSize;

      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(Fabric.util.degreesToRadians(FabricObject.angle));
      ctx.drawImage(img, -size/2, -size/2, size, size);
      ctx.restore();
    }    

    Fabric.Object.prototype.controls.deleteControl = new Fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -24,
      cursorStyle: 'pointer',
      mouseUpHandler: deleteObject,
      render: renderIcon,
      cornerSize: 24
    });
  }

  const initCanvas = () => {
    const canvasInstance = new Fabric.Canvas(casePreviewRef.current, {
      selectable: true,
    });

    canvasInstance.on({
      'object:moving': function(e) {
        e.target.opacity = 0.2;
      },
      'object:modified': function(e) {
        e.target.opacity = 1;
        canvasInstance.discardActiveObject();
      },
    });

    addControlsToCanvas(canvasInstance);
    setCanvas(canvasInstance);
  };

  useEffect(() => {
    initCanvas();
  }, []);

  useEffect(() => {
    if (!canvas) return;

    canvas.clear();

    const modelImage = modelDetail ? resolveImagePath(modelDetail.image) : defaultModelImage;

    Fabric.Image.fromURL(modelImage, (image) => {
      const height = isMobile ? image.height : 440;
      const width = isMobile ? image.width : 247;

      const modelDimensions = {
        width: isMobile ? width * 0.5 : width,
        height: isMobile ? height * 0.5 : height,
      };

      setModelDimensions(modelDimensions);

      image.scaleToHeight(modelDimensions.height);

      canvas.setDimensions(modelDimensions, canvas.renderAll.bind(canvas));

      const modelGroup = new Fabric.Group([image], {
        name: 'model',
        selectable: false,
        evented: false,
      });

      if (isMobile) {
        modelGroup.scaleToHeight(modelDimensions.height);
      }

      canvas.add(modelGroup).renderAll();
      setModelGroup(modelGroup);
    }, { crossOrigin: 'anonymous' });
  }, [modelDetail]);
 
  useEffect(() => {
    clearBackground();

    if (!background) {
      return organizeLayers();
    };
 
    Fabric.Image.fromURL(resolveImagePath(background), (image) => {
      image = image.set({
        selectable: false,
      });

      image.scaleToHeight(modelDimensions.height);

      const group = new Fabric.Group([image], {
        name: 'background',
        width: modelDimensions.width,
        height: modelDimensions.height,
        selectable: false,
      });

      canvas.add(group).setActiveObject(group);
      canvas.getActiveObject().centerV().centerH();
      canvas.getActiveObject().setCoords();
      canvas.discardActiveObject();

      setPhoto(null);
      setPhotoGroup(null);
      setBackgroundGroup(group);

      organizeLayers();
    }, { crossOrigin: 'anonymous' });
  }, [background]);  

  useEffect(() => {
    clearBackground();

    if (!photo) {
      return organizeLayers();
    };

    Fabric.Image.fromURL(photo, (image) => {
      image = image.set({
        selectable: false,
      });

      image.scaleToHeight(modelDimensions.height);

      const group = new Fabric.Group([image], {
        name: 'photo',
        width: modelDimensions.width,
        height: modelDimensions.height,
        selectable: false,
      });

      canvas.add(group).setActiveObject(group);
      canvas.getActiveObject().centerV().centerH();
      canvas.getActiveObject().setCoords();
      canvas.discardActiveObject();

      setPhotoGroup(group);
      setBackgroundGroup(null);

      organizeLayers();
    }, { crossOrigin: 'anonymous' });
  }, [photo]);

  useEffect(() => {
    if (!sticker) return;

    Fabric.Image.fromURL(resolveImagePath(sticker), (image) => {
      image = image.set({
        selectable: true,
      });

      image.scaleToHeight(isMobile ? 50 : 100);

      const group = new Fabric.Group([image], {
        name: `stickers-${image}`,
        selectable: true,
      });

      canvas.add(group).setActiveObject(group);
      canvas.getActiveObject().centerV().centerH();
      canvas.getActiveObject().setCoords();
      canvas.discardActiveObject();

      setStickerGroups([...stickerGroups, group]);
    }, { crossOrigin: 'anonymous' });
  }, [sticker]);

  useEffect(() => {
    if (!text || !currentFont) return;

    const fontFamily = fontByName(currentFont);

    if (!fontFamily) {
      setCurrentFont(null);

      setTextGroup(null);
      canvas.remove(textGroup);
      canvas.renderAll();

      return;
    }

    const fontObserver = new FontFaceObserver(fontFamily.name);

    fontObserver.load().then(() => {
      const textBox = new Fabric.Textbox(text, {
        fill: color,
        fontSize: 20,
        fontFamily: fontFamily.name,
      });

      let group = textGroup;

      if (group) {
        group.forEachObject((object) => group.remove(object));
        group.addWithUpdate(textBox);
      } else {
        group = new Fabric.Group([textBox], {
          name: 'text',
          selectable: true,
        });

        canvas.add(group);   
      }

      canvas.setActiveObject(group);
      canvas.getActiveObject().centerV().centerH();
      canvas.getActiveObject().setCoords();
      canvas.discardActiveObject();
      canvas.renderAll();

      setTextGroup(group);
    }).catch((e) => console.error(e));
  }, [text, color, currentFont]);

  const organizeLayers = () => {
    if (!canvas) return;

    backgroundGroup && canvas.sendToBack(backgroundGroup);
    photoGroup && canvas.bringToFront(photoGroup);

    if (stickerGroups) {
      stickerGroups.forEach((stickerGroup) => {
        canvas.bringToFront(stickerGroup);
      });
    }

    textGroup && canvas.bringToFront(textGroup);
    modelGroup && canvas.bringToFront(modelGroup);

    canvas.renderAll();
  };

  const clearBackground = () => {
    if (photoGroup) {
      photoGroup.forEachObject((object) => photoGroup.remove(object)); 
    }

    if (backgroundGroup) {
      backgroundGroup.forEachObject((object) => backgroundGroup.remove(object));
    }

    setPhotoGroup(null);
    setBackgroundGroup(null);
  };

  useEffect(() => {
    organizeLayers();
  }, [stickerGroups, textGroup, modelGroup]);

  return (
    <CasePreviewComponent className="casePreview">
      <canvas ref={casePreviewRef} id="casePreviewCanvas"></canvas>
    </CasePreviewComponent>
  );
}

export { CasePreview };
