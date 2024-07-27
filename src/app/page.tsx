import { Twitter, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <main className="container max-w-screen-sm pt-5">
        <h1 className="text-4xl font-semibold">cemu</h1>
        <p className="opacity-80 text-base -mt-1"><span>Software</span> Web Developer</p>
        <p className="opacity-50 text-sm w-10/12 mt-1">rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys s</p>
        <button className="mt-3 font-medium bg-sky-500 hover:bg-white hover:text-sky-900 transition duration-300 rounded-md py-1 px-4 text-base">Resume</button>
      </main>

      <section className="container max-w-screen-sm pt-10 space-y-4">
        <h2 className="text-base font-medium">
          <span># </span>
          Project
        </h2>

        <div className="grid gap-x-8 gap-y-5 grid-cols-2">


          <div>
            <div className="overflow-hidden rounded-lg aspect-square bg-gray-800">
            </div>
            <h3 className="text-sm font-medium mt-1 line-clamp-1">
              Mabica Audiobook Website
            </h3>
            <p className="text-xs line-clamp-2 font-normal opacity-50">
              Loremp  kajs kjashd kaj hdl aisu dakj skjd la kjsdh lka
            </p>
          </div>


          <div>
            <div className="overflow-hidden rounded-lg aspect-square bg-gray-800">
            </div>
            <h3 className="text-sm font-medium mt-1 line-clamp-1">
              Mabica Audiobook Website
            </h3>
            <p className="text-xs line-clamp-2 font-normal opacity-50">
              Loremp  kajs kjashd kaj hdl aisu dakj skjd la kjsdh lka
            </p>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg aspect-square bg-gray-800">
            </div>
            <h3 className="text-sm font-medium mt-1 line-clamp-1">
              Mabica Audiobook Website
            </h3>
            <p className="text-xs line-clamp-2 font-normal opacity-50">
              Loremp  kajs kjashd kaj hdl aisu dakj skjd la kjsdh lka
            </p>
          </div>

        </div>
      </section>

      <section className="container max-w-screen-sm pt-10 space-y-4">
        <h2 className="text-base font-semibold">
          <span># </span>
          Contact
        </h2>
        <div className="space-y-2">
          <div>
            <h3>
              E-Mail
            </h3>
            <p className="opacity-50">alcemy.hai@gmail.com</p>
          </div>

          <div>
            <h3>
              No Phone
            </h3>
            <p className="opacity-50">+62 8765 615 283</p>
          </div>

          <div>
            <h3>
              Social Media
            </h3>
            <div className="flex gap-2">
              <div className="p-2 bg-gray-100/50 hover:bg-gray-100 hover:text-sky-900 transition duration-300	rounded-md ">
                <Twitter size={20} />
              </div>

              <div className="p-2 bg-gray-100/50 hover:bg-gray-100 hover:text-sky-900 transition duration-300	rounded-md ">
                <Instagram size={20} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="opacity-50 pb-5 pt-10 text-center">
        This website was created by <span>cemu</span> with 👍.
      </footer>

    </>
  );
}
