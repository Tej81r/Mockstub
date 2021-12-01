import { Timestamp } from 'fabric-shim';
import Long from "long"

export class MockProtoTimestamp implements Timestamp {
    seconds: Long;
    nanos: number;

    constructor() {
        this.seconds = new Long(Math.floor(Date.now() / 1000));
    }

    getSeconds() {
        return this.seconds;
    }

    toDate() {
        return new Date((this.seconds).toString());
    }
}