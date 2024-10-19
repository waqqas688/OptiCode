export const calculateComplexity = (code: string) => {
    const loopMatches = code.match(/for|while/g) || [];
    const conditionMatches = code.match(/if|else/g) || [];
    const complexity = loopMatches.length + conditionMatches.length;
  
    return {
      time: `O(n^${complexity})`,
      space: `O(n^${Math.ceil(complexity / 2)})`,
    };
  };
  