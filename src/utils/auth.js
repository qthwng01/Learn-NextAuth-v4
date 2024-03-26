// imports
import { userService } from '@/utils/userSevice'

// importing providers
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
//   session: {
//     strategy: 'jwt',
//   },
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.userId
      return session
    },
  },
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials
        return userService.authenticate(email, password)
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}
