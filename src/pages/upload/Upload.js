import React  from 'react'
// import {HashRouter} from 'react-router-dom'
import './style.scss'
import moment from 'moment'

import { 
    Form, 
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Radio,
    Row,
    Col,
    Divider,
} from 'antd';

import connect from 'react-redux'


import CateSelect from '../../components/cateSelect/CateSelect';
import { addGood } from '../../utils/goodApi';


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value : 1,
            cate : ''
        }
    }

    changeDate(date,dateString){
        console.log(date, dateString)
    }
    onFinish(data){
        data.create_time = moment(data.create_time).valueOf()
        addGood(data).then(()=>{
            console.log('添加成功')
        })

    }
    onChange(checked){
        console.log('选择了'+checked)
    }

    cateFilter(val){
        this.setState({
            cate : val
        })
    }
    render(){
        let {cate} = this.state
        return (
            <div className='upload'>
                <div className='title'>
                    添加商品
                </div>
                <Divider></Divider>
                <Form
                    labelCol={{
                    span: 4,
                    }}
                    onFinish={this.onFinish.bind(this)}
                    wrapperCol={{
                    span: 14,
                    }}
                    initialValues={{
                        cate : "123",
                        price : 123,
                        desc : "123"
                    }}
                    size='middle'
                >
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="商品名称"
                                name="name"
                                rules={
                                    [{
                                      required: true,
                                      message: '请输入商品名称！',
                                    }]
                                } 
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="商品图片"
                                name="img"
                                rules={
                                    [{
                                      required: true,
                                      message: '请输入商品图片！',
                                    }]
                                }    
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="商品详情"
                                name="desc"
                                rules={
                                    [{
                                      required: true,
                                      message: '请输入商品详情！',
                                    }]
                                }
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="商品品类"
                                name="cate"
                                rules={
                                    [{
                                      required: true,
                                      message: '请选择品类！',
                                    }]
                                }
                            >
                                <CateSelect value={cate} onChange={this.cateFilter.bind(this)}></CateSelect>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="上架时间"
                                name="create_time"
                                rules={
                                    [{
                                      required: true,
                                      message: '请选择上架时间！',
                                    }]
                                }
                            >
                                <DatePicker onChange={this.changeDate.bind(this)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item 
                                label="商品价格"
                                name="price"
                                rules={
                                    [{
                                      required: true,
                                      message: '请输入商品价格！',
                                    }]
                                }
                            >
                                <InputNumber />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Form.Item   
                                label='是否热销'
                                name='hot'
                                rules={
                                    [{
                                      required: true,
                                      message: '请确认！',
                                    }]
                                }
                                >
                                <Radio.Group onChange={this.onChange}>
                                    <Radio value={true}>是</Radio>
                                    <Radio value={false}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={10}>
                            <Button type="primary" htmlType="submit">添加</Button>
                        </Col>
                    </Row>
                    
                    
                </Form>
            </div>
        )
    }
}