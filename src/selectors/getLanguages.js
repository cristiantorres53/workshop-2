
const getLanguages = (data, id) => {
    console.log(data, id)
    return data.filter( algo => algo.lenguage === id );
}

export default getLanguages