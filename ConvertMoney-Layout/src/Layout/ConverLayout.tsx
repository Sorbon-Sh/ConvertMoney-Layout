import FormLayout from "./FormLayout";

const ConverLayout = () => {
  return (
    <>
      <main className="h-screen  grid place-content-center main">
        <section className="w-vw-90 h-vw-36 bg-blue-500   rounded-2xl grid place-items-center glass section__convert">
          <div className="convert__block  w-vw-80 bg-white flex justify-center ">
            <FormLayout />
          </div>
        </section>
      </main>
    </>
  );
};

export default ConverLayout;
