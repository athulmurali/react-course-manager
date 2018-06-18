import React from 'react'

import * as actions from "../../actions";
import {connect} from "react-redux";

const Image = ({widget, preview, imageTextChanged, imageNameChanged}) => {
    let inputElem3
    let nameElem
    return(

        <div className="container widget-container widgetContainerStyle">
            <div className="col-md-12">
                <div hidden={preview}>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => imageNameChanged(widget.id, nameElem.value)}
                                       value={widget.name}
                                       ref={node => nameElem = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => imageTextChanged(widget.id, inputElem3.value)}
                                       ref={node3 => inputElem3= node3}
                                       placeholder="https://goo.gl/ZdEZ93"
                                       value={widget.text} className="form-control"
                                /> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <h4>Image Preview</h4>
                            </div></div></div>   </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2">
                                <img src={widget.text} alt={widget.text} />
                            </div>
                        </div></div></div></div>
        </div>
    )
}

const stateToPropsMapperImage = state => ({
    preview: state.preview
})

const dispatchToPropsMapperImage = dispatch =>
    ({
        imageTextChanged: (widgetId, imageText) =>
            actions.imageTextChanged(dispatch,widgetId, imageText),
        imageNameChanged: (widgetId, imageName) =>
            actions.imageNameChanged(dispatch,widgetId, imageName)
    })

const ImageContainer = connect(stateToPropsMapperImage,dispatchToPropsMapperImage)(Image)

export default ImageContainer
