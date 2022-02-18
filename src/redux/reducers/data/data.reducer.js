import {
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_CURRENT_TEMPLATES,
  SET_FILTERED_DATA,
  SET_TEMPLATES,
} from "../../constants/constants";

// initial state
const initialState = {
  data: [],
  templates: [],
  filteredData: [],
  isPending: false,
  templatesPerPage: 20,
  currentPage: 1,
};

const dataReducer = (state = initialState, action) => {
  const { templatesPerPage, currentPage, templates, data, ...rest } = state;

  const end = templatesPerPage * currentPage;
  const start = end - templatesPerPage;
  const pages = templates / templatesPerPage;

  switch (action.type) {
    case SET_TEMPLATES:
      return {
        ...state,
        currentTemplates: action.payload.slice(start, end),
        templates: action.payload,
        currentPage: 1,
      };
    case SET_FILTERED_DATA:
      return { ...state, filteredData: action.payload };
    case SET_CURRENT_TEMPLATES:
      return { ...state, currentTemplates: action.payload, currentPage: 1 };
    case PREVIOUS_PAGE:
      if (state.currentPage > 1) {
        const newEnd = (currentPage - 1) * templatesPerPage;
        const newStart = newEnd - templatesPerPage;
        const newCurrentTemplates = state.templates.slice(newStart, newEnd);
        return {
          ...state,
          currentPage: state.currentPage - 1,
          currentTemplates: newCurrentTemplates,
          filteredData: [],
        };
      } else {
        return { ...state };
      }
    case NEXT_PAGE:
      const newEnd = (currentPage + 1) * templatesPerPage;
      const newStart = newEnd - templatesPerPage;
      const newCurrentTemplates = state.templates.slice(newStart, newEnd);

      return {
        ...state,
        currentPage: state.currentPage + 1,
        currentTemplates: newCurrentTemplates,
        filteredData: [],
      };
    // return { ...state, currentPage: state.currentPage + 1 };
    case GET_DATA_PENDING:
      return { ...state, isPending: true };
    case GET_DATA_SUCCESS:
      const currentTemplates = action.payload.slice(start, end);
      return {
        ...state,
        templates: action.payload,
        currentTemplates,
        filteredData: [],
        currentPage: 1,
        isPending: false,
      };

    default:
      return state;
  }
};

export default dataReducer;
