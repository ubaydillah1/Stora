import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <section className="bg-brand p-12 hidden w-1/2 lg:flex xl:w-2/5 flex-co justify-center">
        <div className="max-w-[430px] max-h-[800px] justify-center flex flex-col space-y-5">
          <div className="flex items-center">
            <Image
              src="/assets/icons/logo.png"
              alt="logo"
              width={82}
              height={82}
            />

            <p className="text-[37px] text-white font-semibold">Stora</p>
          </div>

          
          <div className="space-y-4 text-white my-[18px]">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>

          <Image
            src="/assets/images/files.png"
            alt="files-illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105 "
          />
        </div>
      </section>
      <div className="flex flex-1 flex-col lg:items-center p-4 py-10 justify-center lg:p-10 lg:py-0 h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
