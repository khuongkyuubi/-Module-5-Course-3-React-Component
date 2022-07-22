import PropTypes from "prop-types";

function Alert({
    text
               }) {
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    )
}

Alert.protoTypes = {
    text : PropTypes.string
}

// Alert.defaultProps = {
//     text : "Warning!"
// }

export default Alert;
