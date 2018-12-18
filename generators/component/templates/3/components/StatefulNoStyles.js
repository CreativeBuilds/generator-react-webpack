'use strict';

import React from 'react';
import { useState } from 'react';

let <%= component.className %> = () => {
  return (
    <div className="<%= style.className %>">
      Please edit <%= component.path %>/<%= component.fileName %> to update this component 9!
    </div>
  );
}

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

// class <%= component.className %> extends React.Component {
//   render() {
//     return (
//       <div className="<%= style.className %>">
//         Please edit <%= component.path %>/<%= component.fileName %> to update this component 7!
//       </div>
//     );
//   }
// }

// <%= component.className %>.displayName = '<%= component.displayName %>';

// // Uncomment properties you need
// // <%= component.className %>.propTypes = {};
// // <%= component.className %>.defaultProps = {};

// export default <%= component.className %>;