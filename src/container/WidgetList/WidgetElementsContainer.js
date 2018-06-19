import React, {Component} from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../../constants/index"
import * as constants from '../../constants/index'
import ListContainer from "./ListContainer";
import ImageContainer from "./ImageContainer";
import ParaContainer from "./ParaContainer";
import LinkContainer from "./LinkContainer";
import HeadingContainer from "./HeadingContainer";




const Widget = ({widget, preview, dispatch,widgetLength}) => {
    let selectElement
    return(

        <div className="my-4 card bg-transparent">
        <div hidden={preview}>
            <div className="container widget-container ">
                <div className="row border-light">
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


                                <div className="d-inline-flex pr-1 float-right my-auto widgetListStyle" >
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

