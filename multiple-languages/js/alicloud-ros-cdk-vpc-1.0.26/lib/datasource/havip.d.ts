import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVip } from './vpc.generated';
export { RosHaVip as HaVipProperty };
/**
 * Properties for defining a `HaVip`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export interface HaVipProps {
    /**
     * Property haVipId: The  ID of the resource.
     */
    readonly haVipId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVip`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVip`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export declare class HaVip extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    readonly attrAssociatedEipAddresses: ros.IResolvable;
    /**
     * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    readonly attrAssociatedInstanceType: ros.IResolvable;
    /**
     * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    readonly attrAssociatedInstances: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the  resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Dependence of a HaVip instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute HaVipId: The  ID of the resource.
     */
    readonly attrHaVipId: ros.IResolvable;
    /**
     * Attribute HaVipName: The name of the HaVip instance.
     */
    readonly attrHaVipName: ros.IResolvable;
    /**
     * Attribute IpAddress: IP address of private network.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    readonly attrMasterInstanceId: ros.IResolvable;
    /**
     * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipProps, enableResourcePropertyConstraint?: boolean);
}
