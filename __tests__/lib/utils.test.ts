import { cn } from '@/lib/utils'

describe('cn', () => {
  it('gộp class bình thường', () => {
    expect(cn('text-sm', 'font-medium')).toBe('text-sm font-medium')
  })

  it('ghi đè tailwind class bị conflict', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('bỏ qua giá trị falsy', () => {
    expect(cn('block', undefined, false && 'hidden', null, 'mt-2')).toBe('block mt-2')
  })
})
