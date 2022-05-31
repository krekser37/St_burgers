import { GET_MAINBUN, GET_FILLING/* DELETE_ITEM, DECREASE_ITEM, INCREASE_ITEM, GET_ITEMS */ } from "../actions/index";

const initialState = {
  filling: [ {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b6",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  }],
  mainBun:   {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAINBUN: {
      return {
        ...state,
        mainBun: action.ingredient,
      };
    }
    case GET_FILLING: {
      return {
        ...state,
        filling: [...state.filling, action.ingredient]
      };
    }

/*     case GET_ITEMS: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        ),
      };
    }

    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        ),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        ),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.id !== action.id),
      };
    } */

    default:
      return state;
  }
};
