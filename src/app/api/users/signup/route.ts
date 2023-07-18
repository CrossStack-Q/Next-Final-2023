import { connect } from "@/dbConfig/dbConfig";

import User from "@/models/userModel"

import { NextRequest, NextResponse } from "next/server";

import bcryptjs from "bcryptjs"

connect()



export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {username , email , password } =reqBody

        console.log(reqBody);

        // check user is already there
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"user already exists"},{status:400})

        }
        // hash password
        // const salt = await bcryptjs.getSalt('10')
        // const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser =  new User ({
            username,
            email,
            password
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            savedUser
    })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
    
}