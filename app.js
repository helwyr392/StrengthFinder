// Requires and Uses
const express    = require('express'),
      app        = express(),
      mongoose   = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


/*------ Database Setup ------*/

// Database connection
mongoose.connect('mongodb://helwyr392:D!0n2OO2Noob1025@ds141657.mlab.com:41657/strength_finder', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema
const strengthSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  adjectives: String,
  quote: String,
  cite: String,
  yuck: String,
  yay: String,
  starved: String,
  fed: String,
  insulted: String,
  honored: String,
  working: String,
  managing: String,
  partnering: String,
  imgUrl: String,
  color: String,
  colorHover: String,
  colorRGBA: String
});

// Model
var Strength = mongoose.model('strength', strengthSchema);

/*------ Routes ------*/

// Index - GET
app.get('/', (req, res) => {
    Strength.find({ 'title' : 'Analytical' }, (err, result) => {
    if (err) throw err;
    res.render('index', {strength: result[0]});
  });
});

// Strength
app.get('/:id', (req, res) => {
    Strength.find({ 'title' : req.params.id }, (err, result) => {
    if (err) throw err;
    res.render('index', {strength: result[0]});
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running... Port:8080');
});
