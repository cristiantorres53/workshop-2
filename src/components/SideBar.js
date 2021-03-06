import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { url } from '../helpers/url'
import '../styles/sidebar.css'
import Cards from './Cards'
import getLanguages from '../selectors/getLanguages'
import lupa from '../assets/Lupa.png'


const SideBar = () => {

    const [data, setData] = useState([]);
    const [lg, setLg] = useState()
    const [is, setIs] = useState()
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
        setIs(elegido)
        Filtrar()
    }

    const handleOnchange1 = ({ target }) => {
        console.log(target.value)
        let elegido = target.value
        setIs(elegido)
        Filtrar1()
    }

    const Filtrar = () => {
        let lgFiltered = getLanguages(data, lg)
        setfiltrado( lgFiltered )
    }

    const Filtrar1 = () => {
        let isFiltered = getLanguages(data, is)
        setfiltrado( isFiltered )
    }

    console.log(filtrado)


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
      <div className="flex1">
        <div className="sidebarCont">
          <h3>Filters</h3>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="inputSearch"
                placeholder="Search"
                name="busqueda"
                onChange={handleOnchange}
              />
              <img className="lupa" alt="" src={lupa} />
            </form>
          </div>
          <Accordion className="Accordionxd">
            
          <Accordion.Item eventKey="0">
              <Accordion.Header>Industry Segment</Accordion.Header>
              <Accordion.Body>
                {data.map((data, index) => (
                  <div key={index}>
                    <input
                      onClick={handleOnchange1}
                      value={data.industry_segment}
                      type="checkbox"
                      label="label"
                      name={data.industry_segment}
                    />
                    <label>{data.industry_segment}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Topic</Accordion.Header>
              <Accordion.Body>
                {data.map((data, index) => (
                  <div key={index}>
                    <input
                      onClick={handleOnchange}
                      value={data.primary_topic}
                      type="checkbox"
                      label="label"
                      name={data.primary_topic}
                    />
                    <label>{data.primary_topic}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Language</Accordion.Header>
              <Accordion.Body>
                {data.map((data, index) => (
                  <div key={index}>
                    <input
                      onClick={handleOnchange}
                      value={data.lenguage}
                      type="checkbox"
                      label="label"
                      name={data.lenguage}
                    />
                    <label>{data.lenguage}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>Session Type</Accordion.Header>
              <Accordion.Body>
                {data.map((data, index) => (
                  <div key={index}>
                    <input
                      onClick={handleOnchange}
                      value={data.session_type}
                      type="checkbox"
                      label="label"
                      name={data.session_type}
                    />
                    <label>{data.session_type}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>


            
          </Accordion>
        </div>
        <div className="cartas" styles>
          <div className="flex2">
            <button className="par">
              All Sessions <span>(980)</span>
            </button>
            <button className="par">
              Mon, Mar 21 <span>(80)</span>
            </button>
            <button className="par">
              Tue, Mar 22 <span>(149)</span>
            </button>
            <button className="par">
              Wed, Mar 23 <span>(303)</span>
            </button>
            <button className="par">
              Thu, Mar 24 <span>(216)</span>
            </button>
          </div>
          <Cards data={filtrado} />
        </div>
      </div>
    );
}

export default SideBar