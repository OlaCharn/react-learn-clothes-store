//тут сделано для динамической маршрутизации. Текст этого в папке
import { data } from "./data"
import { useParams, useNavigate } from "react-router-dom";

function AboutProduct(){
    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            { data.filter((item) => item.title === title).map((elem, index) => {
                return(
                    <div key={index} >
                        <h3> {elem.name} </h3>
                        <img
                            src={elem.image}
                            alt="product"
                            width="400px"
                            />
                        <button className="btn" onClick={ () => navigate(-1)} >
                            Go Back
                        </button>
                    </div>
                )
            } ) }
        </div>
    )
}
export default AboutProduct;