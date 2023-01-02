const Form = (props) => {
  return (
    <>
      <form onSubmit={props.allInfo}>
        <div className='flex flex-col items-center gap-5 p-5 text-center  border-[#251749] border-2 shadow-md rounded mx-20  my-10 text-white'>
          <label
            for='location'
            className='text-center font-semibold text-[#251749]'
          >
            Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Your location..'
            className='text-center bg-[#495579]  rounded border border-[#251749]'
          />

          <label for='min' className='text-center font-semibold text-[#251749]'>
            Minumim Customer/hr
          </label>
          <input
            type='text'
            id='min'
            name='min'
            placeholder='Minumim ..'
            className='text-center bg-[#495579] rounded border border-[#251749]'
          />

          <label for='max' className='text-center font-semibold text-[#251749]'>
            Maxumim Customer/hr
          </label>
          <input
            type='text'
            id='max'
            name='max'
            placeholder='Maxumim..'
            className='text-center bg-[#495579] text-red rounded border border-[#251749]'
          />

          <label for='min' className='text-center font-semibold text-[#251749]'>
          Average Customer/hr
          </label>
          <input
            type='text'
            id='avg'
            name='avg'
            placeholder='average..'
            className='text-center bg-[#495579] rounded border border-[#251749]'
          />

          <input
            type='submit'
            value='Create'
            class='bg-transparent hover:bg-[#251749] text-black font-semibold hover:text-white py-2 px-4 border border-[#251749] hover:border-transparent rounded'
          />
        </div>
      </form>
    </>
  )
}

export default Form
