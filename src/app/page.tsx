import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[60%] mt-12 max-sm:w-[90%]">

        <h1 className="text-5xl text-center font-sans font-bold text-slate-200 max-sm:text-3xl">What is a Database Management System (DBMS)?</h1>
        <p className="text-2xl text-slate-400 font-sans font-medium mt-4 max-sm:text-[1.4rem]">A Database Management System (DBMS) is like a librarian on steroids. Imagine your data is a huge library with shelves upon shelves of books, each representing a piece of information. Now, managing all those books manually would be a nightmare, right? That's where the DBMS comes in. It's the superhero librarian who organizes, stores, retrieves, and secures all that data faster than you can say "encyclopedia."</p>
        
        <h1 className="text-5xl text-center font-sans font-bold text-slate-200 mt-6 max-sm:text-3xl">What is Normal Form (NF) and why do we need it?</h1>
        <p className="text-2xl text-slate-400 font-sans font-medium mt-3 max-sm:text-[1.4rem]">Normal Form (NF) is like the gentle referee in the wild world of databases. Think of your data as a group of energetic puppies, all eager to play and make a mess. NF steps in like the seasoned dog trainer, establishing a set of guidelines to ensure order and clarity amidst the canine chaos.</p>
        <p className="text-2xl text-slate-400 font-sans font-medium mt-3 max-sm:text-[1.4rem]">Why do we need NF, you ask? Well, imagine trying to make sense of a room full of puppies darting in every direction, chewing on everything in sight, and leaving a trail of confusion behind. Similarly, without NF, databases can become tangled webs of redundant information, conflicting dependencies, and inefficiencies.</p>
        <p className="text-2xl text-slate-400 font-sans font-medium mt-3 max-sm:text-[1.4rem]">NF steps in with its systematic approach, breaking down the data into smaller, more manageable pieces and organizing it in a logical manner. By adhering to NF, we ensure that each piece of information serves a unique purpose, relationships between data are clear and concise, and updates or modifications happen smoothly without causing a data meltdown.</p>
        <p className="text-2xl text-slate-400 font-sans font-medium mt-3 max-sm:text-[1.4rem]">In essence, NF is the guiding light that helps us tame the unruly data beasts and transform them into well-behaved, structured entities, making our lives as database developers and users much easier and more efficient.</p>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">First Normal Form (1NF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">Imagine you have a table of party guests, but some sneaky prankster decides to jot down multiple phone numbers for each guest in a single cell. That's a big no-no in 1NF land! It's like telling your guests, "Hey, you can't bring your entire entourage to the party. One number per guest, please!"</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/one_nf"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : 1NF
            </button>
          </Link>
        </div>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Second Normal Form (2NF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">Now, let's say you've got a table with party details, including guests and the gifts they brought. But wait, some guests brought multiple gifts, and you end up listing the same guest's name for each gift. In 2NF, we say, "Hey, let's not repeat ourselves unnecessarily. Each piece of information should be recorded independently." It's like ensuring every gift gets its own thank-you card, rather than one card for all the gifts from the same person.</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/two_nf"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : 2NF
            </button>
          </Link>
        </div>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Third Normal Form (3NF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">Picture this: You've got a table with party snacks, and next to each snack, you've listed the supplier's name and their contact info. But hold on, why do we need the supplier's contact info here? In 3NF, we say, "Let's stick to the essentials." If a piece of information doesn't directly relate to the primary key, it's outta there! It's like realizing you don't need to know the pizza delivery guy's favorite color to enjoy your slice.</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/three_nf"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : 3NF
            </button>
          </Link>
        </div>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Boyce-Codd Normal Form (BCNF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">BCNF is like the VIP section of the data club. It's for those tables that are just too cool to mingle with the regular folks. If a table's attributes are all functionally dependent on the primary key, congratulations! You've earned your spot in the BCNF lounge. It's like saying, "Sorry, ordinary tables. This one's for the truly elite."</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/bcnf"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : BCNF
            </button>
          </Link>
        </div>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Fourth Normal Form (4NF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">Ever heard of a data dependency love triangle? That's what 4NF is all about. It's like sorting out messy relationships in your data. If you've got multiple independent multi-valued dependencies going on, 4NF steps in and says, "Let's untangle this web of dependencies and keep things simple." It's like playing matchmaker for your data.</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/four_nf"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : 4NF
            </button>
          </Link>
        </div>
        
        <h2 className="text-3xl font-sans font-semibold text-slate-200 mt-8 max-sm:text-2xl max-sm:text-center">Fifth Normal Form (5NF)</h2>
        <p className="text-xl text-slate-400 font-sans font-medium mt-3 max-sm:text-center">Finally, we have 5NF, the zen master of data normalization. It's like achieving perfect balance in your data universe. If you've got overlapping multi-valued dependencies, 5NF swoops in and harmonizes everything. It's like finding that elusive state of data nirvana where everything just makes sense.</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <Link href={"/five_nf"}>
            <button className="inline-flex h-12 mb-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Learn more : 5NF
            </button>
          </Link>
        </div>
      
      </div>
    </main>
  );
}
