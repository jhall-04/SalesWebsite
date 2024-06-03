import { useState } from 'react'
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

const explanations = [
  [
    'A company with emerging capabilities in the Value Proposition component of the FUSE process may not have fully optimized its value proposition to clearly answer the "Three Whys". Such a company may struggle to ensure every member within the organization can consistently articulate the value proposition. The focus at this stage is on enhancing the clarity and coherence of the value proposition to support more effective selling and marketing strategies.',
    'A company with basic capabilities in the Value Proposition component of FUSE has a value proposition that includes some emotional or quantifiable elements. These elements begin to address customer needs but may not fully articulate the comprehensive value delivered. Such a company is on the pathway to developing a stronger, more compelling value proposition that resonates deeply with targeted customers. Efforts at this stage are typically directed towards enhancing the articulation of the value proposition to make it more appealing and effective in differentiating the company from its competitors.',
    'A company with advanced capabilities in the Value Proposition component of FUSE is adept at addressing the "Three Whys" comprehensively. They effectively communicate the unique benefits of their offerings persuasively to target audiences. The value proposition is deeply integrated into all company operations, assuring alignment across marketing, sales, and product development. Such a company can consistently articulate a well-defined value proposition that is quantifiable, differentiating them clearly from competitors. This level signifies a mature understanding and execution that powerfully resonates with customers and supports sustained competitive advantage.'
  ],
  [
    'A company with emerging capabilities in the Offering component of the FUSE process have products or services that may lack differentiation or strong market fit. These companies are in the initial stages of defining and refining what they offer to better match customer needs. Feedback mechanisms might not yet be robust, limiting the potential for iterative improvement based on real customer insights. Efforts at this stage are often focused on identifying core features or services that can provide value to customers.',
    'A company with basic capabilities in the Offering component of FUSE typically has a defined product or service offering but may lack depth or breadth in features. Their offerings may meet basic market needs but lack advanced or specialized features that differentiate them from competitors. Such companies start to establish feedback loops with customers, though these systems may not be fully developed or utilized effectively. Efforts are increasingly directed towards enhancing value to customers, but innovation may be incremental rather than transformative',
    'A company with advanced capabilities in the Offering component of FUSE typically has a well-developed, comprehensive product or service line. Their offerings are highly differentiated, featuring unique attributes that strongly appeal to target markets. They effectively use customer feedback to continuously refine and enhance their products or services. Such a company has robust mechanisms for innovation, allowing them to stay ahead of market trends and competitor moves. Their offerings not only meet but often exceed customer expectations, creating significant value and ensuring customer loyalty.'
  ],
  [
    'A company with emerging capabilities in the Sales component of FUSE often lack a formalized sales process. Sales strategies are usually undeveloped or generic, not tailored to specific market segments or customer needs. The sales team may lack training or adequate resources to effectively pursue and close leads. Such companies are in the early stages of establishing a systematic approach to sales, focusing initially on setting clear sales targets and defining basic sales processes.',
    'A company with basic capabilities in the Sales component of FUSE typically has a structured sales process, but it may not be fully optimized. They generally understand their customer demographics but might not efficiently segment or target their markets. The sales team is usually in place and functional, with some training and resources, but may lack advanced skills or sophisticated tools. Regular sales data collection occurs, but the use of analytics and data-driven decision-making is minimal. Such a company focuses on achieving consistent sales activities but may struggle with high-performance or scaling efficiently.',
    'A company with Advanced capabilities in the Sales component of FUSE operates with a highly structured and refined sales process. Their sales strategies are sophisticated and tailored to specific customer segments, leveraging detailed market analytics for precision targeting. The sales team is well-trained and equipped with advanced tools, including CRM systems and data analytics platforms to optimize performance. These companies typically have a strong focus on forecasting accuracy and strategic planning, using data-driven insights to drive sales decisions. Regular reviews and continuous improvement of sales tactics are standard practices, ensuring they adapt to changing market conditions and maintain a competitive edge.'
  ],
  [
    'A company with Emerging capabilities in the Marketing component of FUSE typically lack a comprehensive marketing strategy that aligns with overall business objectives. The marketing efforts are often sporadic or reactive rather than consistently planned and executed. Digital marketing and data analysis might not be fully utilized, limiting the effectiveness of campaigns. These companies are at the beginning of defining their target markets and understanding the best channels to reach them.',
    'A company with Basic capabilities in the Marketing component of FUSE typically has some established marketing activities, and are likely to use basic tools and techniques for marketing without fully integrating or optimizing these efforts across different channels. Their understanding of target markets is somewhat developed, but not detailed, and their marketing campaigns may not be effectively personalized or segmented. Digital marketing practices are in place, but they may not be leveraging advanced data analytics or cutting-edge digital strategies. Efforts at this stage often focus on increasing reach and frequency of engagements rather than enhancing engagement quality or measuring ROI meticulously',
    'A company with Advanced capabilities in the Marketing component of FUSE employs a fully integrated, strategic approach to marketing. They utilize sophisticated tools and technologies to engage with specific target audiences effectively. Their marketing strategies are data-driven, with deep analytics supporting decision-making and optimization. They have a coherent brand message that is consistently communicated across all channels. Such companies often see high engagement rates, strong brand loyalty, and effective lead generation as a result of their advanced marketing practices.'
  ],
  [
    'A company with Emerging capabilities in the Delivery component of FUSE typically has foundational processes in place for delivering products or services but these may not be fully optimized or consistent. They often face challenges in maintaining quality and meeting delivery deadlines due to lack of streamlined operations. Such companies are in the initial stages of developing their delivery systems and may struggle with scalability and efficiency. They may lack sophisticated tools and technologies that assist in tracking and managing delivery operations. At this stage, efforts are generally focused on establishing basic delivery frameworks and identifying areas for improvement.',
    'A company with Basic capabilities in the Delivery component of FUSE has established basic procedures and systems for product or service delivery. They maintain a consistent level of quality but may not be optimized for efficiency or scalability. The company typically uses simple tools and technologies to manage and monitor delivery processes. Customer feedback mechanisms may be in place but are not fully integrated into the delivery improvements. Such companies focus on enhancing their delivery processes to meet growing business demands and customer expectations.',
    'A company with Advanced capabilities in the Delivery component of FUSE demonstrates highly efficient and reliable delivery processes. They effectively leverage advanced technologies and systems for seamless order tracking, logistics management, and customer delivery. Such companies consistently meet or exceed customer expectations with timely, high-quality deliveries, often personalized to customer needs. They utilize feedback and data analytics to continuously refine and optimize their delivery processes. This advanced capability ensures scalability, supporting the company\'s growth while maintaining customer satisfaction and loyalty.'
  ],
  [
    'A company with Emerging capabilities in the Enablement Technology component of FUSE typically adopt technology for individual tasks. They may rely on limited technology platforms that are not fully integrated across business functions. Such companies often face challenges with data silos and lack a holistic view of operational efficiencies. Their technology adoption is usually reactive rather than strategic, responding to immediate needs without a long-term technology roadmap. The focus at this stage is on identifying key areas where technology can drive efficiencies and gradually integrating more sophisticated tools.',
    'A company with Basic capabilities in the Enablement Technology component of FUSE uses standard technology tools that partially integrate with business processes. They typically have begun to move away from manual processes altogether. The technology in use supports fundamental business functions but lacks advanced features that could further streamline operations. These companies are making efforts to understand and implement more coherent technology strategies that align with long-term goals. Their current state represents a transition phase, aiming for greater efficiency and productivity through incremental tech improvements.',
    'A company with Advanced capabilities in the Enablement Technology component of FUSE possesses highly integrated and automated systems across all business functions. They utilize sophisticated tools like AI and machine learning to enhance operational efficiencies and decision-making processes. Their systems are scalable and support real-time data analytics, providing a comprehensive view of the business landscape and enabling proactive management. This advanced technological framework significantly improves customer interactions and engagements, driving higher satisfaction and loyalty. Such companies prioritize continuous innovation in technology to maintain competitiveness and adapt to changing market dynamics.'
  ]
]

const categories = ['Emerging', 'Basic', 'Advanced']

const scores: number[] = []

function calculateResults(index: number) {
  const score = scores[index];
  if (score < 15) {
    return 0;
  } else if (score < 30) {
    return 1;
  } else {
    return 2;
  }
}

function calculateOverallResults(score: number) {
  if (score < 90) {
    return 0;
  } else if (score < 180) {
    return 1;
  } else {
    return 2;
  }
}

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [results, setResults] = useState<boolean>(false);
  const [tile, setTile] = useState<number>(0);
  const [testing, setTesting] = useState<boolean>(false);

  const handleAnswerSelection = (questionIndex: number, answer: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateTotal = () => {
    const totalTally = selectedAnswers.reduce((acc, curr) => acc + curr, 0);
    scores.push(totalTally);
    setPage(page + 1);
    setSelectedAnswers(Array(5).fill(null));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  const handleViewResults = () => {
    setResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const leftTile = () => {
    if (tile === 0) {
      setTile(5);
    } else {
      setTile(tile - 1);
    }
  }

  const rightTile = () => {
    if (tile === 5) {
      setTile(0);
    } else {
      setTile(tile + 1);
    }
  }

  return (
    <div className="App">
      {!testing && <div className='title-page'>
        <img src="https://github.com/jhall-04/SalesWebsite/blob/master/src/assets/salespng.png?raw=true" alt="Sales Splash Page" className="splash-image" />
        <div className="title-div">
        <p className="title">To learn more about how we can help you meet your</p>
        <p className="title">growth goals, take our free online go-to-market</p>
        <p className="title">readiness test below</p>
        <button className="start-button" onClick={() => setTesting(true)}>Take the test</button>
        </div>
        </div>}
      {testing && <div className="App">
      <header className="App-header">
        {page < questions.length && <h1 className="App-header-txt">FREE MARKET READINESS TEST</h1>}
        {page === questions.length && <h1 className="App-header-txt">RESULTS</h1>}
      </header>
      <div className="App-content">
        {page < questions.length && <Question text={questions[page][0]} onAnswerSelected={(answer) => handleAnswerSelection(0, answer)} selectedAnswer={selectedAnswers[0]} />}
        {page < questions.length && <Question text={questions[page][1]} onAnswerSelected={(answer) => handleAnswerSelection(1, answer)} selectedAnswer={selectedAnswers[1]} />}
        {page < questions.length && <Question text={questions[page][2]} onAnswerSelected={(answer) => handleAnswerSelection(2, answer)} selectedAnswer={selectedAnswers[2]} />}
        {page < questions.length && <Question text={questions[page][3]} onAnswerSelected={(answer) => handleAnswerSelection(3, answer)} selectedAnswer={selectedAnswers[3]} />}
        {page < questions.length && <Question text={questions[page][4]} onAnswerSelected={(answer) => handleAnswerSelection(4, answer)} selectedAnswer={selectedAnswers[4]} />}
        {page < questions.length - 1 && <button className="next-button" onClick={calculateTotal}>Next</button>}
        {page === questions.length - 1 && <button className="next-button" onClick={calculateTotal}>Submit</button>}
        {page === questions.length && !results && <Tile name="Overall Level" description="Description of Company Level." level={categories[calculateOverallResults(scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0))]} />}
        {page === questions.length && results && <div className="results">
          <button className="change-button" onClick={leftTile}>{"<"}</button>
          {tile === 0 && <Tile name={profiles[0][1]} description={explanations[0][calculateResults(0)]} level={categories[calculateResults(0)]} />}
          {tile === 1 && <Tile name={profiles[1][1]} description={explanations[1][calculateResults(1)]} level={categories[calculateResults(1)]} />}
          {tile === 2 && <Tile name={profiles[2][1]} description={explanations[2][calculateResults(2)]} level={categories[calculateResults(2)]} />}
          {tile === 3 && <Tile name={profiles[3][1]} description={explanations[3][calculateResults(3)]} level={categories[calculateResults(3)]} />}
          {tile === 4 && <Tile name={profiles[4][1]} description={explanations[4][calculateResults(4)]} level={categories[calculateResults(4)]} />}
          {tile === 5 && <Tile name={profiles[5][1]} description={explanations[5][calculateResults(5)]} level={categories[calculateResults(5)]} />}
          <button className="change-button" onClick={rightTile}>{">"}</button>
        </div>}
        {page === questions.length && !results && <button className="result-button" onClick={handleViewResults}>View Detailed Results</button>}
      </div>
      <div className="floating-block">
      <div className="percentage">{Math.round((page / questions.length) * 100)}%</div>
        <progress className="progress" value={page} max={questions.length}></progress>
      </div>
      </div>}
    </div>
  )
}

export default App
