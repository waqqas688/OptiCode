'use client';

import CodeInput from '../components/CodeInput';
import ComplexityResults from '../components/ComplexityResults';
import { useState } from 'react';
import { calculateComplexity } from '../utils/calculateComplexity';

const Home = () => {
  const [code, setCode] = useState<string>('');
  const [complexity, setComplexity] = useState<{ time: string; space: string } | null>(null);

  const handleAnalyzeCode = (inputCode: string) => {
    setCode(inputCode);
    const complexityResult = calculateComplexity(inputCode);
    setComplexity(complexityResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Code Complexity Analyzer</h1>
      <CodeInput onAnalyze={handleAnalyzeCode} />
      {complexity && <ComplexityResults complexity={complexity} />}
    </div>
  );
};

export default Home;
