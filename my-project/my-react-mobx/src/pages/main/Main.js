import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('mainStore')
@observer
class Main extends React.Component{
    handleTimes=()=>{
        // this.props.mainStore.click();
        this.props.mainStore.total()
        // this.props.mainStore.add(1);
    }
    render(){
        return(
            <div>
                <h3>this is main page</h3>
                <div onClick={this.handleTimes}>handle click me</div>
                <p>
                   {this.props.mainStore.times}
                </p>
                <hr/>
                
            </div>
        )
    }
}

export default Main;