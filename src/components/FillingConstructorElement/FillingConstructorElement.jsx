import React, { useRef } from "react";
import Styles from "./FillingConstructorElement.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { changeFillingPosition } from "../../services/actions/index";
import { nanoid } from "nanoid";
import { deleteFromConstructor} from "../../services/actions/index";
import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../../utils/propTypes";

function FillingConstructorElement({ ingredient, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = nanoid();

  const [, dropRef] = useDrop({
    accept: "newIndex",
    collect(monitor) {
      return {
          handlerId: monitor.getHandlerId(),
      };
  },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves //Не заменяйте предметы самими собой
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen //Определите прямоугольник на экране
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle //Получить вертикальную середину
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position //Определение положения мыши
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top  //Переместите пиксели наверх
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      // Выполняйте перемещение только тогда, когда мышь пересекла половину высоты элементов
      // При перетаскивании вниз перемещайтесь только тогда, когда курсор находится ниже 50%
      // При перетаскивании вверх перемещайтесь только тогда, когда курсор находится выше 50%
      // Перетаскивание вниз
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards // Перетаскивание вверх
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action // Время для фактического выполнения действия
      dispatch(changeFillingPosition(dragIndex, hoverIndex));
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // Примечание: здесь мы изменяем элемент монитора!
      // Как правило, лучше избегать мутаций,
      // но здесь это хорошо для повышения производительности
      // чтобы избежать дорогостоящего поиска по индексу.
      item.index = hoverIndex;
    },
  });

  const [, dragRef] = useDrag({
    type: "newIndex",
    item: { id, index },
/*     collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }), */
  });
  dragRef(dropRef(ref));

  return (
    <li
      draggable
      className={Styles.ElementsItem}
      index={index}
      ref={ref}
    >
      <DragIcon className="mr-2" />
      <div>
        <ConstructorElement
          className={`${Styles.ElementsConstructor}`}
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => dispatch(deleteFromConstructor(ingredient.id))}
        />
      </div>
    </li>
  );
}

FillingConstructorElement.propTypes = {
  ingredient: PropTypes.shape(ingredientsDataPropTypes.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export default FillingConstructorElement;

/* PropTypes.object.isRequired, */