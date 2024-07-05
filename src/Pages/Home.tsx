const Home = () => {
  return (
    <div className='min-h-screen p-4'>
      <section className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
          <div className='flex flex-col justify-center gap-4 md:h-[40vh]'>
            <h1 className='text-3xl font-bold text-gray-900 animate-fadeIn'>
              Welcome to LearnBuddy
            </h1>
            <p className='text-xl text-gray-700 animate-fadeIn'>
              Your personalized AI learning companion, tailored just for you.
            </p>
          </div>
          <div className='animate-bounce'>
            <img src='/LearnBuddy.svg' alt='LearnBuddy Logo' />
          </div>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 animate-fadeIn'>
            AI-Powered Learning Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Personalized Study Plans
              </h3>
              <p className='text-sm text-gray-700'>
                LearnBuddy creates customized study plans based on your learning
                style and preferences.
              </p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Real-Time Progress Tracking
              </h3>
              <p className='text-sm text-gray-700'>
                Track your progress and receive AI-driven recommendations to
                optimize your learning journey.
              </p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Interactive Learning Resources
              </h3>
              <p className='text-sm text-gray-700'>
                Access interactive content and quizzes tailored to reinforce
                your understanding.
              </p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Adaptive Learning Paths
              </h3>
              <p className='text-sm text-gray-700'>
                LearnBuddy adjusts learning paths based on your performance and
                areas needing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 animate-fadeIn'>
            Student Testimonials
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <p className='text-gray-700'>
                "LearnBuddy's personalized study plans have revolutionized my
                learning experience. It feels like having a personal tutor!"
              </p>
              <p className='text-gray-900 font-semibold mt-4'>Sophia Lee</p>
              <p className='text-gray-600'>Student at LearnBuddy</p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <p className='text-gray-700'>
                "The real-time progress tracking helps me stay focused and
                motivated to achieve my learning goals."
              </p>
              <p className='text-gray-900 font-semibold mt-4'>David Smith</p>
              <p className='text-gray-600'>Engineering Student</p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
              <p className='text-gray-700'>
                "Interactive learning resources are engaging and effective,
                making learning enjoyable and productive."
              </p>
              <p className='text-gray-900 font-semibold mt-4'>Emily Taylor</p>
              <p className='text-gray-600'>Data Science Enthusiast</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
