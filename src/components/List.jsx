import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props) {
  const style = props.style;

  console.log(style);
  const styleDisplay = [...style];

  const tab = props.task;
  const tabDisplay = [...tab];

  return tabDisplay.map((elem, index) => {
    return (
      <>
        <div className="display_flex justify_content_space align_items_center div-check">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox"
            id={index}
            onClick={(event) => {
              if (event.target.checked === true) {
                styleDisplay.splice(index, 1, true);
                props.setStyle(styleDisplay);
              } else {
                styleDisplay.splice(index, 1, false);
                props.setStyle(styleDisplay);
              }
            }}
          />
          <p className={styleDisplay[index] === true ? "check" : "notCheck"}>
            {elem}
          </p>
          <span
            onClick={() => {
              tabDisplay.splice(index, 1);
              props.setTask(tabDisplay);
            }}
          >
            <FontAwesomeIcon icon="trash" className="poubelle" />
          </span>
        </div>
      </>
    );
  });
}

export default List;
