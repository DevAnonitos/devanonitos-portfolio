import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ title, subtitle, alignment = 'center' }: SectionHeadingProps) => {
  return (
    <div className={`section-heading text-${alignment} mb-12`}>
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
