'use client'
 
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const handleReset = () => reset();

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={handleReset}>Try again</button>
      </body>
    </html>
  )
}