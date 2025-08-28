# Stack Auth Anonymous Todos

A Next.js todo application that demonstrates the power of **anonymous user authentication** using [Stack Auth](https://stack-auth.com/). This project showcases how to create a superior customer journey by allowing users to experience your application before being hit with a login screen.

## 🚀 Key Features

- **Anonymous User Experience**: Users can create, manage, and persist todos without any authentication barriers
- **Seamless Onboarding**: No sign-up required to start using the app immediately
- **Persistent Data**: Anonymous users' todos are saved and persist across sessions
- **Full-Stack**: Next.js 15 with App Router, Prisma ORM, and PostgreSQL

## ✨ The Anonymous User Advantage

This project demonstrates a superior approach to user onboarding:

### Before (Traditional Approach)
1. User visits app
2. Immediately sees login/signup screen
3. User must create account before experiencing value
4. High friction leads to user abandonment

### After (Anonymous-First Approach)
1. User visits app (anonymous user is created)
2. Can immediately start using app
3. Data persists automatically
4. User experiences value before any commitment
5. Optional upgrade to authenticated account later

## 🔑 How Anonymous Users Work

### Frontend Implementation

The app uses Stack Auth's `useUser` hook with the `or: "anonymous"` option:

```tsx
const user = useUser({ or: "anonymous" });
```

This ensures that even unauthenticated users get a unique, persistent identifier.

### Backend Implementation

Server actions automatically handle anonymous users:

```tsx
const user = await stackServerApp.getUser({ or: "anonymous" });
```

All database operations are tied to the user ID, whether anonymous or authenticated.

### Data Persistence

- Anonymous users get a unique, persistent ID
- Todos are automatically associated with their user ID
- Data persists across browser sessions
- No data loss when users eventually authenticate

## 🎯 Benefits of This Approach

### For Users
- **Zero Friction**: Start using the app immediately
- **No Commitment**: Try before you buy
- **Seamless Experience**: No interruptions or barriers
- **Data Safety**: Todos are preserved and associated with your session

### For Developers
- **Higher Conversion**: Users experience value before authentication
- **Better UX**: Smoother onboarding flow
- **Flexible Migration**: Easy to convert anonymous users to authenticated accounts

## 🔧 Development

### Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page with anonymous user support
│   ├── todos/
│   │   ├── page.tsx          # Todos page
│   │   ├── actions.ts        # Server actions with anonymous user handling
│   │   ├── todos-list.tsx    # Todo list component
│   │   └── todo-item.tsx     # Individual todo item
│   └── layout.tsx
├── components/ui/             # Reusable UI components
├── lib/                       # Database and utility functions
└── generated/                 # Prisma generated types
```

### Key Files

- **`src/app/page.tsx`**: Landing page demonstrating anonymous user setup
- **`src/app/todos/actions.ts`**: Server actions showing anonymous user handling
- **`src/stack.tsx`**: Stack Auth configuration
- **`prisma/schema.prisma`**: Database schema with user association

## 🙏 Acknowledgments

- [Stack Auth](https://stack-auth.com/) for anonymous user support and personal help along the way
- [Next.js](https://nextjs.org/) for the amazing framework
- [Prisma](https://prisma.io/) for the excellent ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
