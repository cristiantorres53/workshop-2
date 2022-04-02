import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { url } from '../helpers/url'
import '../styles/sidebar.css'
import Cards from './Cards'
import getLanguages from '../selectors/getLanguages'


const SideBar = () => {

    const [data, setData] = useState([]);
    const [lg, setLg] = useState()
    const [filtrado, setfiltrado] = useState(data)

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setfiltrado(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleOnchange = ({ target }) => {
        console.log(target.value)
        let elegido = target.value
        setLg(elegido)
        Filtrar()
    }
    const Filtrar = () => {
        let lgFiltered = getLanguages(data, lg)
        setfiltrado( lgFiltered )
    }

    console.log(filtrado)


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='sidebarCont'>
                <h3>Filters</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input className='inputSearch' placeholder='Search' name='busqueda' onChange={handleOnchange} />
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
                                            value={data.primary_topic}
                                            type='checkbox'
                                            label='label'
                                            name={data.primary_topic}
                                        />
                                        <label>{data.primary_topic}</label>

                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey='2' >
                        <Accordion.Header>Lenguaje</Accordion.Header>
                        <Accordion.Body >
                            {
                                data.map((data, index) =>
                                    <div key={index}>
                                        <input
                                            onChange={handleOnchange}
                                            value={data.lenguage}
                                            type='checkbox'
                                            label='label'
                                            name={data.lenguage}
                                        />
                                        <label>{data.lenguage}</label>

                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
            <div styles>
                <Cards data={filtrado} />
            </div>
        </>
    )
}

export default SideBar