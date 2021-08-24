import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

import { useUser } from './useUser';
import { useCart } from './useCart';

import api, { googleAPI } from '../services/api'
import history from '../services/history';

const CustomizeContext = createContext([]);

function dataURLtoFile(dataurl, filename) {

  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

const CustomizeContextProvider = ({ children }) => {
  const { host } = useUser();
  const { addToCart } = useCart();

  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [currentFont, setCurrentFont] = useState(null);
  const [availableFonts, setAvailableFonts] = useState([]);

  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [modelDetail, setModelDetail] = useState(null);
  const [modelDimensions, setModelDimensions] = useState({});
  const [availableModels, setAvailableModels] = useState([]);

  const [photo, setPhoto] = useState(null);

  const [sticker, setSticker] = useState(null);
  const [availableStickers, setAvailableStickers] = useState([]); 

  const [background, setBackground] = useState(null);
  const [availableBackgrounds, setAvailableBackgrounds] = useState([]);

  const [canvas, setCanvas] = useState();
  const [modelGroup, setModelGroup] = useState(null);
  
  const isMobile = window.innerWidth <= 768;
  const allowedFonts = ['Satisfy', 'Allura', 'Trocchi', 'Baskervville', 'Roboto', 'Ubuntu', 'Teko', 'Montserrat', 'VT323', 'Hachi Maru Pop'];

  const modelRequired = (model) => {
    return new Promise((resolve, reject) => {
      if (!model) {
        return reject(new Error('Escolha um Celular'));
      }

      return resolve();
    });
  };

  const fontByName = (fontName) => {
    return availableFonts.find((font) => {
      return font.name === fontName;
    });
  };

  const [steps] = useState([
    {
      step: 0,
      name: 'Escolha o seu celular',
      path: '/customize',
      visible: false,
      validation: ({ model }) => modelRequired(model),
    },
    {
      step: 1,
      name: 'Escolha o fundo',
      path: '/customize/background',
      visible: true,
    },
    {
      step: 2,
      name: 'Adicione uma foto',
      path: '/customize/image',
      visible: true,
    },
    {
      step: 3,
      name: 'Stickers e Personalização',
      path: '/customize/stickers',
      visible: true,
    },
    {
      step: 4,
      name: 'Adicione Texto',
      path: '/customize/text',
      visible: true,
    },
    {
      step: 5,
      name: 'Resultado',
      path: '/customize/full',
      nextStepText: 'Eu quero!',
      visible: false,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const firstStep = steps[0];
  const lastStep = steps[steps.length - 1];

  const stepByStepNumber = (stepNumber) => {
    return steps.find((step) => step.step === stepNumber);
  };

  const nextStepByDirection = (direction) => {
    let stepNumber;

    if (direction === 'next') {
      stepNumber = currentStep.step >= lastStep.step
        ? lastStep.step
        : currentStep.step + 1;
    }

    if (direction === 'prev') {
      stepNumber = currentStep.step <= firstStep.step
        ? firstStep.step
        : currentStep.step - 1;
    }

    return stepByStepNumber(stepNumber);
  }

  const goToStep = (step) => {
    setCurrentStep(step);
    history.push(step.path);
  };

  const stepNavigate = async (direction) => {
    if (direction === 'next' && currentStep.step === lastStep.step) {
      
      const casePreview = canvas.toDataURL({
        format: 'jpeg',
        quality: 1,
      });

      localStorage.setItem('vouColarCasePreview', casePreview);

      canvas.remove(modelGroup);

      const caseImage = canvas.toDataURL({
        format: 'jpeg',
        quality: 1,
      });
      localStorage.setItem('vouColarCase', caseImage);
  
      var file = dataURLtoFile(caseImage, 'personalize.jpeg');

      const data = new FormData();
      data.append('image', file);
      try {
        const response = await api.patch("customizations", data)
        const value = await api.get("/valueCustomization")
        const modelsAll = await api.get("/models")

        let backgroundImage = "";
        let nameMark = "";
        let nameModel = "";


        const models = modelsAll.data

        for (const key in models) {
          if (Object.hasOwnProperty.call(models, key)) {
            const element = models[key];
            if(element.id === model){
              backgroundImage = element.image;
              nameMark = element.nameMark
              nameModel = element.name
            }
          }
        }

        const product = {
          id: response.data.id,
          personalize: true,
          image: response.data.image,
          name: "Produto Personalizado",
          value: value.data.value,
        }

        addToCart({
          ...product,
          background: backgroundImage,
          nameMark,
          nameModel,
          amount: 1
        })

        toast.success("Personalização adicionada ao carrinho!")

      } catch (error) {
        console.log(error)
        toast.warn("Algo deu errado, tente novamente mais tarde.")
      }

      // return history.go("/")
        
      // return window.open('https://voucolar.com.br', '_blank');
    } 

    try {
      const step = nextStepByDirection(direction);

      currentStep.validation && await currentStep.validation({ model });

      setCurrentStep(step);
      history.push(step.path);
    } catch (error) {
      error && toast.error(error.message);
    }
  };

  const modelByBrandAndModelId = (modelId, brandId) => {
    if (!availableModels) return;

    const brandModels = availableModels.find((brand) => Number(brand.id) === brandId);

    const model = brandModels && brandModels.models.find((model) => Number(model.id) === modelId);

    return model && {
      ...model,
      imagePath: `${host}/files/${model.image}`,
    }
  };

  const loadStickers = async () => {
    const response = await api.get(`/assets/figure`);

    setAvailableStickers(response.data);
  };

  const loadBackgrounds = async () => {
    const response = await api.get(`/assets`);

    const backgrounds = response.data.map((background) => {
      return {
        ...background,
        imagePath: `${host}/files/${background.image}`,
      }
    });

    setAvailableBackgrounds(backgrounds);
  };
  
  const loadMarksAndModels = async () => {
    try {
      const response = await api.get("/marks");

      const marks = response.data;
      const modelsFormatted = [];

      for (const key in marks) {
        if (Object.hasOwnProperty.call(marks, key)) {
          const element = marks[key];

          try {
            const response = await api.get(`/marks/${element.id}/models`)

            const shape = {
              id: element.id,
              name : element.name,
              models : response.data,
            }

            modelsFormatted.push(shape);
          } catch (error) {
            toast.error(error.response.data.error);
          }
        }
      }

      setAvailableModels(modelsFormatted);
    } 
    catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const loadGoogleFonts = async () => {
    try {
      const fonts = await googleAPI.get('');

      const fontsTreated = fonts.data.items.map((font) => ({
        name: font.family,
        file: font.files.regular,
        category: font.category,
      })).filter((font) => allowedFonts.includes(font.name));

      const fontsNames = fontsTreated.map((font) => font.name);
      const fontsNamesSplited = fontsNames.join('|');

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `https://fonts.googleapis.com/css?family=${fontsNamesSplited}`;

      document.querySelector('head').append(link);

      setAvailableFonts(fontsTreated);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!currentStep || currentStep.step === 0) {
      return history.push('/customize');
    }
  }, []);

  useEffect(() => {
    setModelDetail(modelByBrandAndModelId(model, brand));
  }, [model, brand]);

  return (
    <CustomizeContext.Provider value={{
      isMobile,
      canvas, setCanvas,
      modelGroup, setModelGroup,
      steps, stepNavigate, firstStep, lastStep, goToStep,
      model, setModel,
      modelDimensions, setModelDimensions,
      availableModels, modelDetail, loadMarksAndModels,
      text, setText,
      color, setColor,
      currentFont, setCurrentFont, fontByName,
      availableFonts, loadGoogleFonts,
      brand, setBrand,
      background, setBackground,
      availableBackgrounds, loadBackgrounds,
      sticker, setSticker,
      availableStickers, loadStickers,
      photo, setPhoto,
      currentStep, setCurrentStep
    }}>
      {children}
    </CustomizeContext.Provider>
  )
};

const useCustomize = () => useContext(CustomizeContext);

export { useCustomize, CustomizeContext, CustomizeContextProvider };
