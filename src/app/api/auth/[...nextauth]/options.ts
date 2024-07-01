import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider  from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const options:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label:"Username",
                    type:"text",
                    placeholder:"Username"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"Password"
                }
            },
            async authorize(credentials) {
                // here you need to retrive user data to verfy with the credentials
                const user={id:"123",name:"Praveen",password:"nextauth"}

                if(credentials?.username===user.name && credentials?.password===user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],
}