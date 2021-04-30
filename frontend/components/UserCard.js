
const CarCard = ({car}) => (
    <div>
        
            <div>
                <h1>
                   Modelo: {car.marca}<br/>
                   Placa: {car.placa} 
                   Renavan: {car.renavan}
                   Cor: {car.cor}
                </h1>
                <h2>
                   
                    Data de Registro: {car.registro}<br/>
                   ___________________________

                </h2>
                <Link href = '/'>
                    <button>Voltar</button>
                </Link>
            </div>
        </div>
)

export default CarCard;