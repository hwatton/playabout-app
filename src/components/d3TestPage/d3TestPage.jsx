
import LineBlock from "./animLines.jsx"

function DthreeTestPage(props) {

    const clippedStyleTriangle = {
        margin: "10px",
        clipPath: "polygon(0% 0%, 50% 100%, 100% 0%, 0% 0%)",
        transform: "rotate(180deg)"
      }

      const clippedStylePentagon = {
        margin: "10px",
        clipPath: "polygon(18% 0%, 0% 62%, 50% 100%, 100% 62%, 82% 0%, 18% 0%)",
        transform: "rotate(180deg)"
      }

      const clippedStyleCircle = {
        margin: "10px",
        clipPath: "circle(50% at 50% 50%)",
        transform: "rotate(180deg)"
      }

    const sum = ((300)*6 + 1000 + 700 + 3000) + " piunds"


 

    return (
        <div style={{
            backgroundColor: "black"
        }}>
        <div style={clippedStyleTriangle}>
            <div style={{
        position: "fixed",
        top: "-15px",
        left: "14%",
        fontSize: "50px",
        color: "black",
        transform: "rotate(180deg)"
        }}>hW</div>
            <LineBlock
            colours={["#ff0000", "#000000"]}/>
    </div>
    <div style={clippedStylePentagon}>
            <LineBlock
            colours={["#ff00ff", "#bb00bb"]}/>
    </div>
    <div style={clippedStyleCircle}>
            <LineBlock
            colours={["#22eecc", "#00aa66"]}/>
    </div>
    <p style={{color: "white"}}>{sum}</p>

    </div>
    )
}


export default DthreeTestPage