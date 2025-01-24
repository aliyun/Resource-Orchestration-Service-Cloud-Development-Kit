import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVipAssociation } from './vpc.generated';
export { RosHaVipAssociation as HaVipAssociationProperty };
/**
 * Properties for defining a `HaVipAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export interface HaVipAssociationProps {
    /**
     * Property haVipId: The ID of the HAVIP.
     */
    readonly haVipId: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property instanceType: The type of the instance to be associated with the HAVIP. Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    readonly instanceType?: string | ros.IResolvable;
}
/**
 * Represents a `HaVipAssociation`.
 */
export interface IHaVipAssociation extends ros.IResource {
    readonly props: HaVipAssociationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::HaVipAssociation`, which is used to associate high-availability virtual IP addresses (HAVIPs) with an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVipAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export declare class HaVipAssociation extends ros.Resource implements IHaVipAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HaVipAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipAssociationProps, enableResourcePropertyConstraint?: boolean);
}
