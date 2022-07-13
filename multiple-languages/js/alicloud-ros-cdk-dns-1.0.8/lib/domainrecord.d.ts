import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainRecord } from './dns.generated';
export { RosDomainRecord as DomainRecordProperty };
/**
 * Properties for defining a `ALIYUN::DNS::DomainRecord`
 */
export interface DomainRecordProps {
    /**
     * Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;
    /**
     * Property type: Parse record type, see parsing record type format
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property value: Record value
     */
    readonly value: string | ros.IResolvable;
    /**
     * Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string | ros.IResolvable;
    /**
     * Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DNS::DomainRecord`
 */
export declare class DomainRecord extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RecordId: Parse the ID of the record
     */
    readonly attrRecordId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DNS::DomainRecord`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainRecordProps, enableResourcePropertyConstraint?: boolean);
}
