const page = () => {
    return (
      <main className="flex justify-center items-center">
          <div className="w-[60%] mt-12 max-sm:w-[90%]">
              <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">Boyce-Codd Normal Form (BCNF)</h1>
              <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">BCNF strides onto the scene like a celebrity dog trainer at the obedience class. It&apos;s not satisfied with just any old tricks; it wants our data to perform flawlessly. BCNF looks at our tables and demands perfection, ensuring that every table is free from any non-trivial functional dependencies on candidate keys. It's like asking our dogs to perform complicated agility courses with precision and grace. With BCNF, our data is in a league of its own, shining like a champion show dog at the Westminster Kennel Club.</p>
              <div className="flex justify-center">
                  <img
                      src="/celebrity_trainer.jpg"
                      alt="dog_trainer_image"
                      className="rounded-lg mt-6"
                  />
              </div>
              <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">A celebrity trainer</p>
  
              <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
              <div className="flex justify-center mt-3 mb-6">
                    <iframe
                        className="w-[90%]"
                        src="https://www.youtube.com/embed/nSnaGLtwgMc"
                        title="Lec 13: BCNF in DBMS | Boyce Codd Normal Form | Normalization in DBMS"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
              </div>
          </div>
      </main>
    )
  }
  
  export default page