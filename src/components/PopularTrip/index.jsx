import React, { Fragment } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({ className, variant = "default", size = "default", asChild = false, ...props }) => {
    const variants = {
        default: "bg-primary text-white hover:bg-[#9BE0C8] active:bg-[#82CBB2] focus:bg-[#A5EBD3] disabled:bg-gray-400",
        outline: "border border-primary text-primary hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
        default: "h-12 px-4 rounded py-2",
        sm: "h-8 px-4 rounded py-2",
    };

    const Comp = asChild ? "span" : "button";

    return (
        <Comp
            className={cn("inline-flex items-center justify-center font-semibold", variants[variant], sizes[size], className)}
            {...props}
        />
    );
};

const SectionTitle = ({ title, subTitle, className }) => (
    <div className={className}>
        <h2 className="mb-2 text-2xl font-semibold text-black">{title}</h2>
        <p className="opacity-75">{subTitle}</p>
    </div>
);

const PlacesCard = ({ imgSrc, placeName, tags }) => (
    <div className="flex items-center gap-4 rounded-lg border p-4 shadow-md">
        <img className="w-24 h-24 rounded" src={imgSrc} alt={placeName} />
        <div>
            <p className="font-semibold text-secondary opacity-70">{placeName}</p>
            <p>
                {tags.map((tag, i) => (
                    <Fragment key={i}>
                        <span className="text-sm font-medium text-secondary">{tag}</span>
                        {i < tags.length - 1 && <span className="mx-2">•</span>}
                    </Fragment>
                ))}
            </p>
        </div>
    </div>
);

const places = [
    { id: 1, img: "https://images.unsplash.com/photo-1567527259232-3a7fcd490c55", place: "Istanbul, Turkey", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 2, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9", place: "Sydney, Australia", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 3, img: "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6", place: "Baku, Azerbaijan", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 4, img: "https://images.unsplash.com/photo-1578922746465-3a80a228f223", place: "Malé, Maldives", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 5, img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f", place: "Paris, France", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 6, img: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2", place: "New York, US", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 7, img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd", place: "London, UK", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 8, img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc", place: "Tokyo, Japan", tags: ["Flights", "Hotels", "Resorts"] },
    { id: 9, img: "https://images.unsplash.com/photo-1518684079-3c830dcef090", place: "Dubai, UAE", tags: ["Flights", "Hotels", "Resorts"] },
];

const PopularTrips = () => (
    <section className="container mx-auto mt-36 mb-20">
        <div className="mb-5 flex items-center justify-between flex-wrap gap-4">
            <SectionTitle
                title="Plan your perfect trip"
                subTitle="Search Flights & Places Hire to our most popular destinations"
            />
            <Button variant="outline">See more places</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
                <PlacesCard key={place.id} imgSrc={place.img} placeName={place.place} tags={place.tags} />
            ))}
        </div>
    </section>
);

export default PopularTrips;