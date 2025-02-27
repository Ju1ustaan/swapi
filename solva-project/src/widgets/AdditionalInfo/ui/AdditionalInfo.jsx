import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAdditional, fetchAdditional } from 'entities/Additional/model/AdditionalSlice'
import './AdditionalInfo.css'
export const AdditionalInfo = ({ categories, films, vehicles, pilots, starships, species, residents }) => {
    const dispatch = useDispatch()
    const filmsList = useSelector(state => state.additional.films)
    const pilotsList = useSelector(state => state.additional.pilots)
    const starshipsList = useSelector(state => state.additional.starships)
    const vehiclesList = useSelector(state => state.additional.vehicles)
    const residentsList = useSelector(state => state.additional.residents)
    const speciesList = useSelector(state => state.additional.species)

    console.log(
        filmsList,
        pilotsList,
        starshipsList,
        vehiclesList,
        residentsList,
        speciesList,
    )

    useEffect(() => {
        return () => {
            dispatch(removeAdditional());
        };
    }, []);
    useEffect(() => {
        films.map(item => dispatch(fetchAdditional(item)))
        if (categories === 'films') {
            species.map(item => dispatch(fetchAdditional(item)))
            starships.map(item => dispatch(fetchAdditional(item)))
            vehicles.map(item => dispatch(fetchAdditional(item)))
        } else if (categories === 'starships') {
            pilots.map(item => dispatch(fetchAdditional(item)))
        } else {
            residents.map(item => dispatch(fetchAdditional(item)))
        }
    }, [films, species, starships, vehicles, pilots, residents, categories])
    return (
        <div className='additional'>
            {
                filmsList.length > 0 &&
                <div>
                    <h3>Фильмы</h3>
                    {filmsList.map((item) => (
                        <p key={item.title}>{item.title}</p>
                    ))}
                </div>
            }
            {
                pilotsList.length > 0 &&
                <div>
                    <h3>Пилоты</h3>
                    {pilotsList.map((item) => (
                        <p key={item.name}>{item.name}</p>
                    ))}
                </div>
            }
            {
                starshipsList.length > 0 &&
                <div>
                    <h3>Корабли</h3>
                    {starshipsList.map((item) => (
                        <p key={item.name}>{item.name}</p>
                    ))}
                </div>
            }

            {
                vehiclesList.length > 0 &&
                <div>
                    <h3>Транспорт</h3>
                    {vehiclesList.map((item) => (
                        <p key={item.name}>{item.name}</p>
                    ))}
                </div>
            }

            {
                residentsList.length > 0 &&
                <div>
                    <h3>Резиденты</h3>
                    {residentsList.map((item) => (
                        <p key={item.name}>{item.name}</p>
                    ))}
                </div>
            }
            {
                speciesList.length > 0 &&
                <div>
                    <h3>Разновидность</h3>
                    {speciesList.map((item) => (
                        <p key={item.title}>{item.name}</p>
                    ))}
                </div>
            }
        </div>
    )
}
