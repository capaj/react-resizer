import { render, fireEvent } from "@testing-library/react"
import { Resizer } from "./Resizer"
import { describe, it, expect, afterEach } from "vitest"

/**
 * @vitest-environment jsdom
 */

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = ""
})

describe("Resizer", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Resizer>Resize me</Resizer>)
    expect(getByText("Resize me")).toMatchInlineSnapshot(`
      <div
        class="resizer container"
        style="width: 100%; height: 100%; overflow: hidden;"
      >
        Resize me
      </div>
    `)
  })

  it("resizes horizontally", () => {
    const { getByText } = render(<Resizer>Resize me</Resizer>)
    const resizerHandle = getByText("↔️")
    const resizer = resizerHandle.parentElement

    fireEvent.mouseDown(resizerHandle, { clientX: 0, clientY: 0 })
    fireEvent.mouseMove(resizerHandle, { clientX: 100, clientY: 0 })
    fireEvent.mouseUp(resizerHandle)

    expect(resizer?.style.width).toBe("300px") // Assuming initial width was 200px
  })

  it("resizes vertically", () => {
    const { getByText } = render(<Resizer>Resize me</Resizer>)
    const resizerHandle = getByText("↕️")
    const resizer = resizerHandle.parentElement

    fireEvent.mouseDown(resizerHandle, { clientX: 0, clientY: 0 })
    fireEvent.mouseMove(document, { clientX: 0, clientY: 100 })
    fireEvent.mouseUp(document)

    expect(resizer?.style.height).toBe("300px") // Assuming initial height was 200px
  })

  it("resizes diagonally", () => {
    const { getByText } = render(<Resizer>Resize me</Resizer>)
    const resizerHandle = getByText("↗️")
    const resizer = resizerHandle.parentElement

    fireEvent.mouseDown(resizerHandle, { clientX: 0, clientY: 0 })
    fireEvent.mouseMove(document, { clientX: 100, clientY: 100 })
    fireEvent.mouseUp(document)

    expect(resizer?.style.width).toBe("300px") // Assuming initial width was 200px
    expect(resizer?.style.height).toBe("300px") // Assuming initial height was 200px
  })
})
