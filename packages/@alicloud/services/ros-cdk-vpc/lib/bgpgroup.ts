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
     * Property ipVersion: The IP version of the BGP group. Valid values: IPv4 and IPv6.
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    readonly isFakeAsn?: boolean | ros.IResolvable;

    /**
     * Property localAsn: The AS number on the Alibaba Cloud side.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpGroup`.
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
