// 自定义指令

import { App, Directive, DirectiveBinding } from "vue"

const permissionSet = new Set(['add','update','delete'])
const auth:Directive ={
    mounted:(el:Element,binding:DirectiveBinding<any>)=>{
        const value = binding.value;
        if(!value) return 

        if(!permissionSet.has(value)){
            el.parentNode?.removeChild(el)
        }
    }
}

//  此处使用install 在main.ts 中使用use 引入
const install = (app:App)=>{
    app.directive("auth",auth)
}

export default install;