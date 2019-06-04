import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import EditableModuleListItem from "./EditableModuleListItem";
import StaticModuleListItem from "./StaticModuleListItem";


export default class ModuleListItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                inEditMode: false
            };

        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (!nextProps.isSelected)
            this.setState({inEditMode: false})
    }

    toggleEditMode() {
        this.setState( {inEditMode: !this.state.inEditMode});
    }


    render() {
        let className = !!(this.props.selectedModuleId == this.props.id) ? "list-group-item  bg-secondary" : "list-group-item";
        return (
            <li className={className}>
                {this.state.inEditMode ?
                    <EditableModuleListItem
                        id={this.props.id}
                        title={this.props.title}
                        index={this.props.index}
                        toggleEditMode={this.toggleEditMode}
                        editModule={this.props.editModule}
                    /> :
                    <StaticModuleListItem
                        id={this.props.id}
                        index={this.props.index}
                        title={this.props.title}
                        toggleEditMode={this.toggleEditMode}
                        deleteModule={this.props.deleteModule}
                        selectModule={this.props.selectModule}
                    />}

            </li>
        );
    }
}
