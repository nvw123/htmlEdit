import {alignType, displayMode, fontBlod, fontColor, fontItalic} from "./config";
import _ from 'lodash'

/**
 * 通过键值获取列表中的json数据
 * 通过 key 获取列表元素 再获取 type 值
 * */

export const getValueByKey = (attrs, key, type) => {
    return objectMap(attrs, key).get(type) || false;
}
const objectMap = (objs, key) => {
    return new Map(objs.map(obj => [obj[key], obj]));
}

/**
 * 计算浏览器可视化宽高
 * */

export function getClientHeight() {
    return document.documentElement.clientHeight
}

export function getClientWidth()
{
    return document.documentElement.clientWidth
}



/**
 * 计算 两个列表之间的交集、差集、补集、并集
 * */


// 交集
export const computerInterSection = () => {
    let intersection = []
    for (let i = 0, len = arr1.length; i < len; i++) {
        for (let j = 0, length = arr2.length; j < length; j++) {
            if (arr1[i].id === arr2[j].id) {
                intersection.push(arr1[i])
            }
        }
    }
}



// 并集
export const computerUnion = () => {
    let union = [...arr1, ...arr2]
    for (let i = 0, len = arr1.length; i < len; i++) {
        for (let j = 0, length = arr2.length; j < length; j++) {
            if (arr1[i].id === arr2[j].id) {
                union.splice(union.findIndex(item => item.id === arr1[i].id), 1)
            }
        }
    }
}


// 补集

export const computerComplement = () => {
    let complement = [...arr1, ...arr2]
    for (let i = 0, len = arr1.length; i < len; i++) {
        for (let j = 0, length = arr2.length; j < length; j++) {
            if (arr1[i].id === arr2[j].id) {
                complement.splice(complement.findIndex(item => item.id === arr1[i].id), 1)
                complement.splice(complement.findIndex(item => item.id === arr2[j].id), 1)
            }
        }
    }
}


// 差集
export const computerDiff = (arr1, arr2) => {
    let diff = [...arr1]
    for (let i = 0, len = arr1.length; i < len; i++) {
        let flag = false
        for (let j = 0, length = arr2.length; j < length; j++) {
            if (arr1[i].id === arr2[j].id) {
                flag = true
            }
        }
        if (flag) {
            diff.splice(diff.findIndex(item => item.id === arr1[i].id), 1)
        }
    }
    return diff
}


// 返回拼接字符串字段显示内容
export const fieldShows = (formData, arr) =>{
    let filedStr = ''
    arr.forEach(a => {
        let str = ''
        if(a.includes('valign')){
            str = getValueByKey(alignType, 'value', formData[a]).lb
        }else if(a.includes('halign')){
           str = getValueByKey(displayMode, 'value', formData[a]).lb
        }else if(a.includes('color')){
           str = getValueByKey(fontColor, 'value', formData[a]).lb
        }else if(a.includes('italic')){
           str = getValueByKey(fontItalic, 'value', formData[a]).lb
        }else if(a.includes('bold')){
           str = getValueByKey(fontBlod, 'value', formData[a]).lb
        }else if(a.includes('height')){
           str = formData[a] + '(高)'
        }else if(a.includes('width')){
           str = formData[a] + '(宽)'
        }else{
            str = formData[a]
        }
        filedStr += str + ','
    })
    return filedStr
}

//Json中的key值，小写转大写

export const upperJSONKey = (jsonObj) => {
    for (const key in jsonObj) {
        jsonObj["\"" + key.toUpperCase() + "\""] = jsonObj[key];
        delete (jsonObj[key]);
    }
    return jsonObj;
}

//Json中的key值，大写转小写

export const lowerJSONKey = (jsonObj) => {
    for (const key in jsonObj) {
        jsonObj["\"" + key.toLowerCase() + "\""] = jsonObj[key];
        delete (jsonObj[key]);
    }
    return jsonObj;
}


//获取列表中字典的下标
export const getIndex = (Arr, key,value) => {
    let index = 0
    Arr.forEach((item, i) => {
        if(item[key] === value){
            index = i
        }
    })
    return index
}

//将列表1插入列表2的元素指定的位置
export const insetList = (Arr1, Arr2, index) => {

    Arr2.forEach((item, i) => {
        index ++
        Arr1.splice(index, 0, item)

    })
    return Arr1
}

//将列表1移除列表2的元素指定的位置
export const removeList = (Arr1, Arr2, index) => {
    Arr2.forEach((item, i) => {
        index ++
        Arr1.splice(index, 0, item)
    })
    return Arr1
}

//删除列表指定的字典元素
export const delElement = (Arr1, key, value) => {
    let Arr2 = []
    Arr1.forEach((item, i) => {
        if(value !== item[key].toString()){
            Arr2.push(item)
        }
    })
    return Arr2
}

/**
 * 统一设置列表中json的某个键的某个值,
 * Arr1:源数据
 * Arr2:需要修改的列表中json的键，单独列表保存要修改的key值
 * display:'',
 * value:统一修改的值
 * return: Arr1
 * type: 1表示判断Arr2的数据在不在Arr1中，在的话不修改key值
 *       2表示判断Arr2的数据在不在Arr1中，在的话则修改key值
 * */
export const setKeyValue = (Arr1, Arr2, key, value, type=1) => {
    let Arr = _.cloneDeep(Arr1)
    Arr.forEach((item, i) => {
        if(type === 1) {
            if (Arr2.indexOf(item.value) === -1) {
                item[key] = value
            }
        }else{
            if (Arr2.indexOf(item.value) !== -1) {
                item[key] = value
            }
        }
    })
    return Arr
}

/**
 * 拼接列表中json某个键的值
 * return: String
 * */

export const joinValue = (Arr1, key) => {
    let str = ''
    Arr1.forEach((item, i) => {
        str = str + item[key] + ','
    })
    return str
}



