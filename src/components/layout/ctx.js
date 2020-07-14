import React from 'react'

import {Route,Switch, Redirect} from 'react-router-dom'

import { Layout } from 'antd';

import routes from '@/pages'


const { Content } = Layout;

export default class CtxDemo extends React.Component {
    createRoute(){
        return (
            routes.map(ele=>(
                <Route 
                path={ele.path} 
                key={ele.id} 
                exact 
                component={ele.component}
                >
                    
                </Route>
            ))
        )
    }
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                background : 'none',
                minHeight: 280,
                }}
            >
                <Switch>
                    {this.createRoute()}
                    <Redirect from='/*' to='/home'></Redirect>
                </Switch>
                
            </Content>
        );
    }
}
