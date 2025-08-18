import {createContext, use, useState} from 'react'

//Definido o retorno do context
interface Contextprops{
  name: string,
  loginName: string,
  save: (user: string) => void
}

//Create a context
export const UserContext = createContext<Contextprops | undefined>(undefined)

//Create Provider -> Provedor dos dados, apenas os componentes englobados por eles podem fazer o uso do context
export function UserProvider({children}: any){

  const [loginName, setLoginName] = useState<string>('')



  function saveLoginName(user: string){
    if(user !== ''){
      setLoginName(user)

    }
  }

  const contextValue : Contextprops = {name: 'Lebron', loginName: loginName, save: saveLoginName};

  return(
    <UserContext.Provider value={contextValue} >
      {children}
    </UserContext.Provider>
  )
}