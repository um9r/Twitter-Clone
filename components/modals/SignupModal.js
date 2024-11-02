import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
    const isOpen = useSelector(state => state.modals.signupModalOpen)
    const dispatch = useDispatch()
    console.log(isOpen)

  return (
    <>
      <button
        className="bg-white text-black
            w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]
            "
            onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
      open={isOpen}
      onClose={() => dispatch(closeSignupModal())}
      className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[400px] bg-black text-white md:w-[560px]
        md:h-[600px] border border-gray-700 rounded-lg
        ">
            <div>
                <button className="bg-white text-black w-full font-bold
                text-lg p-2
                ">
                    Sign In as Guest
                </button>
            </div>
        </div>
      </Modal>
    </>
  );
}
