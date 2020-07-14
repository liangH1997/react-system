import React from 'react'
import { Layout , Menu , Dropdown , Avatar } from 'antd';
import './layout.scss'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const drops = (
  <Menu style={{marginTop : "20px",}}>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        我的信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        系统设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        关于我们
      </a>
    </Menu.Item>
    <Menu.Item danger>退出登录</Menu.Item>
  </Menu>
)


export default class HeadDemo extends React.Component {
    // constructor(props){
    //     super(props)
    // }


    toggle = () => {
        let {change} = this.props
        change()
    };

  render() {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

            <div className='user'>
              <Dropdown overlay={drops} placement='bottomCenter' >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <Avatar size='small' className='avatar'>U</Avatar> 
                  <DownOutlined />
                </a>
              </Dropdown>
              
            </div>
        </Header>
    );
  }
}
