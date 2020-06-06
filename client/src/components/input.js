import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({ id, label, name, register, errors }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      name={name}
      className={classNames(
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        { 'border-red-500': errors[id] }
      )}
      id={id}
      type="text"
      placeholder={label}
      ref={register}
    />
    {errors[id] && errors[id].type === 'required' && <p class="text-red-500 text-xs italic">Please introduce a value.</p>}
  </div>
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    required: PropTypes.bool
  })
}

export default Input