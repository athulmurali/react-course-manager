import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from './WidgetList/WidgetElementsContainer'
import '../styles/WidgetList.css'

class WidgetList extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {topicId: ''};
        this.selectTopic = this.selectTopic.bind(this);
        this.saveToServer = this.saveToServer.bind(this);
        this.addWidgetToServer = this.addWidgetToServer.bind(this)
    }
    addWidgetToServer(){
        this.props.addWidget(this.props.topicId)
    }

    componentDidMount() {
        this.selectTopic
        (this.props.topicId);

        window.addEventListener('onbeforeunload', this.handleWindowClose);
    }

    componentWillReceiveProps(newProps) {
        this.selectTopic
        (newProps.topicId);
        if (this.props.topicId != newProps.topicId) {
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.handleWindowClose);
    }





    selectTopic(topicId) {
        this.setState({topicId: topicId});
    }

    saveToServer() {

        this.props.save(this.state.topicId);
    }


    render() {
        return (

        <div>
            <div className="container pt-5">
                <div className="container row  col justify-content-center align-items-center">
                    <h2>Widgets</h2>
                </div>

                { (this.state.topicId != "" && this.state.topicId != -1) &&
                    <div>

                <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
                    <span className="px-2 float-left">
                                <h5>Preview</h5>
                    </span>
                    <div className="d-flex float-right my-auto">
                        <label className="switch m-auto">
                            <input type="checkbox" onClick={this.props.preview}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn btn-success m-auto"
                                hidden={this.props.previewMode}
                                onClick={this.saveToServer}>
                            Save
                        </button>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn  rounded-circle btn-outline-secondary"
                                onClick={this.addWidgetToServer}>
                            <i className="fa fa-plus-circle"></i>
                        </button>
                    </div>
                </div>


                <div >
                    {
                        this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}
                                         widgetLength={this.props.widgets.length}/>
                    ))}
                </div>
                    </div>


                }

            </div>


        </div>

        )
    }

}


    const
    stateToPropertiesMapper = (state) => ({
        widgets: state.widgets,
        previewMode: state.preview
    })

    const
    dispatcherToPropsMapper
        = dispatch => ({
        findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
        addWidget: (topicId) => actions.addWidget(dispatch,topicId),
        save: (topicId) => actions.save(dispatch, topicId),
        preview: () => actions.preview(dispatch)
    })
    const
    WidgetListContainer = connect(
        stateToPropertiesMapper,
        dispatcherToPropsMapper)(WidgetList)

    export default WidgetListContainer



