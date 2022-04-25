import React from "react";
import Styles from "./Ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


const Ingredients = ({data}) => {
	/* const [data]  = this.props; */
  /* const [current, setCurrent] = React.useState("one"); */
  return (
    <section className={`${Styles.Ingredients}`}>
			<ul className={`${Styles.IngredientsLists} mt-6 ml-4 mb-10`}>
				<li className={Styles.IngredientsItem}>
				{/* <img src={data.image} alt={data.name} className={Styles.IngredientsImage} /> */}
				<div className={`${Styles.IngredientsItemPrice} mt-1 mb-1`}>
     {/*  {<p className={`${Styles.IngredientsPrice} mr-2`}>{data.price}20</p>} */}
        <CurrencyIcon />
      </div>
      <h4 className={`${Styles.IngridientText} text text_type_main-default`}>{/* data.name */}Краторная булка N-200i</h4>
			<Counter count={1} size="default" />
				</li>
				<li className={`${Styles.IngredientsItem}`}>
				<img src="" alt="" className={Styles.IngredientsImage} />
      <div className={`${Styles.IngredientsItemPrice}  mt-1 mb-1`}>
			<p className={`${Styles.IngredientsPrice} mr-2`}>20</p>
        <CurrencyIcon />
      </div>
      <h4 className={`${Styles.IngridientText} text text_type_main-default`}>Краторная булка N-200i</h4>
			<Counter count={1} size="default" />
				</li>
			</ul>

    </section>
  );
};

export default Ingredients;
