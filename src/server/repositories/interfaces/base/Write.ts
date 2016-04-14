import * as Mongoose from "mongoose";
export interface Write<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(_id: Mongoose.Types.ObjectId, item:T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

