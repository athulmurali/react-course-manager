import  React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from './WidgetList/WidgetElementsContainer'
import '../styles/WidgetList.css'

class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {topicId: ''};
        this.selectTopic = this.selectTopic.bind(this);
        this.saveToServer = this.saveToServer.bind(this);
    }

    componentDidMount() {
        this.selectTopic
        (this.props.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.selectTopic
        (newProps.topicId);
        if (this.props.topicId != newProps.topicId) {
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
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

                <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
                    <span style={{float: "left"}} className="px-2">
                                <h5>Preview</h5>

                        </span>
                    <div className="d-flex float-right my-auto">

                        <label className="switch m-auto">

                            <input type="checkbox" onClick={this.props.preview}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                                onClick={this.saveToServer}>
                            Save
                        </button>

                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn   btn-danger" onClick={this.props.addWidget}><i
                            className="fa fa-plus-square"></i>
                        </button>
                    </div>
                </div>


                <div >
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.widgetOrder}
                                         widgetLength={this.props.widgets.length}/>
                    ))}
                </div>




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
        addWidget: () => actions.addWidget(dispatch),
        save: (topicId) => actions.save(dispatch, topicId),
        preview: () => actions.preview(dispatch)
    })
    const
    WidgetListContainer = connect(
        stateToPropertiesMapper,
        dispatcherToPropsMapper)(WidgetList)

    export default WidgetListContainer



