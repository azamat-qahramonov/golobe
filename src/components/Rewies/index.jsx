import Star from '../../assets/star.svg';
import Google from '../../assets/google.svg';
import Square from '../../assets/square.png';
import Image from '../../assets/rewies.jpg';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            title: 'A real sense of community, nurtured',
            content: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            rating: 5,
            author: 'Olga',
            studio: 'Wewex Studios — Kai Tak',
            image: Image,
        },
        {
            id: 2,
            title: 'The facilities are superb. Clean, slick, bright.',
            content: 'A real sense of community, nurtured! Really appreciate the help and support from the staff...',
            rating: 5,
            author: 'Thomas',
            studio: 'Wewex Studios — Olympic',
            image: Square,
        },
        {
            id: 3,
            title: 'A real sense of community, nurtured',
            content: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            rating: 5,
            author: 'Eliot',
            studio: 'Wewex Studios — Kai Tak',
            image: Square,
        },
    ];

    return (
        <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Reviews</h2>
                <p className="text-gray-600 mb-8">What people says about Golobe facilities</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 relative">
                            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                            <p className="text-gray-600 mb-4">{review.content}</p>
                            <button className="text-sm text-gray-500 underline">View more</button>
                            <div className="flex items-center mb-4">
                                <img src={Star} alt="" />
                            </div>
                            <p className="text-sm font-medium">{review.author}</p>
                            <p className="text-sm text-gray-500 mb-4">{review.studio}</p>
                            <img src={Google} alt="" />
                            <img src={review.image} alt="Review" className="w-full mt-8 h-40 object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
                <div className="text-right mt-6">
                    <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200">See All</button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;