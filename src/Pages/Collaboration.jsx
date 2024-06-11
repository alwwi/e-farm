import React from 'react'
import Footer from '../Components/Footer/Footer'

const Solution = () => {
  return (
    <div className=''>
      <div className='mt-[150px] mx-36'>
        <div className='flex'>
          <div className='text-left w-[40%]'>
            <div className='tittle'>
              <h1>Bergabung Menjadi Mitra Kami</h1>
            </div>
            <div className='text-fill mt-8'>
              <p>
                e-Farm adalah solusi budidaya ternak end-to-end dan kami sangat terbuka untuk kemitraan. Kami ingin turut meningkatkan budidaya pelanggan dan kembangkan bisnis Anda dengan sumber pendapatan baru. Jika Anda terlibat di industri budidaya ternak, mari bekerja sama!
              </p>
            </div>
            <div className='button'>
              <button className='bg-[#BC6949] px-4 py-2 font-semibold text-white rounded-[27px] no-underline'>
                Bergabung mitra
              </button>
            </div>
          </div>
          <div className='image w-[40%]'>
            <img className='float-right' src={`${process.env.PUBLIC_URL}Image-Assets/farmer2-removebg-preview.png`} alt="" />
          </div>
        </div>
      </div>

      <div className='w-full bg-[#E2E0DE] px-36 grid place-content-center py-16 gap-14'>

        <div className='title'>
          <h1>Mengapa Harus Bergabung dengan e-Farm?</h1>
        </div>

        <div className='flex gap-20'>

          <div className='image w-[120px]'>
            <div className='h-[120px] bg-[#C0C0C0] rounded-[21px]'>
              <img src="" alt="" />
            </div>
            <div className='text-[14px] text-center'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className='image w-[120px]'>
            <div className='h-[120px] bg-[#C0C0C0] rounded-[21px]'>
              <img src="" alt="" />
            </div>
            <div className='text-[14px] text-center'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className='image w-[120px]'>
            <div className='h-[120px] bg-[#C0C0C0] rounded-[21px]'>
              <img src="" alt="" />
            </div>
            <div className='text-[14px] text-center'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className='image w-[120px]'>
            <div className='h-[120px] bg-[#C0C0C0] rounded-[21px]'>
              <img src="" alt="" />
            </div>
            <div className='text-[14px] text-center'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className='mt-[150px] mx-36 border-solid'>
        <div>
          <h1>
            Jadilah Mitra Kami
          </h1>
        </div>

        <div className='my-10'>
          <p>
            Bergabunglah dalam misi JALA untuk meningkatkan produktivitas petambak udang dan tingkatkan pendapatan dengan memperkenalkan solusi industri budidaya udang JALA kepada jaringan Anda.
          </p>
        </div>

        <div className='form font-poppins'>
          <form action="">
            <div className='grid grid-cols-2 gap-3'>
              <div className='grid text-left'>
                <label htmlFor="">First name</label>
                <input type="text" />
              </div>
              <div className='grid text-left'>
                <label htmlFor="">Last name</label>
                <input type="text" />
              </div>
              <div className='grid text-left'>
                <label htmlFor="">Phone number</label>
                <input type="text" />
              </div>
              <div className='grid text-left'>
                <label htmlFor="">Country</label>
                <input type="text" />
              </div>
              <div className='grid text-left'>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className='grid text-left'>
                <label htmlFor="">Company name</label>
                <input type="text" />
              </div>
            </div>
            <div className='grid text-left mt-4'>
              <label htmlFor="" className='align-bottom'>Message</label>
              <textarea name="" id=""></textarea>
            </div>

            <div className='agreement text-xs mt-4 w-full'>
              <div className='flex'>
                <input type="checkbox" />
                <label htmlFor="" className='mt-2 ml-2'>
                  I agree to the terms and conditions
                </label>
              </div>
              <div className='flex'>
                <input type="checkbox" />
                <label htmlFor="" className='mt-2 ml-2'>
                  I agree to the privacy policy
                </label>
              </div>
            </div>

            <div className='btn-submit w-full text-left'>
              <input type="submit" name="" id="" className='px-3 border-none bg-[#BC6949] text-white font-medium my-4'/>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>

    
  )
}

export default Solution
