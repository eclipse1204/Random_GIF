import logo from './logo.svg';
import './App.css';
import Tag from './components/Tag';
import Random from './components/Random';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background overflow-x-hidden'>
      <h1 className='bg-white w-[95%] text-center mt-[40px] mx-auto rounded-[15px] font-bold text-3xl px-10 py-4'>RANDOM GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
