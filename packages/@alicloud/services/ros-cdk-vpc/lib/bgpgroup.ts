import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpGroup } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBgpGroup as BgpGroupProperty };

/**
 * Properties for defining a `BgpGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
export interface BgpGroupProps {

    /**
     * Property peerAsn: The AS number of the BGP peer.
     */
    readonly peerAsn: number | ros.IResolvable;

    /**
     * Property routerId: The ID of the VBR.
     */
    readonly routerId: string | ros.IResolvable;

    /**
     * Property authKey: The authentication key of the BGP group.
     */
    readonly authKey?: string | ros.IResolvable;

    /**
     * Property description: The description of the BGP group. The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property ipVersion: The IP version. Valid values:
     * *   IPv4: This is the default value.
     * *   IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
     * group has IPv6 enabled.
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property isFakeAsn: Specifies whether to use a fake ASN. Valid values:
     * *   false (default)
     * *   true
     * >  A router that runs BGP typically belongs to only one AS. If you need to
     * replace an existing AS with a new AS and you cannot immediately modify BGP
     * configurations, you can use fake ASNs to ensure service continuity.
     */
    readonly isFakeAsn?: boolean | ros.IResolvable;

    /**
     * Property localAsn: The custom ASN on the cloud side. Valid values:
     * *   45104
     * *   64512~65534
     * *   4200000000~4294967294
     * >  65025 is reserved by the cloud platform. By default, the system uses 45104 as
     * LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
     * may occur.
     */
    readonly localAsn?: number | ros.IResolvable;

    /**
     * Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property routeQuota: The upper limit of the BGP neighbor's route entries. Unit: entries, default value: 110.
     */
    readonly routeQuota?: number | ros.IResolvable;
}

/**
 * Represents a `BgpGroup`.
 */
export interface IBgpGroup extends ros.IResource {
    readonly props: BgpGroupProps;

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    readonly attrBgpGroupId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the BGP group.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpGroup`, which is used to create a Border Gateway Protocol (BGP) (Multi-ISP) group for a virtual border router (VBR).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
export class BgpGroup extends ros.Resource implements IBgpGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BgpGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    public readonly attrBgpGroupId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the BGP group.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBgpGroup = new RosBgpGroup(this, id,  {
            description: props.description,
            localAsn: props.localAsn,
            ipVersion: props.ipVersion === undefined || props.ipVersion === null ? 'IPv4' : props.ipVersion,
            authKey: props.authKey,
            routerId: props.routerId,
            peerAsn: props.peerAsn,
            isFakeAsn: props.isFakeAsn,
            routeQuota: props.routeQuota === undefined || props.routeQuota === null ? 110 : props.routeQuota,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpGroup;
        this.attrBgpGroupId = rosBgpGroup.attrBgpGroupId;
        this.attrName = rosBgpGroup.attrName;
    }
}
