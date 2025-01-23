import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainRecord } from './dns.generated';
export { RosDomainRecord as DomainRecordProperty };
/**
 * Properties for defining a `DomainRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
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
 * Represents a `DomainRecord`.
 */
export interface IDomainRecord extends ros.IResource {
    readonly props: DomainRecordProps;
    /**
     * Attribute RecordId: Parse the ID of the record
     */
    readonly attrRecordId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::DomainRecord`, which is used to add a Domain Name System (DNS) record.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
export declare class DomainRecord extends ros.Resource implements IDomainRecord {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainRecordProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RecordId: Parse the ID of the record
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainRecordProps, enableResourcePropertyConstraint?: boolean);
}
