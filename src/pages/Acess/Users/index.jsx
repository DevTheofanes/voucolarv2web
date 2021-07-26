import { useEffect, useState } from 'react';
import api from '../../../services/api';

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent, Grid } from '../styles'
import { GridRow } from './styles';


export const AcessUsers = (props) => {
  const {token} = useUser()

  const [users, setUsers] = useState([])

  async function loadUsers(){
    const response = await api.get(`/users`)

    setUsers(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadUsers();
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Usuários</span>
      </HeaderContent>

      <Grid>
        <GridRow>
          <h3>Id</h3>
          <h3>Nome</h3>
          <h3>Email</h3>
        </GridRow>
        {
          users.map(user => {
            return (
              <GridRow key={user.id}>
                <span>{user.id}</span>
                <span>{user.name}</span>
                <span>{user.email}</span>
              </GridRow>
            )
          })
        }
      </Grid>
    </Container>
  );
}

