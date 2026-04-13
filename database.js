// // ================= SIMPLE DATABASE (No XAMPP Needed) =================
// // Ye browser ke localStorage mein data store karega

// // Places Database
// const placesDatabase = [
//     { id: 1, name: "Taj Mahal", category: "heritage", state: "Uttar Pradesh", image: "images/tajmahal.jpg", price: 1299, rating: 4.9, bestTime: "October to March", entryFee: "₹50 (Indians)", description: "The Taj Mahal, an ivory-white marble mausoleum, is one of the Seven Wonders of the World." },
//     { id: 2, name: "Kerala Backwaters", category: "nature", state: "Kerala", image: "images/kerala-backwaters.jpg", price: 1899, rating: 4.8, bestTime: "September to March", entryFee: "Houseboat ₹4000+", description: "The backwaters of Kerala are a network of brackish lagoons and lakes." },
//     { id: 3, name: "Goa Beaches", category: "beach", state: "Goa", image: "images/beachGoa.jpg", price: 1499, rating: 4.7, bestTime: "November to February", entryFee: "Free", description: "Goa is famous for stunning beaches, water sports, and nightlife." },
//     { id: 4, name: "Manali", category: "hill", state: "Himachal Pradesh", image: "images/himalayas.jpg", price: 1299, rating: 4.8, bestTime: "October to February", entryFee: "Free", description: "Adventure paradise with Solang Valley and Rohtang Pass." },
//     { id: 5, name: "Jaipur", category: "heritage", state: "Rajasthan", image: "images/rajasthanfort.jpg", price: 1599, rating: 4.8, bestTime: "October to March", entryFee: "₹100-₹500", description: "The Pink City with royal palaces and forts." },
//     { id: 6, name: "Varanasi", category: "spiritual", state: "Uttar Pradesh", image: "images/Spiritual.jpg", price: 899, rating: 4.7, bestTime: "October to March", entryFee: "Free", description: "One of the oldest living cities, spiritual heart of India." },
//     { id: 7, name: "Ooty", category: "hill", state: "Tamil Nadu", image: "images/hillsstation.jpg", price: 1099, rating: 4.6, bestTime: "April to June", entryFee: "Free", description: "Queen of Nilgiris with beautiful lake and gardens." },
//     { id: 8, name: "Rishikesh", category: "adventure", state: "Uttarakhand", image: "images/adventure.jpg", price: 999, rating: 4.8, bestTime: "September to June", entryFee: "Free", description: "Yoga capital with Ganga rafting and camping." },
//     { id: 9, name: "Jim Corbett", category: "wildlife", state: "Uttarakhand", image: "images/wildlife.jpg", price: 1499, rating: 4.9, bestTime: "November to February", entryFee: "₹150", description: "India's oldest national park, famous for tigers." }
// ];

// // Packages Database
// const packagesDatabase = [
//     { id: 1, name: "Manali Adventure", duration: "5 Days", price: 12000, type: "adventure", image: "images/himalayas.jpg", includes: "Hotel, Meals, Sightseeing, River Rafting" },
//     { id: 2, name: "Goa Beach Tour", duration: "4 Days", price: 15000, type: "beach", image: "images/beachGoa.jpg", includes: "Beach Resort, Breakfast, Water Sports" },
//     { id: 3, name: "Kerala Backwaters", duration: "6 Days", price: 18900, type: "nature", image: "images/kerala-backwaters.jpg", includes: "Houseboat, All Meals, Ayurveda" },
//     { id: 4, name: "Rajasthan Heritage", duration: "7 Days", price: 25000, type: "heritage", image: "images/rajasthanfort.jpg", includes: "Palace Hotel, Meals, Desert Safari" },
//     { id: 5, name: "Golden Triangle", duration: "6 Days", price: 22000, type: "heritage", image: "images/tajmahal.jpg", includes: "Delhi-Agra-Jaipur, Hotels, Transport" },
//     { id: 6, name: "Spiritual Yatra", duration: "5 Days", price: 15000, type: "spiritual", image: "images/Spiritual.jpg", includes: "Varanasi-Prayagraj, Temple Visits" }
// ];

// // Bookings Storage
// let bookings = [];

// // Load saved bookings from localStorage
// function loadBookings() {
//     const saved = localStorage.getItem('tourism_bookings');
//     if(saved) {
//         bookings = JSON.parse(saved);
//     }
// }

// // Save bookings to localStorage
// function saveBookings() {
//     localStorage.setItem('tourism_bookings', JSON.stringify(bookings));
// }

// // Get all places
// function getAllPlaces() {
//     return placesDatabase;
// }

// // Get place by ID
// function getPlaceById(id) {
//     return placesDatabase.find(place => place.id === id);
// }

// // Get all packages
// function getAllPackages() {
//     return packagesDatabase;
// }

// // Add new booking
// function addBooking(bookingData) {
//     const newBooking = {
//         id: bookings.length + 1,
//         ...bookingData,
//         bookingDate: new Date().toISOString()
//     };
//     bookings.push(newBooking);
//     saveBookings();
//     return newBooking;
// }

// // Get all bookings
// function getAllBookings() {
//     return bookings;
// }

// // Search places
// function searchPlaces(keyword) {
//     const lowerKeyword = keyword.toLowerCase();
//     return placesDatabase.filter(place => 
//         place.name.toLowerCase().includes(lowerKeyword) ||
//         place.state.toLowerCase().includes(lowerKeyword) ||
//         place.category.toLowerCase().includes(lowerKeyword)
//     );
// }

// // Filter places by category
// function filterPlacesByCategory(category) {
//     if(category === 'all') return placesDatabase;
//     return placesDatabase.filter(place => place.category === category);
// }

// // Initialize database
// loadBookings();

// // Make functions available globally
// window.TourismDB = {
//     getAllPlaces,
//     getPlaceById,
//     getAllPackages,
//     addBooking,
//     getAllBookings,
//     searchPlaces,
//     filterPlacesByCategory
// };

// console.log("✅ Database loaded! Total places:", placesDatabase.length);
// console.log("✅ Total packages:", packagesDatabase.length);