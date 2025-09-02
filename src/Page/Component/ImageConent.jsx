import React from 'react'

const ImageConent = ({title1, title2, Content}) => {
  return (
    <>
            <div className="text-white space-y-7">
                <p>
                    <h1 className="text-7xl font-bold">{title1}</h1>
                    <h1 className="text-7xl font-bold">{title2}</h1>
                </p>
                <p className="max-w-lg bg-gradient-to-r from-black/70 to-transparent p-4 rounded-2xl">
                {Content}
                </p>
            </div>
    </>
  )
}

export default ImageConent