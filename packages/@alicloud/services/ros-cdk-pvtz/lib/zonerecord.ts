import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneRecord } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZoneRecord as ZoneRecordProperty };

/**
 * Properties for defining a `ZoneRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export interface ZoneRecordProps {

    /**
     * Property rr: The host record. A host record is the prefix of a domain name. Common host
     * records include www, @, \* (for wildcard DNS), and mail (for mailboxes).
     * For example, to resolve @.example.com, set the host record to "@", not an empty
     * string.
     */
    readonly rr: string | ros.IResolvable;

    /**
     * Property status: The status of the DNS record. Valid values:
     * - ENABLE: Enables DNS resolution.
     * - DISABLE: Pauses DNS resolution.
     */
    readonly status: string | ros.IResolvable;

    /**
     * Property type: The type of the DNS record. The following types are supported:
     * - A: Maps a domain name to an IPv4 address in dotted decimal notation.
     * - AAAA: Maps a domain name to an IPv6 address.
     * - CNAME: Maps a domain name to another domain name.
     * - TXT: A text record. The text can be up to 255 characters in length. TXT records
     * are often used for Sender Policy Framework (SPF) records to prevent spam.
     * - MX: Maps a domain name to the domain name of a mail server.
     * - PTR: Maps an IP address to a domain name.
     * - SRV: Specifies the server for a specific service. The format is: Priority
     * Weight Port Target. Separate each value with a space.
     * > Before adding a PTR record, configure a reverse lookup zone. For more
     * information, see [Reverse DNS lookups and PTR records]().
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
     * Property priority: The priority of the MX record. A smaller value indicates a higher priority. Valid
     * values: \[1, 99].
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * Property ttl: The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600
     * (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
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
export class ZoneRecord extends ros.Resource implements IZoneRecord {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ZoneRecordProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Record: Record data.
     */
    public readonly attrRecord: ros.IResolvable | string;

    /**
     * Attribute RecordId: Parsing record Id
     */
    public readonly attrRecordId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneRecordProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosZoneRecord = new RosZoneRecord(this, id,  {
            status: props.status === undefined || props.status === null ? 'ENABLE' : props.status,
            rr: props.rr,
            type: props.type,
            zoneId: props.zoneId,
            priority: props.priority === undefined || props.priority === null ? 10 : props.priority,
            value: props.value,
            ttl: props.ttl === undefined || props.ttl === null ? 60 : props.ttl,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneRecord;
        this.attrRecord = rosZoneRecord.attrRecord;
        this.attrRecordId = rosZoneRecord.attrRecordId;
        this.attrZoneId = rosZoneRecord.attrZoneId;
    }
}
