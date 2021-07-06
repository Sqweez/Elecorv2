const ACTIONS = {
    INIT: 'init',

    GET_CLIENTS: 'getClients',
    GET_CLIENT_TYPES: 'getClientTypes',
    CREATE_CLIENT: 'createClient',
    GET_CLIENT: 'getClient',
    EDIT_CLIENT: 'editClient',
    DELETE_CLIENT: 'deleteClient',
    CLEAR_CLIENT: 'clearClient',

    GET_SERVICES: 'getServices',
    CREATE_SERVICE: 'createService',
    DELETE_SERVICE: 'deleteService',
    EDIT_SERVICE: 'editService',

    GET_CONNECTIONS: 'getConnections',
    ADD_CONNECTION: 'addConnection',
    DELETE_CONNECTION: 'deleteConnection',

    DISCONNECT: 'disconnect',
    CONNECT: 'connect',

    ADD_BALANCE: 'addBalance',

    SALE: 'sale',

    GET_ORDERS: 'getOrders',
    CHANGE_ORDER_STATUS: 'changeOrderStatus',

    GET_FEEDBACK: 'getFeedback',
    CHANGE_FEEDBACK_STATUS: 'changeFeedbackStatus',

    GET_STOCKS: 'getStocks',
    CREATE_STOCK: 'createStock',
    DELETE_STOCK: 'deleteStock',
    EDIT_STOCK: 'editStock',
    CHANGE_STOCK_STATUS: 'changeStockStatus',

    EDIT_CONNECTION: 'editConnection',

    GET_MOBILE_SERVICES: 'getMobileServices',
    EDIT_MOBILE_SERVICE: 'editMobileService',
    CREATE_MOBILE_SERVICE: 'createMobileService',
    DELETE_MOBILE_SERVICE: 'deleteMobileService',

    GET_PROMO_CODES: 'getPromoCodes',
    GET_PROMO_CODE: 'getPromoCode',
    CREATE_PROMO_CODE: 'createPromoCode',
    EDIT_PROMO_CODE: 'editPromoCode',
    DELETE_PROMO_CODE: 'deletePromoCode',

    GET_PROMO_CODES_PACKAGES: 'getPromoCodesPackages',
    GET_PROMO_CODE_PACKAGE: 'getPromoCodePackage',
    CREATE_PROMO_CODE_PACKAGE: 'createPromoCodePackage',
    EDIT_PROMO_CODE_PACKAGE: 'editPromoCodePackage',
    DELETE_PROMO_CODE_PACKAGE: 'deletePromoCodePackage',

    GET_CERTIFICATES: 'getCertificates',
    GET_CERTIFICATE: 'getCertificate',
    CREATE_CERTIFICATE: 'createCertificate',
    EDIT_CERTIFICATE: 'editCertificate',
    DELETE_CERTIFICATE: 'deleteCertificate',

    GET_SOURCES: 'getSources',
    GET_SOURCE: 'getSource',
    CREATE_SOURCE: 'createSource',
    EDIT_SOURCE: 'editSource',
    DELETE_SOURCE: 'deleteSource',

    GET_RECURRINGS: 'getRecurrings',
    GET_RECURRING: 'getRecurring',
    CREATE_RECURRING: 'createRecurring',
    EDIT_RECURRING: 'editRecurring',
    DELETE_RECURRING: 'deleteRecurring',

    GET_MANAGERS: 'getManagers',
    GET_MANAGER: 'getManager',
    CREATE_MANAGER: 'createManager',
    EDIT_MANAGER: 'editManager',
    DELETE_MANAGER: 'deleteManager',

    GET_MANAGERS_HISTORY: 'getManagersHistory',
    GET_MANAGER_HISTORY: 'getManagerHistory',
    CREATE_MANAGER_HISTORY: 'createManagerHistory',
    EDIT_MANAGER_HISTORY: 'editManagerHistory',
    DELETE_MANAGER_HISTORY: 'deleteManagerHistory'
};

export default ACTIONS;
