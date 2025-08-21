import React, { Fragment, useState } from "react";
import store from "../../app/store";
import { connect } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { resetModalInfo } from "../../app/actions/Notification";

function Modal(props) {
  let [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    props.resetModalInfo();
  }

  if (props.modalInfo) {
    const {title, description, buttons} = props.modalInfo;
  return (
    <Transition appear show={isOpen} as={Fragment} afterLeave={closeModal}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>

                <div className="flex w-full gap-4 mt-4">
                  {buttons.map((btn) => (
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent bg-${btn.color}-100 px-4 py-2 text-sm font-medium text-${btn.color}-900 hover:bg-${btn.color}-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-${btn.color}-500 focus-visible:ring-offset-2`}
                      // onClick={btn.callback}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
  } else props.resetModalInfo(); return null;
}

const mapStateToProps = (state) => ({
  modalInfo: store.getState().notificationReducer.modalInfo,
});

export default connect(mapStateToProps, { resetModalInfo })(Modal);
