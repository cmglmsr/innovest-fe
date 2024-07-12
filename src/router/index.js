import {createWebHistory, createRouter} from "vue-router";
import Home from "@/Home.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const role = store.state.role || 'GUEST';
//     const allowedPaths = getAllAllowedPaths(role);
//
//     if (allowedPaths.includes(to.path) || to.path === '/forbidden') {
//         next();
//     } else {
//         next('/forbidden');
//     }
// });
//
// function getAllAllowedPaths(role) {
//     const links = navigationLinks[role] || [];
//     const paths = ['/', '/login', '/logout', '/registration', '/accountSetup', '/forgotPassword', '/resetPassword'];
//
//     links.forEach(link => {
//         if (link.link) {
//             paths.push(link.link);
//         }
//         if (link.dropdown) {
//             link.dropdown.forEach(dropdownLink => {
//                 paths.push(dropdownLink.link);
//             });
//         }
//     });
//
//     return paths;
// }

export default router;