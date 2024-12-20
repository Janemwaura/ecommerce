import React, { useState } from 'react'
import css from '/home/janewmwaura/ecommerce/amazon-starterpack/src/components/Products.module.css'
import plane from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/plane.png'
import { ProductsData } from '../data/products'

const Products = () => {

    const [MenuProducts, setMenuProducts ] = useState(ProductsData) 

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type===type))
    }
  return (
    <div className={css.container}>
     <img src={plane} alt="" />
     <h1>Our Featured Products</h1>

     <div className={css.products}>
        <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
        <div className={css.list}>
        {
            MenuProducts.map((product, i)=>(
               <div className={css.product}>
                 <div className="left-s">
                   <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                   </div>
                   <span>{product.price}$</span>
                   <div>Shop Now</div>
                 </div>
                 <img src={product.img} alt="" className='img-p'/>
               </div>    
            ))
        }
        </div>
     </div>
    </div>
  )
}

export default Products