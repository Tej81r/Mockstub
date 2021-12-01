import { Iterators, Timestamp } from 'fabric-shim';
import { MockProtoTimestamp } from '../MockProtoTimestamp';

export class MockKeyModification implements Iterators.KeyModification {

    public timestamp: Timestamp;

    // tslint:disable-next-line:variable-name
    constructor(public isDelete: boolean, public value: Buffer, public txId: string) {
        this.timestamp = new MockProtoTimestamp();
    }

    getIsDelete(): boolean {
        return this.isDelete;
    }
    getValue(): Buffer {
        return this.value;
    }
    getTimestamp(): Timestamp {
        return this.timestamp;
    }
    getTxId(): string {
        return this.txId;
    }
}