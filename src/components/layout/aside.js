import React from 'react'

import routes from '@/pages'
import {NavLink} from 'react-router-dom'
import { Layout, Menu } from 'antd';

// import logo from '@/assets/img/01.png'
// import logo1 from '@/assets/img/02.png'

import img from '@/utils/img.js'

const { Sider } = Layout;

export default class SiderDemo extends React.Component {

    createLink(){
        return routes.map(ele=>(
            <Menu.Item key={ele.id} icon={ele.icon}>
                <NavLink to={ele.path} key={ele.id}>
                    {ele.text}
                </NavLink>
            </Menu.Item>
        ))
    }
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" style={{height:'50px'}}>
                    <img src={this.props.collapsed?img.logo1:img.logo} alt="" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {this.createLink()}
                </Menu>
            </Sider>
        );
    }
}
