import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "./Pages/Dashboard.vue"
import Customers from "./Pages/Customers.vue"
import Orders from "./Pages/Orders.vue"
import Categories from "./Pages/Categories.vue"
import Products from "./Pages/Products.vue"
import Services from "./Pages/Services.vue"
import Listing from "./Pages/Listing.vue"
import Addon from "./Pages/Addon.vue"
import Booking from "./Pages/Booking.vue"
import Chat from "./Pages/Chat.vue"
import Setting from "./Pages/Setting.vue"
import Courses from "./Pages/Courses.vue"
import Events from "./Pages/Events.vue"
import DigitalProducts from "./Pages/Digital-products.vue"
import Payments from "./Pages/Payments.vue"
import Reviews from "./Pages/Reviews.vue"
import Coupon from "./Pages/Coupon.vue"
import EmailMarketing from "./Pages/Email-marketing.vue"
import Notifications from "./Pages/Notifications.vue"
import Subscriptions from "./Pages/Subscriptions.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/', component: Dashboard, name:'Dashboard'},
        {path:'/customers', component: Customers, name:'Customers'},
        {path:'/Orders', component: Orders, name:'Orders'},
        {path:'/categories', component: Categories, name:'Categories'},
        {path:'/products', component: Products, name:'Products'},
        {path:'/services', component: Services, name:'Services'},
        {path:'/listing', component: Listing, name:'Listing'},
        {path:'/addon', component: Addon, name:'Addon'},
        {path:'/booking', component: Booking, name:'Booking'},
        {path:'/chat', component: Chat, name:'Chat'},
        {path:'/setting', component: Setting, name:'Setting'},
        {path:'/courses', component: Courses, name:'Courses'},
        {path:'/events', component: Events, name:'Events'},
        {path:'/digital-products', component: DigitalProducts, name:'DigitalProducts'},
        {path:'/payments', component: Payments, name:'Payments'},
        {path:'/reviews', component: Reviews, name:'Reviews'},
        {path:'/coupon', component: Coupon, name:'Coupon'},
        {path:'/Email-marketing', component: EmailMarketing, name:'EmailMarketing'},
        {path:'/subscriptions', component: Subscriptions, name:'Subscriptions'},
        {path:'/notifications', component: Notifications, name:'Notifications'},
    ]
})

export default router;