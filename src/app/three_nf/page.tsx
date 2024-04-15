const page = () => {
    return (
      <main className="flex justify-center items-center">
          <div className="w-[60%] mt-12 max-sm:w-[90%]">
              <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">Third Normal Form (3NF)</h1>
              <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">Ah, 3NF, the Zen master of data organization, enters the scene like a wise old dog at the obedience class. It looks at our tables and asks, "Do we really need all this extra fluff?" Just like a dog nudging its owner to focus on the essential commands, 3NF trims the fat from our data. It ensures that each piece of information relates directly to the primary key and doesn't depend on other non-key attributes. No more unnecessary details cluttering up our tables like a dog collecting sticks it'll never use. With 3NF, our data is sleek, focused, and ready to fetch insights at a moment's notice.</p>
              <div className="flex justify-center">
                  <img
                      src="/old_dog.jpeg"
                      alt="old_dog_image"
                      className="rounded-lg mt-6"
                  />
              </div>
              <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">An older dog</p>
  
              <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
              <div className="flex justify-center mt-3 mb-6">
                <iframe
                    src="https://www.youtube.com/embed/R2Z-DgZ6QFQ"
                    title="Lec 12: Third Normal Form in DBMS | 3NF with example | Normalization in DBMS"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
          </div>
      </main>
    )
  }
  
  export default page