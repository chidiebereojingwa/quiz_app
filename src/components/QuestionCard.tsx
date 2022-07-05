import React from 'react';


type Props = {
    question: string;
    answers: string;
    callback: any;
    userAnswer: boolean;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => <div>
    <p className='number'>
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: questio}}/>
    <div>
        {answers.map(answer => (
            <div>
                <button disabled={userAnswer} onClick={callback}></button>
            </div>
        ))}
    </div>
</div>; ;


export default QuestionCard;
