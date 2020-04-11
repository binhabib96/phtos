import React from 'react'

function imagecard({ image }) {
    const tags = image.tags.split(',');

    return (
        <div>
            <div className="md:max-w-sm rounded overflow-hidden shadow-lg">
                <img src={image.webformatURL} alt="" className="w-full" />
                <div className="md:px-6 py-4 sm:px-2 py-2">
                    <div className="md:front-bold md:text-purple-500 md:text-xl md:mb-2 text-purple-500 text-tiny">
                        photo by {image.user}

                    </div>


                </div>
                <div className="md:px-6 md:py-4 md:text-sm md:front-semibold px-2 py-2 text-xxs">
                    <ul>
                        <li>
                            <strong>
                                Views:{image.views}
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Download:{image.downloads}
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Likes:{image.likes}
                            </strong>
                        </li>
                    </ul>
                </div>
                <div className=" md:px-6 md:py-4 px-2 py-1">

                    {tags.map((tag, index) => (
                        <span key={index} className="sm:hidden inline-block bg-gray-200 rounded-full md:px-3 md:py-1 md:text-sm font-semibold text-gray-600 md:mr-2 mr-0.5 text-xxs px-1 py-1">
                            #{tag}

                        </span>
                    ))}
                </div>


            </div>


        </div>
    )
}

export default imagecard


