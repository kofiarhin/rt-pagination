import "./pagination.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../../redux/actions/data.actions";

const Pagination = () => {
  const {
    currentPage,
    templates = [],
    templatesPerPage,
    ...rest
  } = useSelector((state) => state.dataReducer);

  const pages = Math.ceil(templates.length / templatesPerPage);

  const dispatch = useDispatch();

  return (
    <div className="pagination-wrapper">
      <a href="#!" onClick={() => dispatch(previousPage())}>
        Previous
      </a>

      <div className="pages">
        <a href="#!">{currentPage}</a> <span>/</span> <a href="#!">{pages}</a>
      </div>

      <a href="#!" onClick={() => dispatch(nextPage())}>
        Next
      </a>
    </div>
  );
};

export default Pagination;
