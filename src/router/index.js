import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	// mode: 'history',
    routes: [
		{
		  path: '/',
		  redirect: '/dashboard',
		  component: () => import('../components/common/Home.vue'),
		  children: [{
		    path: 'dashboard',
		    name: 'Dashboard',
			    component: () => import( '../components/page/Dashboard.vue'),
				meta: { title: '首页' },
		  }]
		},
        {
            path: '/',
            component: () => import( '../components/common/Home.vue'),
            children: [
				{
				    path: '/image_technology_image_enhancement_index1',
				    component: () => import( '../components/page/image_technology/image_enhancement/index1.vue'),
				    meta: { title: '图片去雾' }
				},
				{
					path: '/image_technology_image_enhancement_index2',
				    component: () => import( '../components/page/image_technology/image_enhancement/index2.vue'),
				    meta: { title: '图像对比度增强' }
				},
				{
					path: '/image_technology_image_enhancement_index3',
				    component: () => import( '../components/page/image_technology/image_enhancement/index3.vue'),
				    meta: { title: '图像无损放大' }
				},
				{
					path: '/image_technology_image_enhancement_index4',
				    component: () => import( '../components/page/image_technology/image_enhancement/index4.vue'),
				    meta: { title: '黑白图像上色' }
				},
				{
					path: '/image_technology_image_enhancement_index5',
				    component: () => import( '../components/page/image_technology/image_enhancement/index5.vue'),
				    meta: { title: '拉升图像恢复' }
				},
				{
					path: '/image_technology_image_enhancement_index6',
				    component: () => import( '../components/page/image_technology/image_enhancement/index6.vue'),
				    meta: { title: '图像风格转换' }
				},
				{
					path: '/image_technology_image_enhancement_index7',
				    component: () => import( '../components/page/image_technology/image_enhancement/index7.vue'),
				    meta: { title: '图像清晰度增强' }
				},
				{
					path: '/image_technology_image_enhancement_index8',
				    component: () => import( '../components/page/image_technology/image_enhancement/index8.vue'),
				    meta: { title: '人像动漫画' }
				},
				{
					path: '/image_technology_image_enhancement_index9',
				    component: () => import( '../components/page/image_technology/image_enhancement/index9.vue'),
				    meta: { title: '图片修复' }
				},
            ]
        },
    ]
});
