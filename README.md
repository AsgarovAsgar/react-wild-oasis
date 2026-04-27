# The Wild Oasis Admin Panel - Cabin Management System

A modern cabin management application built with React and Vite, designed to streamline cabin operations and guest management.

## Features

- 📊 **Dashboard**: Overview of cabin performance, recent stays, and daily activities
- 🏠 **Cabin Management**: Add, edit, and manage cabin listings with details like capacity, pricing, and images
- 📅 **Booking System**: Handle reservations, check-ins, and check-outs
- 👥 **Guest Management**: Track guest information and stay history
- 👤 **User Authentication**: Secure login system with protected routes
- ⚙️ **Settings**: Configure cabin settings like breakfast pricing and booking rules
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Modern UI that works across all devices

## Tech Stack

- **Frontend Framework**: React 18 with Vite
- **State Management**: React Query for server state
- **Styling**: Styled Components
- **Routing**: React Router v6
- **Authentication**: Supabase
- **Data Visualization**: Recharts
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Date Handling**: date-fns

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## License

Private - All rights reserved
