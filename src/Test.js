import React, { useState } from 'react';

import { Popover } from '@headlessui/react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
                {/* <DownloadIcon className="w-5 h-5 mr-1" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

                Download
            </button>

            {isOpen && (
                <Popover as="div" className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg">
                    <div className="py-1">
                        <a href="/path/to/asset1" download className="flex  items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Asset 1
                        </a>
                        <a href="/path/to/asset2" download className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {/* <PhotographIcon className="w-4 h-4 mr-2" /> */}
                            Asset 2
                        </a>
                    </div>
                </Popover>
            )}
        </div>
    );
};

export default Dropdown;
