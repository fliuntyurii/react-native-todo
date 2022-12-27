import React, {
    createContext,
    useContext,
    useMemo,
    useState,
  } from "react";
  
  const Context = createContext({
    user: {
      nickname: '',
      email: '',
      password: ''
    },
    isLoggined: false,
    userLogin: (object: any, value: any) => object
  });
  
  function ContextProvider(props: any) {
    const [user, setUser] = useState<any>({});
    const [isLoggined, setIsLoggined] = useState<boolean>(false);

    const userLogin = (object: any, value: any) => {
      setUser(object);
      setIsLoggined(value);
    }
    
    const ctxValue = useMemo(
      () => ({
        user,
        isLoggined,
        userLogin
      }),
      [isLoggined]
    );
  
    return <Context.Provider value={ctxValue} {...props} />;
  }
  
  const useAuth = () => useContext(Context);
  
  export { ContextProvider, useAuth, Context };