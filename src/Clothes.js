
import { Link } from "react-router-dom";

function Clothes( {shopClothesMyProps} ){
    return(
        <div className='products'>
        {shopClothesMyProps.map(item =>{
            const {id, name, price, image} = item;
            return(
                <div className='product-card' key={id} >
                    <Link to={`/about/${item.title}`}>
                    <img src= { image } alt="old" width="400px" height="500px" />  
                    </Link>
                <div className='product-info'>
                    <h3> { name } </h3>
                    <p>$ { price } </p>
                </div>
                </div>
            )
        })}
        </div>
    )
}
export default Clothes;