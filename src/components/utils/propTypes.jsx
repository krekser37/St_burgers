import PropTypes from "prop-types";

export const ingredientsDataPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
});

export default ingredientsDataPropTypes; 