const Modal = (props: {
  children: React.ReactNode,
  onClose: () => void,
  showClose?: boolean
}) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex flex-row justify-center items-center">
      <div className="rounded-2xl max-w-[100%] max-h-[100vh] bg-white px-12 py-8 transition-opacity scroll-bar relative">
        {props.children}
        <div className="absolute text-gray-400 text-4xl top-4 right-4 scale-y-[.85] cursor-pointer rounded-full overflow-hidden" onClick={props.onClose}>X</div>
      </div>
    </div>
  )
}

export default Modal
