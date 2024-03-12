import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub, // 'sub' is the unique identifier in Google profile
          email: profile.email,
          name: profile.name,
          userName: profile.email.split("@")[0], // Using the email as a username (modify as needed)
          googleId: profile.sub, // Assuming Google provides a unique ID
          admin: false,
        };
      },
    }),
  ],

  secret: process.env.JWT_SECRET,
});
