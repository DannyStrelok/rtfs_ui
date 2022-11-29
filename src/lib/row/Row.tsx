import React from "react";
import "./row.scss";

/**
 * UI Row component.
 * @param {Object} props - Component properties.
 * @param {('center'|'left'|'right'|'stretch')} [props.align='center'] - Align of children
 * @param {('center'|'end'|'start')} [props.justify='center'||'end'||'start'] - Justify of children
 * @param {Number} [props.gap=0] - Gap between items
 * @param {Boolean} [props.wrap=true] - Align of children
 * @param {Object} [props.style={}] - Inline Styles
 * @returns {JSX.Element}
 */
function Row({
  align = "center",
  justify = "start",
  wrap = false,
  gap = 0,
  style = {},
  children = <></>,
}) {
  return (
    <div
      className={`${"sc-row"} ${`sc-row--align-${align}`} ${`sc-row--justify-${justify}`}  ${
        wrap ? "sc-row--wrap" : ""
      } `}
      style={{ ...style, gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default Row;
