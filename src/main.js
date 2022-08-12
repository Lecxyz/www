import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import router from './assets/js/router.js'
import Vant from 'vant'
import 'vant/lib/index.css'
//引入轮播图插件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
//引入图标
import { Icon } from 'vant';
Vue.use(Icon);
//引入倒计时
import { CountDown } from 'vant';
Vue.use(CountDown);
//引入购物车
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
//引入导航
import { NavBar } from 'vant';
Vue.use(NavBar);
//引入动作面板
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
//引入选框
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
//引入宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
//引入标签栏
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
//引入侧边导航
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
//引入滑动单元格
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
//引入按钮
import { Button } from 'vant';
Vue.use(Button);
//引入单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

// Vue.use(Vant)
new Vue({
  router,
  Vant,
  render: h => h(App),
}).$mount('#app')
