import { SectionHeadingProps } from '@/types'

const SectionHeading = ({ title, subtitle, alignment = 'center' }: SectionHeadingProps) => {
  return (
    <div className={`section-heading text-${alignment} mb-12`}>
      <h2 className='text-3xl font-bold md:text-5xl'>{title}</h2>
      {subtitle && <p className='text-muted-foreground mt-4'>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
