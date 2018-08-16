import React, { Component } from 'react';
import '../css/test.css'

class Test extends Component {
    constructor() {
        super();
        this.state = {
            listTest: ['第一组', '22', '33']
        }
    }

    testClick(refName) {
        console.log(refName)
        console.log(this.state.listTest)
        this.state.listTest.push('asd')
        this.setState({
            listTest: this.state.listTest
        })
    }

    render() {
        return (
            <div className='test'>
                <h1 onClick={() => { this.props.getDataFromChildren('ASAAA') }}>{this.props.params}</h1>
                {this.state.listTest.map((item, index) => {
                    return <div ref={item} onClick={this.testClick.bind(this, item)} key={index}>{item}</div>
                })}
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                主页
            </div>
        )
    }
}

class News extends Component {
    render() {
        return (
            <div>
                新闻
                {this.props.match.params.chuancan}
            </div>
        )
    }
}


class Others extends Component {
    render() {
        return (
            <div>
                <div className='test' id='aa'>1</div>
                <div className='test'>2</div>
                <div className='test'>3</div>
                <h1 onClick={()=>this.testObj(1111)}>{this.props.match.params.canshu}</h1>
            </div>
        )
    }

    testObj(data){
        let nodeList=document.getElementsByTagName('div');
        console.log(nodeList);
        let asd = document.createElement('div');
        asd.innerHTML = 'asdasdsd';
        document.getElementById('aa').appendChild(asd)
        console.log(nodeList);
    }
}


export {
    Test,
    Home,
    News,
    Others
} 