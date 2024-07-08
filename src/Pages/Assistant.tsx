import React, { useState } from "react";

const Assistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResponse(
      `You asked: ${query}. Here's a placeholder response from LearnBuddy.`
    );
  };

  return (
    <div className='min-h-screen p-4'>
      <section className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
          <div className='flex flex-col justify-center gap-4 md:h-[40vh]'>
            <h1 className='text-3xl font-bold text-gray-900 animate-fadeIn'>
              LearnBuddy AI Study Assistant
            </h1>
            <p className='text-xl text-gray-700 animate-fadeIn'>
              Ask questions, get study recommendations, and more!
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='query'
                className='block text-lg font-medium text-gray-900'
              >
                Ask LearnBuddy:
              </label>
              <input
                type='text'
                id='query'
                name='query'
                value={query}
                onChange={handleQueryChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
                placeholder='Ask your question...'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300'
            >
              Ask
            </button>
          </form>

          {response && (
            <div className='mt-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                LearnBuddy's Response:
              </h2>
              <p className='text-gray-700'>{response}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Assistant;
