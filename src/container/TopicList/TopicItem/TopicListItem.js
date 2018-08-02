import React, {Component} from 'react';
import EditableTopicListItem from "./EditableTopicListItem";
import StaticTopicListItem from "./StaticTopicListItem";


export default class TopicListItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                inEditMode: this.props.inEditMode

            }

        this.toggleEditMode = this.toggleEditMode.bind(this);
        console.log("TopicListItem : Constructor props")
        console.log(this.props);


    }

    toggleEditMode() {
        console.log("toggling edit mode");
        this.setState(() => {
            inEditMode: !!!this.state.inEditMode;
        })

        this.setState(
            {inEditMode: !!!this.state.inEditMode});


    }


    render() {
        let className =  (this.props.selectedTopicId == this.props.id )?
            "nav-item nav-link active text-white " : "nav-item nav-link"

        return (
            <div className={className}>
                {!!this.state.inEditMode &&
                <EditableTopicListItem
                    id={this.props.id}
                    title={this.props.title}
                    index={this.props.index}
                    toggleEditMode={this.toggleEditMode}
                    editTopic={this.props.editTopic}
                />}

                {!!!this.state.inEditMode &&
                <StaticTopicListItem
                    id={this.props.id}
                    index={this.props.index}
                    title={this.props.title}
                    toggleEditMode={this.toggleEditMode}
                    deleteTopic={this.props.deleteTopic}
                    selectTopic={this.props.selectTopic}
                />}
            </div>
        );
    }

}



