import React from 'react'
import * as actions from "../../actions";
import {connect} from "react-redux";

const Link = ({widget, preview, linkTextChanged, linkNameChanged, linkDispChanged}) => {
    let inputElem3
    let nameElem
    let dispName
    return(
        <div>
            <div className="container widget-container widgetContainerStyle">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input onChange={() => linkTextChanged(widget.id, inputElem3.value)}
                                           ref={node3 => inputElem3= node3}
                                           value={widget.text} className="form-control"
                                    /> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input onChange={() => linkDispChanged(widget.id, dispName.value)}
                                           ref={node3 => dispName= node3}
                                           value={widget.linkName} className="form-control"
                                    /> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">

                                    <input onChange={() => linkNameChanged(widget.id, nameElem.value)}
                                           value={widget.name}
                                           ref={node => nameElem = node} className="form-control"/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">


                                    <h4>Link Preview</h4>
                                </div></div></div></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <a href={widget.text}>{widget.linkName}</a>
                            </div>
                        </div></div></div>
            </div></div>



    )
}

const stateToPropsMapperLink = state => ({
    preview: state.preview
})

const dispatchToPropsMapperLink = dispatch =>
    ({
        linkTextChanged: (widgetId, linkText) =>
            actions.linkTextChanged(dispatch,widgetId, linkText),
        linkDispChanged: (widgetId, linkDispText) =>
            actions.linkDispChanged(dispatch,widgetId, linkDispText),
        linkNameChanged: (widgetId, linkName) =>
            actions.linkNameChanged(dispatch,widgetId, linkName)
    })

const LinkContainer = connect(stateToPropsMapperLink,dispatchToPropsMapperLink)(Link)

export default LinkContainer

//////////////////////////////////////// Link End /////////////////////////////////////////////////////////////////////

