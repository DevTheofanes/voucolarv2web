import { useState, useEffect } from 'react';

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent, Grid, GridRow } from '../styles'

import api from '../../../services/api';

import { NewMark } from './Modal/NewMark';
import { EditMark } from './Modal/EditMark';
import { DeleteMark } from './Modal/DeleteMark';

export function AcessMarks() {
  const { token, host } = useUser()

  const [marks, setMarks] = useState([])
  const [mark, setMark] = useState({})

  const [isNewMarkOpen, setIsNewMarkOpen] = useState(false)
  const [isUpdateMarkOpen, setIsUpdateMarkOpen] = useState(false)
  const [isDeleteMarkOpen, setIsDeleteMarkOpen] = useState(false)

  const handleOpenNewMarkModal = () => setIsNewMarkOpen(true)
  const handleCloseNewMarkModal = () => setIsNewMarkOpen(false)
  const handleOpenUpdateMarkModal = (mark) => {
    setIsUpdateMarkOpen(true)
    setMark(mark)
  }
  const handleCloseUpdateMarkModal = () => setIsUpdateMarkOpen(false)
  const handleOpenDeleteMarkModal = (mark) => {
    setIsDeleteMarkOpen(true)
    setMark(mark)
  }
  const handleCloseDeleteMarkModal = () => setIsDeleteMarkOpen(false)

  async function loadMarks(){
    try {
      const response = await api.get("marks")
      setMarks(response.data)

    } catch (error) {
      console.log(error.response.data)
    }

  }

  useEffect(() => {
    loadMarks();
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Marcas</span>
        
        <button type="button" onClick={() => handleOpenNewMarkModal()}>
          <label>Adicionar</label>
        </button>   
      </HeaderContent>

      <Grid>
        <GridRow>
          <h3>Id</h3>
          <h3>Imagem</h3>
          <h3>Nome</h3>
          <h3>Ações</h3>
        </GridRow>
        {
          marks.map(mark => {
            return (
              <GridRow key={mark.id}>
                <span>{mark.id}</span>
                <img src={`${host}/files/${mark.image}`} alt={mark.name} />
                <span>{mark.name}</span>
                <div>
                  <button type="button" onClick={() => handleOpenUpdateMarkModal(mark)}>
                    <label>Editar</label>
                  </button>

                  <button type="button" onClick={() => handleOpenDeleteMarkModal(mark)}>
                    <label>Apagar</label>
                  </button>
                </div>
                
              </GridRow>
            )
          })
        }
      </Grid>

      <EditMark isOpen={isUpdateMarkOpen} onRequestClose={handleCloseUpdateMarkModal} mark={mark}/>
      <DeleteMark isOpen={isDeleteMarkOpen} onRequestClose={handleCloseDeleteMarkModal}  mark={mark} />
      <NewMark isOpen={isNewMarkOpen} onRequestClose={handleCloseNewMarkModal}/>
      
    </Container>
  );
}