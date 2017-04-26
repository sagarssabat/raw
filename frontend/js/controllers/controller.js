myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/home/slide-1.jpg',
            'img/home/slide-2.jpg',
            'img/home/slide-3.jpg'
        ];
        $scope.homeSlide = [{
                title: 'Grooming Essentials Tailored For Men',
                title2: 'who want to build empires and leave legacies behind.',
                img: 'img/home/slide-1.jpg',
                btntxt: 'Explore Raw Nature'
            }
            // ,
            // {
            //     title: 'Enrichedd With Modern Notes of rosemary, orange and cedarwood',
            //     title2: 'Create looks both Messy and Constructed.',
            //     img: 'img/home/slide-2.png',
            //     btntxt: 'Explore Raw Nature'
            // },
            // {
            //     title: 'Inspired by American bourbon casks,',
            //     title2: 'rare isrish whiskes and erupting volcanoes.',
            //     img: 'img/home/slide-3.jpg',
            //     btntxt: 'Explore Raw Nature'
            // }
        ];
        $scope.productSlide = [{
            title: 'Beard Care',
            img: 'img/home/product-1.png',
            desc: 'For Our Band of beared brothers.',
            btntxt: 'Shop beared Solution'
        }, {
            title: 'Below The Belt',
            img: 'img/home/product-2.png',
            desc: 'Protect yourself from chafing,, down under.',
            btntxt: 'Shop below the belt'
        }, {
            title: 'Shower Solutions',
            img: 'img/home/product-3.png',
            desc: 'Recover from prolonged exposure.',
            btntxt: 'Shop shower Solution'
        }, {
            title: 'Hair Care',
            img: 'img/home/product-4.png',
            desc: "Energise your hair after a hard day's work.",
            btntxt: 'Shop Hair care'
        }, {
            title: 'Skin Care',
            img: 'img/home/product-5.png',
            desc: 'Lathers Great, Washes Clean.',
            btntxt: 'Shop Skin care'
        }];
        $scope.processSlide = [{
                img: 'img/home/icon-1.png',
                title: 'Shop',
                desc: 'Choose the products that you want automatically shipped.'
            },
            {
                img: 'img/home/icon-2.png',
                title: 'Schedule',
                desc: 'Choose your delivery frequency (15-60 days).No Minimum Purchase Obligation Pause, Delay &amp; Restart at will.'
            },
            {
                img: 'img/home/icon-3.png',
                title: 'Save',
                desc: 'Get a lifetime discount of 15% on all your purchase under auto-replenishment.'
            },
            {
                img: 'img/home/icon-4.png',
                title: 'Ship',
                desc: 'Sit back &amp; relax! Your favorite products will reach you automatically whn they are due.'
            }
        ];
        $scope.myArray = _.chunk($scope.productSlide, 3);
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };



    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });