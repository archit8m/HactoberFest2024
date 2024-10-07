function generatePascalTriangle(numRows) {
    const triangle = [];

    for (let row = 0; row < numRows; row++) {
        const newRow = [];
        for (let col = 0; col <= row; col++) {
            // The first and last element of each row is 1
            if (col === 0 || col === row) {
                newRow.push(1);
            } else {
                // Other elements are the sum of the two elements above it
                newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
            }
        }
        triangle.push(newRow);
    }

    return triangle;
}

// Example usage:
const numRows = 5;
const pascalTriangle = generatePascalTriangle(numRows);
console.log(pascalTriangle);
