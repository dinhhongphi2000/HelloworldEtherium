
App = {
    web3Provider: undefined,
    Contracts: {},
    instance: {},
    init: function () {
        return App.initWeb3();
    },

    initWeb3: function () {
        // Is there an injected web3 instance?
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
        } else {
            // If no injected web3 instance is detected, fall back to Ganache
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }

        //get storage contract
        $.getJSON("js/Storage.json", function (data) {
            App.Contracts.Storage = TruffleContract(data);
            return App.initContract();
        });
    },

    initContract: function () {
        console.log("InitContract");
        App.Contracts.Storage.setProvider(App.web3Provider);
        App.Contracts.Storage.defaults({ from: "0xf17f52151EbEF6C7334FAD080c5704D77216b732" });
        App.Contracts.Storage.deployed().then(function (instance) {
            App.instance = instance;
            App.ready();
        })

    },

    ready: function (data) {
        console.log("App ready");
        //App.getMessage().then(function(abc) {console.log(abc)},function(adf){console.log(adf)});
        //Không tạo transaction
        this.instance
            .get
            .call()
            .then(function (message) {
                $(".panel-body").text(message);
            }, function (err) {
                console.log(err);
            })

        //tạo transaction
        // this.instance
        //     .get()
        //     .then(function (message) {
        //         $(".panel-body").text(message);
        //     }, function (err) {
        //         console.log(err);
        //     })
    }
}

App.init();


