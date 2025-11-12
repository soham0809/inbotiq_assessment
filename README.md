# Role-Based Authentication App

A full-stack web application with role-based authentication built with Next.js, Express.js, and PostgreSQL.

## Features

- **Authentication System**
  - User signup with role selection (User/Admin)
  - Secure login with JWT tokens
  - Password hashing with bcrypt
  - Protected routes

- **Role-Based Access**
  - User and Admin roles
  - Role-specific dashboard content
  - Secure authentication middleware

- **Modern Tech Stack**
  - Frontend: Next.js 14 with TypeScript
  - Backend: Express.js with Node.js
  - Database: MongoDB with Prisma ORM
  - Styling: TailwindCSS
  - Icons: Lucide React

## Project Structure

```
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── vercel.json
├── frontend/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── lib/
│   │   ├── auth-context.tsx
│   │   └── api.ts
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── .env.example
└── package.json
```

## Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd role-based-auth-app
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Backend (.env)**
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Edit `backend/.env`:
   ```env
   DATABASE_URL="mongodb+srv://backupxr64_db_user:D9ZDj90BlYbklsuj@forwebdevassignments.ltxmzsw.mongodb.net/roleauth?retryWrites=true&w=majority"
   JWT_SECRET="your-super-secret-jwt-key-here"
   PORT=5000
   NODE_ENV=development
   ```

   **Frontend (.env.local)**
   ```bash
   cd ../frontend
   cp .env.example .env.local
   ```
   
   Edit `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Set up the database**
   ```bash
   cd backend
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development servers**
   ```bash
   cd ..
   npm run dev
   ```

   This starts both frontend (http://localhost:3000) and backend (http://localhost:5000)

## API Endpoints

### Authentication Routes

- `POST /auth/signup` - Create new user account
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user info (protected)

### Request/Response Examples

**Signup**
```json
POST /auth/signup
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securepassword",
  "role": "USER"
}
```

**Login**
```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

## Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}
```

## Deployment

### Backend (Vercel/Railway/Render)

1. **Vercel**
   - Connect your GitHub repository
   - Set environment variables in Vercel dashboard
   - Deploy automatically on push

2. **Railway**
   - Connect GitHub repository
   - Add PostgreSQL service
   - Set environment variables
   - Deploy

### Frontend (Vercel/Netlify)

1. **Vercel**
   - Connect your GitHub repository
   - Set `NEXT_PUBLIC_API_URL` to your backend URL
   - Deploy automatically

2. **Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set environment variables

### Database Options

- **MongoDB Atlas** (Recommended - already configured)
- **Local MongoDB** (for development)
- **MongoDB Cloud** (alternative cloud option)

## Environment Variables

### Backend
- `DATABASE_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL

## Security Features

- Password hashing with bcrypt (12 rounds)
- JWT token authentication
- Protected routes with middleware
- CORS configuration
- Rate limiting
- Input validation

## Development Commands

```bash
# Install all dependencies
npm run install:all

# Start both servers
npm run dev

# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend

# Database operations
cd backend
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx prisma studio      # Open database browser
```

## Testing the Application

1. **Sign Up**
   - Visit http://localhost:3000/signup
   - Create account with User or Admin role

2. **Login**
   - Visit http://localhost:3000/login
   - Use created credentials

3. **Dashboard**
   - After login, redirected to /dashboard
   - Different content based on role

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check DATABASE_URL format
   - Ensure MongoDB Atlas is accessible
   - Verify credentials and network access

2. **JWT Token Issues**
   - Check JWT_SECRET is set
   - Clear browser cookies
   - Check token expiration

3. **CORS Errors**
   - Verify frontend URL in backend CORS config
   - Check API URL in frontend

### Logs

- Backend logs: Check terminal running backend
- Frontend logs: Check browser console
- Database logs: Use `npx prisma studio`

## License

MIT License - feel free to use this project for learning and portfolio purposes.

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

Built with ❤️ using modern web technologies
