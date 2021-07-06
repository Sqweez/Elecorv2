const navbarModule = {
    state: {
        menuItems: [
            {
                title: "Клиенты и менеджеры",
                icon: "mdi-account-group",
                // url: '/clients'
                content: [
                    {
                        title: "Клиентская база",
                        url: "/clients"
                    },
                    {
                        title: "Менеджеры",
                        url: "/managers"
                    }
                ]
            },
            {
                title: "Экономические показатели",
                icon: "mdi-cash-multiple",
                content: [
                    {
                        title: "Дебиторская задолженность",
                        url: "/receivables"
                    },
                    {
                        title: "Статистические данные",
                        url: "/stats"
                    }
                ]
            },
            {
                title: "Управление",
                icon: "mdi-settings-outline",
                content: [
                    {
                        title: "Обратная связь",
                        url: "/orders"
                    },
                    {
                        title: "Содержание страниц",
                        url: "/page-content",
                        hide: [4]
                    }
                ]
            },
            {
                title: "Сервисное меню",
                icon: "mdi-face-agent",
                content: [
                    {
                        title: "Прайс-лист",
                        url: "/prices",
                        hide: [4, 2]
                    },
                    {
                        title: "Пользователи",
                        url: "/users",
                        hide: [4, 2, 1]
                    },
                    {
                        title: "Поля клиента",
                        url: "/client-fields",
                        hide: [4, 2, 1]
                    },
                    {
                        title: "Рассылка",
                        url: "/mailing",
                        hide: [2, 1]
                    },
                    {
                        title: "Компании",
                        url: "/companies"
                    },
                    {
                        title: "Реф. система",
                        url: "/referral/settings"
                    }
                ]
            },
            {
                title: "Сайт",
                icon: "mdi-web",
                content: [
                    {
                        title: "Промокоды",
                        url: "/promo-codes",
                        hide: [1, 4, 2],
                    },
                    {
                        title: "Сертификаты",
                        url: "/certificates",
                        hide: [1, 4, 2],
                    },
                    {
                        title: "Автоплатежи",
                        url: "/recurrings",
                        hide: [1, 4, 2],
                    }
                ]
            }
        ]
    },
    getters: {
        menuItems(store) {
            return store.menuItems;
        }
    }
};

export default navbarModule;
