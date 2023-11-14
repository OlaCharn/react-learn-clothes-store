
function Buttons( { filteredClothesMyProps } ){
    return(
        <div className="cont" >
        <button className="change" onClick={ ()=> filteredClothesMyProps("dress") } >Dresses</button>
        <button className="change" onClick={ ()=> filteredClothesMyProps("skirt") } >Skirts</button>
        <button className="change" onClick={ ()=> filteredClothesMyProps("pants") } >Pants</button>
        <button className="change" onClick={ ()=> filteredClothesMyProps("shoes") } >Shoes</button>
        <button className="change" onClick={ ()=> filteredClothesMyProps("shirt")} >Shirts</button>
        </div>
    )
}
export default Buttons;