import React, { useCallback, useEffect, useState} from 'react';
import api from '../services/services';
import User from '../components/User'
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
        </div>

        )
    
}
export default Carros


/* 
export default class Usuarios extends Component {

    state = {
      usuarios: [],
      searchValue: '',
      allUsers: [],
    }
  
    async componentDidMount() {
      this.loadUsuarios();
    }
  
  async loadUsuarios(){
      const response = await api.get('/usuarios');
      this.setState({ 
          usuarios: response.data,
          allUsers: response.data
      });
  
    }
    handleChange = (e) => {
      const { value } = e.target;
      this.setState({searchValue: value})
    }
  
    render() {
      
      const { usuarios, searchValue, allUsers } = this.state;
      
      const filteredUsers = !!searchValue ? allUsers.filter(user => {
        return user.nome.toLowerCase().includes(searchValue.toLowerCase());
      })
       : usuarios;
  
      return (
        <div>
          <h1>Lista de Promotores</h1>
  
          <TextInput 
          handleChange = {this.handleChange}
          searchValue = {searchValue}
          />
          {filteredUsers.length === 0 &&(
           <h1>
             Post não encontrado.
           </h1>
         )}
          {filteredUsers.length > 0 &&(
       
              <User users = {filteredUsers}/>
         )}
  
          
        </div>
      );
    };
  };

export default class Carros extends Component{
    state = {
        carros: [],
        carrosInfo: {},

    };

    componentDidMount(){
        this.loadUsuarios();   
    }

    loadUsuarios = async () => {
        //const response = await api.get('/usuarios');

        const response = await api.get(`/carro`);

        const { docs, ...carrosInfo } = response.data;

        //console.log(response.data.docs);
        //this.setState ({ usuarios: response.data.docs})

        this.setState ({ carros: docs, carrosInfo});
    };

render(){
    const { carros } = this.state;

    return (
        
        <div>
            <h1>Lucas</h1>
            {this.state.carros.map(usuario => (
                    <article key={usuario._id}>
                        <strong> {usuario.marca} </strong> 
                        
                        <br/>
                    </article>
                ))}
        </div>

        )
    }
}
*/