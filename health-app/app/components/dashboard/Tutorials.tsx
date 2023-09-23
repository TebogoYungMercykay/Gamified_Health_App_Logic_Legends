import React, { useState } from 'react';
import Link from 'next/link';
import { IoLogoYoutube } from 'react-icons/io5';
import HealthTutorials from '@/app/components/data/TutorialsData';
import Modal from '../Modals/modal';

const Tutorials = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const openVideoModal = (tutorial: any) => {
    setSelectedTutorial(tutorial);
    setShowVideoModal(true);
  };

  const openTextModal = (tutorial: any) => {
    setSelectedTutorial(tutorial);
    setShowModal(true);
  };

  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 text-xl flex justify-center">
        Challenge Tutorials
      </strong>
      <div className="mt-4 flex flex-col gap-3">
        {
          HealthTutorials.map((Tutorial) => (
            <div key={Tutorial.id} className="flex items-start hover:no-underline">
              <div className="w-10 h-10 min-w-[2.5rem] rounded-sm" onClick={() => openVideoModal(Tutorial)}>
                <IoLogoYoutube
                  className="w-full h-full text-red-700"
                  size={40}
                />
              </div>
              <div className="ml-4 flex-1" onClick={() => openTextModal(Tutorial)}>
                <p className="text-sm text-gray-800">{Tutorial.Tutorial_name}</p>
                <span
                   className={`${Tutorial.Tutorial_status !== "Open" ?'text-red-500': Tutorial.Tutorial_participants > 20 ? 'text-green-500' : 'text-orange-500' } text-xs font-medium`}
                >
                  {Tutorial.Tutorial_status !== "Open" ? 'Closed Challenge' : Tutorial.Tutorial_participants + ' Views'}
                </span>
              </div>
              <div className="text-xs text-gray-400 pl-1.5">{Tutorial.Tutorial_instructor}</div>
            </div>
          ))
        }
      </div>
      <Modal isVisible={showVideoModal} onClose={() => setShowVideoModal(false)}>
        {selectedTutorial && (
            <div className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    {selectedTutorial.Tutorial_name}
                </h3>
                <iframe
                    className="aspect-video w-full"
                    src={selectedTutorial.video_src}
                    title="YouTube video player"
                    frameBorder={selectedTutorial.frameBorder}
                    allow={selectedTutorial.allow}
                    allowFullScreen
                ></iframe>
            </div>
        )}
      </Modal>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {selectedTutorial && (
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              {selectedTutorial.Tutorial_name}
            </h3>
            <p className="mb-5 font-normal text-gray-500">
              {selectedTutorial.content}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Tutorials;