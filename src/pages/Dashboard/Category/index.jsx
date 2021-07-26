import { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { TopBar } from "../../../components/Header/TopBar";
import { MainContent } from "../../../components/MainContent";

import api from "../../../services/api";
import {useUser} from '../../../hooks/useUser'

import { ImagesPhone, Input, Product, ProductsList } from "../styles";

export function Category( props ) {
  const id = props.match.params.id;  

  const { token, host } = useUser()

  const [models, setModels] = useState([])
  const [products, setProducts] = useState([])
  const [imageBackground, setImageBackground] = useState(0)

  const [modelSelect, setModelSelect] = useState(null)

  async function loadModels(){
    const response = await api.get(`/models`)
    const { data } = await api.get(`/category/${id}/products`)

    setImageBackground(response.data[response.data.length - 1].image)
    setModels(response.data)
    setProducts(data.products)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadModels();
  }, [token])

  async function updateModels(){
    try {
      const { data } = await api.get(`/models/${modelSelect}/products`)
      
      setProducts(data)
    } catch (error) {
      console.log(error.data)
    }
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    updateModels();
  }, [, token, modelSelect])

  useEffect(() => {
    for (const key in models) {
      if (Object.hasOwnProperty.call(models, key)) {
        const element = models[key];
        if(element.id === Number(modelSelect)){
          setImageBackground(element.image)
        }
      }
    }

  }, [modelSelect])

  return (
    <>
      <TopBar/>
      <Header/>

      <MainContent>
        <Input>
          <select onChange={e => setModelSelect(e.target.value)}>
            <option value="0">Selecione o seu modelo de celular</option>
            {
              models.map(model => {
                return(
                  <option key={model.id} value={model.id}>{model.name}</option>
                )
              })
            }   
          </select>
        </Input>

        <ProductsList>
          {
            products.map(product =>{
              return(
                <Product key={product.id} to={`/category/${product.category.name}/product/${product.id}`}>

                  <ImagesPhone>
                    <div>
                      <img src={`${host}/files/${product.image}`} alt={product.name} />
                      <img src={`${host}/files/${imageBackground}`} alt=""/>
                    </div>
                  </ImagesPhone>

                  <h3>{product.name}</h3>
                  <span>Abstrato</span>
                  <strong>R$ 45,00</strong>
                </Product>
              )
            })
          }
          
        </ProductsList>
      </MainContent>
    </>
  );
}