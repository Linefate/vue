import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 该方法由initMixin实现
  this._init(options)
}
/**
 * 实现Init函数，
 * 创建组件实例，初始化其数据、属性、事件等
 * 暴露生命周期beforcreact 和 created在这里面开始提供
 */
initMixin(Vue) 
/** 状态相关APi, $data,$props,$set,$delete,$watch */
stateMixin(Vue)
/**事件相关API,$on,$once,$off,$emit */
eventsMixin(Vue)
/**生命周期api，_update,$forceUpdate,$destory 
 * 暴露生命周期：beforeDestroy，destroyed
*/
lifecycleMixin(Vue)
/**渲染api _render $nextTick */
renderMixin(Vue)

export default Vue
