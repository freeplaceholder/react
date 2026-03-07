import React, { forwardRef } from "react";
import { avatarPlaceholderSvg, avatarUrl, toAvatarOptions } from "@freeplaceholder/core";

import type { AvatarComponentProps } from "@freeplaceholder/core";

export interface AvatarProps
  extends AvatarComponentProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  function Avatar(
    {
      name,
      size,
      format,
      bg,
      gradient,
      from,
      via,
      to,
      textColor,
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
      alt,
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const resolvedSize = size ?? 128;
    const src = avatarUrl(
      toAvatarOptions({
        name, size, format, bg, gradient, from, via, to, textColor, textDecoration,
        letterSpacing, fontWeight, opacity, grayscale, blur,
        brightness, contrast, hueRotate, invert, saturate,
        sepia, border, borderColor, borderStyle, rounded,
      }),
    );

    const inlinePlaceholder = lazy ? avatarPlaceholderSvg(resolvedSize, bg) : undefined;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt ?? name}
        width={resolvedSize}
        height={resolvedSize}
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
