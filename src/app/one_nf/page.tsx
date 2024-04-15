const page = () => {
  return (
    <main className="flex justify-center items-center">
        <div className="w-[60%] mt-12 max-sm:w-[90%]">
            <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">First Normal Form (1NF)</h1>
            <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">1NF is like teaching a bunch of rowdy puppies some manners at a dog obedience class. You see, in 1NF, we demand that each table cell holds just one piece of data, just like each puppy needs to learn to sit and stay in its own designated spot. No more stuffing multiple values into a single cell like trying to squeeze too many puppies into a tiny doghouse. By enforcing this rule, 1NF ensures that our data is neatly organized and easy to understand, sparing us from the chaos of tangled information.</p>
            <div className="flex justify-center">
                <img
                    src="/dog.jpg"
                    alt="dog_image"
                    className="rounded-lg mt-6"
                />
            </div>
            <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">A rowdy puppy</p>

            <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
            <div className="flex justify-center mt-3 mb-6">
                <iframe
                    className="w-[90%]"
                    src="https://www.youtube.com/embed/g2yF2gyaN7I"
                    title="Lec 10: First Normal Form in DBMS | 1NF with example | Normalization in DBMS"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    </main>
  )
}

export default page