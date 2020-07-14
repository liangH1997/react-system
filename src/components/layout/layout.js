import React from 'react'

import { Layout} from 'antd';
import './layout.scss'
import Aside from './aside'
import Ctx from './ctx'
import Head from './head'


export default class LayoutDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Aside collapsed={this.state.collapsed}></Aside>
                <Layout className="site-layout">
                    <Head collapsed={this.state.collapsed} change={this.toggle}></Head>
                    <Ctx></Ctx>
                </Layout>
            </Layout>
        );
    }
}
