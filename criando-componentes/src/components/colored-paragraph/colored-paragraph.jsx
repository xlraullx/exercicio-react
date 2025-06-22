import './colored-paragraph.css';

const coloredParagraph = ({ children, Colors }) => {
    const colorLetters = (colors, [...letter]) => {
        let coloredLetters = letter.map((letter, index) => {
            const colorIndex = index % colors.length

            return <span key={index} style={{ color: colors[colorIndex] }}>{letter}</span>
        });

        return coloredLetters;
    }

    return (
        <p className="uppercase-paragraph">
            {colorLetters(Colors, [...children])}
        </p>
    )
}

export default coloredParagraph;   