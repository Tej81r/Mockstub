/// <reference types="node" />
import { Iterators, Timestamp } from 'fabric-shim';
export declare class MockKeyModification implements Iterators.KeyModification {
    isDelete: boolean;
    value: Buffer;
    txId: string;
    timestamp: Timestamp;
    constructor(isDelete: boolean, value: Buffer, txId: string);
    getIsDelete(): boolean;
    getValue(): Buffer;
    getTimestamp(): Timestamp;
    getTxId(): string;
}
