import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const GET = async (req: NextRequest) => { 
    const session = await getServerSession(authOptions)
    if(session.user) {
        return NextResponse.json({ user: session.user })
    }
};