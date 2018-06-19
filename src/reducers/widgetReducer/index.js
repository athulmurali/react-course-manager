import * as constants from "../../constants/index"
import WidgetService from "../../services/WidgetService";

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    const widgetServiceInstance = WidgetService.instance

    let newState
    switch (action.type) {

        case constants.INCREASE_ORDER_WIDGET:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder == action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }

                    if(widget.widgetOrder == (action.widgetOrder+1)){
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function(a,b) {return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);} )
            }

        case constants.DECREASE_ORDER_WIDGET:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder == action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }

                    if(widget.widgetOrder == (action.widgetOrder-1)){
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function(a,b) {return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);} )
            }

        case constants.IMAGE_TEXT_CHANGED:
            let newState4=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState4))

        case constants.IMAGE_NAME_CHANGED:
            let newState6=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState6))

        case constants.LINK_TEXT_CHANGED:
            let newState9=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text

                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState9))

        case constants.LINK_DISP_CHANGED:
            let newState10=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.linkName = action.linkName
                            console.log(widget.linkName)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState10))

        case constants.LINK_NAME_CHANGED:
            let newState8=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState8))

        case constants.PARAGRAPH_TEXT_CHANGED:
            let newState3=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState3))

        case constants.PARAGRAPH_NAME_CHANGED:
            let newState5=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState5))

        case constants.LIST_TEXT_CHANGED:
            let newState2=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState2))

        case constants.LIST_NAME_CHANGED:
            let newState7=
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name

                        }

                        return Object.assign({}, widget);

                    })

                }
            return JSON.parse(JSON.stringify(newState7))




        case constants.LIST_TYPE_CHANGED:

        {
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType

                    }
                    return Object.assign({}, widget)
                })
            }
        }


        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }


        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })

            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:


            alert("save clicked");
            widgetServiceInstance.saveWidgetsForTopic(action.topicId, state.widgets);
            return state;






        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState


        case constants.DELETE_WIDGET:
            alert("delete clicked");
            console.log(action);
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }
        case constants.ADD_WIDGET:

            const tempWidget =  {
                id: state.widgets.length + 1,
                text: 'New Widget',
                name: 'Widget Name',
                widgetType: 'Paragraph',
                size: '2',
                listType: 'ordered',
                widgetOrder: state.widgets.length + 1
            }
            // widgetServiceInstance.createWidget(action.)
            return {
                widgets: [
                    ...state.widgets,tempWidget

                ]
            }
        default:
            return state
    }
}
