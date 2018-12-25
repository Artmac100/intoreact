import React, { memo } from "react";
import PropTypes from "prop-types";

import InfoField from "../InfoField";

const Anchor = ({ field, value }) => (
  <InfoField
    field={field}
    value={
      <a className="more-data" href={value}>
        {value}
      </a>
    }
  />
);

Anchor.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

// memoized in case of the same query
export default memo(Anchor);
