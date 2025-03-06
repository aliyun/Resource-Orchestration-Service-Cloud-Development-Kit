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
     * Property dnsGroup: Built-in authority location area. Valid values:
     * - NORMAL_ZONE: Default. normal zone (The parsing response result will be cached, and only back to the built-in authority normal zone if the cache is missed, the effect of parsing changes is affected by TTL time; Cannot use custom line analysis, weight analysis function.
     * - FAST_ZONE: Fast zone (Recommended: directly reply to the parsing request, the parsing delay is the lowest, and the record changes take effect in real time; Support custom line analysis, weight analysis.
     */
    readonly dnsGroup?: string | ros.IResolvable;

    /**
     * Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
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
            tags: props.tags,
            dnsGroup: props.dnsGroup,
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
