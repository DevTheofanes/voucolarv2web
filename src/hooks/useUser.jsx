import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from "../services/api";
import { history } from "../services/history";

const UserContext = createContext([]);

export function UserContextProvider({children}){
  const host = "https://server.voucolar.com.br:8002"
  // const host = "http://127.0.0.1:3333"

  const [user, setUser] = useState([])
  const [token, setToken] = useState("")
  const [manager, setManager] = useState(false)

  useEffect(() => {
    async function loadData() {
      const userData = await JSON.parse(localStorage.getItem('@voucolar/user'))
      const tokenData = await JSON.parse(localStorage.getItem('@voucolar/token'))
  
      setUser(userData)
      setToken(tokenData)

      if(userData?.manager){
        setManager(true)
      }
      
      api.defaults.headers.authorization = tokenData;
    }

    loadData()
    // api.defaults.headers.authorization = `Bearer ${tokenData}`;
  }, [])

  async function handleSession(data,){
    try {
      const response = await api.post('/session', data)
      toast.success(`Seja bem-vindo ${response.data.user.name}`)

      setUser(response.data.user)
      setToken(response.data.token)
      
      localStorage.setItem('@voucolar/user', JSON.stringify(response.data.user));
      localStorage.setItem('@voucolar/token', JSON.stringify(String(response.data.token)));

      if(response.data.user.manager){
        setManager(true)
        return history.push("/acess/dashboard")
      }

      history.push("/");
    } catch (error) {
      toast.error(error.response.data.error)
      console.log(error.response.data)
    }
  }

  async function handleRegister(data){
    try {
      const response = await api.post('/users', data)
      
      handleSession({
        email: data.email,
        password: data.password
      })

    } catch (error) {
      toast.error(error.response.data.error)
      console.log(error.response.data)
    }
  }

  function LogoutSession(){
    localStorage.removeItem('@voucolar/user')
    localStorage.removeItem('@voucolar/token')

    setUser(null)
    setToken("")

    history.push("/")
  }

  return (
    <UserContext.Provider value={{ host, user, token, manager, handleSession, handleRegister, LogoutSession }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  const context = useContext(UserContext)
  return context
};