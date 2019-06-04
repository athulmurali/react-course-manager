import LessonList from "../LessonList/LessonList";
import * as PropTypes from "prop-types";
import React from "react";
import {TopicSection} from "./TopicSection";

export function LessonSection(props) {
    return <div className="container  col-lg-8 col-sm-12   ">
        <div className="row  py-2 container mx-auto">

            <div className="container row navbar card">
                <h4>Lessons</h4>
            </div>
            {!props.moduleSelected &&
            <div className="container row jumbotron justify-content-center">
                <h3 className="">No Module Selected! </h3>
            </div>
            }

            {!!props.moduleSelected && !!props.moduleId &&
            <LessonList lessons={props.lessons}
                        moduleId={props.moduleId}
                        courseId={props.courseId}
                        selectLesson={props.selectLesson}
                        selectedLessonId={props.selectedLessonId}
            />
            }

        </div>

        <TopicSection lessonSelected={props.lessonSelected}
                      topics={props.topics}
                      courseId={props.courseId}
                      moduleId={props.moduleId}
                      lessonId={props.selectedLessonId}
                      selectTopic={props.selectTopic}/>


    </div>;
}

LessonSection.propTypes = {
    moduleSelected: PropTypes.bool,
    moduleId: PropTypes.any,
    lessons: PropTypes.any,
    courseId: PropTypes.any,
    selectLesson: PropTypes.func,
    selectedLessonId: PropTypes.any,
    lessonSelected: PropTypes.bool,
    topics: PropTypes.any,
    selectTopic: PropTypes.func
};
