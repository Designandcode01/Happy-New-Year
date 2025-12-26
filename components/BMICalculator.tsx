// components/BMICalculator.tsx
'use client';

import { useState, useEffect } from 'react';

type BMIResult = {
  bmi: number;
  category: string;
  color: string;
};

export default function BMICalculator() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);
  
  const calculateBMI = () => {
    let bmi: number;
    
    if (unitSystem === 'metric') {
      // BMI = weight(kg) / height(m)^2
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight(lb) / height(in)^2) * 703
      bmi = (weight / (height * height)) * 703;
    }
    
    bmi = parseFloat(bmi.toFixed(1));
    
    let category: string;
    let color: string;
    
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      color = 'text-green-400';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-400';
    } else {
      category = 'Obese';
      color = 'text-red-400';
    }
    
    setBmiResult({ bmi, category, color });
  };
  
  useEffect(() => {
    calculateBMI();
  }, [height, weight, unitSystem]);
  
  return (
    <div>
      <div className="mb-8 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${unitSystem === 'metric' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setUnitSystem('metric')}
        >
          Metric (cm, kg)
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${unitSystem === 'imperial' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setUnitSystem('imperial')}
        >
          Imperial (inches, lb)
        </button>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-lg">
            Height: {height} {unitSystem === 'metric' ? 'cm' : 'inches'}
          </label>
          <input
            type="range"
            min={unitSystem === 'metric' ? 100 : 48}
            max={unitSystem === 'metric' ? 250 : 96}
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-300 mt-1">
            <span>{unitSystem === 'metric' ? '100 cm' : '48 in'}</span>
            <span>{unitSystem === 'metric' ? '250 cm' : '96 in'}</span>
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-lg">
            Weight: {weight} {unitSystem === 'metric' ? 'kg' : 'lb'}
          </label>
          <input
            type="range"
            min={unitSystem === 'metric' ? 30 : 66}
            max={unitSystem === 'metric' ? 200 : 440}
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-300 mt-1">
            <span>{unitSystem === 'metric' ? '30 kg' : '66 lb'}</span>
            <span>{unitSystem === 'metric' ? '200 kg' : '440 lb'}</span>
          </div>
        </div>
      </div>
      
      {bmiResult && (
        <div className="mt-8 p-6 bg-linear-to-r from-blue-900/40 to-purple-900/40 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">Your BMI Result</h3>
          <div className="text-5xl font-bold mb-2">{bmiResult.bmi}</div>
          <div className={`text-2xl font-semibold ${bmiResult.color}`}>{bmiResult.category}</div>
          
          <div className="mt-6 bg-gray-800 h-4 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-blue-500 via-green-500 to-red-500"
              style={{ width: `${Math.min(bmiResult.bmi * 2, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-gray-300">
        <h4 className="font-bold text-lg mb-2">BMI Categories:</h4>
        <ul className="space-y-1">
          <li>• Underweight: BMI less than 18.5</li>
          <li>• Normal weight: BMI 18.5 to 24.9</li>
          <li>• Overweight: BMI 25 to 29.9</li>
          <li>• Obesity: BMI 30 or greater</li>
        </ul>
      </div>
    </div>
  );
}