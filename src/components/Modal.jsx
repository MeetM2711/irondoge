import React from 'react';

function Modal({ isOpen, onClose, index, children }) {

    console.log('Modal isOpen:', isOpen); // Check isOpen value
    if (!isOpen) {
        console.log('Modal is not open, returning null');
        return null;
    }

    console.log('Modal is open, rendering children:', children);


    const handleOverlayClick = (e) => {
        if (e.target.id === 'overlay') {
            onClose();
        }
    };

    return (
        <>
            <div
                id="overlay"
                className="w-full h-full fixed top-0 left-0 bg-neutral-950 bg-opacity-50 z-40 backdrop-blur-sm"
                onClick={handleOverlayClick}
            >
            </div>
            <div className="h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 w-full max-w-3xl">
                <div className="card-gradiant-bg text-white p-3 md:p-5 rounded-2xl relative max-h-screen w-full">

                    {children}
                    
                    <button
                        className="absolute top-4 right-4 text-white-light bg-transparent border-0 focus:ring-0 outline-none cursor-pointer"
                        onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Modal;


