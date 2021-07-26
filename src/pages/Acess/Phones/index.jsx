import { useState, useEffect } from 'react';

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent, Grid } from '../styles'
import { GridRow } from './styles'

import api from '../../../services/api';
import { NewModel } from './Modal/NewModel'
import { DeleteModel } from './Modal/DeleteModel';
import { EditModel } from './Modal/EditModel';


export function AcessModels() {
  const { token, host } = useUser();

  const [models, setModels] = useState([])
  const [model, setModel] = useState({})

  const [isNewModelOpen, setIsNewModelOpen] = useState(false)
  const [isUpdateModelOpen, setIsUpdateModelOpen] = useState(false)
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false)

  const handleOpenNewModelModal = () => setIsNewModelOpen(true)
  const handleCloseNewModelModal = () => setIsNewModelOpen(false)
  const handleOpenUpdateModelModal = (model) => {
    setIsUpdateModelOpen(true)
    setModel(model)
  }
  const handleCloseUpdateModelModal = () => setIsUpdateModelOpen(false)
  const handleOpenDeleteModelModal = (model) => {
    setIsDeleteModelOpen(true)
    setModel(model)
  }
  const handleCloseDeleteModelModal = () => setIsDeleteModelOpen(false)

  async function loadModels(){
    const response = await api.get("models")

    setModels(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadModels();
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Modelos</span>
        
        <button type="button" onClick={() => handleOpenNewModelModal()}>
          <label>Adicionar</label>
        </button>   
      </HeaderContent>

      <Grid>
        <GridRow>
          <h3>Id</h3>
          <h3>Imagem</h3>
          <h3>Nome</h3>
          <h3>Descrição</h3>
          <h3>Ações</h3>
        </GridRow>
        {
          models.map(model => {
            return (
              <GridRow key={model.id}>
                <span>{model.id}</span>
                <img src={`${host}/files/${model.image}`} alt={model.name} />
                <span>{model.name}</span>
                <span>{model.description}</span>
                <div>
                  <button type="button" onClick={() => handleOpenUpdateModelModal(model)}>
                    <label>Editar</label>
                  </button>

                  <button type="button" onClick={() => handleOpenDeleteModelModal(model)}>
                    <label>Apagar</label>
                  </button>
                </div>
                
              </GridRow>
            )
          })
        }
      </Grid>

      <EditModel isOpen={isUpdateModelOpen} onRequestClose={handleCloseUpdateModelModal} model={model}/>
      <DeleteModel isOpen={isDeleteModelOpen} onRequestClose={handleCloseDeleteModelModal} model={model} />
      <NewModel isOpen={isNewModelOpen} onRequestClose={handleCloseNewModelModal}/>
      
    </Container>
  );
}