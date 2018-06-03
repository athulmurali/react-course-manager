import React from "react";
import TopicPills from "./TopicPills";




export default class LessonTabs
    extends React.Component {
    render() { return(
        <div className="container">
            <ul className="nav nav-tabs px-2">
            <li className="nav-item"><a className="nav-link"
                                    href="#">Lesson 1</a></li>
            <li className="nav-item"><a className="nav-link active"
                                    href="#">Lesson 2</a></li>
        </ul>

            <div className="container">
                <TopicPills/>

                <div className="container">
                    <h3 className="row py-4">Content for the current tab-topic will be placed here </h3>

                </div>

            </div>



            {/*<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">*/}
                {/*<Tab eventKey={1} title="Tab 1">*/}
                    {/*Tab 1 content*/}
                {/*</Tab>*/}
                {/*<Tab eventKey={2} title="Tab 2">*/}
                    {/*Tab 2 content*/}
                {/*</Tab>*/}
                {/*<Tab eventKey={3} title="Tab 3" disabled>*/}
                    {/*Tab 3 content*/}
                {/*</Tab>*/}
            {/*</Tabs>*/}

        </div>


    );}}
