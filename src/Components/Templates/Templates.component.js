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
    isPending,
    ...rest
  } = useSelector((state) => state.dataReducer);

  console.log({ isPending });

  const data = filteredData.length > 0 ? filteredData : currentTemplates;

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="wrapper">
      {isPending ? (
        <Loading />
      ) : (
        data.map((template) => (
          <Template template={template} key={template.name} />
        ))
      )}
    </div>
  );
};

export default Templates;
