import * as ros from '@alicloud/ros-cdk-core';
import { RosIpSets } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpSets as IpSetsProperty };

/**
 * Properties for defining a `IpSets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export interface IpSetsProps {

    /**
     * Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
}

/**
 * Represents a `IpSets`.
 */
export interface IIpSets extends ros.IResource {
    readonly props: IpSetsProps;

    /**
     * Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    readonly attrAccelerateRegionIds: ros.IResolvable | string;

    /**
     * Attribute IpSetIds: The ID list of the ip set.
     */
    readonly attrIpSetIds: ros.IResolvable | string;

    /**
     * Attribute IpVersions: The IP version list of the accelerate region.
     */
    readonly attrIpVersions: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::IpSets`, which is used to create acceleration regions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpSets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export class IpSets extends ros.Resource implements IIpSets {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IpSetsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    public readonly attrAccelerateRegionIds: ros.IResolvable | string;

    /**
     * Attribute IpSetIds: The ID list of the ip set.
     */
    public readonly attrIpSetIds: ros.IResolvable | string;

    /**
     * Attribute IpVersions: The IP version list of the accelerate region.
     */
    public readonly attrIpVersions: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpSetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpSets = new RosIpSets(this, id,  {
            accelerateRegion: props.accelerateRegion,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpSets;
        this.attrAccelerateRegionIds = rosIpSets.attrAccelerateRegionIds;
        this.attrIpSetIds = rosIpSets.attrIpSetIds;
        this.attrIpVersions = rosIpSets.attrIpVersions;
    }
}
