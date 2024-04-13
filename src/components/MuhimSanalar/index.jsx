import React from 'react'

const MuhimSanalar = () => {
    const data = [
        {
            title: "Title",
            content: "Content"
        },
        {
            title: "Title",
            content: "Content"
        },
        {
            title: "Title",
            content: "Content"
        },
        {
            title: "Title",
            content: "Content"
        },
        {
            title: "Title",
            content: "Content"
        },
        {
            title: "Title",
            content: "Content"
        },
    ]
    return (
        <main>
            <div className='bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 '>
                <h1 className='text-[2em] lg:text-[4em] font-semibold'>Muhim Sanalar</h1>
            </div>
            <div className='max-w-6xl mx-auto my-10 lg:my-16 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16'>
                {
                    data.map((item, idx) => (
                        <div key={idx} className='flex lg:text-[1.2em] 2xl:text-[1.4em] gap-x-2 lg:gap-x-3'>
                            <h1 className='font-bold'>{item.title}:</h1>
                            <p>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}
export default MuhimSanalar