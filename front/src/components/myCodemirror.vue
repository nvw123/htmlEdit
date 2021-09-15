<template>
    <codemirror
        class="code"
        ref="chartOption"
        v-model="code"
        :options='cmOptions'
    />
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'  // 引入控制主题，没有的话主题不起效果

// <!--自动补全-->
import 'codemirror/addon/hint/show-hint.css'
require("codemirror/addon/hint/show-hint.js")
require("codemirror/addon/hint/anyword-hint.js")


// <!--支持代码折叠--
// import "codemirror/addon/fold/foldgutter.css"
//
// require('codemirror/addon/fold/foldcode.js')
// require('codemirror/addon/fold/foldgutter.js')
// require('codemirror/addon/fold/brace-fold.js')
// require('codemirror/addon/fold/comment-fold.js')


require("codemirror/mode/python/python.js")
require("codemirror/mode/javascript/javascript.js")
require("codemirror/mode/css/css.js")
require("codemirror/mode/xml/xml.js")
require("codemirror/mode/vue/vue.js")
require("codemirror/mode/markdown/markdown.js")

require('codemirror/addon/fold/brace-fold.js')
require('codemirror/addon/fold/xml-fold.js')
require('codemirror/addon/fold/indent-fold.js')
require('codemirror/addon/fold/markdown-fold.js')

export default {
    name: "myCodemirror",
    components:{codemirror},
    props:{
        codes: String,
        cmOptions: Object,
    },
    data(){
        return{
            code:''
        }
    },
    watch:{
        codes(val){
            this.code = val
        },

        code(val){
            this.$emit('update:codes', val)
        }
    }

}
</script>

<style scoped>

</style>