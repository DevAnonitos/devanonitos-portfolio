import { Skeleton } from '../ui/skeleton'

const SectionLoading = () => {
  return (
    <div className='mx-auto w-full max-w-7xl space-y-4 px-4 py-20 md:px-8'>
      <Skeleton className='h-10 w-1/3' />
      <Skeleton className='h-[400px] w-full' />
    </div>
  )
}

export default SectionLoading
