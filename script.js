var pubnub = require("pubnub")({
    subscribe_key: 'demo', // always required
    publish_key: 'demo'	// only required if publishing
});
var percentages = [0,20,40,60,80,100]

function send_percentage(percentage){
    pubnub.publish({
        channel: "progress-bar",
        message: {"value": percentage},
        callback: function(m){console.log(m)}
    });
}

var interval_id = setInterval(function(){
    send_percentage(percentages.shift());
}, 5000)

