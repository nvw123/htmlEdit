/**
 * 页面数据展示的表格标题配置和操作额配置属性
 */


//列表信息展示操作类型
export let operatesType = {
    modify: 1,
    delete: 2,
    modifyPwd: 3
};

export let dialogType = {
    add: 1,
    modify:2
}

export let controlSoftTemp = {
    getTicketTemp:'1',
    syncScreenTemp: '2',
    syncScreenTextTemp:'3',
    syncIntegratedScreenTemp:'4',
    integratedTemp:'5',
    evaluatorTemp:'6',
}

export let softTempTypes = [
    {lb: '取号模板', value: "1"},
    {lb: '同步屏模板', value: "2"},
    {lb: '同步屏内文本区模板', value: "3"},
    {lb: '同步屏内综合屏模板', value: "4"},
    {lb: '综合屏模板', value: "5"},
    {lb: '评价器模板', value: "6"},
]

export let controlSoftClient = {
    caller: '1',
    evaluator:'2',
    integrated:'3',
    syncScreen:'4',
    getTicket:'5',
    winScreen:"6"
}
export let softClientTypes = [
    {lb: '软件叫号器', value: "1"},
    {lb: '评价器', value: "2"},
    {lb: '综合屏', value: "3"},
    {lb: '同步屏', value: "4"},
    {lb: '取号App', value: "5"},
    {lb: '窗口屏', value: "6"},
];

export let hardTypes=[
      {lb:'硬件叫号器',value:"1"},
      {lb:'evt小屏',value:"2"},
      {lb:'led综合屏',value:"3"},
      {lb:'vsd异步屏',value:"4"},
      {lb:'we评价器',value:"5"},
      {lb:'语音',value:"6", hidden:1},
      {lb:'bx异步屏',value:"7"},
  ];

export let controlHard = {
    bxAsyScreen:'7',
    evtScreen:'2',
    hardCaller:'1',
    ledMultiScreen:'3',
    vsdAsyScreen:'4',
    weEvaluate:'5',
    voice:'6'
  };

export let winScreenType =[
    {lb: 'VSD屏', value: '1'},
    {lb: '同步屏', "value": "2"},
    {lb: '其他', "value": "3"}
]
export let controlWinScreen={
    vsdAsyScreen:'1',
    syncScreen: '2',
    otherScreen:'3'
}

export let api = {
    login: '/login',
    org: '/set/org',
    user: '/set/user',
    win: '/set/win',
    bus: '/set/bus',
    hardClient: '/set/hard_client',
    hardHelper: '/set/hard_helper',
    softClient: '/set/soft_client',
    staff: '/set/staff',
    softTemp: '/set/soft_temp',
    menuRights:'/app/menu_rights'
}

export let fontList = [
    {lb:'宋体', value:'宋体'},
    {lb:'新宋体', value:'新宋体'},
    {lb:'楷体', value:'楷体'},
    {lb:'华文行楷', value:'华文行楷'},
    {lb:'华文隶书', value:'华文隶书'},
    {lb:'幼圆', value:'幼圆'},
]
export let fontSize = [
    {lb:10, value:10},
    {lb:12, value:12},
    {lb:14, value:14},
    {lb:16, value:16},
    {lb:18, value:20},
]

export let fontColor = [
    {lb:'红色', value:'#FF0000'},
    {lb:'黄色', value:'#FFFF00'},
    {lb:'绿色', value:'#008000'},
    {lb:'白色', value:'#FFFFFF'},
    {lb:'蓝色', value:'#0000FF'},
    {lb:'黑色', value:'#000000'},
]

export let alignType = [
    {lb:'左对齐,上对齐', value:'1,1'},
    {lb:'左对齐,居中', value:'1,2'},
    {lb:'左对齐,下对齐', value:'1,3'},
    {lb:'居中,上对齐', value:'2,1'},
    {lb:'居中,居中', value:'2,2'},
    {lb:'居中,下对齐', value:'2,3'},
    {lb:'右对齐,上对齐', value:'3,1'},
    {lb:'右对齐,居中', value:'3,2'},
    {lb:'右对齐,下对齐', value:'3,3'},
]

export let displayMode = [
    {lb:'静止显示', value:'1'},
    {lb:'向左移动', value:'3'},
    {lb:'向左连移', value:'4'},
    {lb:'向上移动', value:'5'},
    {lb:'向上连移', value:'6'},
    {lb:'闪烁', value:'7'},
    {lb:'画卷闭合', value:'14'},
    {lb:'画卷打开', value:'15'},
    {lb:'向左镭射', value:'20'},
    {lb:'向右镭射', value:'21'},
    {lb:'向上镭射', value:'22'},
    {lb:'向下镭射', value:'23'},
    {lb:'左右交叉拉幕', value:'24'},
    {lb:'上下交叉拉幕', value:'25'},
    {lb:'水平百页', value:'27'},
    {lb:'垂直百页', value:'28'},
    {lb:'向左拉幕', value:'29'},
    {lb:'向右拉幕', value:'30'},
    {lb:'向上拉幕', value:'31'},
    {lb:'向下拉幕', value:'32'},
    {lb:'左右闭合', value:'33'},
    {lb:'左右对开', value:'34'},
    {lb:'上下闭合', value:'35'},
    {lb:'上下对开', value:'36'},
    {lb:'向右移动', value:'37'},
    {lb:'向右连移', value:'38'},
    {lb:'向下移动', value:'39'},
    {lb:'向下连移', value:'40'},
]



export let fontItalic = [
    {lb:'正常', value:0},
    {lb:'斜体', value:1},
]

export let fontBlod = [
    {lb:'正常', value:0},
    {lb:'粗体', value:1},
]


export let evtShowType = [
    {value: '0', lb: '立即显示'},
    {value: '1', lb: '从右向左移'},
    {value: '2', lb: '从下向上移'},
    {value: '3', lb: '从左向右展开'},
    {value: '4', lb: '百叶窗从左向右展开'},
    {value: '5', lb: '从上向下展开'},
    {value: '6', lb: '从上向下移'},
    {value: '7', lb: '闪烁显示'},
    {value: '8', lb: '连续左移'},
];

export let showSpeed = [
    {lb: '1', value: '0'},
    {lb: '2', value: '1'},
    {lb: '3', value: '2'},
    {lb: '4', value: '3'},
    {lb: '5', value: '4'},
    {lb: '6', value: '5'},
    {lb: '7', value: '6'},
    {lb: '8', value: '7'},
    {lb: '9', value: '8'},
    {lb: '10', value: '9'},
    {lb: '11', value: '10'},
    {lb: '12', value: '11'},
    {lb: '13', value: '12'},
    {lb: '14', value: '13'},
    {lb: '15', value: '14'},
    {lb: '16', value: '15'},
];


export let voiceTemplate = [
    {lb: '请%s号到%s窗口', value: '请%s号到%s窗口'},
    {lb: '请%s号到%s号窗口', value: '请%s号到%s号窗口'},
    {lb: '请%s号到%s窗口办理', value: '请%s号到%s窗口办理'},
    {lb: '请%s号到%s号窗口办理', value: '请%s号到%s号窗口办理'},
    {lb: '请%s号到%s', value: '请%s号到%s'}
]
