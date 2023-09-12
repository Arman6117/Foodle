import {user,getSession} from '@clerk/nextjs'
import { connectDb } from '@/utils/database'
import Order from '@/models/order'

export const GET = async(req,res) =>{
    try {
        
        const session = await getSession();

        if(!session || !session.userId){
            return res.status(401).json({message:'Unauthorized'});
        }

        await connectDb();

        const orders = await Order.find({userId:session.userId});

        res.status(200).json({orders});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}