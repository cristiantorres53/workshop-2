import { useState } from 'react'

const UseForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const hanldeOnchange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const resetForm = () => {
        setValues(initialState)
    }

return [values, hanldeOnchange, resetForm]

}

export default UseForm