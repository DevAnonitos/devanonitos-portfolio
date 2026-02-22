import React from "react";

export type Alignment = 'left' | 'center' | 'right';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}
