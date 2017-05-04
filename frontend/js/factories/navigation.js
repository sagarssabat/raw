myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Shop",
        classis: "active",
        anchor: "product-description",
        // subnav: []
        subnav: [{
                name: "By Category",
                classis: "active",
                anchor: "home"
            }, {
                name: "Hair",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Beard",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Skin",
                classis: "active",
                anchor: "home"
            }, {
                name: "Shower",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Below The Belt Sma",
                classis: "active",
                anchor: "home"
            },
        ],
        subnav1: [{
                name: "By Concern",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Fine Lines &amp; Wrinkles",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Loss of Hair Volume",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Frizzy Hair",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Hyperpigmentation &amp; Dark Spots",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Dry &amp; Dehydrated Skin",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Enlarged Pores",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Acne &amp; Blemishes",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Oily Skin",
                classis: "active",
                anchor: "home"
            },
            {
                name: "Dull Skin &amp; Uneven Skin Tone",
                classis: "active",
                anchor: "home"
            }
        ]
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