const CarCard = ({car}) => (
    <div>
        
            <div>
                <h1>
                   Modelo: {car.marca}<br/>
                   Placa: {car.placa} 
                </h1>
                <h2>
                   
                    Data de Registro: {car.registro}<br/>
                   ___________________________

                </h2>
                
            </div>
        </div>
)

export default CarCard;