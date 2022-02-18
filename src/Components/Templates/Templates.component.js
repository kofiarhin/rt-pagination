import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/actions/data.actions";
import Template from "./Template.component";
import Loading from "../Loading/Loading.component";
// templates
const Templates = () => {
  const dispatch = useDispatch();

  const {
    currentTemplates = [],
    filteredData = [],
    ...rest
  } = useSelector((state) => state.dataReducer);

  const data = filteredData.length > 0 ? filteredData : currentTemplates;

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="wrapper">
      {data.length > 0 ? (
        data.map((template) => (
          <Template template={template} key={template.name} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Templates;
