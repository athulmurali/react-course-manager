import React from 'react'
import * as actions from "../../actions";
import {connect} from "react-redux";

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let selectElem
    let inputElem

    let nameElem
    return(

        <div>

            <div className="container widget-container widgetContainerStyle">
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
export default HeadingContainer

