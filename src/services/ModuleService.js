

const BASE_URL = "https://neu-course-manager.herokuapp.com"
console.log("BASE_URL  " + BASE_URL);


const MODULE_API_URL =
    BASE_URL+ "/api/course/CID/module";

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }



    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); }
        )
    }



    findAllModulesForCourse=(CID)=>
    {

        URL = MODULE_API_URL.replace("CID",CID)

        return fetch(URL)
            .then(function(response)
            {
                return response.json();
            })
    }

    updateModule= (id,module) => {

        let  updateModuleURL = BASE_URL+"/api/module/" + id;
        return fetch(updateModuleURL,
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }


    deleteModule =(id) =>
    {
        let  deleteModuleURL = BASE_URL+"/api/module/" + id;

        return fetch(deleteModuleURL ,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
}
