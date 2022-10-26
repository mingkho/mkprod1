sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mkprod1/test/integration/FirstJourney',
		'mkprod1/test/integration/pages/ProductsList',
		'mkprod1/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mkprod1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);