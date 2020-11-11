import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      n:0
    }
  };
  add=()=>{
    this.setState(
      (state)=>({
        n: state.n+1
      })
    )
    // this.setState(
    //   (state)=>({
    //     n: state.n-1
    //   })
    // )
  };
  
  shouldComponentUpdate(newProps,newState){
    if(newState.n === this.state.n){
      return false
    }else{
      return true
    }
  };
  render(){
    console.log('render了1次')
    let message;
    if(this.state.n%2 === 0){
      message = <div>偶数</div>
    }else{
      message = <div>奇数</div>
    }
    return(
      <>
        <div>
          n:{this.state.n}
          <button onClick={this.add}>+1</button>
        </div>
        {message}

        </>
    )
  }
};

export default App;
