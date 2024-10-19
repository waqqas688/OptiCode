import { useState } from 'react';

interface CodeInputProps {
  onAnalyze: (inputCode: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onAnalyze }) => {
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const checkCodeLimits = (codeInput: string) => {
    const lines = codeInput.split('\n').length;
    const isTooLong = codeInput.split('\n').some(line => line.length > 120);

    if (lines > 200 || isTooLong) {
      setError('Code exceeds allowed limits.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (checkCodeLimits(code)) {
      onAnalyze(code);
    }
  };

  return (
    <div className="mb-6">
      <textarea
        className="w-full h-64 p-4 bg-gray-50 rounded-md border shadow-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Analyze Code
      </button>
    </div>
  );
};

export default CodeInput;
