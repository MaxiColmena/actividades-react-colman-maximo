import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, isLoading: true})
    const { data, isLoading } = state

    const getFetch = async() => {
      try {
        setState({...state, isLoading: true})


        const url = url
        const resp = await fetch(url);
        const data = await resp.json();
  
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        setState({
          data: data,
          isLoading: false,
        });


      } catch (error) {
        console.log("Error al obtener los personajes", error);
      }
    }

    useEffect(()=>{getFetch()}, [url] )

    return {
      data, isLoading
    }
  };