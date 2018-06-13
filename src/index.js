import React from 'react';
import ReactDOM from 'react-dom';


import WidgetList from "./container/WidgetList/WidgetList";
import Routes from "./Router";




// const PageParam =( match) =><p>{match.params.id}</p>;

ReactDOM.render(<Routes/>, document.getElementById('root')

// ReactDOM.render(<WidgetList/>, document.getElementById('root')


);
