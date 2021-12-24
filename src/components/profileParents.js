import React, { Component } from 'react'
import Profile from './profile'
import Photo1 from '../Photoyasser.jpg'


export default class profileParents extends Component {
    constructor(props){
    super(props)
    this.state ={
        name : 'yasser',
        description : 'I m a student',
        image : Photo1,
        show : false,
    }
}
toggle(){
    this.setState({show:!this.state.show})
}

    render() {
        return (
            <div>
                <h1>we are go my code</h1>
                <button onClick={()=>this.toggle()} >Click me
                </button>
   {this.state.show? <Profile name={this.state.name} description={this.state.description} 
                      image={this.state.image} />:null}
            </div>
        )
    }
}
