import React from 'react'
// import {HashRouter} from 'react-router-dom'
import './style.scss'

import { Table, Tag, Space ,Divider } from 'antd';



    const columns = [
        {
          title: '工作日',
          dataIndex: 'day',
          key: 'day',
          render: text => <a href=''>{text}</a>,
        },
        {
          title: '打卡时间',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '打卡地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '考勤状态',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 1 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a href=''>修改 {record.name}</a>
              <a href=''>删除</a>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          day: '2020-07-01',
          time: '2020-07-01 08:56',
          address: '紫阳大道318号',
          tags: ['正常', '踩点'],
        },
        {
            key: '2',
            day: '2020-07-02',
            time: '2020-07-02 08:30',
            address: '西部硅谷',
            tags: ['打卡狂人'],
        },
        {
            key: '3',
            day: '2020-07-03',
            time: '2020-07-03 09:56',
            address: '紫阳大道318号',
            tags: ['迟到'],
        },
      ];

export default class Attendance extends React.Component{

    render(){

        return (
            <div className='attendance'>
                <div className='title'>学员考勤</div>
                <Divider></Divider>
                <div className='con'>
                    <Table columns={columns} dataSource={data}></Table>
                </div>
            </div>
        )
    }
}