import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { url } from '../helpers/url'
import '../styles/sidebar.css'



const SideBar = () => {

    const [data, setData] = useState([]);
    //const [norep, setNorep] = useState([])

    useEffect(() => {
        getData();
        //editar()
    }, []);

    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(data)

    /*     const editar = () => {
            let arreglo = data.map(data => (data.industry_segment))
            console.log(arreglo)
            let result = arreglo.filter((item, index) => {
                return arreglo.indexOf(item) === index;
            })
            setNorep(result)
        } */



    const handleOnchange = e => {
        console.log(e.target.value)

        localStorage.setItem('busqueda', e.target.value)
    }

    const handleChange = ({ target }) => {
        console.log(target.value)
        localStorage.setItem('busqueda', target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <div className='sidebarCont'>
            <h3>Filters</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className='inputSearch' placeholder='Search' name='busqueda' onChange={handleChange} />
                </form>
            </div>
            <Accordion className="Accordionxd">

                <Accordion.Item eventKey='0' >
                    <Accordion.Header>Industry Segment</Accordion.Header>
                    <Accordion.Body >
                        {
                            data.map((data, index) =>
                                <div key={index}>
                                    <input
                                        onChange={handleOnchange}
                                        value={data.industry_segment}
                                        type='checkbox'
                                        name={data.industry_segment}
                                    />
                                    <label>{data.industry_segment}</label>

                                </div>
                            )}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1' >
                    <Accordion.Header>Prymary topic</Accordion.Header>
                    <Accordion.Body >
                        {
                            data.map((data, index) =>
                                <div key={index}>
                                    <input
                                        onChange={handleOnchange}
                                        value='Division'
                                        type='checkbox'
                                        label='label'
                                        name='radio'
                                    />
                                    <label>{data.primary_topic}</label>

                                </div>
                            )}
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey='2' >
                    <Accordion.Header>Session Type</Accordion.Header>
                    <Accordion.Body >
                        {
                            data.map((data, index) =>
                                <div key={index}>
                                    <input
                                        onChange={handleOnchange}
                                        value='Division'
                                        type='checkbox'
                                        label='label'
                                        name='radio'
                                    />
                                    <label>{data.session_type}</label>

                                </div>
                            )}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
        <div>

        </div>
        </>
    )
}

export default SideBar