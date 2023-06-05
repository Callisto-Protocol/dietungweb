import BaseInput from '@/components/molecules/input';
import React from 'react';

const Login = () => (
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-cover h-screen'>
        <div className='container mx-auto '>
          <div className='flex justify-center px-6 py-20'>
            <div className='w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl'>
              <div
                className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover bg-bottom rounded-l-lg bg-[url("/src/assets/logo.png")]'></div>
              <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
                <h3 className='pt-4 text-lg md:text-2xl font-semibold text-center overflow-clip'>Silahkan Masuk ke Akun Anda </h3>
                <p className='text-sm md:text-base text-center '>Hi, Selamat Datang #JagoanEtung</p>
                 <form className='px-8 pt-10 pb-8 mb-4 flex flex-col gap-4 bg-white rounded'>
                 <BaseInput label="E-mail" placeholder="Masukan E-Mail Anda" type="text" required />
                 <BaseInput label="Sandi" placeholder="Masukan Kata Sandi Anda" type="password" required />
                  <div className='text-end'>
                    <a
                      className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                      href='#'
                    >
                      Lupa Kata Sandi?
                    </a>
                  </div>
                  <div className='mb-1 text-center'>
                    <button
                      className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                      type='button'
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
);

export default Login
