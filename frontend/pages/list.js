import React, { useCallback, useEffect, useState} from 'react';
import api from '../services/services';
import User from '../components/User';
import Link from 'next/link';
const Carros =() => {
    const [carros, setCarros] = useState([]);
    const [allCarros, setAllCarros] = useState([]);
    const [searchValue, setSearchValue] = useState('');
 
    const loadCarros = useCallback(async() => {
        const response = await api.get('/carro');
        setCarros(response.data)
        setAllCarros(response.data)
    },[]);

    

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    }

    useEffect(() => {
        loadCarros();
    },[loadCarros]);

    const filteredCarros = !!searchValue ? allCarros.filter(cars => {
        return cars.marca.toLowerCase().includes(searchValue.toLowerCase());
      })
       : carros;

    return (
        
        <div>
            <h1>Lucas</h1>
            {filteredCarros.length > 0 &&(
       
            <User users = {filteredCarros}/>
            )}
            <Link href = '/'>
                <button>Voltar</button>
            </Link>
        </div>

        )
    
}
export default Carros
