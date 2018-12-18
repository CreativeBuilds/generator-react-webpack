import React from 'react';
import '<%= component.displayName.replace("css","scss").replace("styles\\", "./") %>';

class <%= component.className %> extends <%= component.classBase %> {

  render() {
    return (
      <div className="<%= style.className %>">
        rawr xd broth
        Please edit <%= component.path %><%= component.fileName %> to update this component!
      </div>
    );
  }
}

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
