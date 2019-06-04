import ModuleList from "../ModuleList/ModuleList";
import * as PropTypes from "prop-types";
import React from "react";

export function ModulesSection(props) {
    return <div className="col-lg-4 col-sm-12">
        <h3>Modules</h3>
        <ModuleList modules={props.modules}
                    courseId={props.courseId}
                    selectModule={props.selectModule}
                    selectedModuleId={props.selectedModuleId}
        />
    </div>;
}

ModulesSection.propTypes = {
    modules: PropTypes.any,
    courseId: PropTypes.any,
    selectModule: PropTypes.func,
    selectedModuleId: PropTypes.any
};
