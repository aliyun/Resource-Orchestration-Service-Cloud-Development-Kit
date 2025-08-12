import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneRecord } from './pvtz.generated';
export { RosZoneRecord as ZoneRecordProperty };
/**
 * Properties for defining a `ZoneRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export interface ZoneRecordProps {
    /**
     * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;
    /**
     * Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string | ros.IResolvable;
    /**
     * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property value: Record value
     */
    readonly value: string | ros.IResolvable;
    /**
     * Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property ttl: Survival time, default is 60
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * Represents a `ZoneRecord`.
 */
export interface IZoneRecord extends ros.IResource {
    readonly props: ZoneRecordProps;
    /**
     * Attribute Record: Record data.
     */
    readonly attrRecord: ros.IResolvable | string;
    /**
     * Attribute RecordId: Parsing record Id
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::ZoneRecord`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZoneRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export declare class ZoneRecord extends ros.Resource implements IZoneRecord {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZoneRecordProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Record: Record data.
     */
    readonly attrRecord: ros.IResolvable | string;
    /**
     * Attribute RecordId: Parsing record Id
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneRecordProps, enableResourcePropertyConstraint?: boolean);
}
