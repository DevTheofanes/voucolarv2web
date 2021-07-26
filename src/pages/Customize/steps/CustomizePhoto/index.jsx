import { ImFolderUpload, ImBlocked } from "react-icons/im";

import { useCustomize } from '../../../../hooks/useCustomize';

import {
  Item,
  Items,
  ItemsWrapper,
  ItemsTitle,
  CustomizeContent,
} from '../../components/styles';

export const CustomizePhoto = (props) => {
  const { 
    setPhoto,
  } = useCustomize();

  const handlePhotoChange = (event) => {
    if (!event) {  
      return setPhoto(null);
    }

    const target = event.target;
    const files = target.files;

    const fileReader = new FileReader();

    fileReader.onload = function () {
      event.target.value = '';
      setPhoto(fileReader.result);
    }
    fileReader.readAsDataURL(files[0]);
  };

  return (
    <CustomizeContent>
      <ItemsWrapper>
        <ItemsTitle>
          Adicione sua foto
        </ItemsTitle>

        <form>
          <Items className="items">
            <Item className="--photoPicker" onClick={() => handlePhotoChange(null)}>
              <label className="filePicker">SEM FOTO</label>
              <ImBlocked size={92} color="#707070"/>
            </Item>
            <Item className="--photoPicker">
              <label className="filePicker">DO COMPUTADOR</label>
              <input type="file" onChange={(e) => handlePhotoChange(e)} accept=".gif,.jpg,.jpeg,.png" name="arquivo" id="arquivo"/>
              <ImFolderUpload size={92} color="#707070"/>
              <label htmlFor="arquivo" className="--trigger"/>
            </Item>
          </Items>
        </form>
      </ItemsWrapper>
    </CustomizeContent>
  );
}

