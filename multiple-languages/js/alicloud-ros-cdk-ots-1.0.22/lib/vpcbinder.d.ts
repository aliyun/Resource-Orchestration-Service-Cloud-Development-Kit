import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcBinder } from './ots.generated';
export { RosVpcBinder as VpcBinderProperty };
/**
 * Properties for defining a `VpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export interface VpcBinderProps {
    /**
     * Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::VpcBinder`, which is used to bind a Tablestore instance to a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcBinder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export declare class VpcBinder extends ros.Resource {
    /**
     * Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    readonly attrEndpoints: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcBinderProps, enableResourcePropertyConstraint?: boolean);
}
