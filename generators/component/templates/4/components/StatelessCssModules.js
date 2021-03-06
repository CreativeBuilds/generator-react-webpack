import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './<%= component.displayName %>.scss';

const <%= component.className %> = () => (
  <div className="<%= style.className %>" styleName="<%= style.className %>">
    Please edit <%= component.path %><%= component.fileName %> to update this component 4!
  </div>
);

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default cssmodules(<%= component.className %>, styles);
