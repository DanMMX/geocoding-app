import React, { useState } from 'react';
import Geocode from './Geocode'
import ReverseGeocode from './ReverseGeocode'
import Distance from './Distance'

const options = {
  get: {
    label: 'Get Geocode',
    form: Geocode
  },
  reverse: {
    label: 'Reverse Geocode',
    form: ReverseGeocode
  },
  distance: {
    label: 'Calculate Distance',
    form: Distance
  }
}

const App = () => {
  const [activeForm, setActiveForm] = useState('distance')
  const CurrentForm = activeForm && options[activeForm].form

  return (
    <div className="flex flex-wrap h-screen items-center content-center justify-center">
      <div className="w-full max-w-xl">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center flex-wrap mb-6">
            <span className="w-full block text-xl font-bold text-center mb-4">
              What would you want to do ?
            </span>
            {Object.keys(options).map(option => (
              <label key={option} className="w-1/2 block text-gray-500 font-bold text-center" onClick={() => setActiveForm(option)}>
                <input className="mr-2 leading-tight" type="radio" name="selection" defaultChecked={option === activeForm} />
                <span className="text-sm">
                  {options[option].label}
                </span>
              </label>
            ))}
          </div>
          <CurrentForm />
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Daniel Rocha
        </p>
      </div>
    </div>
  );
}

export default App;
