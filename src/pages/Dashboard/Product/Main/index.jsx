import React, { useState, useEffect } from 'react';
import api from '../../../../services/api';
import history from '../../../../services/history';

import {
  Container,
  Divider,
  FlickitySlider,
  FlickityViewPort,
  ImagesPhone,
  ProductDescription,
  ProductFigure,
  ProductGallery,
  ProductGalleryDiv,
  ProductInfo,
  ProductMeta,
  ProductPrice,
  RowContent,

  SelectModel
} from './styles';

// import mockProduct from '../../Personalizar/Main/mockProduct';

import { More } from '../../../../components/MoreMinus';

import FooterProduct from './Footer'
import { useCart } from '../../../../hooks/useCart';
import { useUser } from '../../../../hooks/useUser';
import { RelatedProducts } from '../../../../components/RelatedProducts';


function Main(props) {
  const { token, host } = useUser();
  const { addToCart } = useCart();

  const [imageBackground, setImageBackground] = useState(0);
  const [nameMark, setNameMark] = useState(0);
  const [amount, setAmount] = useState(1);

  const product = props.product;
  const category = props.category;

  const [models, setModels] = useState([])
  const [modelSelect, setModelSelect] = useState(null)

  function handlePlusAmount(){
    setAmount(Number(amount) + 1)
  }

  function handleMinusAmount(){
    if(amount > 0){
      setAmount(Number(amount) - 1)
    }
  }

  function handleBuy(){
    if(Number(amount) === 0){
      return alert("Para realizar uma compra, é necessario pelo menos 1 item")
    }

    addToCart({
      ...product,
      background: imageBackground,
      nameMark,
      amount
    })

    history.push("/cart")
  }

  function separateModels(data){
    if(product.id){
      const arrayIdsModels = product.idsModelsWithoutCustomization.split(",")
      console.log(`Array que não pode ${arrayIdsModels}`)

      const modelsUpdated = []

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const model = data[key];

          const find = arrayIdsModels.find((id) => Number(id) === Number(model.id))

          // for (const key in arrayIdsModels) {
          //   if (Object.hasOwnProperty.call(arrayIdsModels, key)) {
          //     const id = arrayIdsModels[key];
          //     console.log("VERIFICAÇÂO")
          //     console.log(id)
          //     console.log(model.id)
          //     if (Number(id) !== Number(model.id)) {
          //       modelsUpdated.push(model)
          //     }
          //   }
          // }

          console.log(model)
          console.log(arrayIdsModels.length)

          if(!find){
            modelsUpdated.push(model)
          }
        }
      }
      console.log(modelsUpdated)
      setModels(modelsUpdated)
    }

    // if(product.idsModelsWithoutCustomization.length === 0){
    //   setModels(data)
    // }
  }

  async function loadModels(){
    const response = await api.get(`/models`)

    const data = response.data;

    setImageBackground(data[data.length - 1].image)
    setNameMark(data[data.length - 1].name)
    setModelSelect(data[data.length - 1].id)
    separateModels(data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadModels();
    
  }, [token, product])

  useEffect(() => {
    for (const key in models) {
      if (Object.hasOwnProperty.call(models, key)) {
        const element = models[key];
        if(element.id === Number(modelSelect)){
          setNameMark(element.name)
          setImageBackground(element.image)
        }
      }
    }

  }, [modelSelect])

  
  return (
    <>
      <Container>
        <RowContent>
          {/* Foto */}
          <ProductGallery>
            <ProductFigure>
              <FlickityViewPort>
                <FlickitySlider>
                  <ProductGalleryDiv>
                    {
                      imageBackground ? (
                        <ImagesPhone>
                          <div>
                            <img src={`${host}/files/${product.image}`} alt={product.name} style={{ objectFit: "cover"}}/>
                            <img src={`${host}/files/${imageBackground}`} alt=""/>
                          </div>
                        </ImagesPhone>
                      ) : (
                        <img src={`${host}/files/${product.image}`} alt={product.name} />
                      )
                    }
                  </ProductGalleryDiv>
                </FlickitySlider>
              </FlickityViewPort>
            </ProductFigure>
          </ProductGallery>

          {/* Info */}
          <ProductInfo>
            <h1>{product.name}</h1>
            <Divider />

            <ProductPrice>
              {
                Number(product.valueNotDiscount) > 0 ? (
                  <p>
                    {
                      new Intl.NumberFormat('pt-BR',{
                        style: "currency",
                        currency:"BRL"
                      }).format(product.valueNotDiscount)
                    }
                  </p>
                ) : <></>
              }

              <span>
                {
                  new Intl.NumberFormat('pt-BR',{
                    style: "currency",
                    currency:"BRL"
                  }).format(product.value)
                }
              </span>
            </ProductPrice>

            <SelectModel onChange={e => setModelSelect(e.target.value)} defaultValue={modelSelect}>
              <option value="0">Selecione seu modelo de celular</option>
              {
                models.map(model => {
                  return(
                    <option key={model.id} value={model.id}>{model.name}</option>
                  )
                })
              }   
            </SelectModel>
      
            <ProductDescription>
              Não achou seu modelo de celular? <br /> 
              Entre em contato conosco pelo whatsapp!  <br />
            </ProductDescription>


            <More onClickPlus={handlePlusAmount} onClickMinus={handleMinusAmount} value={amount} onClickBuy={handleBuy}/>

            <ProductMeta>
              <span>
                Categoria: <strong>{category}</strong>
              </span>
            </ProductMeta>
          </ProductInfo>
        </RowContent>
      </Container>

      {/* { */}
        {/* models && modelSelect ? ( */}
          {/* <FooterProduct models={models} modelSelect={modelSelect}/> */}
        {/* ) : null */}
      {/* } */}

      <RelatedProducts />
    </>
  );
}

export default Main;


