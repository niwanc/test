/**
 * Created by niwantha on 9/28/17.
 */
const builder = require('botbuilder');

function init(app) {
// Create chat bot and binding
    const connector = new builder.ChatConnector({
        appId: 'bd67e9db-adc7-4f76-915f-365b80eaf750',
        appPassword: 'ZKhv31TZ3X2mpLkftymfXUL',
    });
    app.post('/api/news', connector.listen());
    const bot = new builder.UniversalBot(connector, (session) => {
            session.send('Sorry, I did not understand \'%s\'. Send \'help\' if you need assistance.', session.message.text);
});
// Print out help message
    bot.dialog('Help', (session) => {
        session.endDialog('Hi! this is a help message');
    }).triggerAction({
        matches: 'Help',
});
    console.log(connector);
}
module.exports.init = init;

console.log('mee here');
