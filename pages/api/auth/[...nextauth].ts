import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'
import { CLIENT_ID, CLIENT_SECRET } from 'constants/googleAuth'
import NextAuth from 'next-auth'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'database',
    maxAge: 1 * 24 * 60 * 60,
  },

  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id
      return Promise.resolve(session)
    },
  },
}
export default NextAuth(authOptions)
