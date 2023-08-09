<script setup>

  import Customer from "./Icons/Customer.vue";
  import Product from "./Icons/Product.vue";
  import Cart from "./Icons/Cart.vue";
  import Services from "./Icons/Services.vue";
  import Subscription from "./Icons/Subscription.vue";
  import List from "./Icons/List.vue";
  import Booking from "./Icons/Booking.vue";
  import Course from "./Icons/Course.vue";
  import Payment from "./Icons/Payment.vue";
  import Event from "./Icons/Event.vue";
  import Review from "./Icons/Review.vue";
  import Coupon from "./Icons/Coupon.vue";
  import Email from "./Icons/Email.vue";
  import Addon from "./Icons/Addon.vue";
  import Notify from "./Icons/Notify.vue";
  import Chat from "./Icons/Chat.vue";
  import Setting from "./Icons/Setting.vue";
    import DashboardIcon from "./Icons/DashboardIcon.vue";
    import DigitalProducts from "./Icons/DigitalProducts.vue";
</script>

<template>
    <section class="flex bg-gray-100  h-screen">
        <div class="mt-[3rem] ">
            <span class="relative">
                <div class=" ml-[2.5rem] mb-[2rem]">
                    <img class="w-[8rem]" src="../assets/images/logo.svg" alt="Webtusk logo">
                </div>
            </span>
            <ul class="">
                <li class=" hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                 
                            <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/">
                               <div class="px-[3rem] flex gap-2">
                        <span class="">
                            <dashboard-icon/>
                        </span>
                        <span>
                            Dashboard
                        </span>
                    </div></router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                       
                       <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/customers">
                        <div class="px-[3rem] flex gap-2">
                        <span class="">
                            <Customer/>
                        </span>
                        <span>
                            Customers
                        </span>
                    </div></router-link>
                  
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                   
                     <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/orders">
                            <div class="px-[3rem] flex gap-2">
                        <span >
                            <Cart/>
                        </span>
                        <span>
                            Orders
                        </span>
                    </div>
                    </router-link>
                   
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                       
                         <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/products">
                         <div class="px-[3rem] flex gap-2">
                        <span >
                            <Product/>
                        </span>
                        <span>
                            Products
                        </span>
                    </div>
                    </router-link>
                
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                   
                         <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/services">
                           <div class="px-[3rem] flex gap-2">
                        <span >
                            <Services/>
                        </span>
                        <span>
                            Services
                        </span>
                    </div></router-link>
              
                </li>
                    <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                           
                       <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/listing">
                       <div class="px-[3rem] flex gap-2">
                        <span >
                            <List/>
                        </span>
                        <span>
                            Listing
                        </span>
                    </div>
                    </router-link>
                    
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                                 
                     <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/booking">
                     <div class="px-[3rem] flex gap-2">
                        <span >
                            <Booking/>
                        </span>
                        <span>
                            Booking
                        </span>
                    </div>
                    </router-link>
                 
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                             
                        <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/courses">
                        <div class="px-[3rem] flex gap-2">
                        <span >
                            <Course/>
                        </span>
                        <span>
                            Courses
                        </span>
                    </div>
                    </router-link>
              
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/events">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Event/>
                        </span>
                        <span>
                            Events
                        </span>
                    </div>
                    </router-link>
                    
                </li>
                
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                         
                  <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/subscriptions">
                  <div class="px-[3rem] flex gap-2">
                        <span >
                            <Subscription/>
                        </span>
                        <span>
                            Subscriptions
                        </span>
                    </div>
                    </router-link>
                   
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    
                  <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/digital-products">
                  <div class="px-[3rem] flex gap-2">
                        <span >
                            <digital-products/>
                        </span>
                        <span>
                            Digital Products
                        </span>
                    </div>
                  </router-link>
                 
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/payments">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Payment/>
                        </span>
                        <span>
                            Payments
                        </span>
                    </div>
                    </router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/reviews">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Review/>
                        </span>
                        <span>
                            Reviews
                        </span>
                    </div></router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/coupon">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Coupon/>
                        </span>
                        <span>
                            Coupons
                        </span>
                    </div>
                    </router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/email-marketing">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Email/>
                        </span>
                        <span>
                            Email Marketing
                        </span>
                    </div></router-link>
                </li>
            
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                     
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/addon">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Addon/>
                        </span>
                        <span>
                            Addon
                        </span>
                    </div>
                    </router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/chat">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Chat/>
                        </span>
                        <span>
                            Chat
                        </span>
                    </div>
                    </router-link>
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                       
                         <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/notifications">
                         <div class="px-[3rem] flex gap-2">
                        <span >
                            <Notify/>
                        </span>
                        <span>
                            Notifications
                        </span>
                    </div>
                    </router-link>
                
                </li>
                <li class="hover:bg-slate-300 py-[0.1rem] flex rounded-sm">
                    <router-link active-class="bg-white rounded-lg" class="py-[0.3rem] hover:text-black text-[0.9rem] font-montserrat" to="/setting">
                    <div class="px-[3rem] flex gap-2">
                        <span >
                            <Setting/>
                        </span>
                        <span>
                            Setting
                        </span>
                    </div>
                    </router-link> 
                </li>
            </ul>
        </div>
        <!-- <div class="border-r-2 border-gray-400 py-[4rem] h-screen"></div> -->
    </section>
</template>