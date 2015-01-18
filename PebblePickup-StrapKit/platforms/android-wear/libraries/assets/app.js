
var introPage = StrapKit.UI.Page();
introPage.setBackgroundColor('#42ff23');
var introCard = StrapKit.UI.Card({
    title: 'Click Select',
    body: 'For Mad Game'
});

var showLinePage = function(user, pickupline) {
    var linePage = StrapKit.UI.Page();
    linePage.setBackgroundColor('#42ff23');
    var lineCard = StrapKit.UI.Card({
        title: user,
        body: pickupline
    });
    lineCard.setOnClick(refreshPickupLine);
    linePage.addView(lineCard);
    linePage.show();
};

var refreshPickupLine = function() {
    var loadingPage = StrapKit.UI.Page();
    loadingPage.setBackgroundColor('#42ff23');
    var loadingText = StrapKit.UI.TextView({
        text: 'Chill I am Loading',
        position: 'center'
    });
    loadingPage.addView(loadingText);
    loadingPage.show();

    StrapKit.HttpClient({
        url: 'https://www.kimonolabs.com/api/a38ll6me?apikey=drXUUfvK516nGaCNZwneGEIt6UZWtiWe',
        type: 'json'
    }, function(data) {
        var randLine = Math.floor(Math.random() * data.count);
        console.log(randLine);
        var pickupline = data.results.collection1[randLine].pickupLine;
        var user = data.results.collection1[randLine].user;
        console.log(pickupline);
        showLinePage(user, pickupline);
        loadingPage.hide();
    }, function(error) {
        console.log(error);
    }); 
};

introCard.setOnClick(refreshPickupLine);

introPage.addView(introCard);
introPage.show();
