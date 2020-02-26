export const getPuzzle = async (wordCount) => {
    try {
        const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
        if (response.status === 200) {
            const data = await response.json();
            return data.puzzle
        }
    } catch (error) {
        console.log(`An error has taken place${error}`)
    }
};