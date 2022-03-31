import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../styles/sidebar.css'

const SideBar = () => {

    const handleOnchange = e => {
        console.log(e.target.value)
    }
 
    return (
        <div className='sidebarCont'>
            <h3>Filters</h3>
            <div>
                <input className='inputSearch' placeholder='Search' name='busqueda' />
            </div>
            <Accordion className="Accordionxd">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Industry Segment</Accordion.Header>
                    <Accordion.Body >
                        <div>
                            <label>Division</label>
                            <input
                                onChange={handleOnchange}
                                value='Division'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>
                        <div>
                            <label>Group</label>
                            <input
                                onChange={handleOnchange}
                                value='Group'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>
                        <div>
                            <label>Markets</label>
                            <input
                                onChange={handleOnchange}
                                value='Markets'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Session Type</Accordion.Header>
                    <Accordion.Body>

                        <div>
                            <label>Strategist</label>
                            <input
                                onChange={handleOnchange}
                                value='Strategist'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>


                        <div>
                            <label>Coordinator</label>
                            <input
                                onChange={handleOnchange}
                                value='Coordinator'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Liaison</label>
                            <input
                                onChange={handleOnchange}
                                value='Liaison'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Audience Type</Accordion.Header>
                    <Accordion.Body>

                        <div>
                            <label>Trans*Female</label>
                            <input
                                onChange={handleOnchange}
                                value='Trans'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>


                        <div>
                            <label>Man</label>
                            <input
                                onChange={handleOnchange}
                                value='</'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Female</label>
                            <input
                                onChange={handleOnchange}
                                value='Female'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Transexual Man</label>
                            <input
                                onChange={handleOnchange}
                                value='Transexual'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Hermaphrodite</label>
                            <input
                                onChange={handleOnchange}
                                value='Hermaphrodite'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Primary Topic</Accordion.Header>
                    <Accordion.Body>

                        <div>
                            <label>Music</label>
                            <input
                                onChange={handleOnchange}
                                value='Music'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>


                        <div>
                            <label>Toys</label>
                            <input
                                onChange={handleOnchange}
                                value='Toys'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Garden</label>
                            <input
                                onChange={handleOnchange}
                                value='Garden'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Jewelery</label>
                            <input
                                onChange={handleOnchange}
                                value='Jewelery'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                        <div>
                            <label>Hermaphrodite</label>
                            <input
                                onChange={handleOnchange}
                                value='Hermaphrodite'
                                type='radio'
                                label='label'
                                name='radio'
                            />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SideBar