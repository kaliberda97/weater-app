import {context} from '../CityContext'

const Form = () => {
  const { fetchWeatherData ,city,setCity } = context();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
     setCity('');
  };

  return (
    <div className="flex justify-center w-full mb-5 p-5">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search for books..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-l-md px-4 py-2 outline-none bg-blue-200  focus:ring-indigo-600  w-96"
        />
        <button
          type="submit"
          className="bg-sky-700 text-white rounded-r-md px-4 py-2 ml-2 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};


export default Form;