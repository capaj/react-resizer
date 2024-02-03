import "./App.css"
import { Resizer } from "../dist/Resizer"

function App() {
  return (
    <>
      <main>
        <h2>Resizer Demo</h2>
        <Resizer
          defaultSize={{
            width: 200,
            height: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "lightblue",
            }}
          >
            <h3>Resize me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, libero a facilisis ultrices, ipsum nunc aliquam libero,
              vitae interdum libero nunc eget purus. Sed nec odio auctor,
              ultrices libero vitae, cursus libero. Nulla facilisi. Nulla
              facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
              facilisi. Nulla
            </p>
          </div>
        </Resizer>

        <Resizer>
          <div
            style={{
              backgroundColor: "yellow",
            }}
          >
            <h3>Second sample</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, libero a facilisis ultrices, ipsum nunc aliquam libero,
              vitae interdum libero nunc eget purus. Sed nec odio auctor,
              ultrices libero vitae, cursus libero. Nulla facilisi. Nulla
              facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
              facilisi. Nulla
            </p>
          </div>
        </Resizer>

        {/* Github link */}
        <br />
        <a href="https://github.com/capaj/react-resizer">Github repo</a>
      </main>
    </>
  )
}

export default App
