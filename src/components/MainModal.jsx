import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the path based on your file structure
import Button from './Button'; // Adjust the path based on your file structure

function MainModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
            <Modal isOpen={isOpen} onClose={closeModal}>
                {/* Content to be displayed in the Modal */}
                <div className="text-center py-5 space-y-6">
                    <h2 className="text-xl md:text-3xl leading-relaxed font-trajan">Private Sale Phase II is live Now</h2>
                    <div className="text-sm md:text-base leading-relaxed max-w-md mx-auto space-y-4">
                        <p>From Meme to Movement: Don't Miss the Chance to Join IronDoge's Revolution and get 80% extra irondoge</p>
                        <div className="text-white text-base text-light font-semibold text-center">
                            elite@irondoge.io
                        </div>
                        <div className="text-white text-base text-light font-semibold text-center">
                            To request promo code mail at <a href="#" className="text-secondary">To Get benefits of 80% extra tokens get Promo code now!</a>
                        </div>
                    </div>
                    <Button buttonName="buy now" />
                    <div className="text-secondary text-base text-light font-semibold text-center">$200 Buy ~ $27000 at Listing</div>
                </div>
            </Modal>
    );
}

export default MainModal;
