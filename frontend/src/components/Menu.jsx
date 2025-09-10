import React from 'react';
import {data} from '../restApi.json'
const Menu = () => {
  const base = "/Restuarant-Reservation-Using-MERN/";

{data.map(item => (
  <img key={item.name} src={`${base}${item.image}`} alt={item.name} />
))}
  return (
    
    <>
      <section className='menu' id='Menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Our menu brings together the best flavors from India, Asia, Continental, and Mediterranean cuisines. Enjoy everything from rich curries and sizzling tandoori to pasta, dumplings, and kebabs. Satisfy your cravings with a perfect blend of spices, freshness, and irresistible taste!"</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu;
