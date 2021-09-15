/**
 * 保存到localStorage数据操作
 * 员工信息的保存
 */
export const getCaCheSession = (() => {
    return localStorage.getItem('session')
})

export const setCaCheSession = ((token) => {
    return localStorage.setItem('session', token)
})

export const getCaCheName = (() => {
    return localStorage.getItem('name')
})

export const setCaCheName = ((name) => {
    return localStorage.setItem('name', name)
})

export const getCaCheMenuRights = (() => {
    return JSON.parse(localStorage.getItem('menu_rights')) || []
})

export const setCaCheMenuRights = ((menu_rights) => {
    return localStorage.setItem('menu_rights', JSON.stringify(menu_rights))
})


export const getCaCheRoleType = (() => {
    return localStorage.getItem('role_type')
})

export const setCaCheRoleType = ((role_type) => {
    return localStorage.setItem('role_type', role_type)
})


export const removeLoaclStorage = (() => {
    localStorage.clear()
})


/**
 * 员工管理的大厅,机构数据的保存
 */


export const setCaCheOrgList = ((org_list) => {
    return localStorage.setItem('org_list', JSON.stringify(org_list))
})
export const getCaCheOrgList = (() => {
    return JSON.parse(localStorage.getItem('org_list')) || [];
})


export const setCaCheOrgId = ((org_id) => {
    return localStorage.setItem('org_id', org_id)
})
export const getCaCheOrgId = (() => {
    return (localStorage.getItem('org_id') || '').toString();
})


export const setCaCheOrgName = ((org_name) => {
    return localStorage.setItem('org_name', org_name)
})
export const getCaCheOrgName = (() => {
    return (localStorage.getItem('org_name') || '').toString();
})




