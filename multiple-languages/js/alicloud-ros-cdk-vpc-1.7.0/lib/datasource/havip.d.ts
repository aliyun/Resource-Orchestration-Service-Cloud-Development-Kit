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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `HaVip`.
 */
export interface IHaVip extends ros.IResource {
    readonly props: HaVipProps;
    /**
     * Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    readonly attrAssociatedEipAddresses: ros.IResolvable | string;
    /**
     * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    readonly attrAssociatedInstanceType: ros.IResolvable | string;
    /**
     * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    readonly attrAssociatedInstances: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the  resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Dependence of a HaVip instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HaVipId: The  ID of the resource.
     */
    readonly attrHaVipId: ros.IResolvable | string;
    /**
     * Attribute HaVipName: The name of the HaVip instance.
     */
    readonly attrHaVipName: ros.IResolvable | string;
    /**
     * Attribute IpAddress: IP address of private network.
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    readonly attrMasterInstanceId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVip`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVip`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export declare class HaVip extends ros.Resource implements IHaVip {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HaVipProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    readonly attrAssociatedEipAddresses: ros.IResolvable | string;
    /**
     * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    readonly attrAssociatedInstanceType: ros.IResolvable | string;
    /**
     * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    readonly attrAssociatedInstances: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the  resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Dependence of a HaVip instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HaVipId: The  ID of the resource.
     */
    readonly attrHaVipId: ros.IResolvable | string;
    /**
     * Attribute HaVipName: The name of the HaVip instance.
     */
    readonly attrHaVipName: ros.IResolvable | string;
    /**
     * Attribute IpAddress: IP address of private network.
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    readonly attrMasterInstanceId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipProps, enableResourcePropertyConstraint?: boolean);
}
