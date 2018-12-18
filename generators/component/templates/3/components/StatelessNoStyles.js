'use strict';

import React from 'react';

let <%= component.className %> = () => {
  return <div className="<%= style.className %>">
    Please edit <%= component.path %>/<%= component.fileName %> to update this component 9!
  </div>
};

<%= component.className %>.displayName = '<%= component.displayName %>';

// Uncomment properties you need
// <%= component.className %>.propTypes = {};
// <%= component.className %>.defaultProps = {};

export default <%= component.className %>;
