import React from 'react'

const ExploreMenu = () => {
  return (
    <div>
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
      
    </div>
  )
}

export default ExploreMenu;
