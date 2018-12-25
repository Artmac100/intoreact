import React from "react";
import PropTypes from "prop-types";

import Anchor from "../Anchor";
import InfoField from "../InfoField";

const ResponseItem = ({ user }) => (
  <>
    {Object.keys(user).map(field => {
      if (/_url/.test(field)) {
        return (
          <Anchor field={field} value={user[field]} key={user[field] + field} />
        );
      }
      return (
        <InfoField
          field={field}
          value={user[field]}
          key={user[field] + field}
        />
      );
    })}
  </>
);

ResponseItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default ResponseItem;
