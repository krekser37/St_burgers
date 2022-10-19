import Styles from "./pages.module.css";
import NotFoundImage from "./img/NotFoundImage.jpeg";

const NotFound = () => {
  return (
    <>
      <div className={Styles.container}>
          <img
            src={NotFoundImage}
            alt="NotFoundImage"
            className={Styles.NotFoundImage}
          />
          <h1 className="text text_type_main-large m-4">Oops! 404 Error</h1>
          <p className="text text_type_main-default m-2">The page you requested does not exist</p>
          <p className="text text_type_main-default">Запрошенная вами страница не существует</p>
      </div>
    </>
  );
}

export default NotFound;