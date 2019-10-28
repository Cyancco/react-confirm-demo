import React from 'react';
import Confirm from "./Confirm";
class App extends React.Component{
    render() {
        return(
            <div>
                hello world
            </div>
        )
    }
    async  componentDidMount(){
        let res = await Confirm('确定删除吗?');
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
}

export default App;
