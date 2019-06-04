import * as PropTypes from "prop-types";
import React from "react";

export function AccessToggleSwitch(props) {
    return (
        <div className="row flex-row pr-2 pb-3 align-items-center">
            <span className="px-2 float-left">
                    <h7>Public</h7>
            </span>
            <div className="d-flex float-right my-auto">
                <label className="switch m-auto">
                    <input type="checkbox" checked={props.course.private}
                           onClick={props.onClick}/>
                    <span className="slider round"/>
                </label>
            </div>
            <span className="px-2 float-right">
            <h7>Private</h7>
        </span>
        </div>);
}

AccessToggleSwitch.propTypes = {
    course: PropTypes.any,
    onClick: PropTypes.func
};
