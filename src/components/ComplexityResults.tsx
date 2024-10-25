interface ComplexityResultsProps {
    complexity: { time: string; space: string };
  }
  
  const ComplexityResults: React.FC<ComplexityResultsProps> = ({ complexity }) => {
    return (
      <div className="w-full bg-white p-6 rounded-md shadow-md mt-6">
        <h2 className="text-xl font-semibold">Complexity Results</h2>
        <p className="text-green-500 mt-2">Time Complexity: {complexity.time}</p>
        <p className="text-yellow-500">Space Complexity: {complexity.space}</p>
      </div>
    );
  };
  //There is an error regarding the logic here 
  export default ComplexityResults;
  
