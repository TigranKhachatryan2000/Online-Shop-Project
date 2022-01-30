import { useState } from "react";
import "../styles/PizzaList.css"

export default function Dropdown() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown" onClick={e => setIsActive(!isActive)}>
           <div className="pizzamenu"> 
            Pizza Menu 
           <span className="pizzaSpan">  </span>
           </div>
           {
               isActive && (
                <div className="dropdown-item">
                <div className="pizza">
                     Pepperoni Pizza
                </div>
                <div className="pizza">
                     Margherita Pizza
                </div>
                <div className="pizza">
                     Pedro Teach Special Pizza
                </div>
                <div className="pizza">
                     Vegan Pizza
                </div>
                <div className="pizza">
                     Pineapple Pizza
                </div>
                <div className="pizza">
                     Very Expensive Pizza
                </div>
            </div>
               )
           }
        </div>
    )
}