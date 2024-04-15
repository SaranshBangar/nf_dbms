const page = () => {
    return (
      <main className="flex justify-center items-center">
          <div className="w-[60%] mt-12 max-sm:w-[90%]">
              <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">Fifth Normal Form (5NF)</h1>
              <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">Last but not least, 5NF saunters into the obedience class like a laid-back dog enjoying a leisurely stroll. It looks at our tables and sees overlapping multi-valued dependencies, like two dogs fighting over the same bone. 5NF gently resolves these conflicts, ensuring that each dependency is distinct and harmonious. It's like teaching our dogs to share their toys without any growling or snarling. With 5NF, our data is in perfect harmony, like a peaceful pack of pups lounging in the sun.</p>
              <div className="flex justify-center">
                  <img
                      src="/two_dogs.jpeg"
                      alt="two_dogs_image"
                      className="rounded-lg mt-6"
                  />
              </div>
              <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">Two dogs fighting over a toy</p>
  
              <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
              <div className="flex justify-center mt-3 mb-6">
                    <iframe
                        className="w-[90%]"
                        src="https://www.youtube.com/embed/7sEMzgclzPo"
                        title="DBMS - Fifth Normal Form (5NF)" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
              </div>
          </div>
      </main>
    )
  }
  
  export default page