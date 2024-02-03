# react-resizer

a simple react component which allows user to resize the component container in two direction.

⚠️ distribution on npm only has ESM version of the package. If you need CJS version you cannot use this.

## Installation

You can install it with pnpm:

```bash
pnpm i @capaj/react-resizer
```

## Usage

```tsx
import { Resizer } from "@capaj/resizer"

function App() {
  return (
    <>
      <Resizer>
        <div
          style={{
            backgroundColor: "yellow",
          }}
        >
          <h3>Resize me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, libero a facilisis ultrices, ipsum nunc aliquam libero,
            vitae interdum libero nunc eget purus. Sed nec odio auctor, ultrices
            libero vitae, cursus libero. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          </p>
        </div>
      </Resizer>
    </>
  )
}
```

all elements have classes, so you can style them any way you like:

- `resizer`
  - `resizer container`
  - `resizer horizontal handle`
  - `resizer vertical handle`
  - `resizer diagonal handle`
