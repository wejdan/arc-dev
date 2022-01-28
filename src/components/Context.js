import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {


    const [value,setValue]=React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(null);



  return <AppContext.Provider value={{value,setValue,selectedIndex,setSelectedIndex}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
