import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZone as ZoneProperty };

/**
 * Properties for defining a `Zone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export interface ZoneProps {

    /**
     * Property zoneName: Zone name
     */
    readonly zoneName: string | ros.IResolvable;

    /**
     * Property dnsGroup: The location of the built-in authoritative zone. Valid values:
     * - NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
     * the query is sent to the built-in authoritative standard zone. The time to live
     * (TTL) value affects the time when a DNS record change takes effect. You cannot
     * use custom DNS lines or weighted round-robin.
     * - FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
     * to with the lowest latency. DNS record changes take effect in real time. You can
     * use custom DNS lines and weighted round-robin.
     * Default value: NORMAL_ZONE.
     * > The built-in authoritative accelerated zone is located before the cache module.
     * DNS responses are not cached. This may increase the number of DNS queries and
     * your costs.
     * > Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
     * PrivateZone, added zones are set as accelerated zones by default.
     */
    readonly dnsGroup?: string | ros.IResolvable;

    /**
     * Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property proxyPattern: Specifies whether to enable subdomain recursive proxy. Valid values:
     * - ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, an NXDOMAIN error is returned.
     * - RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, the query is processed by the
     * forwarding and recursion modules in sequence. The final result is used to respond
     * to the DNS query.
     * Default value: ZONE.
     */
    readonly proxyPattern?: string | ros.IResolvable;

    /**
     * Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosZone.TagsProperty[];
}

/**
 * Represents a `Zone`.
 */
export interface IZone extends ros.IResource {
    readonly props: ZoneProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneName: Zone name.
     */
    readonly attrZoneName: ros.IResolvable | string;

    /**
     * Attribute ZoneTag: Zone label.
     */
    readonly attrZoneTag: ros.IResolvable | string;

    /**
     * Attribute ZoneType: Zone type.
     */
    readonly attrZoneType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::Zone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export class Zone extends ros.Resource implements IZone {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ZoneProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneName: Zone name.
     */
    public readonly attrZoneName: ros.IResolvable | string;

    /**
     * Attribute ZoneTag: Zone label.
     */
    public readonly attrZoneTag: ros.IResolvable | string;

    /**
     * Attribute ZoneType: Zone type.
     */
    public readonly attrZoneType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosZone = new RosZone(this, id,  {
            zoneName: props.zoneName,
            ignoredStackTagKeys: props.ignoredStackTagKeys,
            resourceGroupId: props.resourceGroupId,
            proxyPattern: props.proxyPattern === undefined || props.proxyPattern === null ? 'ZONE' : props.proxyPattern,
            dnsGroup: props.dnsGroup,
            tags: props.tags,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZone;
        this.attrArn = rosZone.attrArn;
        this.attrZoneId = rosZone.attrZoneId;
        this.attrZoneName = rosZone.attrZoneName;
        this.attrZoneTag = rosZone.attrZoneTag;
        this.attrZoneType = rosZone.attrZoneType;
    }
}
