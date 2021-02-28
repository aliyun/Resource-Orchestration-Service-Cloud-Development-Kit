import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneRecord } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZoneRecord as ZoneRecordProperty };

/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneRecord`
 */
export interface ZoneRecordProps {

    /**
     * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string;

    /**
     * Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string;

    /**
     * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    readonly type: string;

    /**
     * Property value: Record value
     */
    readonly value: string;

    /**
     * Property zoneId: Zone Id
     */
    readonly zoneId: string;

    /**
     * Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    readonly priority?: number;

    /**
     * Property ttl: Survival time, default is 60
     */
    readonly ttl?: number;
}

/**
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneRecord`
 */
export class ZoneRecord extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Record: Record data.
     */
    public readonly attrRecord: any;

    /**
     * Attribute RecordId: Parsing record Id
     */
    public readonly attrRecordId: any;

    /**
     * Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: any;

    /**
     * Create a new `ALIYUN::PVTZ::ZoneRecord`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneRecordProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZoneRecord = new RosZoneRecord(this, id,  {
            status: props.status ? props.status : 'ENABLE',
            rr: props.rr,
            type: props.type,
            zoneId: props.zoneId,
            priority: props.priority ? props.priority : 10,
            value: props.value,
            ttl: props.ttl ? props.ttl : 60,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneRecord;
        this.attrRecord = rosZoneRecord.attrRecord;
        this.attrRecordId = rosZoneRecord.attrRecordId;
        this.attrZoneId = rosZoneRecord.attrZoneId;
    }
}
