import React, { FC, useRef } from "react";
import Styles from "./FillingConstructorElement.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { changeFillingPosition } from "../../services/actions/burgerConstructor";
import { nanoid } from "nanoid";
import { deleteFromConstructor} from "../../services/actions/burgerConstructor";
import { TIngredient } from "../../services/types/types";

type TFillingConstructorElement ={
  ingredient: TIngredient,
  index: number,
}

type TDragItem = {
	index: number;
	type: string;
	id?: string;
};

const FillingConstructorElement:FC<TFillingConstructorElement> = ({ ingredient, index }) =>{
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = nanoid();
  const idItem = ingredient.id;
console.log(typeof idItem);


  const [, dropRef] = useDrop<TDragItem>({
    accept: "newIndex",
    hover(item) {
      console.log(item);
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch(changeFillingPosition(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  });

  const [, dragRef] = useDrag({
    type: "newIndex",
    item: { id, index },
  });
  dragRef(dropRef(ref));

  return (
      <li
      draggable
      className={Styles.ElementsItem}
      ref={ref}
    >
      <DragIcon type="primary" mr-2 />
      <div>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => dispatch(deleteFromConstructor(ingredient.id))}
        />
      </div>
    </li>
  );
}

export default FillingConstructorElement;
