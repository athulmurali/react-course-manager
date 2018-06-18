import * as constants from "../constants/index"
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";

///////////////////////////////////////// Heading //////////////////////////////////////////////////////////////////////
export const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

///////////////////////////////////////// Heading End //////////////////////////////////////////////////////////////////

///////////////////////////////////////// List /////////////////////////////////////////////////////////////////////////
export const listTextChanged = (dispatch,widgetId,newListText) =>(

    dispatch({
        type : constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newListText

    })

)

export const listNameChanged = (dispatch,widgetId,newListName) =>(
    dispatch({
        type : constants.LIST_NAME_CHANGED,
        id: widgetId,
        name: newListName

    })

)

export const listTypeChanged = (dispatch,widgetId,listType) =>(
    dispatch({
        type : constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: listType
    })
)
///////////////////////////////////////// List End /////////////////////////////////////////////////////////////////////

///////////////////////////////////////// Image ////////////////////////////////////////////////////////////////////////
export const imageTextChanged = (dispatch,widgetId,imageText) =>(
    dispatch({
        type : constants.IMAGE_TEXT_CHANGED,
        id: widgetId,
        text: imageText
    })
)

export const imageNameChanged = (dispatch,widgetId,imageName) =>(
    dispatch({
        type : constants.IMAGE_NAME_CHANGED,
        id: widgetId,
        name: imageName
    })
)

/////////////////////////////////////// Image End///////////////////////////////////////////////////////////////////////

///////////////////////////////////////// Link ////////////////////////////////////////////////////////////////////////
export const linkTextChanged = (dispatch,widgetId,linkText) =>(
    dispatch({
        type : constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: linkText
    })
)

export const linkDispChanged = (dispatch,widgetId,linkDispText) =>(
    dispatch({
        type : constants.LINK_DISP_CHANGED,
        id: widgetId,
        linkName: linkDispText
    })
)

export const linkNameChanged = (dispatch,widgetId,linkName) =>(
    dispatch({
        type : constants.LINK_NAME_CHANGED,
        id: widgetId,
        name: linkName
    })
)

/////////////////////////////////////// Link End///////////////////////////////////////////////////////////////////////


///////////////////////////////////////// Paragraph ////////////////////////////////////////////////////////////////////
export const paraTextChanged = (dispatch,widgetId,newText) =>(
    dispatch({
        type : constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)

export const paraNameChanged = (dispatch,widgetId,newName) =>(
    dispatch({
        type : constants.PARAGRAPH_NAME_CHANGED,
        id: widgetId,
        name: newName
    })
)



/////////////////////////////////////// Paragraph End //////////////////////////////////////////////////////////////////

export const findAllWidgetsForTopic = (dispatch,topicId) => {

    const widgetServiceInstance = WidgetService.instance;


    widgetServiceInstance.findAllWidgetsForTopic(topicId).then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets }))
}


export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = (dispatch,topicId,widgets) => (
    dispatch({type: constants.SAVE,
        topicId : topicId})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)
