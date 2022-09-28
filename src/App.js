import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import ResultPage from './Pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='quiz' element={<QuizPage />} />
      <Route path='result' element={<ResultPage />} />
    </Routes>
  );
}

export default App;
