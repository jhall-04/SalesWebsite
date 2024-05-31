import React, { useState } from 'react'
import './App.css'
import Question from './Question'
import Tile from './Tile'

const questions = [
  [
    'Your sales team can easily quantify the economic value proposition of your offering(s)',
    'Your sales team is prepared to answer the questions "Why Change", "Why Change Now" and "Why Our Company"',
    'In the sales process, you utilize value calculators to illustrate defined value from your offering(s)',
    'Your business strategy is centered around a defined unit economic model',
    'You are confident that any member of your organization can communicate the key elements of value that your company brings in less than 1 minute'
  ],
  [
    'There is a defined progression of offerings beyond the first engagement with a new client',
    'There are mechanisms in place to capture feedback on your company\'s percived value and performance for its clients',
    'There are easily referencable data and proof points for your offering\'s efficacy and scalability',
    'There is a unified methodology for project management and delivery that is communcated well to the buyer',
    'Clear and consistent pricing guidelines are in place for each offering '
  ],
  [
    'There are defined Ideal Customer Profiles for each offering',
    'The lead generation process is consistent and formalized',
    'There is a large variety of sales enablement tools and collateral for the sales team to draw from',
    'Marketing metrics are defined and managed too',
    'Your company produces a stream of marketing material distributed accross a variety of channels'
  ],
  [
    'Every sales team member follows a single, consistent sales process',
    'There are formal sales quotas/responsibilites and incentives for the sales team',
    'There are defined metrics for sales performace and success that are managed to',
    'There is significant collaboration between your organization and the buyer in the sales process to tailor the final solution',
    'Salespeople consistently collaborate on deals with sales leadership and your organization\'s subject matter experts'
  ],
  [
    'Your organization has a proven delivery capability with key referencable clients',
    'There are defined skills/knowledge requirements to deliver your solutions',
    'There are defined account management incentives to facilitate expanding accounts',
    'Project management protocols are formal with a defined methodology',
    'Customer satisfaction is consistently montored and managed with key success metrics' 
  ],
  [
    'Inbound and outbound marketing is supported by marketing automation software',
    'Your organization utilizes lead geneartion software to find target accounts and buyers',
    'Your organization utlizes its Customer Relationship Management software consistently',
    'A Learning Management System is in place to upskill sales and delivery teams',
    'Project management software is consistently utilized to ensure on-time task completion and deliverable quality'
  ]
]

const profiles = [
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOr5Th6pmAfvtKw1J-uoGGvarY3G4hNFIlTw&s', 'Value Prop'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQKQYwUnSCXVyiiL2ddsMpD5vPn_i-lc3g&s', 'Offering'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTVYiy6pUTHRRo321egOz556XlE8N3vchkQ&s', 'Marketing'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgN7rhwfko-FpmvobR0gc0pLglwIKHXhVg&s', 'Sales'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjtzAcs-wEzg-RNOOp735N-DIeceMDGbPRw&s', 'Delivery'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaYUesIjKb0a-qHsHkGFqa-bH7i2TyOi5Ug&s', 'IT Enablement']
]

const scores: number[] = []

function getMaxIndex(arr: number[]): number {
  return arr.reduce((maxIndex, currentValue, currentIndex, array) => {
    return currentValue > array[maxIndex] ? currentIndex : maxIndex;
  }, 0);
}

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);

  const handleAnswerSelection = (questionIndex: number, answer: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateTotal = () => {
    const totalTally = selectedAnswers.reduce((acc, curr) => acc + curr, 0);
    scores.push(totalTally);
    setPage(page + 1);
    window.scrollTo({ top: 250, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-txt">FREE MARKET READINESS TEST</h1>
      </header>
      <div className="App-content">
        {page < questions.length && <Question text={questions[page][0]} onAnswerSelected={(answer) => handleAnswerSelection(0, answer)} />}
        {page < questions.length && <Question text={questions[page][1]} onAnswerSelected={(answer) => handleAnswerSelection(1, answer)} />}
        {page < questions.length && <Question text={questions[page][2]} onAnswerSelected={(answer) => handleAnswerSelection(2, answer)} />}
        {page < questions.length && <Question text={questions[page][3]} onAnswerSelected={(answer) => handleAnswerSelection(3, answer)} />}
        {page < questions.length && <Question text={questions[page][4]} onAnswerSelected={(answer) => handleAnswerSelection(4, answer)} />}
        {page < questions.length - 1 && <button className="next-button" onClick={calculateTotal}>Next</button>}
        {page === questions.length - 1 && <button className="next-button" onClick={calculateTotal}>Submit</button>}
        {page === questions.length && <Tile imageSrc={profiles[getMaxIndex(scores)][0]} text={profiles[getMaxIndex(scores)][1]} />}
      </div>
      <div className="floating-block">
        Progress
      </div>
    </div>
  )
}

export default App
