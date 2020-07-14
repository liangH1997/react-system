import React from 'react'

import {getAllCates} from '@/utils/goodApi'
import { Select } from 'antd';

export default class CateSelect extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cateArr : []
        }
    }

    componentDidMount(){
        getAllCates({}).then(res=>{
            // console.log('res',res)
            this.setState({
                cateArr : res
            })
        })
    }

    createCates(){
        let {cateArr} = this.state
        return cateArr.map(ele=>(
            <Select.Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Select.Option>
        ))
    }
    render() {
        let {value} = this.props
        return (
            <Select style={{width:'100%'}} value={value} onChange={(val)=>this.props.onChange(val)}>
                {this.createCates()}
            </Select>
            
        );
    }
}
