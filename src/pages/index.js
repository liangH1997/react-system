import React from 'react'

import loadable from '@loadable/component'

import {
    HomeOutlined,
    FileUnknownOutlined,
    UploadOutlined,
    FileWordOutlined,
    IdcardOutlined,
    PayCircleOutlined,
    ReadOutlined,
    StarOutlined,
    TrademarkOutlined,
    ScheduleOutlined
} from '@ant-design/icons';

const Home = loadable(()=>import('./home/Home'))
const Comment = loadable(()=>import('./comment/Comment'))
const Attendance = loadable(()=>import('./attendance/Attendance'))
const Todo = loadable(()=>import('./todo/Todo'))
const Upload = loadable(()=>import('./upload/Upload'))



export default [
    {
        id : 1,
        path : '/home',
        component : Home,
        icon : <HomeOutlined />,
        text : '首页'
    },
    {
        id : 2,
        path : '/todo',
        component : Todo,
        icon : <FileUnknownOutlined />,
        text : '待办事项'
    },
    {
        id : 3,
        path : '/upload',
        component : Upload,
        icon : <UploadOutlined />,
        text : '项目上传'
    },
    {
        id : 4,
        path : '/report',
        component : Home,
        icon : <FileWordOutlined />,
        text : '学员周报'
    },
    {
        id : 5,
        path : '/mydata',
        component : Home,
        icon : <IdcardOutlined />,
        text : '我的资料'
    },
    {
        id : 6,
        path : '/paylist',
        component : Home,
        icon : <PayCircleOutlined />,
        text : '交费明细'
    },
    {
        id : 7,
        path : '/test',
        component : Home,
        icon : <ReadOutlined />,
        text : '参加考试'
    },
    {
        id : 8,
        path : '/comments',
        component : Comment,
        icon : <StarOutlined />,
        text : '学员评价'
    },
    {
        id : 9,
        path : '/teaching',
        component : Home,
        icon : <TrademarkOutlined />,
        text : '教学评测'
    },
    {
        id : 10,
        path : '/attendance',
        component : Attendance,
        icon : <ScheduleOutlined />,
        text : '学员考勤'
    },
    {
        id : 11,
        path : '/biye',
        component : Attendance,
        icon : <ScheduleOutlined />,
        text : '毕业薪资'
    }
]