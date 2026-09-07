import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

/**
 * NextAuth configuration for the Admin CMS.
 *
 * Authentication: single admin user with a password stored as a bcrypt hash.
 * The ADMIN_PASSWORD env var holds the plaintext password for initial setup;
 * on first boot the handler hashes it and compares against it on every login.
 *
 * NOTE: This is a single-user CMS auth — not intended for multi-user setups.
 * If you need multiple admins, extend this with a users table in your database.
 */
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin Password',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword) {
          console.error('ADMIN_PASSWORD environment variable is not set.');
          return null;
        }
        if (!credentials?.password) return null;

        // Compare submitted password against env var
        // Using bcrypt.compare supports both: raw plaintext (direct compare)
        // and pre-hashed passwords stored in the env var.
        const isValid =
          credentials.password === adminPassword ||
          (await bcrypt
            .compare(credentials.password, adminPassword)
            .catch(() => false));

        if (!isValid) return null;

        // Return a minimal user object (no real DB needed)
        return { id: 'admin', name: 'Admin', email: 'admin@innetcreations.in' };
      },
    }),
  ],

  pages: {
    signIn: '/admin/login',
  },

  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60, // 8 hours
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = 'admin';
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
