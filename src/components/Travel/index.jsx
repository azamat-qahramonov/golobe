import React from 'react';

const BookingCard = ({ bgImg, placeName, subTitle, cost, btnHref, btnTitle }) => {
    return (
        <div className="w-[296px] h-[420px] rounded-lg overflow-hidden relative shadow-lg">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            ></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-2xl font-bold">{placeName}</h3>
                <p className="text-sm mb-2">{subTitle}</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">${cost}</p>
                </div>
                <a
                    href={btnHref}
                    className="mt-4 block text-center bg-[#8DD3BB] text-black w-[248px] h-[40px] px-4 py-2 rounded-md font-medium hover:bg-[#7bc7a8] transition"
                >
                    {btnTitle}
                </a>
            </div>
        </div>
    );
};

const Travel = () => {
    const places = [
        {
            bgImg: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?q=80&w=1171&auto=format&fit=crop",
            placeName: "Melbourne",
            subTitle: "An amazing journey",
            cost: 700,
            btnHref: "#",
            btnTitle: "Book Flight",
        },
        {
            bgImg: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1287&auto=format&fit=crop",
            placeName: "Paris",
            subTitle: "A Paris Adventure",
            cost: 600,
            btnHref: "#",
            btnTitle: "Book Flight",
        },
        {
            bgImg: "https://images.unsplash.com/photo-1534974790529-3af7cf1c4075?q=80&w=1087&auto=format&fit=crop",
            placeName: "London",
            subTitle: "London eye adventure",
            cost: 350,
            btnHref: "#",
            btnTitle: "Book Flight",
        },
        {
            bgImg: "https://images.unsplash.com/photo-1606298246186-08868ab77562?q=80&w=1287&auto=format&fit=crop",
            placeName: "Columbia",
            subTitle: "Amazing streets",
            cost: 700,
            btnHref: "#",
            btnTitle: "Book Flight",
        },
    ];

    return (
        <div className='container relative mx-auto px-10 mt-[-180px] py-24 flex flex-col gap-10'>
            <div className='z-10 flex justify-between items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-[32px] leading-[39.01px] text-[#000000]'>
                        Fall into travel
                    </h2>
                    <p className='font-normal text-[16px] leading-[19.5px] text-[#000000]'>
                        Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br /> the travel tools to get you to your destination.
                    </p>
                </div>
                <div>
                    <button className='w-[80px] h-[40px] gap-[10px] border rounded-md font-medium text-[14px] leading-[17.07px] text-[#112211]'>See All</button>
                </div>
            </div>
            <section className="container mx-auto p-8">
                <div className="grid gap-20 place-items-center sm:grid-cols-2 lg:grid-cols-4">
                    {places.map((place, index) => (
                        <BookingCard key={index} {...place} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Travel;
