import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    console.log(3)
    super();
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(){
    console.log(4)
    this.props.store.dispatch({
      type:'ADD_TODO',
      payload:this.refs.todoVal.value
    })
  }
 
  render() {
    console.log(5)
    const list = this.props.store.getState().list;
    return (
      <div>
        <input type='text' ref='todoVal'/>
        <button onClick={this.addTodo}>ADD TODO</button>
        <ul>
        {
          list.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
        </ul>
      </div>
    );
  }
}


export default App;








// import {Test,Home,News,Others} from './componets/test';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from 'react-router-dom';


// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//       message:'123'
//     }
//   }
//   getDataFromChildren(data){
//     this.setState({
//       message:data
//     })
//   }
//   componentWillMount(){

//   }
//   render() {
//     return (
//       <div className="App">
//      <h1 className='zhuangb'>{this.state.message}</h1>
//      <Test params='测试组件传参' getDataFromChildren={this.getDataFromChildren.bind(this)}/>
//       <Router>
//         <div>
//           <Link to='/'>主页</Link>
//           <Link to='/news/DDD'>新闻</Link>
//           <Link to='/others/SSS'>其他</Link>
//           <br/>
//           <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route path='/news/:chuancan' component={News}/>
//             <Route path='/others/:canshu' component={Others}/>
//             <Redirect from='/*' to='/' />
//           </Switch>
//         </div>
//       </Router>
//       </div>
//     );
//   }
// }

