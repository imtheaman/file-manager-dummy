import Category from './components/Category.comp';
import Navbar from './components/Navbar.comp';
import Search from './components/Search.comp';
import Sidebar from './components/Sidebar.comp';
import Table from './components/Table.comp';

function App() {
  return (
    <div className='min-h-screen flex bg-blue-50'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className='mr-20 p-10'>
          <div className='flex'>
            <div className='flex-1'></div>
            <Search
              className='flex-1'
              placeholder={'Search by name'}
            />
          </div>

          <div className='flex space-x-10'>
            <div>
              <h2 className='uppercase font-semibold'>categories</h2>
              <Category />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
