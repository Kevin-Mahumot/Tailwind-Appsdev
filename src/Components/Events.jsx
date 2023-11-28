import React, { useState } from 'react';
import Calendar from './Calendar';

const AnnouncementModal = ({ announcement, closeModal }) => {
  
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 md:p-8 rounded shadow-lg w-4/5">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{announcement.title}</h3>
        <p className="text-gray-700 mb-2 text-sm md:text-base">{announcement.content}</p>
        <p className="text-sm text-gray-500">{announcement.date}</p>
        <div className="text-lg font-semibold mt-4">Event Details:</div>
        <div className="mb-4 details-container">
          <div className="overflow-y-auto max-h-40vh">{announcement.details}</div>
        </div>
        <div className="text-lg font-semibold">Description:</div>
        <div className="mb-4 description-container">
          <div className="overflow-y-auto max-h-40vh">{announcement.longDescription}</div>
        </div>
        <div className="flex justify-end">
          <button className="text-blue-500 hover:underline text-sm md:text-base mt-2 focus:outline-none" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};



const Events = () => {
  const [announcements, setAnnouncements] = useState([
    {
      title: 'Community Cleanup Day',
      content: 'Join us for a community cleanup day in Brgy Ibabao, Cordova, Cebu. Let\'s work together to keep our neighborhood clean and beautiful.',
      date: '2023-11-25',
      details: 'Meeting Point: Brgy Ibabao Park at 8:00 AM',
      longDescription: 'Help us make our community a better place by joining the Community Cleanup Day. We will provide cleaning materials and refreshments. Let\'s make a positive impact together!',
    },
    {
      title: 'New Street Lighting Installed',
      content: 'We are pleased to announce the installation of new street lighting in Brgy Ibabao. This will enhance safety and visibility for our residents.',
      date: '2023-11-20',
      details: 'Location: Various streets in Brgy Ibabao',
      longDescription: 'The new street lighting project aims to improve the safety and security of our neighborhood. We appreciate your cooperation and understanding during the installation process.',
    },
    {
      title: 'Upcoming Town Hall Meeting',
      content: 'Save the date for our upcoming town hall meeting on December 1, 2023. We will discuss important community matters and gather your valuable input.',
      date: '2023-11-15',
      details: 'Location: Town Hall at 6:00 PM',
      longDescription: 'Your participation in the Town Hall Meeting is vital for shaping the future of our community. We\'ll be discussing key issues, proposed projects, and listening to your suggestions and concerns.',
    },
    {
      title: 'Holiday Celebrations',
      content: 'Get ready for the festive season! We have planned various holiday celebrations for the community. Stay tuned for more details.',
      date: '2023-11-24',
      details: 'Various events and activities throughout December',
      longDescription: 'Celebrate the joy of the holiday season with our community. We have a lineup of festive events, including caroling, tree lighting, and more. Join us for a month of merriment!',
    },
    // New Barangay Announcements
    {
      title: 'Barangay General Assembly',
      content: 'Don\'t miss the Barangay General Assembly on November 30, 2023. Your presence and input are important for the community.',
      date: '2023-11-28',
      details: 'Location: Barangay Hall at 5:00 PM',
      longDescription: 'The Barangay General Assembly is a crucial event where residents gather to discuss important matters affecting the community. This assembly provides an opportunity for residents to voice their concerns, share ideas, and participate in decision-making processes. Make sure to attend and contribute to the betterment of our barangay!',
    },
    {
      title: 'Road Repair Project',
      content: 'We are initiating a road repair project in the barangay. Please be aware of the ongoing construction for smoother and safer roads.',
      date: '2023-12-5',
      details: 'Locations: Various roads in the barangay',
      longDescription: 'To enhance the quality of our infrastructure, we are launching a road repair project. While inconvenience may occur during the construction, we appreciate your patience and understanding.',
    },
    {
      title: 'Health and Wellness Seminar',
      content: 'Join us for a Health and Wellness Seminar on December 10, 2023. Learn about maintaining a healthy lifestyle and preventing common illnesses.',
      date: '2023-12-8',
      details: 'Location: Barangay Hall at 3:00 PM',
      longDescription: 'Prioritize your health by attending our Health and Wellness Seminar. Experts will provide valuable insights on maintaining a healthy lifestyle, and you\'ll have the opportunity to ask questions and participate in discussions.',
    },
    {
      title: 'Tree Planting Activity',
      content: 'Contribute to the greenery of our barangay! Participate in the Tree Planting Activity scheduled for December 15, 2023.',
      date: '2023-12-12',
      details: 'Meeting Point: Barangay Hall at 9:00 AM',
      longDescription: 'Join us in promoting environmental sustainability by participating in the Tree Planting Activity. Trees play a crucial role in our ecosystem, and your contribution will have a lasting impact on our community.',
    },
  ]);

  const [showRecentAnnouncement, setShowRecentAnnouncement] = useState(true);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(4); // Set the initial number to display

  const toggleShowRecentAnnouncement = () => {
    setShowRecentAnnouncement((prev) => !prev);
    setVisibleAnnouncements(prev => (prev === announcements.length ? 4 : announcements.length));
  };

  const handleSortChange = (e) => {
    const sortBy = e.target.value;

    if (sortBy === 'latest') {
      setAnnouncements([...announcements].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (sortBy === 'oldest') {
      setAnnouncements([...announcements].sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  };

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <div>
      <div className='bg-green-500 p-2'>
        <h1 className='text-white text-3xl font-bold pt-6 mb-8 ml-8'>
          WELCOME TO BI<span className='text-red-600 font-bold'>U</span>MS
        </h1>
      </div>

      <div className='bg-white p-4'>
        <div className='bg-gray-300 px-4 pt-1 pb-4 rounded'>
          <h2 className='text-2xl font-bold mb-4 mt-4'>Announcements</h2>
          <div className='flex mb-4'>
            <label className='mr-2 mt-2'>Sort by:</label>
            <select
              onChange={handleSortChange}
              className='border border-gray-300 rounded p-2 focus:outline-none'
            >
              <option value='latest'>Latest</option>
              <option value='oldest'>Oldest</option>
            </select>
          </div>
          {/* Adjust grid layout for small screens */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {announcements.slice(0, visibleAnnouncements).map((announcement, index) => (
              <div
                key={index}
                className=' bg-white p-4 rounded mb-4 shadow-md hover:shadow-lg'
                onClick={() => openModal(announcement)}
              >
                <h3 className='text-lg font-bold mb-2'>{announcement.title}</h3>
                <p className='text-gray-700 mb-2'>{announcement.content}</p>
                <p className='text-sm text-gray-500'>{announcement.date}</p>
              </div>
            ))}
          </div>
          <div className='text-left mb-4'>
            <button
              className='text-blue-500 hover:underline focus:outline-none'
              onClick={toggleShowRecentAnnouncement}
            >
              {showRecentAnnouncement ? 'View More' : 'View Less'}
            </button>
          </div>
        </div>
      </div>

      {selectedAnnouncement && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          closeModal={closeModal}
        />
      )}
      {/*Calendar*/}
      <div>
       <Calendar/>
      </div>
      <div className='bg-white p-4 mt-4'>
        <h2 className='text-2xl font-bold mb-4'>Brgy Ibabao, Cordova, Cebu Map</h2>
        <div className='responsive-iframe-container'>
          <iframe
            title='Brgy Ibabao, Cordova, Cebu Map'
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d981.4715811019155!2d123.9466276078026!3d10.270742311423355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20barangay%20ibabao%20cordova!5e0!3m2!1sen!2sph!4v1701088535054!5m2!1sen!2sph"  width='600'
            height='450'
            frameBorder='0'
            style={{ border: '0', width: '100%', height: '80%' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events;