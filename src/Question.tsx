import React, { useEffect, useState } from 'react';
import './Question.css';

interface QuestionProps {
    text: string;
    onAnswerSelected: (index: number) => void;
    selectedAnswer: number | null;
}

const Question: React.FC<QuestionProps> = ({ text, onAnswerSelected, selectedAnswer }) => {
    const [answer, setAnswer] = useState<number | null>(null);

    useEffect(() => {
        setAnswer(selectedAnswer);
    }, [selectedAnswer]);

    const handleBubbleClick = (index: number) => {
        setAnswer(index);
        onAnswerSelected(index);
    };
    
    return (
        <div className='question'>
            <span className="bubble-text">{text}</span>
            <div className="bubbles">
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        className={`bubble ${answer === index ? 'selected' : ''} ${index === 0 || index === 6 ? 'xlarge' : index == 1 || index == 5 ? 'large' : index === 2 || index === 4 ? 'medium' : 'small'}`}
                        onClick={() => handleBubbleClick(index)}
                    />
                ))}
            </div>
            <hr className='line' />
        </div>
    );
}

export default Question;