var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  var kittySchema = mongoose.Schema({
    name: String
  });

  // Adding methods later...
  // But, since kitty is a schema why do you want a method?
  kittySchema.methods.speak = function() {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name"
    console.log(greeting);
  }

  var Kitten = mongoose.model('Kitten', kittySchema);
  // var silence = new Kitten({name: 'Silence'});
  // console.log(silence.name);

  // var fluffy = new Kitten({name: 'fluffy'});
  // fluffy.speak();

  // // Lets save these kittens - lol
  // fluffy.save(function (err, fluffy) {
  //   if (err) return console.error(err);
  //   fluffy.speak();
  // });
  
  // // Silly that the DAL is on the object
  // silence.save(function (err, silence) {
  //   if (err) console.err(err);
  //   silence.speak();
  // });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });
});
