![FreePlaceholder](https://freeplaceholder.com/snippet.png)

# @freeplaceholder/react

React components for [FreePlaceholder.com](https://freeplaceholder.com) — the free, open-source placeholder image and avatar service.

## Tailwind-Inspired Parameters

> **All parameters are named after Tailwind CSS utility classes.** React props use camelCase versions of the Tailwind names (e.g. `textColor` instead of `text-color`, `fontWeight` instead of `font-weight`, `borderColor` instead of `border-color`, `textSize` instead of `text-size`).

## Installation

```bash
npm install https://github.com/freeplaceholder/react
```

```bash
yarn add https://github.com/freeplaceholder/react
```

```bash
pnpm add https://github.com/freeplaceholder/react
```

> **Peer dependencies:** `react >= 18` and `react-dom >= 18`

## Quick Start

```tsx
import { Placeholder, Avatar } from "@freeplaceholder/react";

function App() {
  return (
    <div>
      <Placeholder width={600} height={400} />
      <Avatar name="John Doe" />
    </div>
  );
}
```

## Components

### `<Placeholder />`

Renders a placeholder image as an `<img>` element.

```tsx
<Placeholder
  width={800}
  height={600}
  format="png"
  bg="3b82f6"
  textColor="ffffff"
  text="Hero Image"
  textSize={32}
  fontWeight="semibold"
  opacity={90}
  grayscale={false}
  border={2}
  borderColor="1e40af"
  borderStyle="dashed"
  className="rounded-lg"
/>
```

#### Props

| Prop       | Type          | Required | Default               | Description                                                                 |
| ---------- | ------------- | -------- | --------------------- | --------------------------------------------------------------------------- |
| `width`    | `number`      | Yes      | —                     | Placeholder width in pixels (1–4096)                                        |
| `height`   | `number`      | Yes      | —                     | Placeholder height in pixels (1–4096)                                       |
| `format`   | `ImageFormat` | No       | `"svg"`               | Output format: `svg`, `png`, `jpg`, `webp`                                  |
| `bg`       | `string`      | No       | auto                  | Background color — hex without `#`                                          |
| `gradient` | `GradientDirection` | No   | —                     | Gradient direction: to-t, to-tr, to-r, to-br, to-b, to-bl, to-l, to-tl, radial |
| `from`     | `string`      | No       | —                     | Gradient start color — hex without `#`                                      |
| `via`      | `string`      | No       | —                     | Gradient middle color — hex without `#`                                     |
| `to`       | `string`      | No       | —                     | Gradient end color — hex without `#`                                        |
| `textColor`| `string`      | No       | auto                  | Text color — hex without `#`                                                |
| `text`     | `string`      | No       | `"{width}×{height}"`  | Overlay text                                                                |
| `textSize` | `number`      | No       | auto                  | Font size in pixels                                                         |
| `fontWeight` | `FontWeight` | No       | —                     | Tailwind font weight: thin, extralight, light, normal, medium, semibold, bold, extrabold, black |
| `opacity`  | `number`      | No       | `100`                 | Opacity 0–100                                                               |
| `grayscale`| `boolean`     | No       | —                     | Apply grayscale filter                                                      |
| `border`   | `number`      | No       | `0`                   | Border width in pixels                                                      |
| `borderColor` | `string`    | No       | —                     | Border color — hex without `#`                                               |
| `borderStyle` | `BorderStyle` | No      | `"solid"`             | Border style (solid, dashed, dotted, double, none)                           |
| `textAlign`   | `TextAlign`   | No      | —                     | Text alignment (left, center, right)                                         |
| `textTransform` | `TextTransform` | No   | —                     | Transform: uppercase, lowercase, capitalize, none                             |
| `textDecoration` | `TextDecoration` | No   | —                     | Decoration: underline, overline, line-through, none                          |
| `letterSpacing` | `LetterSpacing \| string` | No | —                  | Spacing: tighter, tight, normal, wide, wider, widest, or px                  |
| `blur`        | `number`      | No      | —                     | Gaussian blur in px (0–100)                                                  |
| `brightness`  | `number`      | No      | —                     | Brightness 0–200 (100 = normal)                                              |
| `contrast`    | `number`      | No      | —                     | Contrast 0–200 (100 = normal)                                                 |
| `hueRotate`   | `number`      | No      | —                     | Hue rotation 0–360 degrees                                                    |
| `invert`      | `boolean`     | No      | —                     | Invert colors                                                                |
| `rounded`     | `Rounded \| number` | No  | —                     | Border radius: none, sm, md, lg, xl, 2xl, 3xl, full, or px                  |
| `saturate`    | `number`      | No      | —                     | Saturation 0–200 (100 = normal)                                               |
| `sepia`       | `boolean`     | No      | —                     | Sepia tone filter                                                            |
| `lazy`        | `boolean`     | No      | `true`                | Enable lazy loading with inline SVG placeholder                              |
| `imgWidth` | `number \| string` | No | —                     | HTML `width` attribute on the `<img>`                                        |
| `imgHeight`| `number \| string` | No | —                     | HTML `height` attribute on the `<img>`                                      |
| `alt`      | `string`      | No       | `"{width}×{height} placeholder"` | Alt text                                                    |
| `...rest`  | `ImgHTMLAttributes` | No | —                   | Any valid `<img>` attribute (e.g. `className`, `style`, `loading`)           |

### `<Avatar />`

Renders an avatar image as an `<img>` element.

```tsx
<Avatar
  name="Jane Smith"
  size={64}
  format="webp"
  bg="10b981"
  textColor="ffffff"
  fontWeight="medium"
  opacity={95}
  grayscale={false}
  border={1}
  borderColor="059669"
  className="rounded-full"
/>
```

#### Props

| Prop        | Type          | Required | Default  | Description                                                                 |
| ----------- | ------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`      | `string`      | Yes      | —        | Name used for initials and color                                            |
| `size`      | `number`      | No       | `128`    | Image size in pixels (1–1024)                                               |
| `format`    | `ImageFormat` | No       | `"svg"`  | Output format: `svg`, `png`, `jpg`, `webp`                                  |
| `bg`        | `string`      | No       | auto     | Background color — hex without `#`                                          |
| `gradient`  | `GradientDirection` | No   | —        | Gradient direction: to-t, to-tr, to-r, to-br, to-b, to-bl, to-l, to-tl, radial |
| `from`      | `string`      | No       | —        | Gradient start color — hex without `#`                                      |
| `via`       | `string`      | No       | —        | Gradient middle color — hex without `#`                                     |
| `to`        | `string`      | No       | —        | Gradient end color — hex without `#`                                        |
| `textColor` | `string`      | No       | auto     | Text color — hex without `#`                                                 |
| `fontWeight`| `FontWeight`  | No       | —        | Tailwind font weight: thin, extralight, light, normal, medium, semibold, bold, extrabold, black |
| `opacity`   | `number`      | No       | `100`    | Opacity 0–100                                                               |
| `grayscale` | `boolean`     | No       | —        | Apply grayscale filter                                                      |
| `border`    | `number`      | No       | `0`      | Border width in pixels                                                      |
| `borderColor` | `string`    | No       | —        | Border color — hex without `#`                                              |
| `borderStyle` | `BorderStyle` | No      | `"solid"` | Border style (solid, dashed, dotted, double, none)                          |
| `textDecoration` | `TextDecoration` | No   | —        | Decoration: underline, overline, line-through, none                          |
| `letterSpacing` | `LetterSpacing \| string` | No | —       | Spacing: tighter, tight, normal, wide, wider, widest, or px                 |
| `blur`         | `number`      | No       | —        | Gaussian blur in px (0–100)                                                 |
| `brightness`   | `number`      | No       | —        | Brightness 0–200 (100 = normal)                                             |
| `contrast`     | `number`      | No       | —        | Contrast 0–200 (100 = normal)                                               |
| `hueRotate`    | `number`      | No       | —        | Hue rotation 0–360 degrees                                                  |
| `invert`       | `boolean`     | No       | —        | Invert colors                                                               |
| `saturate`     | `number`      | No       | —        | Saturation 0–200 (100 = normal)                                              |
| `sepia`        | `boolean`     | No       | —        | Sepia tone filter                                                           |
| `lazy`         | `boolean`     | No       | `true`   | Enable lazy loading with inline SVG placeholder                             |
| `alt`       | `string`      | No       | `name`   | Alt text                                                                    |
| `...rest`   | `ImgHTMLAttributes` | No | —       | Any valid `<img>` attribute                                                 |

## URL Helpers

This package re-exports the URL builder functions from `@freeplaceholder/core`:

```tsx
import { placeholderUrl, avatarUrl } from "@freeplaceholder/react";

const src = placeholderUrl({ width: 300, height: 200, format: "png" });
const avatar = avatarUrl({ name: "Alice", size: 48 });
```

## Configuration

Override the default base URL for self-hosted instances:

```tsx
import { configure } from "@freeplaceholder/react";

configure({ baseUrl: "https://my-placeholder.example.com" });
```

## Documentation

Full API documentation and interactive examples are available at [freeplaceholder.com/docs](https://freeplaceholder.com/docs).

## Support

For issues specific to this package, please [open a GitHub issue](https://github.com/freeplaceholder/react/issues). For general questions or support, contact [support@twentymileswest.com](mailto:support@twentymileswest.com).

## License

[MIT](./LICENSE)