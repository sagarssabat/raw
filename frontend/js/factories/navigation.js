myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Shop",
        classis: "active",
        anchor: "home",
        subnav: []
        // subnav: [{
        //     name: "Subnav1",
        //     classis: "active",
        //     anchor: "home"
        // }]
    }, {
        name: "Gift Sets",
        classis: "active",
        anchor: "gift",
        subnav: []
    }, {
        name: "Rewards",
        classis: "active",
        anchor: "rewards",
        subnav: []
    }, {
        name: "Our Story",
        classis: "active",
        anchor: "story",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "contact",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});