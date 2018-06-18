import * as actions from "../../actions";
import {connect} from "react-redux";
import React from 'react';




var widgetContainerStyle =
    {
        border: "solid" , borderWidth: "thin" , width:"1000px", borderColor: "gray" , borderRadius: "3px"
    }



const List = ({widget, preview, listTextChanged, listTypeChanged, listNameChanged}) =>{
    let selectElem2
    let inputElem2
    let nameElem
    return(


        <div>
            <div className="container widget-container">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea onChange={() => listTextChanged(widget.id, inputElem2.value)}
              ref={node2 => inputElem2= node2}
              value={widget.text}  className="form-control"/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">

                                    <select onChange={() => listTypeChanged(widget.id, selectElem2.value)}
                                            ref={node2 => selectElem2=node2}
                                            value={widget.listType} className="form-control">
                                        <option value="ordered">Ordered List</option>
                                        <option value="unordered">Unordered List</option>
                                    </select> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">

                                    <input onChange={() => listNameChanged(widget.id, nameElem.value)}
                                           value={widget.name}
                                           ref={node => nameElem = node} className="form-control"/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">

                                    <h5> Preview</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {widget.listType== "ordered" && <div>{textToOrderedList(widget.text)} </div>}
                            {widget.listType== "unordered" && <div> {textToUnorderedList(widget.text)}</div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const stateToPropsMapperList = state => ({
    preview: state.preview
})

const dispatchToPropsMapperList = dispatch =>
    ({
        listTextChanged: (widgetId, newListText) =>
            actions.listTextChanged(dispatch,widgetId,newListText),
        listNameChanged: (widgetId, newListName) =>
            actions.listNameChanged(dispatch,widgetId,newListName),
        listTypeChanged: (widgetId,listType) =>
            actions.listTypeChanged(dispatch,widgetId,listType)
    })



const textToOrderedList = (text) =>
{
    let stringArray = text.split("\n");
    return (

        <ol className="list-group" >
            {stringArray.map(line => ( <li> {line} </li>))}
        </ol>
    )
}

const textToUnorderedList = (text) =>
{
    let stringArray = text.split("\n");
    return (

        <ul className="list-group" >
            {stringArray.map(line => ( <li> {line} </li>))}
        </ul>
    )
}

const ListContainer = connect(stateToPropsMapperList,dispatchToPropsMapperList)(List)


export default ListContainer
