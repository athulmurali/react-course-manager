import React, {Component} from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../../constants/index"
import * as actions from '../../actions/index'
import * as constants from '../../constants/index'
import ListContainer from "./ListContainer";
import ImageContainer from "./ImageContainer";
import ParaContainer from "./ParaContainer";
import LinkContainer from "./LinkContainer";


///////////////////////////////////////// Heading //////////////////////////////////////////////////////////////////////
const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let selectElem
    let inputElem

    let nameElem
    return(

        <div>

        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                                       value={widget.text}
                                       ref={node => inputElem = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                                        value={widget.size}
                                        ref={node => selectElem = node} className="form-control">
                                    <option value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                </select> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => headingNameChanged(widget.id, nameElem.value)}
                                       value={widget.name}
                                       ref={node => nameElem = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h5>Preview</h5>
                            </div></div></div></div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            {widget.size == 1 && <h1>{widget.text}</h1>}
                            {widget.size == 2 && <h2>{widget.text}</h2>}
                            {widget.size == 3 && <h3>{widget.text}</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
const dispathToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading)

///////////////////////////////////////// Heading End //////////////////////////////////////////////////////////////////



const Widget = ({widget, preview, dispatch,widgetLength}) => {
    let selectElement
    return(

        <div>
        <div hidden={preview}>
            <div className="container widget-container"
                 style={widgetContainerStyle}>
                <div className="row">
                    <div className="col-md-12 text-dark pt-2">
                        <div className="row flex-row pb-1">
                            <div className="col-md-3 d-inline-flex">
                                <h4>{widget.widgetType}</h4></div>
                            <div className="col-md-9">

                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: DELETE_WIDGET, id: widget.id})
                                    )} className="btn btn-danger"><i className="fa  fa-times"></i></button>
                                </div>


                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: constants.INCREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
                                    )} disabled={(widget.widgetOrder == widgetLength)} className="btn btn-warning"><i
                                        className="fa  fa-arrow-down"></i></button>
                                </div>


                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: constants.DECREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
                                    )} disabled={(widget.widgetOrder == 1)} className="btn btn-warning"><i
                                        className="fa  fa-arrow-up"></i></button>
                                </div>


                                <div className="d-inline-flex pr-1 float-right my-auto" style={widgetListStyle}>
                                    <select value={widget.widgetType}
                                            onChange={e =>
                                                dispatch({
                                                    type: 'SELECT_WIDGET_TYPE',
                                                    id: widget.id,
                                                    widgetType: selectElement.value
                                                })} ref={node => selectElement = node}>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
            {widget.widgetType === 'Paragraph' && <ParaContainer widget={widget}/>}
            {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
            {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
            {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
        </div>

        </div>
    )
}
const WidgetElementsContainer = connect(state => ({
    preview: state.preview
}))(Widget)
export default WidgetElementsContainer

var widgetListStyle =
    {
        height: "37px" , borderRadius : "3px"
    }

var widgetContainerStyle =
    {
        border: "solid" , borderWidth: "thin" , width:"1000px", borderColor: "gray" , borderRadius: "3px"
    }
