import { registerOTel } from '@vercel/otel'

export function register() {
  /**
   * Register OpenTelemetry for observability.
   * This works on both Node.js and Edge runtimes.
   */
  registerOTel({ serviceName: 'devanonitos-portfolio' })

  /**
   * Conditional initialization based on runtime.
   * Useful for database connections or server-only setups.
   */
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // nodejs runtime specific setup
    console.log('[Instrumentation] Node.js runtime initialized')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // edge runtime specific setup
    console.log('[Instrumentation] Edge runtime initialized')
  }
}
