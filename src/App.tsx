import { useState } from 'react'
import './App.css'
import Question from './Question'
import Tile from './Tile'

let questions = [
  ['Your sales team can easily quantify the economic value proposition of your offering(s)', 0],
  ['Your sales team is prepared to answer the questions "Why Change", "Why Change Now" and "Why Our Company"', 0],
  ['In the sales process, you utilize value calculators to illustrate defined value from your offering(s)', 0],
  ['Your business strategy is centered around a defined unit economic model', 0],
  ['You are confident that any member of your organization can communicate the key elements of value that your company brings in less than 1 minute', 0],
  ['There is a defined progression of offerings beyond the first engagement with a new client', 1],
  ['There are mechanisms in place to capture feedback on your company\'s percived value and performance for its clients', 1],
  ['There are easily referencable data and proof points for your offering\'s efficacy and scalability', 1],
  ['There is a unified methodology for project management and delivery that is communcated well to the buyer', 1],
  ['Clear and consistent pricing guidelines are in place for each offering', 1],
  ['There are defined Ideal Customer Profiles for each offering', 2],
  ['The lead generation process is consistent and formalized', 2],
  ['There is a large variety of sales enablement tools and collateral for the sales team to draw from', 2],
  ['Marketing metrics are defined and managed too', 2],
  ['Your company produces a stream of marketing material distributed accross a variety of channels', 2],
  ['Every sales team member follows a single, consistent sales process', 3],
  ['There are formal sales quotas/responsibilites and incentives for the sales team', 3],
  ['There are defined metrics for sales performace and success that are managed to', 3],
  ['There is significant collaboration between your organization and the buyer in the sales process to tailor the final solution', 3],
  ['Salespeople consistently collaborate on deals with sales leadership and your organization\'s subject matter experts', 3],
  ['Your organization has a proven delivery capability with key referencable clients', 4],
  ['There are defined skills/knowledge requirements to deliver your solutions', 4],
  ['There are defined account management incentives to facilitate expanding accounts', 4],
  ['Project management protocols are formal with a defined methodology', 4],
  ['Customer satisfaction is consistently montored and managed with key success metrics', 4],
  ['Inbound and outbound marketing is supported by marketing automation software', 5],
  ['Your organization utilizes lead geneartion software to find target accounts and buyers', 5],
  ['Your organization utlizes its Customer Relationship Management software consistently', 5],
  ['A Learning Management System is in place to upskill sales and delivery teams', 5],
  ['Project management software is consistently utilized to ensure on-time task completion and deliverable quality', 5]
]

const profiles = [
  'Value Proposition',
  'Offering',
  'Sales',
  'Marketing',
  'Delivery',
  'Enablement Technology'
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

const descriptions = [
  "The Value Proposition is critical in determining how a company's offerings drive its strategic advantages and meet customer needs effectively. This component acts as a crucial element in aligning the company's goals and capabilities in preparation for growth and market engagement through the FUSE process.",
  "The Offering component involves collecting feedback from customers regularly, using that feedback to iterate and refine every aspect of the go-to-market plan.FUSE emphasizes adjusting strategies and offerings based on this feedback to better align with market needs and customer expectations. This dynamic, iterative approach ensures that offerings remain competitive and relevant, contributing to increased sales and customer satisfaction. Over time, this component aids in the scaling of sales performance by utilizing replicable and successful processes",
  "The fastest growing companies create a shared vision with the buyer during the sales process. Ideating alongside a buyer and proposing a plan built with their input creates win-win solutions for everyone. When executed correctly, the proposal has become the buyer’s proposal as much as the seller’s proposal. The sales component encompasses topics such as finding your buyer coach, selling value versus price, and of course adhering to a formal sales process.",
  "The Marketing component of the FUSE process focuses on aligning highly differentiated offerings with target markets. It involves adapting rapidly to changing market conditions and capturing opportunities. Through repeated cycles of evaluation and adjustment, companies can stay aligned with market trends, identify organizational gaps, and enhance marketing effectiveness. Ultimately, the Marketing component in the FUSE process leads to increased customer acquisition and accelerated sales growth, driving continuous improvements and scaling efforts.",
  "The Delivery component of the FUSE process emphasizes streamlined execution of company offerings to achieve positive customer outcomes and feedback. Organizations are encouraged to implement effective training and refine processes continuously, such as customer onboarding, to further enhance their delivery standards. Maintaining an advanced delivery component involves ongoing improvement and adaptation to ensure it meets or exceeds industry standards and expectations. The goal is near-perfect execution and exceptional market reputation.",
  "The Enablement Technology component of the FUSE process refers to the integration and utilization of automation tools to streamline business processes. These tools help in setting clear milestones and process steps that ensure consistency across an organization. Automation increases productivity, reduces errors, and improves compliance, which are vital for effective scaling."
]

const summary = [
  "This focuses on clearly communicating the unique benefits of a product or service to the target market.",
  "This focuses on clearly communicating the unique benefits of a product or service to the target market.",
  "This component focuses on developing an efficient and scalable sales process, leveraging data insights for enhanced performance.",
  "This emphasizes crafting and executing data-driven marketing strategies to effectively reach and engage target audiences.",
  "This ensures that the company's offerings are delivered consistently and reliably, meeting or exceeding customer expectations.",
  "Enablement Technology: This includes adopting and optimizing advanced technologies to streamline operations and support strategic goals."
]

const improvements = [
  [["Optimizing the value proposition to clearly answer the Three Whys.", "Ensuring everyone within the company can articulate a consistent value proposition.", "Defining buyer pain points", "Producing quantifiable evidence to support claims about solution value"], ["Strengthening the alignment between the value proposition and the company's strategic goals and market positioning.", "Ensuring the value proposition is consistently communicated across all sales and marketing channels.", "Utilizing customer and market feedback to continuously refine and adapt the value proposition.", "Integrating measurable outcomes and evidence to substantiate claims within the value proposition."]],
  [["Identifying and filling gaps in your current product offerings to meet market expectations.", "Ensuring that the offering aligns with the company’s value proposition.", "Regularly gathering and incorporating customer feedback to refine offerings.", "Implementing consistent processes for developing and launching offerings."],["Enhancing the product development process to be more proactive and market-driven.", "Improving the alignment between the offerings and the advanced value proposition.", "Introducing innovative features and services to differentiate from competitors.", "Establishing comprehensive metrics to assess the success and impact of the offerings."]],
  [["Implementing a structured sales process that can be consistently followed across the team.", "Training sales representatives to align their efforts with the company’s value proposition and offerings.", "Utilizing customer feedback to improve sales methodologies and approaches.", "Setting challenging yet achievable sales targets (stretch goals) to drive performance and innovation."],["Establishing a data-driven approach to track and analyze sales performance.", "Developing advanced sales training programs for employee skill enhancement.", "Implementing customer relationship strategies to maintain and deepen customer relationships.", "Investing in sophisticated CRM and sales automation tools."]],
  [["Improving market segmentation to better target potential customers.", "Enhancing branding efforts to establish a stronger market presence.", "Increasing collaboration between marketing and sales teams to ensure consistent messaging.", "Utilizing data analytics to measure and optimize marketing performance."],["Enhancing the data analytics capabilities to better segment and target audiences. Creating more sophisticated and targeted marketing campaigns.", "Incorporating advanced marketing automation tools to increase efficiency and reach.", "Increasing collaboration between marketing and sales teams to ensure seamless execution."]],
  [["Standardizing and documenting delivery processes.", "Improving consistency in execution of delivery.", "Implementing training programs for employees focused on delivery.", "Gathering and using customer feedback to improve delivery standards."],["Improving coordination between different departments during project delivery.", "Investing in advanced project management tools and methodologies.", "Establishing metrics for evaluating and improving delivery performance.", "Enhancing customer communication and support throughout the delivery phase."]],
  [["Implementing a Customer Relationship Management (CRM) system to track and manage customer interactions effectively.", "Investing in marketing automation tools to increase brand awareness and lead generation.", "Utilizing sales automation tools to streamline sales processes and improve efficiency.", "Developing a standardized process for technology adoption and integration across the company."],["Implementing advanced data analytics to measure technology impact accurately.", "Integrating artificial intelligence (AI) for predictive insights and decision-making.", "Automating more complex and personalized customer interactions.", "Ensuring seamless integration between various technology platforms."]]
]

// const categories = ['Emerging', 'Basic', 'Advanced']

const scores = [0, 0, 0, 0, 0, 0];

function calculateResults(index: number) {
  const score = scores[index];
  if (score < 10) {
    return 0;
  } else if (score < 23) {
    return 1;
  } else {
    return 2;
  }
}

/*
function calculateOverallResults(score: number) {
  if (score <= 60) {
    return 0;
  } else if (score <= 135) {
    return 1;
  } else {
    return 2;
  }
}
*/
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function getImprovements(index: number) {
  const stage = calculateResults(index);
  if (stage < 2) {
    const improvement = improvements[index][stage];
    return improvement;
  } else {
    return ["You are at the advanced stage!"]
  }
}

function levelProgress(index: number) {
  const stage = calculateResults(index); 
  if (stage === 0) {
    return "Emerging --> Basic";
  } else if (stage === 1) {
    return "Basic --> Advanced";
  } else {
    return "Advanced";
  }
}

questions = shuffleArray(questions);

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([0, 0, 0, 0, 0]);
  const [page, setPage] = useState<number>(0);
  //const [results, setResults] = useState<boolean>(false);
  const [tile, setTile] = useState<number>(0);
  const [testing, setTesting] = useState<boolean>(false);
  const [emergeDropped, setEmergeDropped] = useState<boolean>(false);
  const [basicDropped, setBasicDropped] = useState<boolean>(false);
  const [advDropped, setAdvDropped] = useState<boolean>(false);
  const [buttonTextEmg, setButtonTextEmg] = useState<string>("v");
  const [buttonTextBsc, setButtonTextBsc] = useState<string>("v");
  const [buttonTextAdv, setButtonTextAdv] = useState<string>("v");

  const handleAnswerSelection = (questionIndex: number, answer: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateTotal = () => {
    for (let i = 0; i < 5; i++) {
      scores[selectedQuestions[i]] += selectedAnswers[i];
    }

    setPage(page + 1);
    if (page < questions.length / 5 - 1){
      const next = [+questions[0 + (page + 1) * 5][1], +questions[1 + (page + 1) * 5][1], +questions[2 + (page + 1) * 5][1], +questions[3 + (page + 1) * 5][1], +questions[4 + (page + 1) * 5][1]]
      setSelectedQuestions(next);
    }
    setSelectedAnswers(Array(5).fill(null));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
/*
  const handleViewResults = () => {
    setResults(true);
    setPage(page + 1)
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
*/

  const resetReslut = () => {
    setAdvDropped(false);
    setBasicDropped(false);
    setEmergeDropped(false);
    setButtonTextAdv("v");
    setButtonTextBsc("v");
    setButtonTextEmg("v");
  }


  const startTesting = () => {
    setTesting(true);
    setSelectedQuestions([+questions[0][1], +questions[1][1], +questions[2][1], +questions[3][1], +questions[4][1]]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const dropEmerging = () => {
    setEmergeDropped(!emergeDropped);
    if (buttonTextEmg === "v") {
      setButtonTextEmg("^");
    } else {
      setButtonTextEmg("v");
    }
  }

  const dropBasic = () => {
    setBasicDropped(!basicDropped);
    if (buttonTextBsc === "v") {
      setButtonTextBsc("^");
    } else {
      setButtonTextBsc("v");
    }
  }

  const dropAdv = () => {
    setAdvDropped(!advDropped);
    if (buttonTextAdv === "v") {
      setButtonTextAdv("^");
    } else {
      setButtonTextAdv("v");
    }
  }

  const tileClick = (index: number) => {
    return () => {
      setTile(index);
      resetReslut();
      window.scrollTo({ top: 1000, behavior: 'smooth' });
      const area = calculateResults(index);
      if (area === 0) {
        setEmergeDropped(true);
        setButtonTextEmg("^");
      } else if (area === 1) {
        setBasicDropped(true);
        setButtonTextBsc("^");
      } else {
        setAdvDropped(true);
        setButtonTextAdv("^");
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  const showSummary = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      {!testing && <div className='title-page'>
        <div className="image-container">
        <img src="https://github.com/jhall-04/SalesWebsite/blob/master/src/assets/salespng.png?raw=true" alt="Sales Splash Page" className="splash-image" />
        </div>
        <div className="title-div">
        <p className="title">{"The SalesSparx FUSE process is a systematic approach designed to enhance go-to-market (GTM) "}
        maturity and accelerate sales growth. The start of the process is maturity gap analysis to identify a
        company's strengths and weaknesses accross 6 key components:</p>
        <div className="categories-container">
          <p className="category">Value Proposition: This focuses on clearly communicating the unique benefits of a product or service to the target market.</p>
          <p className="category">Offering: This involves continually refining and improving the products or services based on customer feedback and market demands.</p>
          <p className="category">Marketing: This emphasizes crafting and executing data-driven marketing strategies to effectively reach and engage target audiences.</p>
          <p className="category">Sales: This component focuses on developing an efficient and scalable sales process leveraging data insights for enhanced performance.</p>
          <p className="category">Delivery: This ensures that the company's offerings are delivered consistently and reliably, meeting or exceeding customer expectations.</p>
          <p className="category">Enablement Technology: This includes adopting and optimizing advanced technologies to streamline operations and support strategic goals.</p>
        </div>
        <p className="title-footer">To learn more about how we can help you meet your
        growth goals, take our free online go-to-market
        readiness test below</p>
        <button className="start-button" onClick={startTesting}>Take the test</button>
        </div>
        </div>}
      {testing && <div className="App">
      {page <= questions.length / 5 && <header className="App-header">
        {page < questions.length / 5 && <h1 className="App-header-txt">FREE MARKET READINESS TEST</h1>}
        {page === questions.length / 5 && <h1 className="App-header-txt">RESULTS</h1>}
      </header> }
      <div className="App-content">
        {page < questions.length / 5 && <Question text={questions[0 + page * 5][0].toString()} onAnswerSelected={(answer) => handleAnswerSelection(0, answer)} selectedAnswer={selectedAnswers[0]} />}
        {page < questions.length / 5 && <Question text={questions[1 + page * 5][0].toString()} onAnswerSelected={(answer) => handleAnswerSelection(1, answer)} selectedAnswer={selectedAnswers[1]} />}
        {page < questions.length / 5 && <Question text={questions[2 + page * 5][0].toString()} onAnswerSelected={(answer) => handleAnswerSelection(2, answer)} selectedAnswer={selectedAnswers[2]} />}
        {page < questions.length / 5 && <Question text={questions[3 + page * 5][0].toString()} onAnswerSelected={(answer) => handleAnswerSelection(3, answer)} selectedAnswer={selectedAnswers[3]} />}
        {page < questions.length / 5 && <Question text={questions[4 + page * 5][0].toString()} onAnswerSelected={(answer) => handleAnswerSelection(4, answer)} selectedAnswer={selectedAnswers[4]} />}
        {page < questions.length / 5 - 1 && <button className="next-button" onClick={calculateTotal}>Next</button>}
        {page === questions.length / 5 - 1 && <button className="next-button" onClick={calculateTotal}>Submit</button>}
        {page === questions.length / 5 && 
        <div className='full-results'>
        <div className="results-summary">
          <h2 className="results-title">Results are in! Here's how your company is progressing in each category of Go-To-Market readiness</h2>
          <div className="results-container">
            <div className="results-tiles">
              <button className='tile-button' onClick={tileClick(0)}>
              <Tile name={profiles[0]} description={summary[0]} progress={scores[0]} />
              </button>
              <button className='tile-button' onClick={tileClick(1)}>
              <Tile name={profiles[1]} description={summary[1]} progress={scores[1]} />
              </button>
              <button className='tile-button' onClick={tileClick(2)}>
              <Tile name={profiles[2]} description={summary[2]} progress={scores[2]} />
              </button>
            </div>
            <div className="results-tiles">
              <button className='tile-button' onClick={tileClick(3)}>
              <Tile name={profiles[3]} description={summary[3]} progress={scores[3]} />
              </button>
              <button className='tile-button' onClick={tileClick(4)}>
              <Tile name={profiles[4]} description={summary[4]} progress={scores[4]} />
              </button>
              <button className='tile-button' onClick={tileClick(5)}>
              <Tile name={profiles[5]} description={summary[5]} progress={scores[5]} />
              </button>
            </div>
          </div>
        </div>  
         <div className="results">
          <div className="breakdown-container">
            <div className="breakdown">
            <div className="breakdown-text">
            <div className="breakdown-container-1">
            <h1 className="breakdown-title">{profiles[tile]}</h1>
            <p className="benchmark-description">{descriptions[tile]}</p>
            </div>
            <h1 className="breakdown-title">Readiness Benchmarks</h1>
            <div className="breakdown-dropdown">
            <p className="benchmark-description-title">Emerging:</p>
            <button className="dropdown-button" onClick={dropEmerging}>{buttonTextEmg}</button>
            </div>
            {emergeDropped && <p className="benchmark-description">{explanations[tile][0]}</p>}
            <div className="breakdown-dropdown">
            <p className="benchmark-description-title">Basic:</p>
            <button className="dropdown-button" onClick={dropBasic}>{buttonTextBsc}</button>
            </div>
            {basicDropped && <p className="benchmark-description">{explanations[tile][1]}</p>}
            <div className="breakdown-dropdown">
            <p className="benchmark-description-title">Advanced:</p>
            <button className="dropdown-button" onClick={dropAdv}>{buttonTextAdv}</button>
            </div>
            {advDropped && <p className="benchmark-description">{explanations[tile][2]}</p>}
            </div>
            <div className='breakdown-progress'>
              <progress className="score-bar" value={scores[tile]} max={30}></progress>
              <h2 className="score-text-emg">Emerging</h2>
              <hr className='basic-line' />
              <h2 className="score-text-bsc">Basic</h2>
              <hr className='advanced-line' />
              <h2 className="score-text-adv">Advanced</h2>
            </div>
            </div>
          <div className="benchmark-buttons">
          <div className='top-button-container'>
          <button className='return-button' onClick={scrollToTop}>Return to Top</button>
          </div>
          <div className='summary-button-container'>
          <button className='return-button' onClick={showSummary}>Show Summary</button>
          </div>
          </div>
          </div>
        </div>
        </div>}
        {page > questions.length / 5 &&
          <div className="summary-page">
            <h1>Go-To-Market Readiness Report</h1>
            <div>The SalesSparx FUSE process is a systematic approach designed to enhance go-to-market (GTM) maturity and accelerate sales growth. The start of the process is a maturity gap analysis to identify a company's strengths and weaknesses accross 6 key components:</div>
            <div className="results-container">
              <div className="results-tiles">
                <Tile name={profiles[0]} description={summary[0]} progress={scores[0]} />
                <Tile name={profiles[1]} description={summary[1]} progress={scores[1]} />
                <Tile name={profiles[2]} description={summary[2]} progress={scores[2]} />
              </div>
              <div className="results-tiles">
                <Tile name={profiles[3]} description={summary[3]} progress={scores[3]} />
                <Tile name={profiles[4]} description={summary[4]} progress={scores[4]} />
                <Tile name={profiles[5]} description={summary[5]} progress={scores[5]} />
              </div>
            </div>
            <div>Something about how based on our experience, we’ve identified the most effective strategies for improving your score at each level</div>
            <div className='improvements'>
              <div className='progress-titles'>
                <h2>{profiles[0]}</h2>
                <h2>{levelProgress(0)}</h2>
              </div>
              <ul>
                {getImprovements(0).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='progress-titles'>
                <h2>{profiles[1]}</h2>
                <h2>{levelProgress(1)}</h2>
              </div>
              <ul>
                {getImprovements(1).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='progress-titles'>
                <h2>{profiles[2]}</h2>
                <h2>{levelProgress(2)}</h2>
              </div>
              <ul>
                {getImprovements(2).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='progress-titles'>
                <h2>{profiles[3]}</h2>
                <h2>{levelProgress(3)}</h2>
              </div>
              <ul>
                {getImprovements(3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='progress-titles'>
                <h2>{profiles[4]}</h2>
                <h2>{levelProgress(4)}</h2>
              </div>
              <ul>
                {getImprovements(4).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='progress-titles'>
                <h2>{profiles[5]}</h2>
                <h2>{levelProgress(5)}</h2>
              </div>
              <ul>
                {getImprovements(5).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        }
      </div>
      {page < questions.length / 5 && <div className="floating-block">
      <div className="percentage">{Math.round((page / (questions.length / 5)) * 100)}%</div>
        <progress className="progress" value={page} max={questions.length / 5}></progress>
      </div>}
      </div>}
    </div>
  )
}

export default App
