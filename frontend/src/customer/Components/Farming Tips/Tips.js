import React from 'react'
import {farmingTipsData} from '../../../Data/Tips/tips'

console.log("farming data",farmingTipsData)

const Tips = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl">
        {farmingTipsData.map((cropData, index) => (
            <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                {/* Crop Image */}
                <img
                    src={cropData.image}
                    alt={`${cropData.crop} Image`}
                    className="h-48 w-full object-cover"
                />
                {/* Crop Content */}
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        {cropData.crop}
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        {cropData.tips.map((tip, i) => (
                            <li key={i} className="text-gray-600">
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Tips
