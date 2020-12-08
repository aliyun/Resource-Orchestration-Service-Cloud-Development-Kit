import * as ros from '@alicloud/ros-cdk-core';
import { RosIpSets } from './ga.generated';
export { RosIpSets as IpSetsProperty };
/**
 * Properties for defining a `ALIYUN::GA::IpSets`
 */
export interface IpSetsProps {
    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string;
}
/**
 * A ROS resource type:  `ALIYUN::GA::IpSets`
 */
export declare class IpSets extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    readonly attrAccelerateRegionIds: any;
    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    readonly attrIpSetIds: any;
    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    readonly attrIpVersions: any;
    /**
     * Create a new `ALIYUN::GA::IpSets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpSetsProps, enableResourcePropertyConstraint?: boolean);
}
