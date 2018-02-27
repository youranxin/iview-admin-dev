import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录',
        white: true
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};
export const guestRouter = {
    path: '/guest',
    name: 'guest',
    meta: {
        title: '社会招聘',
        white: true
    },
    component: resolve => { require(['@/pages/hireManager/guest/index.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在',
        white: true
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足',
        white: true
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误',
        white: true
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            title: {i18n: 'home'},
            name: 'home_index',
            component: resolve => { require(['@/pages/home/index.vue'], resolve); }
        },
        {
            path: 'myLog',
            title: '我的日志',
            name: 'myLog',
            component: resolve => { require(['@/pages/myLog/index.vue'], resolve); }
        },
        {
            path: 'myAttendance',
            title: '我的考勤',
            name: 'myAttendance',
            component: resolve => { require(['@/pages/myAttendance/index.vue'], resolve); }
        },
        {
            path: 'myLeave',
            title: '我的请假',
            name: 'myLeave',
            component: resolve => { require(['@/pages/myLeave/index.vue'], resolve); }
        },
        {
            path: 'myArrange',
            title: '我的排班',
            name: 'myArrange',
            component: resolve => { require(['@/pages/myArrange/index.vue'], resolve); }
        },
        {
            path: 'coinShop',
            title: '金币商城',
            name: 'coinShop',
            component: resolve => { require(['@/pages/coinManage/coinShop/index.vue'], resolve); }
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); }
        },
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
    ]
};
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/logManage',
        icon: 'compose',
        name: 'logManage',
        title: '工作日志管理',
        component: Main,
        children: [
            {
                path: 'elogManage',
                icon: 'compose',
                name: 'elogManage',
                title: '员工日志管理',
                component: resolve => { require(['@/pages/logManage/elogManage/index.vue'], resolve); }
            },
            {
                path: 'logTotal',
                icon: 'compose',
                name: 'logTotal',
                title: '日志统计',
                component: resolve => { require(['@/pages/logManage/logTotal/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/attendanceAndLeave',
        icon: 'ios-folder-outline',
        name: 'attendanceAndLeave',
        title: '考勤请假管理',
        component: Main,
        children: [
            {
                path: 'attendanceManage',
                icon: 'ios-folder-outline',
                name: 'attendanceManage',
                title: '考勤管理',
                component: resolve => { require(['@/pages/attendanceAndLeave/attendanceManage/index.vue'], resolve); }
            },
            {
                path: 'leaveApproval',
                icon: 'ios-folder-outline',
                name: 'leaveApproval',
                title: '请假审批',
                component: resolve => { require(['@/pages/attendanceAndLeave/leaveApproval/index.vue'], resolve); }
            },
            {
                path: 'leaveManage',
                icon: 'ios-folder-outline',
                name: 'leaveManage',
                title: '请假管理',
                component: resolve => { require(['@/pages/attendanceAndLeave/leaveManage/index.vue'], resolve); }
            },
            {
                path: 'depAttendance',
                icon: 'ios-folder-outline',
                name: 'depAttendance',
                title: '部门考勤',
                component: resolve => { require(['@/pages/attendanceAndLeave/depAttendance/index.vue'], resolve); }
            },
            {
                path: 'depArrange',
                icon: 'ios-folder-outline',
                name: 'depArrange',
                title: '部门排班信息',
                component: resolve => { require(['@/pages/attendanceAndLeave/depArrange/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/employeeFileManager',
        icon: 'ios-book',
        name: 'employeeFileManager',
        title: '员工档案管理',
        component: Main,
        children: [
            {
                path: 'employeeAchives',
                icon: 'ios-book',
                name: 'employeeAchives',
                title: '员工档案',
                component: resolve => { require(['@/pages/employeeFileManager/employeeAchives/index.vue'], resolve); }
            },
            {
                path: 'employeeOrganize',
                icon: 'ios-book',
                name: 'employeeOrganize',
                title: '部门员工档案',
                component: resolve => { require(['@/pages/employeeFileManager/employeeOrganize/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/hireManager',
        icon: 'ios-people',
        name: 'hireManager',
        title: '招聘管理',
        component: Main,
        children: [
            {
                path: 'hire',
                icon: 'compose',
                name: 'hire',
                title: '员工招聘',
                component: resolve => { require(['@/pages/hireManager/hire/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/examination',
        icon: 'university',
        name: 'examination',
        title: '考试管理',
        component: Main,
        children: [
            {
                path: 'examinationManage',
                icon: 'university',
                name: 'examinationManage',
                title: '考试管理',
                component: resolve => { require(['@/pages/examination/examinationManage/index.vue'], resolve); }
            },
            {
                path: 'questionManage',
                icon: 'university',
                name: 'questionManage',
                title: '试题管理',
                component: resolve => { require(['@/pages/examination/questionManage/index.vue'], resolve); }
            },
            {
                path: 'paperManage',
                icon: 'university',
                name: 'paperManage',
                title: '试卷管理',
                component: resolve => { require(['@/pages/examination/paperManage/index.vue'], resolve); }
            },
            {
                path: 'gradeManage',
                icon: 'university',
                name: 'gradeManage',
                title: '成绩管理',
                component: resolve => { require(['@/pages/examination/gradeManage/index.vue'], resolve); }
            },
            {
                path: 'categoryManage',
                icon: 'university',
                name: 'categoryManage',
                title: '分类管理',
                component: resolve => { require(['@/pages/examination/categoryManage/index.vue'], resolve); }
            },
            {
                path: 'depGrade',
                icon: 'university',
                name: 'depGrade',
                title: '部门成绩',
                component: resolve => { require(['@/pages/examination/depGrade/index.vue'], resolve); }
            },
            {
                path: 'peopleCheck',
                icon: 'university',
                name: 'peopleCheck',
                title: '人工阅卷',
                component: resolve => { require(['@/pages/examination/peopleCheck/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/coinManage',
        icon: 'ios-pricetags',
        name: 'coinManage',
        title: '金币管理',
        component: Main,
        children: [
            {
                path: 'coinRecord',
                icon: 'ios-pricetags',
                name: 'coinRecord',
                title: '金币记录',
                component: resolve => { require(['@/pages/coinManage/coinRecord/index.vue'], resolve); }
            },
            {
                path: 'coinStatistics',
                icon: 'ios-pricetags',
                name: 'coinStatistics',
                title: '金币分类统计',
                component: resolve => { require(['@/pages/coinManage/coinStatistics/index.vue'], resolve); }
            },
            {
                path: 'goodsManage',
                icon: 'ios-pricetags',
                name: 'goodsManage',
                title: '商品管理',
                component: resolve => { require(['@/pages/coinManage/goodsManage/index.vue'], resolve); }
            },
            {
                path: 'prizeManage',
                icon: 'ios-pricetags',
                name: 'prizeManage',
                title: '奖品管理',
                component: resolve => { require(['@/pages/coinManage/prizeManage/index.vue'], resolve); }
            },
            {
                path: 'goodsExchangeManage',
                icon: 'ios-pricetags',
                name: 'goodsExchangeManage',
                title: '兑换管理',
                component: resolve => { require(['@/pages/coinManage/goodsExchangeManage/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/systemManage',
        icon: 'ios-gear',
        name: 'systemManage',
        title: '系统管理',
        component: Main,
        children: [
            {
                path: 'organizationManage',
                icon: 'ios-gear',
                name: 'organizationManage',
                title: '组织管理',
                component: resolve => { require(['@/pages/systemManage/organizationManage/index.vue'], resolve); }
            },
            {
                path: 'roleManage',
                icon: 'ios-gear',
                name: 'roleManage',
                title: '角色管理',
                component: resolve => { require(['@/pages/systemManage/roleManage/index.vue'], resolve); }
            },
            {
                path: 'levelManage',
                icon: 'ios-gear',
                name: 'levelManage',
                title: '职级管理',
                component: resolve => { require(['@/pages/systemManage/levelManage/index.vue'], resolve); }
            },
            {
                path: 'userManage',
                icon: 'ios-gear',
                name: 'userManage',
                title: '用户管理',
                component: resolve => { require(['@/pages/systemManage/userManage/index.vue'], resolve); }
            },
            {
                path: 'postManage',
                icon: 'ios-gear',
                name: 'postManage',
                title: '岗位管理',
                component: resolve => { require(['@/pages/systemManage/postManage/index.vue'], resolve); }
            },
            {
                path: 'noticeManage',
                icon: 'ios-gear',
                name: 'noticeManage',
                title: '公告管理',
                component: resolve => { require(['@/pages/systemManage/noticeManage/index.vue'], resolve); }
            }
        ]
    },
    {
        path: '/international',
        icon: 'earth',
        title: {i18n: 'international'},
        name: 'international',
        component: Main,
        children: [
            { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    guestRouter,
    locking,
    page500,
    page403
];
