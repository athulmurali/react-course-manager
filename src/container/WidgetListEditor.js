import React from 'react';

import WidgetListContainer from './WidgetListContainer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {widgetReducer} from "../reducers/widgetReducer"

let store = createStore(widgetReducer);

export default class WidgetListEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topicId: '',
            topic: {}
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
    }



    componentDidMount() {


        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
        this.setTopicId(this.props.topicId);


    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.setTopicId(newProps.topicId);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }



    render() {
        return(

            <Provider store={store}>
                <WidgetListContainer topicId={this.state.topicId}/>

            </Provider>

        );}}
