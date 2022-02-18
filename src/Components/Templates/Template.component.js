import "./templates.styles.css";
const Template = ({ template }) => {
  const { name, description } = template;
  return (
    <div>
      <h2> {name}</h2>
      <p> {description} </p>
    </div>
  );
};

export default Template;
