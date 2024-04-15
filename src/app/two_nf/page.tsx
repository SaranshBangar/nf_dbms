const page = () => {
    return (
      <main className="flex justify-center items-center">
          <div className="w-[60%] mt-12 max-sm:w-[90%]">
              <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">Second Normal Form (2NF)</h1>
              <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">Now, 2NF steps in like a dog whisperer at the obedience class. It looks at our tables and says, "Hey, let's not repeat ourselves unnecessarily." Just like teaching our furry friends to fetch without running circles around the yard, 2NF wants to streamline our data. It ensures that each piece of information is related directly to the table's primary key. No more listing the same information over and over again like a dog barking incessantly for attention. With 2NF, our data is efficient, concise, and less likely to drive us barking mad.</p>
              <div className="flex justify-center">
                  <img
                      src="/dog_keeper.jpg"
                      alt="dog_keeper_image"
                      className="rounded-lg mt-6"
                  />
              </div>
              <p className="text-lg italic text-center text-slate-500 mt-1 max-sm:text-sm">A dog sitter</p>
  
              <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Extra resource</h2>
              <div className="flex justify-center mt-3 mb-6">
                <iframe
                    className="w-[90%]"
                    src="https://www.youtube.com/embed/O16btnzfuYU"
                    title="Lec 11: Second Normal Form in DBMS | 2NF in DBMS | Normalization in DBMS"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
          </div>
      </main>
    )
  }
  
  export default page