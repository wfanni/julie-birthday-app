export default function Welcome({ setGallery, setStart }) {

    function handleStartGallery() {
        setGallery(true);
        setStart(false)
    }
    return (
        <div className="absolute xs:w-[85vw] z-20 bg-white rounded-3xl flex flex-col gap-4 justify-center items-center text-center sm:p-8 xs:p-4 xs:pb-6 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="sm:text-[3.5rem] xs:text-[1.5rem] text-transparent font-kalnia bg-shining bg-clip-text bg-[500%_auto] animate-textShine">Boldog szülinapot Bari!</h1>
            <p className="sm:text-xl xs:text-[1rem] font-josefin">As a birthday gift, I wanted to gather some photos we took together over these <span className="font-bebas text-3xl text-[#FF4D6D]">18!!!</span> years!</p>
            <p className="sm:text-xl xs:text-[1rem] font-josefin">Enjoy the <span className="text-[#FF8FA3]">#nostalgia</span></p>
            <button className="mt-4 px-4 py-2 bg-[#FB6F92] text-slate-50 rounded-full transition-all duration-200 hover:scale-110 hover:bg-[#FF8FAB]" onClick={handleStartGallery}>Okéééé</button>
        </div>
    )
}