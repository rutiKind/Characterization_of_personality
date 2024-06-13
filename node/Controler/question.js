const Question=require('../Model/questions')
const Answer=require('../Model/answers')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')


module.exports={
    getAll:async(req,res)=>{
     await Question.find()
       .then(question=>{
        res.status(200).send(question)
      })
      .catch(error=>{
        res.status(error.status).send({error:error.message})
      })
    },
    // addQuestion: async (req, res) => {
    //   try {
    //     console.log(req.body);
    
    //     const { Content, answers } = req.body;
    //     console.log(answers);
    //     const question = new Question({ Content });
    
    //     const savedQuestion = await question.save();
    
    //     for (const answerContent of answers) {
    //       const answer = new Answer({ Content: answerContent.Content, Score: answerContent.Score, question: savedQuestion._id });
    //       await answer.save(); 
    //       savedQuestion.Answer.push(answer); 
    //     }
    
    //     await savedQuestion.save();     
    
    //     res.status(200).send(`Create question ${savedQuestion._id} succeed`);
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).send({ message: error.message });
    //   }
    // }
    addQuestion: async (req, res) => {
      try {
        console.log(req.body);
    
        const { Content } = req.body;
        const question = new Question({ Content });
    
        const savedQuestion = await question.save();
    
        res.status(200).send(`Create question ${savedQuestion._id} succeed`);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
      }
    },


    sendMail: (req, res) => {
      const { email, content } = req.body;
      console.log(email);
      console.log(content);
    
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "r583209640@gmail.com",
          pass: process.env.PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    
      let mailOptions = {
        from: "r583209640@gmail.com",
        to: email,
        subject: `תוצאות מבחן אישיות`,
        html: `${content}<img src=${__dirname + `/1.gif`}/>`,
        attachments: [
          {
            filename: "1.gif",
            path: __dirname + `/1.gif`,
            cid: `http://localhost:3000/uploads/1.gif`,
          }
        ],
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(500).send("Failed to send email");
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send("Email sent successfully");
        }
      });
    }
    
    
}    