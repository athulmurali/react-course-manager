import React from 'react';
import TopicService from "../../services/TopicService";
import TopicListItem from "./TopicItem/TopicListItem";

import {BrowserRouter as Route} from 'react-router-dom'



export default class TopicList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            topic: { title: '' },
            topics : [ ]

        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.topicServiceInstance = TopicService.instance;


    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic: {title: event.target.value}});

    }


    selectTopic=(topicId)=>{
        // this.props.selectTopic(topicId)
        this.setState({selectedTopicId : topicId})
        this.props.selectTopic(topicId);
    }
    createTopic(){

        console.log("lesson id to create topic under : " + this.props.lessonId);

        this.topicServiceInstance.createTopic(  this.props.courseId,
                                                this.props.moduleId,
                                                this.props.lessonId,
                                                this.state.topic).then(
            (createdTopic)=>{

                let  newTopicList = this.state.topics
                newTopicList.push(createdTopic)

                this.setState(
                { topics : newTopicList});
                this.setState({topic: {title: ""}});}
        );


    }

    deleteTopic=(index)=>{
        index = index -1 ; // index starts from 1 in output
        console.log("index to remove : " + index);
        console.log("Topics before delete");
        console.log(this.state.topics);
        console.log("Removing topic in server   : "+ this.state.topics[index]);
        // this.topicServiceInstance
        this.topicServiceInstance.deleteTopic(this.state.topics[index].id).then(
            (response) =>{
                if (response.status == 200)
                {
                    console.log("removing  ");
                    console.log(this.state.topics[index]);
                    console.log("resetting state options -topic");
                    let listAfterRemoval = this.state.topics;
                    listAfterRemoval.splice(index,1);
                    console.log("topicList after removal");
                    console.log(listAfterRemoval);

                    this.setState({topics:  listAfterRemoval })


                }
                else{
                    alert("cannot delete ! Server issue");
                }
            })

    }

    editTopic=(index,title,  updated)=>{

        index --; //compensation for index start base from 1

        console.log("Topic before edit");
        console.log(this.state.topics);


        if (index > -1 && index  <  this.state.topics.length) {
            let newTopics = this.state.topics;
            newTopics[index].title = title;

            console.log("updating topic : ");
            console.log("before update ");
            console.log(this.state.topics[index]);

            let topic = {
                title : title
            }


                newTopics= this.state.topics
                newTopics[index].title = title

                this.topicServiceInstance.updateTopic(newTopics[index].id,newTopics[index]).then((response)=>{
                    console.log("Topic :updated in server ")
                    console.log(response);

                    this.setState((state)=>{
                        console.log("resetting state options");
                        return {topics:  newTopics }
                    });
            } )


            console.log("after update ");
            console.log(this.state.topics[index]);

        }

        console.log("Topic after edit");
        console.log(this.state.topics[index]);
    }


    componentDidMount(){
        console.log("Topic List Mounted :....");
        // console.log(this.props.topics);
        //
        this.setTopicList(this.props.topics);
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("Topic list receiving new props:");
        console.log(nextProps.topics);
        console.log(nextProps.lessonId);

        if (nextProps.topics!= null){

            this.setTopicList(nextProps.topics);
            this.setState({
                lessonId : nextProps.lessonId,
                moduleId : nextProps.moduleId,
                courseId : nextProps.courseId,
                topics : nextProps.topics

            })

        }




    }
    setTopicList=(topicList)=> {
        console.log("Setting topics for the lesson Id : " + this.props.lessonId);
        console.log(topicList);
        this.setState(()=> {return {topics: topicList}}
        )
    }



    returnListOfTopics =() => {
        let index =0;
        console.log("Printing topics : ");
        console.log(this.state);
       return  this.state.topics.map((topic) => {
            index++;
            return  <li  key ={index} className="nav-item">

                <TopicListItem
                    key={topic.id}
                    id={topic.id}
                    index={index}
                    title={topic.title}
                    inEditMode={false}
                    deleteTopic={this.deleteTopic}
                    editTopic = {this.editTopic}
                    selectTopic = {this.selectTopic}
                    selectedTopicId = {this.state.selectedTopicId}
                />
          </li>
        });
    }



    render=()=>{
        let topics = this.returnListOfTopics()
        return <ul className="nav nav-pills">
                    <li className="nav-item nav-link">
                        <input className="form-control"
                               onChange={this.titleChanged}
                               placeholder="title"
                               value={this.state.topic.title}/>
                        <span className="float-right">
                             <a href={"#"} style={{'color': 'inherit'}} >

                                <i className="px-2 fa fa-plus-circle "  onClick={this.createTopic}></i>
                            </a>

                        </span>
                    </li>
                     {topics}
                 </ul>


    }




}

