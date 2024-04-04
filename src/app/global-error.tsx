"use client";

const GlobalError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const handleReset = () => reset();

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={handleReset}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
