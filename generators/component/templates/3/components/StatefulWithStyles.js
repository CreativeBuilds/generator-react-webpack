'use strict';

import React from 'react';

require('./<%= component.displayName %>.scss');

class <%= component.className %> extends React.Component {
  render() {
    return (
      <div className="<%= style.className %>">
        <%= component %>
        Please edit <%= component.path %>/<%= component.fileName %> to update this component 8!
      </div>
    );
  }
}

<%= component.className %>.displayName = '<%= component.displayName %>';

// Uncomment properties you need
// <%= component.className %>.propTypes = {};
// <%= component.className %>.defaultProps = {};

export default <%= component.className %>;
