import { useState } from 'react';
import Clothes from './Clothes';
import { data } from "./data";
import './App.css';
import Buttons from './Buttons';

function Home(){ 
const [piece , setPiece] = useState(data);

//создаем новую функцию о том, что при клике нам надо отфильтровать
//создаем новый массив newClothes. Потому что методу filter()всегда нужен новый массив для результата
//чтобы мы могли фильтровать, мы используем ключ searchTerm из data.js
//data.filter - так мы получаем доступ ко всей информации
//я хочу проанализировать кажджый элемент и поместить в новый массив тот элемент, чья категория соответствует категории
//кнопки. А эту категорию я ввожу в документе Buttons

const chosenClothes = (searchTerm) =>{
  const newClothes = data.filter(element => element.searchTerm === searchTerm);
  setPiece(newClothes);
}

return (
  <div>
    
    <div className='cont' > 
    <h2 className='back'>Free Standard Shipping</h2>
    </div>
    <div className='cont'>
    <button className="change all" onClick={ ()=> setPiece(data) }  >All</button>
    <Buttons filteredClothesMyProps={chosenClothes} />
    </div>

    <Clothes shopClothesMyProps= {piece} />
  </div>
);
}
export default Home;