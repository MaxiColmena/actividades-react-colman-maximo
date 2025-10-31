export const getFetch = async (c) => {
    try {
     

      
        const url = `https://thesimpsonsapi.com/api/characters/${count}`;

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
    return {


    }
  };