import BaseInput from '@/components/molecules/input';
import React from 'react';

const Login = () => (
      <div className='bg-slate-500 bg-cover'>
        <div className='container mx-auto'>
          <div className='flex justify-center px-6 py-12'>
            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
              <div
                className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")]'></div>
              <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
                <h3 className='pt-4 text-2xl text-center'>Silahkan Masuk ke Akun Anda </h3>
                <p className='text-md text-center'>Hi, Selamat Datang #JagoanDietung</p>
                 <form className='px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 border-2 bg-white rounded'>
                 <BaseInput label="E-mail" type="text" required />
                 <BaseInput label="Sandi" type="password" required />



                  <div className='mb-6 text-center'>
                    <button
                      className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                      type='button'
                    >
                      Masuk
                    </button>
                  </div>
                  <hr className='mb-6 border-t' />
                  <div className='text-center'>
                    <a
                      className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                      href='#'
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className='text-center'>
                    <a
                      className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                      href='./index.html'
                    >
                    
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
);

export default Login
