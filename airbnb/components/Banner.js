import { useRouter } from "next/dist/client/router";

function Banner() {
  const router = useRouter();

  const searchFlexible = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 10);
    
    router.push({
      pathname: "/search",
      query: {
        location: "",
        startDate: new Date().toISOString(),
        endDate: tomorrow.toISOString(),
        noOfGuests: 1,
      },
    });
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <img
        src="https://links.papareact.com/0fm"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button onClick={searchFlexible} className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
