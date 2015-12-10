var login = require("facebook-chat-api");

var emailID = 'pranaysjarvis@gmail.com';
var accountPassword = 'iamironman91.';

var inputString ='';

// Create simple echo bot
login({email: emailID, password: accountPassword}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {

        inputString = message.body.toLowerCase(); // Converts all the input strings to lowecase, easy to process.
        var messageRaw = inputString;
        messageRaw = messageRaw.split(' ');

        api.sendTypingIndicator(message.threadID, function callback(err, end){
        })
        
        if(inputString == "hi"){
                var string = sayHello();
                api.sendMessage(string, message.threadID);
        }
        else if(messageRaw[0]=='calc'){
            var evalString = messageRaw[1];
            result = eval(evalString).toString();

            api.sendMessage(result, message.threadID);
        }
        else if(inputString == "fuck"){
            api.sendMessage("You don't need to be rude.", message.threadID);
        }
        else if(inputString=="getid")
        {
                console.log(api.getCurrentUserID());
        }
        else{
            var failString = failResponse();
            api.sendMessage(failString, message.threadID);
        }


        console.log(message.body);
    });
});



function sayHello(){
    var helloResponses =   [
        "Hello there.",
        "Hi.",
        "Jarvis says hello!",
        "Hello.",
        "Uhh.. Hi."
    ]
    var randomizer = Math.floor((Math.random() * helloResponses.length));
    return helloResponses[randomizer];
}


function failResponse(){
    var failResponse = [
        "I'm not really sure if I got that.",
        "Pardon me.",
        "I'm sorry, looks like I cannot understand what you mean by that.",
        "Uhhh...?",
        "Let me make myself clear. I am called Artificial Intelligence for a reason.",
        "Looks like I didn't understand that part where you talked about the part which you just said.",
        "Just because I'm more intelligent than you doesn't mean I'd understand what you just said.",
        "I'm a bot, please be considerate about what I can respond to.",
        "Looks like my processing power is limited to handle your query.",
        "Well.. I.. I don't know what you mean by that."
    ]
    var randomizer = Math.floor((Math.random() * failResponse.length));
    return failResponse[randomizer];
}
