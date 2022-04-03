
const getLanguages = (data, lenguajeElegido) => {
    console.log(data, lenguajeElegido)
    return data.filter(
      (item) => item.lenguage.toLocaleLowerCase() === lenguajeElegido.toLocaleLowerCase()
    );
}

export default getLanguages