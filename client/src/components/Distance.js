import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './input'
import fetch from '../utils/fetch'

const esc = encodeURIComponent;

const Distance = () => {
  const [distance, setDistance] = useState(null)
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      lat: 50.0663889,
      lng: -5.714722222222222,
      lat2: 58.6438889,
      lng2: -3.0700000000000003
    }
  })
  const onSubmit = form => {
    const latlng = form.lat + ',' + form.lng
    const latlng2 = form.lat2 + ',' + form.lng2
    fetch(`/distance?latlng=${latlng}&latlng2=${latlng2}`)
      .then(res => setDistance(res.data.distance))
  }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl text-center">Calculate distance</h1>
      <p className="mb-4 text-md text-gray-500">From:</p>
      <Input label="Latitude" id="lat" name="lat" register={register({ required: true })} errors={errors} />
      <Input label="Longitude" id="lng" name="lng" register={register({ required: true })} errors={errors} />
      <p className="mb-4 text-md text-gray-500">To:</p>
      <Input label="Latitude" id="lat2" name="lat2" register={register({ required: true })} errors={errors} />
      <Input label="Longitude" id="lng2" name="lng2" register={register({ required: true })} errors={errors} />
      <div className="flex items-center align-center justify-center flex-col">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Calculate
        </button>
        {distance && <p className="text-lg text-green-500 mt-5">The distance between those 2 points is: {Math.round(distance * 100) / 100} kms</p>}
      </div>
    </form>
  )
}

export default Distance