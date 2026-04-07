import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicAccelerateIp } from './ga.generated';
export { RosBasicAccelerateIp as BasicAccelerateIpProperty };
/**
 * Properties for defining a `BasicAccelerateIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export interface BasicAccelerateIpProps {
    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property ipSetId: The ID of the acceleration region.
     */
    readonly ipSetId: string | ros.IResolvable;
}
/**
 * Represents a `BasicAccelerateIp`.
 */
export interface IBasicAccelerateIp extends ros.IResource {
    readonly props: BasicAccelerateIpProps;
    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAccelerateIp`, which is used to create an accelerated IP address for a basic Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAccelerateIp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export declare class BasicAccelerateIp extends ros.Resource implements IBasicAccelerateIp {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BasicAccelerateIpProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicAccelerateIpProps, enableResourcePropertyConstraint?: boolean);
}
