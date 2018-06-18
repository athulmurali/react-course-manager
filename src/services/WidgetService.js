let _singleton = Symbol();


const BASE_URL = "http://localhost:8080"
console.log("BASE_URL  " + BASE_URL);


const WIDGET_API_URL =
    BASE_URL + "/api/topic/TID/widget"
const WIDGET_API_URL_TID =
    BASE_URL+ "/api/widget/TID";

export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }
    createWidget(courseId, moduleId,lessonId,widget) {
        return fetch(WIDGET_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId),
            {
                body: JSON.stringify(widget),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
            return response.json();
        });
    }
    deleteWidget(widgetID) {
        return fetch(WIDGET_API_URL_TID.replace('TID', widgetID), {
            method: 'DELETE'
        });
    }



    findAllWidgetsForTopic=(topicId)=> {


        return fetch(WIDGET_API_URL.replace('TID', topicId)
        )
            .then(function (response) {
                if(response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            })
    }



    saveWidgetsForTopic=(topicId,widgets)=> {
        const URL = BASE_URL+ "/api/widget/save/"+topicId

        console.log(URL);
        console.log("widgets to save");
        console.log(widgets);

        return fetch(URL,
            {
                method: 'POST',
                body: JSON.stringify(widgets),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                if(response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            })
    }



    updateWidget= (id,widget) => {

        const URL = BASE_URL + "/api/widget/WID"

        let  updateWidgetURL = URL.replace("WID", id);
        return fetch(updateWidgetURL,
            {
                body: JSON.stringify(widget),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }

}
