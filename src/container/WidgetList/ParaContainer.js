import React from 'react'

import * as actions from "../../actions";
import {connect} from "react-redux";

const Paragraph = ({widget, preview, paraTextChanged, paraNameChanged}) => {
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
                                    <input onChange={() => paraNameChanged(widget.id, nameElem.value)}
                                           value={widget.name}
                                           ref={node => nameElem = node} className="form-control"/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
        <textarea onChange={() => paraTextChanged(widget.id, inputElem.value)}
                  ref={node => inputElem= node}
                  value={widget.text} className="form-control">
    </textarea> <br/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h4>Paragraph Preview</h4>
                                </div></div></div>
                    </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <p> {widget.text} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const dispatchToPropsMapperPara = dispatch =>
    ({
        paraTextChanged: (widgetId, newText) =>
            actions.paraTextChanged(dispatch,widgetId, newText),
        paraNameChanged: (widgetId, newName) =>
            actions.paraNameChanged(dispatch,widgetId, newName)
    })

const stateToPropsMapperPara = state => ({
    preview: state.preview
})

const ParaContainer = connect(stateToPropsMapperPara,dispatchToPropsMapperPara)(Paragraph)


export default  ParaContainer;


