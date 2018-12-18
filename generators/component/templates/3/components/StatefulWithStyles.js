'use strict';

import React from 'react';
import { useState } from 'react';

require('./<%= component.displayName.replace("Component","") %>.scss');

let <%= component.className %> = () => (
  <div className="<%= style.className %>">
    Please edit <%= component.path %><%= component.fileName %> to update this component 8!
  </div>
);

<%= component.className %>.displayName = '<%= component.displayName %>';

// Uncomment properties you need
// <%= component.className %>.propTypes = {};
// <%= component.className %>.defaultProps = {};

export default <%= component.className %>;


/**
 * OLD VERSION FOR REACT 15 IF NEEDED
 */
// 'use strict';

// import React from 'react';

// require('./<%= component.displayName.replace("Component","") %>.scss');
// class <%= component.className %> extends React.Component {
//   render() {
//     return (
//       <div className="<%= style.className %>">
        
//         Please edit <%= component.path %>/<%= component.fileName %> to update this component 8!
//       </div>
//     );
//   }
// }

// <%= component.className %>.displayName = '<%= component.displayName %>';

// // Uncomment properties you need
// // <%= component.className %>.propTypes = {};
// // <%= component.className %>.defaultProps = {};

// export default <%= component.className %>;