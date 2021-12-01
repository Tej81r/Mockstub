import { Timestamp } from 'fabric-shim';
import Long from "long";
export declare class MockProtoTimestamp implements Timestamp {
    seconds: Long;
    nanos: number;
    constructor();
    getSeconds(): Long.Long;
    toDate(): Date;
}
