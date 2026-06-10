import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcBinding } from './fc3.generated';
export { RosVpcBinding as VpcBindingProperty };
/**
 * Properties for defining a `VpcBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-vpcbinding
 */
export interface VpcBindingProps {
    /**
     * Property functionName: Function Name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property vpcId: VPC instance ID.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `VpcBinding`.
 */
export interface IVpcBinding extends ros.IResource {
    readonly props: VpcBindingProps;
    /**
     * Attribute VpcId: VPC instance ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::VpcBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-vpcbinding
 */
export declare class VpcBinding extends ros.Resource implements IVpcBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcBindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VpcId: VPC instance ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcBindingProps, enableResourcePropertyConstraint?: boolean);
}
