import TopicList from "../TopicList/TopicList";
import * as PropTypes from "prop-types";
import React from "react";

export function TopicSection(props) {
    return <div className="row  py-2 container mx-auto">
        <div className="container row navbar card">
            <h4>Topics</h4>
        </div>

        {!props.lessonSelected &&
        <div className="container row jumbotron justify-content-center">
            <h3 className="">No Lesson Selected! </h3>
        </div>
        }

        {!!props.lessonSelected &&
        <TopicList topics={props.topics}
                   courseId={props.courseId}
                   moduleId={props.moduleId}
                   lessonId={props.lessonId}
                   selectTopic={props.selectTopic}
        />
        }

    </div>;
}

TopicSection.propTypes = {
    lessonSelected: PropTypes.bool,
    topics: PropTypes.any,
    courseId: PropTypes.any,
    moduleId: PropTypes.any,
    lessonId: PropTypes.any,
    selectTopic: PropTypes.func
};
