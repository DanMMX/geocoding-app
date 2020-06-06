import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './input'
import fetch from '../utils/fetch'

const Geocode = () => {
  const [geocode, setGeocode] = useState(null)
  const { handleSubmit, register, getValues, errors } = useForm({
    defaultValues: {
      lat: 50.0663889,
      lng: -5.714722222222222,
      lat2: 58.6438889,
      lng2: -3.0700000000000003
    }
  })
  const onSubmit = form => fetch(`/?address=${form.address}`)
      .then(res => {
        console.log(res.data)
        setGeocode(res.data)
      })

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl text-center">Get geocode of an address</h1>
      <Input label="Address" id="address" name="address" register={register({ required: true })} errors={errors} />
      <div className="flex items-center align-center justify-center flex-col">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Calculate
        </button>
        {geocode && (
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Location from: {getValues('address')}</div>
              <p class="text-gray-700 text-base">
                Lat: {geocode[0].geometry.location.lat}
              </p>
              <p class="text-gray-700 text-base">
                Lng: {geocode[0].geometry.location.lng}
              </p>
            </div>
          </div>

        )}
      </div>
    </form>
  )
}

export default Geocode