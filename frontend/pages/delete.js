export default function carro(){

    
    const deleteCar = async event => {
  
      event.preventDefault()
  
      const res = await fetch('http://localhost:3005/sistema/carroDelete', {
        body: JSON.stringify({
          marca: event.target.marca.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'delete'
      })
    }

      return (
        <div>
            <form onSubmit={deleteCar}>
                <input  type="text" name='marca' placeholder='Digite a marca' /> 
                <button type="submit"  placeholder='fodeu'>delete</button>
            </form>    
                        
        </div>
      );
  
  
  }
  

  
  