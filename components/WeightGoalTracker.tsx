// components/WeightGoalTracker.tsx
'use client';

import { useState } from 'react';

export default function WeightGoalTracker() {
  const nextYear = new Date().getFullYear() + 1;
  const [currentWeight, setCurrentWeight] = useState<number>(75);
  const [goalWeight, setGoalWeight] = useState<number>(68);
  const [timeframe, setTimeframe] = useState<number>(6);
  
  const weightDifference = goalWeight - currentWeight;
  const monthlyGoal = weightDifference / timeframe;
  
  const calculateProgress = () => {
    if (weightDifference >= 0) return 0; // For weight gain, progress is 0 initially
    const maxLoss = currentWeight * 0.3; // Assume maximum healthy loss is 30% of body weight
    return Math.min(Math.abs(weightDifference) / maxLoss, 1);
  };
  
  const progress = calculateProgress();
  
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg">Current Weight: {currentWeight} kg</span>
          <span className="text-lg">Goal Weight: {goalWeight} kg</span>
        </div>
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>Start</span>
          <span>Goal Progress</span>
          <span>Target</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-lg">
            Current Weight: {currentWeight} kg
          </label>
          <input
            type="range"
            min="40"
            max="150"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block mb-2 text-lg">
            Goal Weight: {goalWeight} kg
          </label>
          <input
            type="range"
            min="40"
            max="150"
            value={goalWeight}
            onChange={(e) => setGoalWeight(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block mb-2 text-lg">
            Timeframe to achieve goal: {timeframe} months
          </label>
          <input
            type="range"
            min="1"
            max="12"
            value={timeframe}
            onChange={(e) => setTimeframe(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-linear-to-r from-green-900/40 to-blue-900/40 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Your {nextYear} Weight Goal Plan</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Weight to {weightDifference > 0 ? 'gain' : 'lose'}:</span>
            <span className="font-bold">{Math.abs(weightDifference)} kg</span>
          </div>
          
          <div className="flex justify-between">
            <span>Monthly target:</span>
            <span className="font-bold">{monthlyGoal.toFixed(1)} kg per month</span>
          </div>
          
          <div className="flex justify-between">
            <span>Weekly target:</span>
            <span className="font-bold">{(monthlyGoal / 4.3).toFixed(1)} kg per week</span>
          </div>
          
          <div className="flex justify-between">
            <span>Estimated completion:</span>
            <span className="font-bold">
              {new Date(new Date().getFullYear() + 1, new Date().getMonth() + timeframe).toLocaleDateString('en-US', { month: 'long' })}
            </span>
          </div>
        </div>
        
        {weightDifference < -10 && (
          <div className="mt-6 p-4 bg-yellow-900/40 rounded-lg">
            <p className="font-bold">⚠️ Note:</p>
            <p>Losing more than 10kg should be done under medical supervision. Consider consulting a healthcare professional.</p>
          </div>
        )}
        
        {weightDifference > 0 && (
          <div className="mt-6 p-4 bg-blue-900/40 rounded-lg">
            <p className="font-bold">💪 Weight Gain Tip:</p>
            <p>Focus on strength training and consuming calorie-dense, nutritious foods to build muscle mass.</p>
          </div>
        )}
        
        {weightDifference < 0 && (
          <div className="mt-6 p-4 bg-green-900/40 rounded-lg">
            <p className="font-bold">🍎 Weight Loss Tip:</p>
            <p>Combine a balanced diet with regular exercise. Aim for a sustainable 0.5-1kg loss per week.</p>
          </div>
        )}
      </div>
    </div>
  );
}