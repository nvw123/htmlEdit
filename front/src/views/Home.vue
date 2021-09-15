<template>
    <div class="home">
        <el-container>
            <el-aside class="aside" :style="`height:${height}px`">
                <el-button style="width: 70%; margin-top: 20px; margin-bottom: 20px" type="danger"  round @click="operation">保存/刷新</el-button>
                <el-input class="search" suffix-icon="el-icon-search" size="small" style="width: 90%" placeholder="请输入内容" v-model="input1">
            </el-input>
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-container>
                <el-main style="padding: 0">
                    <multipane class="html">
                         <div class="edit" :style="`height:${height}px`">
                        <my-codemirror :codes.sync="codes" :cmOptions="cmOptionsHtml"></my-codemirror>
                         </div>
                         <multipane-resizer/>
                        <div class="operation" :style="`height:${height}px`">
                                     <div class="operation_page">
                                          <iframe id="myframe" style="width: 100%; height: 100%" :src="`${path}`"></iframe>
                                     </div>
                        </div>

                    </multipane>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import {Multipane, MultipaneResizer} from 'vue-multipane'
import MyCodemirror from '../components/myCodemirror'
import {getClientHeight} from "../utils/common";


export default {

    name: 'Home',
    components: {Multipane, MultipaneResizer, MyCodemirror},
    data(){
        return {
            input1:'',
            height:0,
            codes :'',
            path:'',
            cmOptionsJs: { // 配置项
                tabSize: 4, // 制表符的宽度
                mode: 'text/javascript', // 使用的模式
                theme: 'material', // 主题黑色
                // theme: 'darcula', // 主题白色
                lineNumbers: true, // 是否显示行号
                matchBrackets: true, // 光标匹配括号
                line: true,
                readOnly: false, // 只读
            },
            cmOptionsHtml: { // 配置项
                tabSize: 4, // 制表符的宽度
                mode: 'text/html', // 使用的模式
                theme: 'material', // 主题黑色
                // theme: 'darcula', // 主题白色
                lineNumbers: true, // 是否显示行号
                matchBrackets: true, // 光标匹配括号
                line: true,
                readOnly: false, // 只读
                extraKeys:{"Ctrl-Space":"autocomplete"}//ctrl-space唤起智能提示
            },
            data: [{
                label: 'Echarts',
                path:1,
                children: [{
                    label: '二级 1-1',
                    path:2
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        getFile() {
            var this_ = this
            this.$_get('/get_files')
                .then(response => {
                    this_.data = JSON.parse(response.data["resData"])
                    this.readFile(this_.data[0]["children"][0]["path"])
                })
        },

        readFile(path) {
            var this_ = this
            this.$_get('/file', {"path": path})
                .then(response => {
                    this_.codes = response.data["resData"]
                    this_.path = path
                    this.operation()
                })
        },

        operation(){
            document.getElementById('myframe').contentWindow.location.reload(true);
        },

        saveFile() {
            var this_ = this
            this.$_post('/file', {data: this_.codes, path: this_.path})
                .then(res => {
                    console.log('保存成功', res)
                })
        },


        handleNodeClick(data) {
            this.readFile(data.path)
            console.log(data.path);
        }
    },
    mounted(){
        this.height = getClientHeight()
        setInterval(this.saveFile, 1000)
        this.getFile()
    }
}
</script>

<style>

.aside{
    width:10% !important; border-right:1px solid #ebebeb
}
.html{
    height: 800px;
}
.edit{
    width: 50%;
    border: 1px solid #ebebeb;
}

.operation{
    width: 50%;
    border: 1px solid #ebebeb;
}

.header{
    height: 60px;
    border-bottom: 1px solid #ebebeb;
}


.code {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.CodeMirror-scroll{
    text-align: left;
}

.cm-s-material.CodeMirror{
    height: 100%;
}
.CodeMirror-code{
    font-size: 18px;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
}


.operation_page{
    height: 450px;
    width: 800px;
}

.search .el-input__inner{
    border-radius: 15px;
}

.el-tree{
    padding-left: 5px;
    padding-top: 20px;

}


</style>
