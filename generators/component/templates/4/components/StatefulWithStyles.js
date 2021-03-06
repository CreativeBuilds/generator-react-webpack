import React from 'react';
import './<%= component.displayName %>';

class <%= component.className %> extends <%= component.classBase %> {

  render() {
    return (
      <div className="<%= style.className %>">
        rawr xd broth <%= component.displayName %>
        Please edit <%= component.path %><%= component.fileName %> to update this component 3!
      </div>
    );
  }
}

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
