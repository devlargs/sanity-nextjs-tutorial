import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FONT_ICON = ["list", "border-all"];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <FontAwesomeIcon
      className="clickable hoverable"
      size="2x"
      icon={FONT_ICON[filter.view.list]}
      onClick={() => onChange("view", { list: +!filter.view.list })}
    />
  );
};

export default FilteringMenu;
