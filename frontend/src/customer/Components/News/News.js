import React from 'react'
import {articles} from "../../../Data/News/news"

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl">
                {articles.map((news) => (
                    <div
                        key={news.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={news.image}
                            alt={news.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-5 flex flex-col  h-full">
                            <h2 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                                {news.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                                {news?.date} • {news?.source}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                {news.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default News
