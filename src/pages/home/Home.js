import React from 'react'
// import {HashRouter} from 'react-router-dom'
import './style.scss'

import img from '@/utils/img.js'

import { Steps, Button, message , Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined} from '@ant-design/icons';

const { Step } = Steps;



const steps = [
    {
      title: '一阶段',
      content: 'HTML/HTML5+CSS/CSS3',
      icon : <UserOutlined/>
    },
    {
      title: '二阶段',
      content: 'JavaScript+MySQL+PHP+Git+Nodejs',
      icon : <SolutionOutlined/>
    },
    {
      title: '三阶段',
      content: 'Vue+React+uniapp+webpack+Nodejs',
      icon : <LoadingOutlined/>
    }
  ];

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    next() {
    const current = this.state.current + 1;
    this.setState({ current });
    }

    prev() {
    const current = this.state.current - 1;
    this.setState({ current });
    }

    render(){
        let {current} = this.state
        return (
            <div className='home'>
                <div className='head'>
                    <img src={img.homeBanner} alt=""/>
                </div>
                <div className='con'>
                    <div className='title'>学习进度</div>
                    <Divider></Divider>
                    <Steps current={current}>
                        {steps.map(item =>(
                            <Step key={item.title} title={item.title} icon={item.icon} />
                        ))}
                    </Steps>
                    <div className="steps-content">
                        <h2>学习内容</h2>
                        {steps[current].content}
                    </div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                            奥利给
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('成功就业啦')}>
                            就业
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            留级
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}