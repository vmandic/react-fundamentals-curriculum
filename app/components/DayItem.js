// development imports:
var React = require("react");

function DayItem(props) {
    return (
        <li onClick={props.click}>
            <div className={"weather-icon icon-" + props.icon}></div>
            <h3>{props.text}</h3>
        </li>
    );
}

module.exports = DayItem;