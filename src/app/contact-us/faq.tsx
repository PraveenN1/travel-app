import FaqBar from '@/components/FaqBar'
import React from 'react'

export default function faq() {
    return (
        <section className='min-h-64 '>
            <div className='text-center'>
                <h2 className='m-2 p-4 text-4xl font-bold border-t-2'>Frequently Asked Questions</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <FaqBar/>
            </div>
        </section>
    )
}
