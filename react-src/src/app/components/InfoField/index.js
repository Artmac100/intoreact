import React from "react";
import PropTypes from "prop-types";

const InfoField = ({ field, value, children }) => (
  <div>
    {field} : {value}
  </div>
);

InfoField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

// memoized in case of the same query
export default React.memo(InfoField);
