import { useMoralis } from "react-moralis";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

export default function ChangeUsername() {
  let [isOpen, setIsOpen] = useState(false);
  const { user, setUserData, isUserUpdating, useError } = useMoralis();
  const [input, setInput] = useState("");

  function closeModal() {
    setInput("");
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

    const setUsername = (e) => {
        e.preventDefault();

      if (!input) return;

      setUserData({
        username: input,
      });
    };

  return (
    <>
      <div className="absolute top-[70px] right-5 hover:text-[#fb03ff] text-[#057cc1] font-bold text-sm">
        <button type="button" onClick={openModal} className="">
          Change Username
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <XIcon onClick={closeModal} className="h-4 w-4 mb-4 cursor-pointer hover:opacity-50" />
                <Dialog.Title
                  as="h3"
                  className=" mx-4 text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  New Username:
                </Dialog.Title>
                <form className="flex bg-black opacity-80 px-4 py-3 mx-1 max-w-2xl shadow-xl rounded-full border-4 border-[#fb03ff]">
                  <input
                    type="text"
                    placeholder={`Enter a Username ${user.getUsername()}...`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow pr-2 outline-none bg-transparent text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disable={isUserUpdating}
                    onClick={setUsername}
                    className="font-bold text-[#fb03ff]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
