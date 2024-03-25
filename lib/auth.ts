import CredentialsProvider from "next-auth/providers/credentials";

export const Auth = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(input: any) {
        console.log(input);
        return {
          id: "Rushikesh",
        };
        // return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
