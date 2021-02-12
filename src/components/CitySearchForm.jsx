import React from 'react'
import { Button } from './commons/Button'

export const CitySearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <input type="text" name="searchedCity" onChange={(event) => props.handleChange(event)}/>
            <Button />
        </form>
    )
}

