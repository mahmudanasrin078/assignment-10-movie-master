🏆 MovieMaster Pro

A modern movie management system where users can explore, manage, and organize their favorite movies with advanced filtering, CRUD operations, and personalized collections.
Built using React, TailwindCSS, Firebase, and Express.js, this app delivers a smooth, dynamic, and responsive experience.

🌐 Live Site

🔗 MovieMaster Pro Live Demo

🔗 Server on Vercel

⚙️ Technologies Used
🧩 Frontend:

React 19

React Router 7

Tailwind CSS

AOS (Animate on Scroll)

React Icons & React Toastify

React CountUp & React Spinners

⚙️ Backend:

Node.js

Express.js

MongoDB (Atlas)

Firebase Admin SDK

✨ Key Features

🎬 Movie Management System — Add, view, update, and delete movies with owner-only permissions.

🔒 Firebase Authentication — Secure login/register system with Google sign-in.

🌟 Top Rated & Recent Movies — View top 5 rated and latest 6 movies dynamically.

🎭 Advanced Filters — Filter movies by multiple genres and rating range.

🧍‍♂️ My Collection — See only the movies added by the logged-in user.

❤️ Watchlist Feature (Optional) — Add favorite movies to your watchlist.

🌓 Dark/Light Theme Toggle — Switch the interface theme dynamically.

🚀 Responsive Design — Fully optimized for mobile, tablet, and desktop.

🎨 Smooth Animations — Eye-soothing UI transitions using AOS.

🔔 Toast & Modal Notifications — For success, errors, and confirmation actions.

🔐 Authentication Flow

Register Page:
Users sign up with name, email, photo, and password validation.

Login Page:
Login with email/password or Google.

Protected Routes:

/movies/add

/movies/my-collection

/movies/update/:id
Accessible only to logged-in users.

JWT or Firebase Token used for route protection.
