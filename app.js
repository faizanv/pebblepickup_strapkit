
var introPage = StrapKit.UI.Page();

var introCard = StrapKit.UI.Card({
    title: 'Click Select',
    body: 'For Mad Game'
});

introCard.setOnClick(function() {
    var loadingPage = StrapKit.UI.Page();
    var loadingText = StrapKit.UI.TextView({
        text: 'Chill I am Loading',
        position: 'center'
    });
    loadingPage.addView(loadingText);
    loadingPage.show();

    StrapKit.HttpClient({
        url: 'https://www.kimonolabs.com/api/35u0ax40?apikey=drXUUfvK516nGaCNZwneGEIt6UZWtiWe',
        type: 'json'   
    }, function(data) {
        var pickupline = data.results.collection1[0].pickupLine;
        var user = data.results.collection1[0].user;

        var linePage = StrapKit.UI.Page();
        var lineCard = StrapKit.UI.Card({
            title: user,
            body: pickupline
        });
        linePage.addView(lineCard);
        linePage.show();
    }, function(error) {
        console.log(error);
    });
});


introPage.addView(introCard);
introPage.show();