

const getByIndustry = (data, IndustryElegido) => {
    console.log(data, IndustryElegido)
    return data.filter(
      (item) => item.lenguage.toLocaleLowerCase() === IndustryElegido.toLocaleLowerCase()
    );
}

export default getByIndustry