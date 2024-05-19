const Question=require('../Model/questions')
const Answer=require('../Model/answers')

module.exports={
    getAll:async(req,res)=>{
     await Question.find().populate({
      path: "Answer",
      select:
       "Content Score"})
       .then(question=>{
        res.status(200).send(question)
      })
      .catch(error=>{
        res.status(error.status).send({error:error.message})
      })
    },
    addQuestion: async (req, res) => {
      try {
        console.log(req.body);
    
        const { Content, answers } = req.body;
        console.log(answers);
        const question = new Question({ Content });
    
        const savedQuestion = await question.save();
    
        for (const answerContent of answers) {
          const answer = new Answer({ Content: answerContent.Content, Score: answerContent.Score, question: savedQuestion._id });
          await answer.save(); 
          savedQuestion.Answer.push(answer); 
        }
    
        await savedQuestion.save();     
    
        res.status(200).send(`Create question ${savedQuestion._id} succeed`);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
      }
    }
    
}    