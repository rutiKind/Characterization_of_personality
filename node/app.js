const connectToDB = require('./connectDB')
const answerRoutes=require('./Routes/answer')
const questionRoutes=require('./Routes/question')
const cors = require('cors');


//לא חובה לקרוא למשתנה בשם המודול - מקובל מאוד
const express = require('express')

//body-parser ייבוא של 
//אחראי על המרות ממחרוזות לאובייקטים ולהפך
const bodyParser = require('body-parser')

//express יצירת שרת עי" הרצה  של 
//שם מקובל
const app = express()
//הפעלה של ההמרות


const dotenv = require('dotenv')
dotenv.config()

connectToDB()


app.use(bodyParser.json())



app.get('', (req, res) => {
    //send - מה שיחזור ויוצג על הדפדפן / לצד לקוח
    res.status(200).send('😍👍❤')
})

app.listen(3000, () => {
    console.log(`my app is listening in http://localhost:3000`);
})

app.use(cors());
app.use('/answer',answerRoutes)
app.use('/question',questionRoutes)
