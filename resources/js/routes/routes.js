const routes = [
    {
        path: '/',
        redirect: '/clients'
    },
    {
        path: '/clients',
        name: 'clients.index',
        component: () => import('../views/ClientsAndManagers/Clients/Clients')
    },
    {
        path: '/clients/:userId',
        name: 'clients.show',
        component: () => import('../views/ClientsAndManagers/Client/Client')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'login',
            login: true
        },
        component: () => import('../views/Login/Login')
    },
    {
        path: '/receivables',
        name: 'Receivables',
        component: () => import('../views/Economy/Receivables/Receivables')
    },
    {
        path: '/stats',
        name: 'Stats',
        component: () => import('../views/Economy/Stats/Stats')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/Control/Orders/Orders')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/Control/News/News')
    },
    {
        path: '/page-content',
        name: 'PageContent',
        component: () => import('../views/Control/PageContent/PageContent'),
        meta: {
            denied: [4]
        }
    },
    {
        path: '/users',
        name: 'users.index',
        component: () => import('../views/Services/Users/Users'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/client-fields',
        name: 'ClientFields',
        component: () => import('../views/Services/ClientFields/ClientFields'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/mailing',
        name: 'Mailing',
        component: () => import('../views/Services/Mailing/Mailing'),
        meta: {
            denied: [2, 1]
        }
    },
    {
        path: '/prices',
        name: 'Prices',
        component: () => import('../views/Services/Prices/Prices'),
        meta: {
            denied: [4, 2]
        }
    },
    {
        path: '/companies',
        name: 'Companies',
        component: () => import('../views/Services/Companies/Companies')
    },
    {
        path: '/referral/settings',
        name: 'Referral',
        component: () =>
            import('../views/Services/ReferralSettings/ReferralSettings')
    },
    {
        path: '/promo-codes',
        name: 'PromoCodes',
        component: () => import('../views/Site/PromoCodes/PromoCodes'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/promo-codes/:packageid/:id',
        name: 'PromoCodes.showPromoCode',
        component: () => import('../views/Site/PromoCode/PromoCode'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/promo-codes/:packageid',
        name: 'PromoCodes.showPromoCodePackage',
        component: () => import('../views/Site/PromoCode/PromoCodePackage'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/certificates',
        name: 'Certificates',
        component: () => import('../views/Site/Certificates/Certificates'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/certificates/:sourceid/:id',
        name: 'Certificates.showCertificate',
        component: () => import('../views/Site/Certificate/Certificate'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/certificates/:sourceid',
        name: 'Certificates.showSource',
        component: () => import('../views/Site/Certificate/Source'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/recurrings',
        name: 'Recurrings',
        component: () => import('../views/Site/Recurrings/Recurrings'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/managers',
        name: 'Managers',
        component: () => import('../views/ClientsAndManagers/Managers'),
        meta: {
            denied: [4, 2, 1]
        }
    },
    {
        path: '/managers/:id',
        name: 'Managers.show',
        component: () => import('../views/ClientsAndManagers/Manager'),
        meta: {
            denied: [4, 2, 1]
        }
    }
]

export default routes
