'use client';
import { useCallback, useState, type CSSProperties } from 'react';

export const useHoverStyle = (
  baseStyle: CSSProperties,
  hoverStyle: CSSProperties,
  enabled: boolean = true
) => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    if (enabled) setHovered(true);
  }, [enabled]);

  const onMouseLeave = useCallback(() => setHovered(false), []);

  const style: CSSProperties = hovered && enabled ? { ...baseStyle, ...hoverStyle } : baseStyle;

  return { style, hovered, onMouseEnter, onMouseLeave };
};
