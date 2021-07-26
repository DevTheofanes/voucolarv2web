import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from "../../../components/Header";
import { TopBar } from "../../../components/Header/TopBar";

import ShopPageTitle from './TitleBar'
import Main from './Main'

import api from '../../../services/api';

import {useUser} from '../../../hooks/useUser'

export function Product() {
  const {token} = useUser()

  const { name: category, id} = useParams();
  const [ product, setProduct ] = useState([]);
  const [ categoryId, setCategoryId ] = useState("");

  async function loadProduct(){
    const { data } = await api.get(`/product/${id}`)

    setCategoryId(data.category.id)
    setProduct(data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    
    loadProduct()
  }, [token])

  return (
    <>
      <TopBar/>
      <Header/>

      <ShopPageTitle category={category} categoryId={categoryId} product={product.name}/>
      <Main product={product} category={category} />
    </>
  );
}
