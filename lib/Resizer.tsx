import React, { useCallback, useState } from "react"

export interface ResizerProps {
  children: React.ReactNode
  style?: React.CSSProperties
  defaultSize?: { width: number; height: number }
}

export const Resizer: React.FC<ResizerProps> = ({
  children,
  style,
  defaultSize,
}) => {
  const [size, setSize] = useState(defaultSize ?? { width: 200, height: 200 })

  // Event handlers for mouse events
  const startResizing = useCallback(
    (e: React.MouseEvent, horizontal: boolean, vertical: boolean) => {
      e.preventDefault()
      const startX = e.clientX
      const startY = e.clientY
      const startWidth = size.width
      const startHeight = size.height

      const doResize = (moveEvent: MouseEvent) => {
        let newWidth = startWidth
        let newHeight = startHeight

        if (horizontal) {
          newWidth = startWidth + moveEvent.clientX - startX
        }
        if (vertical) {
          newHeight = startHeight + moveEvent.clientY - startY
        }

        setSize({ width: newWidth, height: newHeight })
      }

      const stopResizing = () => {
        window.removeEventListener("mousemove", doResize)
        window.removeEventListener("mouseup", stopResizing)
      }

      window.addEventListener("mousemove", doResize)
      window.addEventListener("mouseup", stopResizing)
    },
    [size]
  )

  const startHorizontalResizing = useCallback(
    (e: React.MouseEvent) => {
      startResizing(e, true, false)
    },
    [startResizing]
  )

  const startVerticalResizing = useCallback(
    (e: React.MouseEvent) => {
      startResizing(e, false, true)
    },
    [startResizing]
  )

  const startDiagonalResizing = useCallback(
    (e: React.MouseEvent) => {
      startResizing(e, true, true)
    },
    [startResizing]
  )

  return (
    <div
      className="resizer"
      style={{
        ...style,
        width: size.width,
        height: size.height,
        position: "relative",
      }}
    >
      <div
        className="resizer container"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <div
        role="button"
        aria-roledescription="horizontal resizer handle"
        className="resizer horizontal handle"
        onMouseDown={startHorizontalResizing}
        style={{
          position: "absolute",
          top: "50%",
          right: -10,
          transform: "translateY(-50%)",
          textAlign: "center",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          width: "20px",
          lineHeight: "10px",
          height: "14px",
          cursor: "ew-resize",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        ↔️ {/* Horizontal resize handle */}
      </div>
      <div
        role="button"
        aria-roledescription="vertical resizer handle"
        className="resizer vertical handle"
        onMouseDown={startVerticalResizing}
        style={{
          position: "absolute",
          left: "50%",
          bottom: -10,
          transform: "translateX(-50%)",
          width: "15px",
          lineHeight: "18px",
          height: "20px",
          cursor: "ns-resize",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        {" "}
        ↕️ {/* Vertical resize handle */}
      </div>
      <div
        role="button"
        aria-roledescription="diagonal resizer handle"
        className="resizer diagonal handle"
        onMouseDown={startDiagonalResizing}
        style={{
          position: "absolute",
          bottom: -10,
          right: -10,
          width: "20px",
          lineHeight: "20px",
          fontSize: "10px",
          transform: "rotate(90deg)",
          height: "20px",
          cursor: "nwse-resize",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        ↗️ {/* Diagonal resize handle */}
      </div>
    </div>
  )
}
