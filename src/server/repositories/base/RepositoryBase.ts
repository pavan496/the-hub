/// <reference path="../../../../typings/tsd.d.ts" />

import {Read} from "./../interfaces/base/Read";
import {Write} from "./../interfaces/base/Write";

import * as Mongoose from "mongoose";

export class RepositoryBase<T extends Mongoose.Document> implements Read<T>, Write<T> {

    private _model: Mongoose.Model<Mongoose.Document>;

    constructor(schemaModel: Mongoose.Model<Mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._model.find({}, callback)
    }

    update(_id: Mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    private toObjectId(_id: string): Mongoose.Types.ObjectId {
        return Mongoose.Types.ObjectId.createFromHexString(_id)
    }

}