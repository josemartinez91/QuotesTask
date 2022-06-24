import React from 'react';
import quotes from './quotes.json'
import Button from './Button';

const QuoteBox = ({qoIndex, changeQuotes}) => {
    

    const colors = [
        '#845EC2','#D65DB1','#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#00C9A7', '#4D8076','#4B4453',
        '#B0A8B9', '#C34A36', '#FF8066','#926C00', '#00D2FC', '#009EFA', '#D83121'
        ];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`
    return (
        <div>
            <div className='card'>
                
                <p style={{color:colors[randomColor]}}><i className="fa-solid fa-quote-left"></i>{quotes[qoIndex].quote}</p>
                <p style={{color:colors[randomColor]}}>{quotes[qoIndex].author}</p>
                <Button changeQuotes={changeQuotes} color={colors[randomColor]}/>
            </div>
        </div>
    );
};

export default QuoteBox;