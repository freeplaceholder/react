import React, { forwardRef } from "react";
import { placeholderSvg, placeholderUrl, toPlaceholderOptions } from "@freeplaceholder/core";

import type { PlaceholderComponentProps } from "@freeplaceholder/core";

export interface PlaceholderProps
  extends PlaceholderComponentProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  imgWidth?: number | string;
  imgHeight?: number | string;
}

export const Placeholder = forwardRef<HTMLImageElement, PlaceholderProps>(
  function Placeholder(
    {
      width,
      height,
      format,
      bg,
      gradient,
      from,
      via,
      to,
      textColor,
      text,
      textSize,
      textAlign,
      textTransform,
      textDecoration,
      letterSpacing,
      fontWeight,
      opacity,
      grayscale,
      blur,
      brightness,
      contrast,
      hueRotate,
      invert,
      saturate,
      sepia,
      border,
      borderColor,
      borderStyle,
      rounded,
      lazy = true,
      imgWidth,
      imgHeight,
      alt,
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const src = placeholderUrl(
      toPlaceholderOptions({
        width, height, format, bg, gradient, from, via, to, textColor, text, textSize,
        textAlign, textTransform, textDecoration, letterSpacing,
        fontWeight, opacity, grayscale, blur, brightness, contrast,
        hueRotate, invert, saturate, sepia, border, borderColor,
        borderStyle, rounded,
      }),
    );

    const inlinePlaceholder = lazy ? placeholderSvg(width, height, bg) : undefined;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt ?? `${width}\u00d7${height} placeholder`}
        width={imgWidth}
        height={imgHeight}
        loading={lazy ? "lazy" : undefined}
        className={className}
        style={{
          ...(inlinePlaceholder ? { backgroundImage: `url("${inlinePlaceholder}")`, backgroundSize: "cover" } : {}),
          ...style,
        }}
        {...rest}
      />
    );
  },
);
