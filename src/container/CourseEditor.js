import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseTitle from "./CourseList/CourseTitle/CourseTitle";
import DeleteCourseButton from "./CourseList/DeleteCourseButton";
import CourseService from "../services/CourseService";
import {Redirect} from "react-router-dom";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";
import WidgetListEditor from "./WidgetListEditor";
import {AccessToggleSwitch} from "../components/AccessToggleSwitch";
import {LessonSection} from "./Sections/LessonSection";
import {ModulesSection} from "./Sections/ModulesSection";

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.lessonService = LessonService.instance;
        this.topicService = TopicService.instance;

        this.state =
            {
                courseId: null,
                moduleId: null,
                lessonId: null,
                topicId: null,

                title: "unnamed",
                course:
                    {private: false},
                modules: [],
                lessons: [],
                topics: [],

                deleted: false,
                moduleSelected: false,
            };
        this.lessons = [];
        this.getCourseFromServer();
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.updateTitleState();
        this.updateModules();
    }

    componentWillReceiveProps() {
        this.selectCourse(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: parseInt(courseId)});
    }

    selectModule = (id) => {
        this.setState({moduleId: id, moduleSelected: true},
            () => {
                this.lessonService.findAllLessonsForModule(this.state.courseId, this.state.moduleId)
                    .then((lessons) => this.setState({lessons: lessons, lessonSelected: false, topicId: null}));
            });
    };

    selectLesson = (id) => {
        this.setState({lessonId: id, lessonSelected: true}, () => {
            this.topicService.findAllTopicsForLesson(this.state.courseId,
                this.state.moduleId,
                this.state.lessonId
            ).then((topics) => {
                console.log(topics);
                this.setState({topics: topics});
            });

        });

    };

    selectTopic = (id) => this.setState({topicId: id});

    updateTitleState = () => {
        this.courseService.getCourseById(this.props.match.params.courseId).then(coursesReceived => this.setState({title: coursesReceived.title}));
    }

    updateCourseVisibility = () => {
        let tempCourse = this.state.course;
        tempCourse.private = !tempCourse.private
        console.log(tempCourse)

        this.courseService.updateCourse(this.state.courseId, tempCourse).then(updatedCourse => this.setState({course: updatedCourse}))
    }

    getCourseFromServer = () => {
        this.courseService.getCourseById(this.props.match.params.courseId).then((courseReceived) => {
            this.setState({course: courseReceived});
        });
    }

    updateModules = () => {
        this.courseService.getCourseById(this.props.match.params.courseId)
            .then((coursesReceived) => this.setState({modules: coursesReceived.modules}));
    };

    deleteCourse = (id) => {
        var oldOptions = this.state.courses;
        console.log("Delete course id : " + id);
        this.courseService.deleteCourse(id).then((res) => {
            this.setState({deleted: true})
        });

        // this.courseService.deleteCourseInMongo(id).
        // then(response=>{ console.log(response);
        // console.log("deleted in mongo too.")}).
        // catch(err=>{console.log(err);})
        //api to delete

    }

    renderEditor = () => {
        return (<div className="container">
            <div className="row   py-1 justify-content-between">
                <AccessToggleSwitch course={this.state.course} onClick={this.updateCourseVisibility}/>
                <DeleteCourseButton
                    deleteCourse={this.deleteCourse}
                    id={this.state.courseId}/>
            </div>
            <CourseTitle courseId={this.state.courseId} title={this.state.title}/>
            <div className="row py-2">
                <ModulesSection modules={this.state.modules}
                                courseId={this.state.courseId}
                                selectModule={this.selectModule}
                                selectedModuleId={this.state.moduleId}/>
                <LessonSection moduleSelected={this.state.moduleSelected} moduleId={this.state.moduleId}
                               lessons={this.state.lessons} courseId={this.state.courseId}
                               selectLesson={this.selectLesson} selectedLessonId={this.state.lessonId}
                               lessonSelected={this.state.lessonSelected} topics={this.state.topics}
                               selectTopic={this.selectTopic}/>
            </div>
            <div className="card widgetContainer row  py-2 container mx-auto">
                {!!this.state.topicId &&
                <WidgetListEditor
                    courseId={this.state.courseId}
                    moduleId={this.state.moduleId}
                    lessonId={this.state.lessonId}
                    topicId={this.state.topicId}
                />}
            </div>

        </div>);
    }

    render = () => {
        return this.state.deleted ?
            (<Redirect to="/courses"/>) : this.renderEditor()
    }
}

