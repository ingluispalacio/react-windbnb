function Modal() {
    return (
        <div id="modal" className="fixed inset-0 flex items-center justify-center bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300">
            <div id="modalContent" className="bg-white rounded-2xl shadow-xl transform scale-95 transition-transform duration-300 w-11/12 sm:w-10/12 md:w-3/4 max-w-full max-h-[90vh]">
            </div>
        </div>
    );
}

export default Modal;