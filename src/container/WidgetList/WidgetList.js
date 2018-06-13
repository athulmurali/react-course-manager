import React from 'react'
import '../../styles/WidgetList.css'
import {Provider, connect} from 'react-redux'

import {createStore} from  "redux"


let initialState ={
    widgets : [
        {
            id : 0,
            text : "text0"
        },
        {
            id : 1,
            text : "text1"
        },
        {
            id : 2,
            text : "text2"
        }
    ]
}


const Widget
    = ( {widget,dispatch} ) =>
    <li >{widget.id}

        {widget.text}
        <button onClick={ ()=> dispatch({type : "DEL_WIDGET", id : widget.id})}>X</button>
        <button>-</button>

    </li>




const WidgetListComp =({widgets,dispatch})=> (
    <div className={"widgetListCSSTest"}> Widget List
        <ul>
            {widgets.map(widget =>
                <Widget key = {widget.id}
                        id ={widget.id}
                        widget={widget}
                        dispatch = {dispatch}
                />)}
        </ul>
        <button onClick={event => {dispatch({type:"ADD_WIDGET" })}}>Add widget </button>
    </div>)




const mapStateToProps = state => {
    return {  widgets: state.widgets}
}



let widgetReducer =(state = initialState,action)=>{
    switch (action.type){
        case "ADD_WIDGET" : alert(action.type);
                            return {
                                widgets :[
                                    ...state.widgets ,
                                    {id : state.widgets.length, text: "newText"} ]
                            }


        case "DEL_WIDGET" :

            return {

                widgets :state.widgets.filter(widget=> widget.id!= action.id)
            }

    }
    return state;
}


let store = createStore(widgetReducer);
const WidgetListContainer = connect(mapStateToProps)(WidgetListComp)

   const WidgetList =()=> ( <Provider store={store}>
            <WidgetListContainer/>
        </Provider>)

export default WidgetList
