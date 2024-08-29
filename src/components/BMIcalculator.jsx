import React, { useState } from 'react';
import './styles.css';

function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState("");
    const [message, setMessage] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();

        if (height && weight) {
            const bmiValue = Math.floor((weight / (height * height))*10000);
            console.log(bmiValue);
            
            setBMI(bmiValue);
            if (bmiValue < 18.5) {
                setMessage('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setMessage('Normal weight');
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setMessage('Overweight');
            } else {
                setMessage('Obese');
            }
        } else {
            setMessage('Please enter valid height and weight.');
            setBMI('');
        }
    };

    return (
        <div className="bmi-calculator">
            <h1>BMI Calculator</h1>
            <form>
                <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                    placeholder="Height (cm)" 
                    step="1" 
                />
                <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    placeholder="Weight (kg)" 
                    step="1" 
                />
                <br />
                <button type="submit" onClick={calculateBMI}>Calculate</button>
            </form>
            {bmi && (
                <div className="result">
                    <h2>Your BMI is: {bmi}</h2>
                    <h3>{message}</h3>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;
