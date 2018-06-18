import React, {Component} from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../../constants/index"
import * as actions from '../../actions/index'
import * as constants from '../../constants/index'
import ListContainer from "./ListContainer";


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

//////////////////////////////////////// Paragraph /////////////////////////////////////////////////////////////////////
const Paragraph = ({widget, preview, paraTextChanged, paraNameChanged}) => {
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
                                <input onChange={() => paraNameChanged(widget.id, nameElem.value)}
                                       value={widget.name}
                                       ref={node => nameElem = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Paragraph Preview</h4>
                            </div></div></div></div>
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

///////////////////////////////////////// Paragraph End ////////////////////////////////////////////////////////////////

//////////////////////////////////////// Image /////////////////////////////////////////////////////////////////////////
const Image = ({widget, preview, imageTextChanged, imageNameChanged}) => {
    let inputElem3
    let nameElem
    return(

        <body>
            <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => imageTextChanged(widget.id, inputElem3.value)}
                                       ref={node3 => inputElem3= node3}
                                       value={widget.text} className="form-control"
                                /> <br/>
                            </div>
                        </div>
                    </div>
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

                                <h4>Image Preview</h4>
                            </div></div></div>   </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2">
                                <img src={widget.text} alt={widget.text} />
                            </div>
                        </div></div></div></div></div>
        </body>
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

//////////////////////////////////////// Image End /////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////// List /////////////////////////////////////////////////////////////////////////
// const List = ({widget, preview, listTextChanged, listTypeChanged, listNameChanged}) =>{
//     let selectElem2
//     let inputElem2
//     let nameElem
//     return(
//
//
//         <div>
//         <div className="container widget-container"
//              style={widgetContainerStyle}>
//             <div className="col-md-12">
//                 <div hidden={preview}>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="form-group">
//     <textarea onChange={() => listTextChanged(widget.id, inputElem2.value)}
//               ref={node2 => inputElem2= node2}
//               value={widget.text}  className="form-control"/> <br/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="form-group">
//
//                                 <select onChange={() => listTypeChanged(widget.id, selectElem2.value)}
//                                         ref={node2 => selectElem2=node2}
//                                         value={widget.listType} className="form-control">
//                                     <option value="ordered">Ordered List</option>
//                                     <option value="unordered">Unordered List</option>
//                                 </select> <br/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="form-group">
//
//                                 <input onChange={() => listNameChanged(widget.id, nameElem.value)}
//                                        value={widget.name}
//                                        ref={node => nameElem = node} className="form-control"/> <br/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="form-group">
//
//                                 <h5> Preview</h5>
//                             </div></div></div></div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         {widget.listType== "ordered" && <div>{textToOrderedList(widget.text)} </div>}
//                         {widget.listType== "unordered" && <div> {textToUnorderedList(widget.text)}</div>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//         </div>
//     )
// }
//
//
// const stateToPropsMapperList = state => ({
//     preview: state.preview
// })
//
// const dispatchToPropsMapperList = dispatch =>
//     ({
//         listTextChanged: (widgetId, newListText) =>
//             actions.listTextChanged(dispatch,widgetId,newListText),
//         listNameChanged: (widgetId, newListName) =>
//             actions.listNameChanged(dispatch,widgetId,newListName),
//         listTypeChanged: (widgetId,listType) =>
//             actions.listTypeChanged(dispatch,widgetId,listType)
//     })
//
//
// const ListContainer = connect(stateToPropsMapperList,dispatchToPropsMapperList)(List)
//
// const textToOrderedList = (text) =>
// {
//     let stringArray = text.split("\n");
//     return (
//
//         <ol className="list-group" >
//             {stringArray.map(line => ( <li> {line} </li>))}
//         </ol>
//     )
// }
//
// const textToUnorderedList = (text) =>
// {
//     let stringArray = text.split("\n");
//     return (
//
//         <ul className="list-group" >
//             {stringArray.map(line => ( <li> {line} </li>))}
//         </ul>
//     )
// }
//
//
// ///////////////////////////////////////// List End /////////////////////////////////////////////////////////////////////


//////////////////////////////////////// Link /////////////////////////////////////////////////////////////////////////
const Link = ({widget, preview, linkTextChanged, linkNameChanged, linkDispChanged}) => {
    let inputElem3
    let nameElem
    let dispName
    return(
        <div>
        <div className="container widget-container"
             style={widgetContainerStyle}>
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

//////////////////////////////////////// Link End /////////////////////////////////////////////////////////////////////


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
