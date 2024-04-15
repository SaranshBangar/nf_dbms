const page = () => {
    return (
      <main className="flex justify-center items-center">
          <div className="w-[60%] mt-12 max-sm:w-[90%]">
              <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">Fourth Normal Form (4NF)</h1>
              <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">Now, 4NF enters the obedience class like a playful pup with a knack for causing mischief. It looks at our tables and spots tangled relationships, like a mischievous dog wrapping itself around its owner's legs. 4NF untangles these messy dependencies, ensuring that each multi-valued dependency is isolated and understood. It's like teaching our dogs to play nice with others without getting tangled up in their leashes. With 4NF, our data relationships are clear, straightforward, and less likely to trip us up.</p>
              <div className="flex justify-center">
                  <img
                      src="/naughty_dog.jpg"
                      alt="naughty_dog_image"
                      className="rounded-lg mt-6"
                  />
              </div>
              <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">A naughty puppy</p>
  
              <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
              <div className="flex justify-center mt-3 mb-6">
                    <iframe 
                        className="w-[90%]"
                        src="https://www.youtube.com/embed/OBiNTE14EEg"
                        title="DBMS - Fourth Normal Form 4NF"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
              </div>
          </div>
      </main>
    )
  }
  
  export default page