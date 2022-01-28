import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
export const routes=[

{name:'Home',link:"/",options:[],activeTab:0},
{name:'Services',link:"/services",options:[
    {name:'Custom Software Development','link':'/customsoftware'},{name:'iOS/Android App Development',link:'/mobileapps'}
    ,{name:'Website Development',link:'/websites'}
],activeTab:1},
{name:'The Revolution',link:"/revolution",options:[
{name:'Vision',link:"/revolution"},
{name:'Technology',link:"/revolution"},
{name:'Process',link:"/revolution"},


],activeTab:2},
{name:'About Us',link:"/about",options:[
{name:'History',link:"/about"},
{name:'Team',link:"/about"},
    
],activeTab:3},
{name:'Contact Us',link:"/contact",options:[],activeTab:4},
{name:'Free Estimate',link:"/estimate",options:false,activeTab:5},

]
export const servicesitems=[{link:"/mobileapps",url:"/mobileapps",title:"iOS/Android App Development",subtitle:"Extend Functionality. Extend Access. Increase Engagement.",detailes:`
Integrate your web experience or create a standalone app
with either mobile platform.`,icon:mobileAppsIcon,selectedIndex:2},
{link:"/customsoftware",url:"/customsoftware",title:"Custom Software Development",subtitle:"Save Energy. Save Time. Save Money.",detailes:`
Complete digital solutions, from investigation to celebration.`,icon:customSoftwareIcon,selectedIndex:1},

{link:"/websites",url:"/websites",title:"Website Development",subtitle:"Reach More. Discover More. Sell More.",detailes:`
Optimized for Search Engines, built for speed.`,icon:websitesIcon,selectedIndex:3}]

export const menuOptions=[]