import React from 'react'

export default class SortByButton extends React.Component{
    constructor(props){
        super(props)
        this.options =["title","date","Last opened","created","modified"]
        this.state ={
            selected :"as",
            options  : ["title","date","Last opened","created","modified"]

        }
        this.buttonName = "Sort"

    }

    componentWillReceiveProps(nextProps){
        this.setState({

            options  : nextProps.options,


        })

    }

    renderOptions =()=>{

       let optionButtons  = this.state.options.map((option)=> {
         return  <button key ={option} className="btn-secondary"
                         style={{cursor:"pointer"}}>
             <div
                 className ={"active"}>
                 {option}
             </div>
         </button>
       })
           return (<div className="btn-group">
               {optionButtons}
           </div>)
       }



   renderOption =()=>{
        return (
            <button className="btn-secondary"
                    style={{cursor:"pointer"}}>
                {this.buttonName}
            </button>
        )


   }
    render=()=>{
       return  this.state.selected ?
       (
                <div className="btn-group "  data-toggle="buttons">
                        {this.renderOptions()}
                </div>
        )

    : ( <div className="btn-group "  data-toggle="buttons">
               {this.renderOption()}
           </div>)

    }
}


