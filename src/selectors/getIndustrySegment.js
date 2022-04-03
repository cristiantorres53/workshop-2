const getIndustrySegment = (data, id) => {
    console.log(data, id)
    return data.filter( algo1 => algo1.industry_segment === id );
}

export default getIndustrySegment