
import './App.css';
import JobForm from './components/JobForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-4 shadow-lg">
      <h1 className='text-3xl font-bold text-center mb-8'>JobLog : Your career, your progress—tracked effortlessly. </h1>
      <JobForm/>
    </div>
  );
}

export default App;
