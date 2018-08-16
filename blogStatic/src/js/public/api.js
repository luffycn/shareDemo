// /* eslint-disable */
// /**
//  * axios 访问后台封装，拦截处理等
//  * Luffy 2018-7-27
//  */
// import Vue from 'vue'
// import { router, CONST, tools, storages, axios, store } from '@/js/public/port'

// // 路由拦截器
// router.beforeEach((to, from, next) => {
//     next();
// })

// axios.defaults.timeout = 10000
// axios.defaults.responseType = "json"
// axios.defaults.withCredentials = true // 是否允许带cookie这些
// axios.defaults.headers = {
//     "Tech": "VUE", //说明从Vue过去的请求,
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json;charset=UTF-8"
// }

// let removeUser = function () {
//     storages.removeSession("user");
//     storages.removeSession("userName");
//     storages.removeSession("money");
// }

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

// //返回状态判断(响应拦截器)
// axios.interceptors.response.use(
//     res => {
//         //对响应数据处理
//         if (res.data && !res.data.success) {
//             return Promise.reject(res.data.msg === null ? res.data.message : res.data.msg)
//         }
//         return res.data
//     },
//     error => {
//         return Promise.reject(error.response.status)
//     }

// )

// const Axios = (method, url, data, success, showload = true) => {
//     data = filterParams(data);
//     // let params = null;
//     // if (method === 'get') {
//     //     params = data;
//     //     data = null;
//     // } else {
//     //     data = JSON.stringify(data);
//     // }
//     let params = data;
//     axios({
//         method,
//         url,
//         baseURL: CONST.AGENCY,
//         data,
//         params,
//         withCredentials: true,
//         // onUploadProgress: function (progressEvent) {
//         //     // 对原生进度事件的处理
//         //   },
//         transformRequest: [function (data) {
//             if (showload) {
//                 store.commit('showLoading',true);
//             }
//             return data;

//         }],
//         transformResponse: [function (data) {
//             store.commit('showLoading',false);
//             return data;

//         }],
//     }).then(function (response) {
//         success(true, response.data);
//     }).catch(function (error) {
//         if (error.response) {
//             // 请求已发出，但服务器响应的状态码不在 2xx 范围内
//             tools.showMessege(getErrMess(error.response.status));
//             success(false, getErrMess(error.response.status))
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             tools.showMessege(error.message);
//             success(false, error.message);
//         }
//     });
// }



// const filterParams = (params) => { //过滤处理参数
//     for (let index in params) {
//         if (params[index] === null)
//             delete params[index];
//         else {
//             switch (typeof (params[index])) {
//                 case 'string':
//                     params[index] = params[index].trim();
//                     break;
//                 case 'object':
//                     params[index] = filterParams(params[index]);
//                     break;
//                 case 'array':
//                     params[index] = filterParams(params[index]);
//                     break;
//             }
//         }
//     }
//     return params;

// }


// const getErrMess = (status) => {
//     switch (status) {
//         case 600:
//             removeUser()
//             return '登录状态信息过期,请重新登录'
//         case 606:
//             removeUser()
//             return '您的账号，在别处登录，已踢出'
//         case 607:
//             removeUser()
//             return '网站维护'
//         case 400:
//             return '错误的请求'
//         case 407:
//             return '资源未授权'
//         case 403:
//             return '所在地区禁止访问'
//         case 404:
//             return '资源不存在'
//         case 500:
//             return '服务出错了'
//         case 502:
//             return '服务器暂时不可用'
//         case 503:
//             return '服务忙'
//         case 504:
//             return '请求超时'
//         case 701: // 无效的授权
//             return '登录已过期'
//         case 702:
//             return '账号未激活'
//         case 703:
//             return '账号被冻结'
//         case 704:
//             return '账号已停用'
//         case 705:
//             return '账号审核失败'
//         case 706:
//             return '账号被踢出'
//         case 707:
//             return '非法的授权'
//         case 708:
//             return '账号密码错误'
//         case 709:
//             return '登录超时请重新登录'
//     }
// }
const Axios = (method, url, data, success, showload = true) => {
    switch (url) {
        case '/home/getPageData':
            success(getPageData);
            break;
    }

};
export default Axios


const codeStyle = 'user-select:text;word-break:break-all;display:block;font-size:.08rem;line-height:22px;overflow-x:auto;white-space:pre;word-wrap:break-word;border-radius:4px;padding:8px;background:#f3dcb3a8'

const getPageData = {
    carData: [
        {
            img: './static/imges/banner02.jpg', title: 'vuex详解', mes: `
        vuex是什么？
        先引用vuex官网的话：
        Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
        状态管理模式、集中式存储管理 一听就很高大上，蛮吓人的。在我看来 vuex 就是把需要共享的变量全部存储在一个对象里面，然后将这个对象放在顶层组件中供其他组件使用。这么说吧，将vue想作是一个js文件、组件是函数，那么vuex就是一个全局变量，只是这个“全局变量”包含了一些特定的规则而已。
        在vue的组件化开发中，经常会遇到需要将当前组件的状态传递给其他组件。父子组件通信时，我们通常会采用 props + emit 这种方式。但当通信双方不是父子组件甚至压根不存在相关联系，或者一个状态需要共享给多个组件时，就会非常麻烦，数据也会相当难维护，这对我们开发来讲就很不友好。vuex 这个时候就很实用，不过在使用vuex之后也带来了更多的概念和框架，需慎重！
        vuex里面都有些什么内容？
        Talk is cheap,Show me the code. 先来一段代码间隔下这么多的文字：
        <code style=${codeStyle}>
        const store = new Vuex.Store({
            state: {
                name: 'weish',
                age: 22
            },
            getters: {
                personInfo(state) {
                    return 'My name is &yen;{state.name}, I am &yen;{state.age}';
                }
            }
            mutations: {
                SET_AGE(state, age) {
                    commit(age, age);
                }
            },
            actions: {
                nameAsyn({commit}) {
                    setTimeout(() => {
                        commit('SET_AGE', 18);
                    }, 1000);
                }
            },
            modules: {
                a: modulesA
            }
        }
        <code>
        这个就是最基本也是完整的vuex代码；vuex 包含有五个基本的对象：
        
        state：存储状态。也就是变量；
        getters：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
        mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
        actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
        modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。
        vue-cli中使用vuex的方式
        一般来讲，我们都会采用vue-cli来进行实际的开发，在vue-cli中，开发和调用方式稍微不同。
        
        ├── index.html
        ├── main.js
        ├── components
        └── store
            ├── index.js          # 我们组装模块并导出 store 的地方
            ├── state.js          # 跟级别的 state
            ├── getters.js        # 跟级别的 getter
            ├── mutation-types.js # 根级别的mutations名称（官方推荐mutions方法名使用大写）
            ├── mutations.js      # 根级别的 mutation
            ├── actions.js        # 根级别的 action
            └── modules
                ├── m1.js         # 模块1
                └── m2.js         # 模块2
        state.js示例：
        
        const state = {
            name: 'weish',
            age: 22
        };
        
        export default state;
        getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：
        
        export const name = (state) => {
            return state.name;
        }
        
        export const age = (state) => {
            return state.age
        }
        
        export const other = (state) => {
            return 'My name is &yen;{state.name}, I am &yen;{state.age}.';
        }
        mutation-type.js示例（我们会将所有mutations的函数名放在这个文件里）：
        
        export const SET_NAME = 'SET_NAME';
        export const SET_AGE = 'SET_AGE';
        mutations.js示例：
        
        import * as types from './mutation-type.js';
        
        export default {
            [types.SET_NAME](state, name) {
                state.name = name;
            },
            [types.SET_AGE](state, age) {
                state.age = age;
            }
        };
        actions.js示例（异步操作、多个commit时）：
        
        import * as types from './mutation-type.js';
        
        export default {
            nameAsyn({commit}, {age, name}) {
                commit(types.SET_NAME, name);
                commit(types.SET_AGE, age);
            }
        };
        modules--m1.js示例（如果不是很复杂的应用，一般来讲是不会分模块的）：
        
        export default {
            state: {},
            getters: {},
            mutations: {},
            actions: {}
        };
        index.js示例（组装vuex）：
        
        import vue from 'vue';
        import vuex from 'vuex';
        import state from './state.js';
        import * as getters from './getters.js';
        import mutations from './mutations.js';
        import actions from './actions.js';
        import m1 from './modules/m1.js';
        import m2 from './modules/m2.js';
        import createLogger from 'vuex/dist/logger'; // 修改日志
        
        vue.use(vuex);
        
        const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false
        
        export default new vuex.Store({
            state,
            getters,
            mutations,
            actions,
            modules: {
                m1,
                m2
            },
            plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
        });
        最后将store实例挂载到main.js里面的vue上去就行了
        
        import store from './store/index.js';
        
        new Vue({
          el: '#app',
          store,
          render: h => h(App)
        });
        在vue组件中使用时，我们通常会使用mapGetters、mapActions、mapMutations，然后就可以按照vue调用methods和computed的方式去调用这些变量或函数，示例如下：
        
        import {mapGetters, mapMutations, mapActions} from 'vuex';
        
        /* 只写组件中的script部分 */
        export default {
            computed: {
                ...mapGetters([
                    name,
                    age
                ])
            },
            methods: {
                ...mapMutations({
                    setName: 'SET_NAME',
                    setAge: 'SET_AGE'
                }),
                ...mapActions([
                    nameAsyn
                ])
            }
        };
        总结
        以上就是vuex 的相关知识，其实vuex很简单，多用几次就会熟悉了。
        
        ` },
        {
            img: './static/imges/banner01.jpg', title: '移动web开发注意事项', mes: `
        这有一篇总结的很全的文章,就直接拿过来方便以后看吧...
        <a href='www.baidu.com'>https://www.cnblogs.com/baihuaxiu/p/6654496.html</a>` },
        {
            img: './static/imges/toppic02.jpg', title: 'vue-router 基本使用', mes: `
            　  路由，其实就是指向的意思，当我点击页面上的home按钮时，页面中就要显示home的内容，如果点击页面上的about 按钮，页面中就要显示about 的内容。Home按钮  => home 内容， about按钮 => about 内容，也可以说是一种映射. 所以在页面上有两个部分，一个是点击部分，一个是点击之后，显示内容的部分,点击之后，怎么做到正确的对应，比如，我点击home 按钮，页面中怎么就正好能显示home的内容。这就要在js 文件中配置路由。。
                <code style=${codeStyle}>
　　路由中有三个基本的概念 route, routes, router。

　　　　1， route，它是一条路由，由这个英文单词也可以看出来，它是单数， Home按钮  => home内容， 这是一条route,  about按钮 => about 内容， 这是另一条路由。

　　　　2， routes 是一组路由，把上面的每一条路由组合起来，形成一个数组。[{home 按钮 =>home内容 }， { about按钮 => about 内容}]

　　　　3， router 是一个机制，相当于一个管理者，它来管理路由。因为routes 只是定义了一组路由，它放在哪里是静止的，当真正来了请求，怎么办？ 就是当用户点击home 按钮的时候，怎么办？这时router 就起作用了，它到routes 中去查找，去找到对应的 home 内容，所以页面中就显示了 home 内容。

　　　　4，客户端中的路由，实际上就是dom 元素的显示和隐藏。当页面中显示home 内容的时候，about 中的内容全部隐藏，反之也是一样。客户端路由有两种实现方式：基于hash 和基于html5 history api.

　　vue-router中的路由也是基于上面的内容来实现的

　　在vue中实现路由还是相对简单的。因为我们页面中所有内容都是组件化的，我们只要把路径和组件对应起来就可以了，然后在页面中把组件渲染出来。

　　1， 页面实现（html模版中）

　　　　在vue-router中, 我们看到它定义了两个标签<router-link> 和<router-view>来对应点击和显示部分。<router-link> 就是定义页面中点击的部分，<router-view> 定义显示部分，就是点击后，区配的内容显示在什么地方。所以 <router-link> 还有一个非常重要的属性 to，定义点击之后，要到哪里去， 如：<router-link  to="/home">Home</router-link>

　　2， js 中配置路由

　　　　首先要定义route,  一条路由的实现。它是一个对象，由两个部分组成： path和component.  path 指路径，component 指的是组件。如：{path:’/home’, component: home}

　　　　我们这里有两条路由，组成一个routes: 

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
　　最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

const router = new VueRouter({
      routes // routes: routes 的简写
})
　　配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了

const app = new Vue({
  router
}).$mount('#app')
　　执行过程：当用户点击 router-link 标签时，会去寻找它的 to 属性， 它的 to 属性和 js 中配置的路径{ path: '/home', component: Home}  path 一一对应，从而找到了匹配的组件， 最后把组件渲染到 <router-view> 标签所在的地方。所有的这些实现才是基于hash 实现的。

 vue-cli 创建一个项目体验一下, 当然不要忘记安装vue-router

　　1, 在src 目录下新建两个组件，home.vue 和 about.vue


<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>


<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>

　　2, 在 App.vue中 定义<router-link > 和 </router-view>  


<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>   
  </div>
</template>

<script>
export default {
  
}
</script>

　　3,  在 src目录下再新建一个router.js 定义router, 就是定义 路径到 组件的 映射。


import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./home.vue";
import about from "./about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    }
]

var router =  new VueRouter({
    routes
})
export default router;

　　4， 把路由注入到根实例中，启动路由。这里其实还有一种方法，就像vuex  store 注入到根实例中一样，我们也可以把vueRouter 直接注入到根实例中。在main.js中引入路由，注入到根实例中。


import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})

　　5， 这时点击页面上的home 和about 可以看到组件来回切换。但是有一个问题，当首次进入页面的时候，页面中并没有显示任何内容。这是因为首次进入页面时，它的路径是 '/'，我们并没有给这个路径做相应的配置。一般，页面一加载进来都会显示home页面，我们也要把这个路径指向home组件。但是如果我们写{ path: '/', component: Home },vue 会报错，因为两条路径却指向同一个方向。这怎么办？这需要重定向，所谓重定向，就是重新给它指定一个方向，它本来是访问 / 路径，我们重新指向‘/home’, 它就相当于访问 '/home', 相应地, home组件就会显示到页面上。vueRouter中用 redirect 来定义重定向。


const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    // 重定向
    {
        path: '/', 
        redirect: '/home' 
    }
]

　　现在页面正常了，首次进入显示home, 并且点击也可以看到内容的切换。

6， 最后，我们看一下路由是怎么实现的

　　打开浏览器控制台，首先看到 router-link 标签渲染成了 a 标签，to 属性变成了a 标签的 href 属性，这时就明白了点击跳转的意思。router-view 标签渲染成了我们定义的组件，其实它就是一个占位符，它在什么地方，匹配路径的组件就在什么地方，所以 router-link 和router-view 标签一一对应，成对出现。



　　这里还看到，当点击Home和About 来回切换时，a 标签有一个样式类 .router-link-active 也在来回切换， 原来这是当router-link 处于选中状态时，vueRouter 会自动添加这个类，因此我们也可以利用这个类来改变选中时的状态，如选中时，让它变成红色。但当设置 .router-link-active {color: red;}，它并没有生效，这时还要在类前面加一个a, a.router-link-active {color: red;}, 这样就没有问题了。未处于选中状态的router-link， 我们也想给它更改样式，怎么办? 直接给它添加一个 class 就可以了， <router-link class="red">Home</router-link>

动态路由

　　上面我们定义的路由，都是严格匹配的，只有router-link 中的to属性和 js 中一条路由route中 path 一模一样，才能显示相应的组件component. 但有时现实却不是这样的，当我们去访问网站并登录成功后，它会显示 欢迎你，+ 你的名字。不同的用户登录， 只是显示“你的名字” 部分不同，其它部分是一样的。这就表示，它是一个组件，假设是user组件。不同的用户（就是用户的id不同），它都会导航到同一个user  组件中。这样我们在配置路由的时候，就不能写死, 就是路由中的path属性，不能写死，那要怎么设置? 导航到 user 组件，路径中肯定有user, id 不同，那就给路径一个动态部分来匹配不同的id.  在vue-router中，动态部分 以 : 开头，那么路径就变成了 /user/:id, 这条路由就可以这么写：  { path:"/user/:id", component: user }.

　　我们定义一个user组件（自己随便写一个就好了），页面中再添加两个router-link 用于导航， 最后router.js中添加路由配置，来体验一下

　　app.vue 中添加两个router-link：


<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
     <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>
    <router-view></router-view>   
  </div>
</template>

router.js 配置user动态路由：


const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    /*新增user路径，配置了动态的id*/
    {
        path: "/user/:id",
        component: user
    },
    {
        path: '/', 
        redirect: '/home' 
    }
]

　　user组件


<template>
    <div>
        <h1>User</h1>
        <div>我是user组件</div>
    </div>
</template>
<script>
    export default {

    }
</script>

　　这时在页面中点击user123 和user456, 可以看到它们都导航到user组件，配置正确。 　　

　　在动态路由中，怎么获取到动态部分？ 因为在组件中是可以显示不同部分的，就是上面提到的“你的名字”。其实，当整个vue-router 注入到根实例后，在组件的内部，可以通过this.$route 来获取到 router 实例。它有一个params 属性，就是来获得这个动态部分的。它是一个对象，属性名，就是路径中定义的动态部分 id, 属性值就是router-link中to 属性中的动态部分，如123。使用vuex时，组件中想要获取到state 中的状态，是用computed 属性，在这里也是一样，在组件中，定义一个computed 属性dynamicSegment， user 组件修改如下：


<template>
    <div>
        <h1>User</h1>
        <div>我是user组件, 动态部分是{{dynamicSegment}}</div>
    </div>
</template>
<script>
    export default {
        computed: {
            dynamicSegment () {
                return this.$route.params.id
            }
        }
    }
</script>

　　这里还有最后一个问题，就是动态路由在来回切换时，由于它们都是指向同一组件，vue不会销毁再创建这个组件，而是复用这个组件，就是当第一次点击（如：user123）的时候，vue 把对应的组件渲染出来，但在user123, user456点击来回切换的时候，这个组件就不会发生变化了，组件的生命周期不管用了。这时如果想要在组件来回切换的时候做点事情，那么只能在组件内部（user.vue中）利用watch 来监听$route 的变化。把上面的代码用监听$route 实现


<script>
    export default {
        data () {
            return {
                dynamicSegment: ''
            }
        },
        watch: {
            $route (to,from){
                // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                console.log(to);
                console.log(from);
                this.dynamicSegment = to.params.id
            }
        }
    }
</script>

嵌套路由

　　嵌套路由，主要是由我们的页面结构所决定的。当我们进入到home页面的时候，它下面还有分类，如手机系列，平板系列，电脑系列。当我们点击各个分类的时候，它还是需要路由到各个部分，如点击手机，它肯定到对应到手机的部分。

　　在路由的设计上，首先进入到 home ,然后才能进入到phone, tablet, computer.  Phone, tablet, compute 就相当于进入到了home的子元素。所以vue  提供了childrens 属性，它也是一组路由,相当于我们所写的routes。

　　首先，在home页面上定义三个router-link 标签用于导航，然后再定义一个router-view标签，用于渲染对应的组件。router-link 和router-view 标签要一一对应。home.vue 组件修改如下：


<template>
    <div>
        <h1>home</h1>
<!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,所以书写时要把 home 带上 -->
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

router.js 配置路由，修改如下：


const routes = [
    {
        path:"/home",
　　　　　// 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
        component: home,
　　　　 // 子路由
        children: [
            {
                path: "phone",
                component: phone
            },
            {
                path: "tablet",
                component: tablet
            },
            {
                path: "computer",
                component: computer
            }
        ]
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/user/:id",
        component: user
    },
    {
        path: '/', 
        redirect: '/home' 
    }
]

　　这时当我们点击home 时，它下面出现手机等字样，但没有任何对应的组件进行显示，这通常不是我们想要的。要想点击home时，要想渲染相对应的子组件，那还需要配置一条路由。当进入到home 时，它在children中对应的路由path 是空 ‘’，完整的childrens 如下：


children: [
    {
        path: "phone",
        component: phone
    },
    {
        path: "tablet",
        component: tablet
    },
    {
        path: "computer",
        component: computer
    },
    // 当进入到home时，下面的组件显示
    {
        path: "",
        component: phone
    }
]

命名路由

　　命名路由，很简单，因为根据名字就可以知道，这个路由有一个名字，那就直接给这个路由加一个name 属性，就可以了。 给user 路由加一个name 属性：

{
        path: "/user/:id",
        name: "user",
        component: user
}
　　命名路由的使用, 在router-link 中to 属性就可以使用对象了, 

 <router-link to="/user/123">User123</router-link> // 和下面等价 
 <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>   // 当使用对象作为路由的时候，to前面要加一个冒号,表示绑定
　　编程式导航：这主要应用到按钮点击上。当点击按钮的时候，跳转另一个组件, 这只能用代码，调用rourter.push() 方法。 当们把router 注入到根实例中后，组件中通过 this.$router 可以获取到router, 所以在组件中使用

this.$router.push("home"), 就可以跳转到home界面
                <code>
            ` }
    ],
    spcData: { img: ['./static/imges/toppic01.jpg', './static/imges/b05.jpg'], mes: ['flex弹性盒子布局', '常用正则表达式'], router: [] },
    listData: [
        {
            title: 'Node.js 搭建使用流程', imgType: 'smImg', imgUrl: './static/imges/v2.jpg',
            mes: `作为一个从业三年左右的，并且从事过半年左右JAVA开发工作的前端，对于后台，尤其是对以js语言进行开发的nodejs，那是比较有兴趣的，所以再次记录一下原生写法(不用express)方便以后复习！
            今天主要记录一下，很久以前用nodejs制作一个简单的服务监听程序的一些过程！
            <code style=${codeStyle}>var http = require('http');
            http.createServer(function (req, res) {
              res.writeHead(200, {'Content-Type': 'text/plain'});
              res.end('Hello World');
            }).listen(1337, '127.0.0.1');
            console.log('Server running at http://127.0.0.1:1337/');
            </code>
            大家都知道，通过nodejs可以对前台请求进行监听，这里就放一个官网的hello world例子吧：
            以上代码相信了解过node的童鞋应该都会比较熟悉！
            那么node既然可以监听请求，那么是不是就可以根据前台的不同请求返回不同的文件或内容？这不就是一个简单的服务器了么！抱着这样的想法，简单实验了一下，我们都知道，服务器可以根据请求的文件不同，会使用相应mine类型的！比如../index.css使用的mine类型就是text/css！那么，我们是不是应该有个常用mine类型的一个简单配置？这里，做了个简单的mine配置文件mine.js，用json来存放一下常用的格式：
            <code style=${codeStyle}>
            exports.types = {
                "css": "text/css",
                "gif": "image/gif",
                "html": "text/html",
                "ico": "image/x-icon",
                "jpeg": "image/jpeg",
                "jpg": "image/jpeg",
                "js": "text/javascript",
                "json": "application/json",
                "pdf": "application/pdf",
                "png": "image/png",
                "svg": "image/svg+xml",
                "swf": "application/x-shockwave-flash",
                "tiff": "image/tiff",
                "txt": "text/plain",
                "wav": "audio/x-wav",
                "wma": "audio/x-ms-wma",
                "wmv": "video/x-ms-wmv",
                "xml": "text/xml"
            };
            </code>
            当然，除了这些以外还有很多其他格式，这里就不一一举例了！
            好了，有了mine格式对应的文件配置文件，接下来就简单了，首先得根据官网例子搭建一个监听程序，然后在监听程序中添加一下简单的www.baidu.com/这个样的链接默认打开文件的处理，以及相对链接的补全等！当然还得做一下简单的错误处理，如404，500等！具体看代码：
            <code style=${codeStyle}>
            /*
            *搭建http服务器，监听http请求
            */
            var http = require("http"),
            fs = require('fs'),
            path = require('path'),
            mine = require('./mine').types;
            url = require('url');
            //定义简单的工具
            //获取当前时间
            var date = function(ms) {
                var date = ms ? new Date(ms) : new Date(),
                mon = date.getMonth() >= 10 + 1 ? '-' : '-0',
                d = date.getDate() >= 10 ? '-' : '-0',
                hour = date.getHours() >= 10 ? ' ' : ' 0',
                min = date.getMinutes() >= 10 ? ':' : ':0',
                sec = date.getSeconds() >= 10 ? ':' : ':0';
                return date.getFullYear() + mon + (date.getMonth() + 1) + d + date.getDate() + hour + date.getHours() + min + date.getMinutes() + sec + date.getSeconds();
            },
            //定义输出log日志方法，带上时间，方便调试
            DebugLog = function(mes) {
                var now = date();
                console.log(now + " " + mes);
            };
            //服务监听
            exports.server = function() {
                http.createServer(function(req, res) {
                    var pathname = url.parse(req.url).pathname,//获取url中的文件名
                    pathname = (pathname !== "/" && pathname) ? pathname : "/index.html";//处理链接以'/'结尾的情况
                    var realPath = path.join("../", path.normalize(pathname.replace(/\.\./g, ""))),//将链接转换成物理路径
                    ext = path.extname(realPath);
                    ext = ext ? ext.slice(1) : 'unknown';//获取文件扩展名
                    //查找文件
                    fs.exists(realPath, function (exists) {
                        if (!exists) {//处理404
                            res.writeHead(404, {
                                'Content-Type': 'text/plain'
                            });
            
                            res.write("This request URL " + pathname + " was not found on this server.");
                            res.end();
                        } else {//读取文件
                            fs.readFile(realPath, "binary", function (err, file) {
                                if (err) {//程序出错报500错误
                                    res.writeHead(500, {
                                        'Content-Type': 'text/plain'
                                    });
                                    res.end(err);
                                } else {//正常返回文件
                                    var contentType = mine[ext] || "text/plain";//根据mine.js中的配置设置对应的contentType
                                    res.writeHead(200, {
                                        'Content-Type': contentType
                                    });
                                    res.write(file, "binary");
                                    res.end();
                                }
                            });     
                        }
                    });
                }).listen(8888, 'localhost');
                tool.DebugLog("http服务启动，开始监听127.0.0.1:8888的http请求！");
            }
            </code>        
            ok，代码到这里基本就结束了，当然这只是最简单的功能，大家可以自己去丰富！
            `,

            user: 'Luffy', textType: '学无止境', creatTime: '2017-6-13', reader: 3441, great: 9999
        },
        {
            title: '个人常用', imgType: 'bigImg', imgUrl: './static/imges/t01.jpg',
            mes: `
            <code style=${codeStyle}>
            初始化样式
                body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0;user-select: none;}    
                html,body{font-size: 100px;;width: 100%;height: 100%;overflow: hidden;width: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}    
                /* html,body{font-family: 'HansHandItalic';font-size: 100px;;width: 100%;height: 100%;overflow: hidden;}     */
                a{text-decoration:none}    
                em{font-style:normal}    
                li{list-style:none}    
                img{border:0;}    
                table{border-collapse:collapse;border-spacing:0}    
                p{word-wrap:break-word}   
                iframe{border: none}
            
            配置本地接口路由代理node
                proxyTable: {
                    '/node': {
                    target: 'http://192.168.0.69:4000',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/node': ''
                    }
                },
                },

                // Various Dev Server settings
                host: '192.168.0.69', // can be overwritten by process.env.HOST
                

                                
            VUE配置全局样式
                build/utils.js下面配置
                scss: generateLoaders('sass').concat(
                    {
                        loader: 'sass-resources-loader',
                        options: {
                        resources: path.resolve(__dirname, '../themes/gy.scss')
                        }
                    }
                    ),

                sass-resources-loader 记得install 依赖





                2201817617   ★QQ


                            

            wnidow.addEventListener('touchmove', func, { passive: false})   移动端阻止默认事件


            通过设置css属性 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);取消掉手机端webkit浏览器 点击按钮或超链接之类的 默认灰色背景色 
            区域性 overflow: scroll | auto 滚动时使用原生效果：-webkit-overflow-scrolling: touch （ios8+，Android4.0+）
            



            pointer-events:none  /  auto      事件冒泡点击
            opacity:0     元素透明度

            radial-gradient(circle, #666 10%, transparent 10.01%)
            circle = 指定圆形的径向渐变


            transition:width 3s    过渡效果


            transform: scale(10, 10); 放大   rotate(360deg);旋转2d


            :active   点击激活后触发CSS

            transparent 100%  颜色透明


            animation: always-movie infinite  linear   动画名称，几秒，永动，匀速运动

            let a=["a","b","c","d","e","f","g"]
                a.forEach((listVal)=>{
                    console.log(listVal);
                })


            display:flex   布局属性 https://www.cnblogs.com/qingchunshiguang/p/8011103.html


            http://www.php.cn/course/600.html    ES6


            <style scoped>  局部范围样式

            display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    text-overflow: ellipsis;
                    overflow: hidden;                指定行数文本溢出处理


            https://www.cnblogs.com/qingchunshiguang/p/8011103.html   布局属性
            https://blog.csdn.net/ermaner666/article/details/78995234    vue脚手架正确流程
            https://www.cnblogs.com/SamWeb/p/6610733.html              vue路由详解
            https://segmentfault.com/a/1190000012015742                     vuex详解
            https://blog.csdn.net/u012860063/article/details/68063919    vue全家桶学习资源
            https://www.jb51.net/article/113003.htm                               vux样式库组件配置安装
            https://www.cnblogs.com/baihuaxiu/p/6654496.html            移动web开放注意事项
            https://www.jb51.net/tools/zhengze.html                              正则表达式
            http://bbs.boniu6668.com/thread-35195-1-1.html                 常用正则表达式
            http://www.17sucai.com/pins/tag/3886.html                         花了5块钱的！！！
            https://www.cnblogs.com/yuanke/archive/2016/02/26/5221853.html     formitable中文API
            https://blog.csdn.net/hjh15827475896/article/details/78207066  VUE资源集合


            https://tinypng.com/           图片压缩网站
            .

            https://www.bilibili.com/video/av19641847/?p=2                   node

            <code>
            `,
            user: 'Luffy', textType: '享受生活', creatTime: '2018-7-13', reader: 8888, great: 9999
        },
        {
            title: '前端SEO技巧', imgType: 'noImg', imgUrl: '',
            mes: `
            前几天在慕课网上学习了“SEO在网页制作中的应用”，觉得挺好、挺有用的，今天，特此做了一个小小的笔记，也算是对学习过后的一个总结。
            <code style=${codeStyle}>
一、搜索引擎工作原理
　　当我们在输入框中输入关键词，点击搜索或查询时，然后得到结果。深究其背后的故事，搜索引擎做了很多事情。

　　在搜索引擎网站，比如百度，在其后台有一个非常庞大的数据库，里面存储了海量的关键词，而每个关键词又对应着很多网址，这些网址是百度程序从茫茫的互联网上一点一点下载收集而来的，这些程序称之为“搜索引擎蜘蛛”或“网络爬虫”。这些勤劳的“蜘蛛”每天在互联网上爬行，从一个链接到另一个链接，下载其中的内容，进行分析提炼，找到其中的关键词，如果“蜘蛛”认为关键词在数据库中没有而对用户是有用的便存入数据库。反之，如果“蜘蛛”认为是垃圾信息或重复信息，就舍弃不要，继续爬行，寻找最新的、有用的信息保存起来提供用户搜索。当用户搜索时，就能检索出与关键字相关的网址显示给访客。

　　一个关键词对用多个网址，因此就出现了排序的问题，相应的当与关键词最吻合的网址就会排在前面了。在“蜘蛛”抓取网页内容，提炼关键词的这个过程中，就存在一个问题：“蜘蛛”能否看懂。如果网站内容是flash和js，那么它是看不懂的，会犯迷糊，即使关键字再贴切也没用。相应的，如果网站内容是它的语言，那么它便能看懂，它的语言即SEO。

 

二、SEO简介
　　全称：Search English Optimization，搜索引擎优化。自从有了搜索引擎，SEO便诞生了。

　　存在的意义：为了提升网页在搜索引擎自然搜索结果中的收录数量以及排序位置而做的优化行为。简言之，就是希望百度等搜索引擎能多多我们收录精心制作后的网站，并且在别人访问时网站能排在前面。

　　分类：白帽SEO和黑帽SEO。白帽SEO，起到了改良和规范网站设计的作用，使网站对搜索引擎和用户更加友好，并且网站也能从搜索引擎中获取合理的流量，这是搜索引擎鼓励和支持的。黑帽SEO，利用和放大搜索引擎政策缺陷来获取更多用户的访问量，这类行为大多是欺骗搜索引擎，一般搜索引擎公司是不支持与鼓励的。本文针对白帽SEO，那么白帽SEO能做什么呢？

　　1. 对网站的标题、关键字、描述精心设置，反映网站的定位，让搜索引擎明白网站是做什么的；

　　2. 网站内容优化：内容与关键字的对应，增加关键字的密度；

　　3. 在网站上合理设置Robot.txt文件；

　　4. 生成针对搜索引擎友好的网站地图；

　　5. 增加外部链接，到各个网站上宣传；

三、前端SEO
　　通过网站的结构布局设计和网页代码优化，使前端页面既能让浏览器用户能够看懂，也能让“蜘蛛”看懂。

　　(1)网站结构布局优化：尽量简单、开门见山，提倡扁平化结构。
　　一般而言，建立的网站结构层次越少，越容易被“蜘蛛”抓取，也就容易被收录。一般中小型网站目录结构超过三级，“蜘蛛”便不愿意往下爬，“万一天黑迷路了怎么办”。并且根据相关调查：访客如果经过跳转3次还没找到需要的信息，很可能离开。因此，三层目录结构也是体验的需要。为此我们需要做到：

　　1. 控制首页链接数量

　　网站首页是权重最高的地方，如果首页链接太少，没有“桥”，“蜘蛛”不能继续往下爬到内页，直接影响网站收录数量。但是首页链接也不能太多，一旦太多，没有实质性的链接，很容易影响用户体验，也会降低网站首页的权重，收录效果也不好。

　　因此对于中小型企业网站，建议首页链接在100个以内，链接的性质可以包含页面导航、底部导航、锚文字链接等等，注意链接要建立在用户的良好体验和引导用户获取信息的基础之上。

　　2.扁平化的目录层次，尽量让“蜘蛛”只要跳转3次，就能到达网站内的任何一个内页。扁平化的目录结构，比如：“植物”--> "水果" --> "苹果"、“桔子”、“香蕉”，通过3级就能找到香蕉了。

　　3.导航优化

　　导航应该尽量采用文字方式，也可以搭配图片导航，但是图片代码一定要进行优化，<img>标签必须添加“alt”和“title”属性，告诉搜索引擎导航的定位，做到即使图片未能正常显示时，用户也能看到提示文字。

　　其次，在每一个网页上应该加上面包屑导航，好处：从用户体验方面来说，可以让用户了解当前所处的位置以及当前页面在整个网站中的位置，帮助用户很快了解网站组织形式，从而形成更好的位置感，同时提供了返回各个页面的接口，方便用户操作；对“蜘蛛”而言，能够清楚的了解网站结构，同时还增加了大量的内部链接，方便抓取，降低跳出率。

　　4. 网站的结构布局--不可忽略的细节

　　页面头部：logo及主导航，以及用户的信息。

　　页面主体：左边正文，包括面包屑导航及正文；右边放热门文章及相关文章，好处：留住访客，让访客多停留，对“蜘蛛”而言，这些文章属于相关链接，增强了页面相关性，也能增强页面的权重。

　　页面底部：版权信息和友情链接。

　　特别注意：分页导航写法，推荐写法：“首页 1 2 3 4 5 6 7 8 9 下拉框”，这样“蜘蛛”能够根据相应页码直接跳转，下拉框直接选择页面跳转。而下面的写法是不推荐的，“首页 下一页 尾页”，特别是当分页数量特别多时，“蜘蛛”需要经过很多次往下爬，才能抓取，会很累、会容易放弃。

　　5.控制页面的大小，减少http请求，提高网站的加载速度。

　　一个页面最好不要超过100k，太大，页面加载速度慢。当速度很慢时，用户体验不好，留不住访客，并且一旦超时，“蜘蛛”也会离开。

　　(2)网页代码优化
　　1.<title>标题：只强调重点即可，尽量把重要的关键词放在前面，关键词不要重复出现，尽量做到每个页面的<title>标题中不要设置相同的内容。

　　2.<meta keywords>标签：关键词，列举出几个页面的重要关键字即可，切记过分堆砌。

 

　　3.<meta description>标签：网页描述，需要高度概括网页内容，切记不能太长，过分堆砌关键词，每个页面也要有所不同。

 

　　4.<body>中的标签：尽量让代码语义化，在适当的位置使用适当的标签，用正确的标签做正确的事。让阅读源码者和“蜘蛛”都一目了然。比如：h1-h6 是用于标题类的，<nav>标签是用来设置页面主导航的等。

 

　　5.<a>标签：页内链接，要加 “title” 属性加以说明，让访客和 “蜘蛛” 知道。而外部链接，链接到其他网站的，则需要加上 el="nofollow" 属性, 告诉 “蜘蛛” 不要爬，因为一旦“蜘蛛”爬了外部链接之后，就不会再回来了。

 

　　6.正文标题要用<h1>标签：“蜘蛛” 认为它最重要，若不喜欢<h1>的默认样式可以通过CSS设置。尽量做到正文标题用<h1>标签，副标题用<h2>标签, 而其它地方不应该随便乱用 h 标题标签。

 

　　7.<br>标签：只用于文本内容的换行，比如:

    <p>
    　　 第一行文字内容<br/>
        第二行文字内容<br/>
        第三行文字内容
    </p>
　　8.表格应该使用<caption>表格标题标签

 　  9.<img>应使用 "alt" 属性加以说明

　　10.<strong>、<em>标签 : 需要强调时使用。<strong>标签在搜索引擎中能够得到高度的重视，它能突出关键词，表现重要的内容，<em>标签强调效果仅次于<strong>标签。

　　　  <b>、<i>标签: 只是用于显示效果时使用，在SEO中不会起任何效果。

　　10、文本缩进不要使用特殊符号 &nbsp; 应当使用CSS进行设置。版权符号不要使用特殊符号 &copy; 可以直接使用输入法，拼“banquan”，选择序号5就能打出版权符号©。

　　12、巧妙利用CSS布局，将重要内容的HTML代码放在最前面，最前面的内容被认为是最重要的，优先让“蜘蛛”读取，进行内容关键词抓取。

　　13.重要内容不要用JS输出，因为“蜘蛛”不认识

　　14.尽量少使用iframe框架,因为“蜘蛛”一般不会读取其中的内容

　　15.谨慎使用 display：none ：对于不想显示的文字内容，应当设置z-index或设置到浏览器显示器之外。因为搜索引擎会过滤掉display:none其中的内容。

　　16. 不断精简代码

　　17.js代码如果是操作DOM操作，应尽量放在body结束标签之前，html代码之后。
</code>
            `,
            user: 'Luffy', textType: '学无止境', creatTime: '2016-11-13', reader: 8888, great: 9999
        },
        {
            title: 'node环境mongoDB基础使用', imgType: 'smImg', imgUrl: './static/imges/zd02.jpg',
            mes: '、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦来判断，输出。思路已打开，样式调用就可以多样化啦',
            user: 'Luffy', textType: '学无止境', creatTime: '2017-4-13', reader: 2367, great: 9999
        },

        {
            title: 'Noade.js 搭建使用流程', imgType: 'smImg', imgUrl: './static/imges/v2.jpg',
            mes: '如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦来判断，输出。思路已打开，样式调用就可以多样化啦',
            user: 'Luffy', textType: '学无止境', creatTime: '2017-6-13', reader: 3441, great: 9999
        },
        {
            title: 'Just do it', imgType: 'bigImg', imgUrl: './static/imges/t01.jpg',
            mes: '增加标签模板，用if，else if 来判断，输出签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦来判断，输出。思路已打开，样式调用就可以多样化啦',
            user: 'Luffy', textType: '享受生活', creatTime: '2018-7-13', reader: 8888, great: 9999
        },
        {
            title: 'Flex弹性盒子', imgType: 'noImg', imgUrl: '',
            mes: '啊啊啊f，else if 来判断，输出。思路已打开，样式调用就可以多样化啦来判断，输出。思路已打开，样式调用就可以多样化啦',
            user: 'Luffy', textType: '学无止境', creatTime: '2016-11-13', reader: 8888, great: 9999
        },
        {
            title: 'node环境mongoDB基础使用', imgType: 'smImg', imgUrl: './static/imges/zd02.jpg',
            mes: '、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦来判断，输出。思路已打开，样式调用就可以多样化啦',
            user: 'Luffy', textType: '学无止境', creatTime: '2017-4-13', reader: 2367, great: 9999
        }
    ]
}
