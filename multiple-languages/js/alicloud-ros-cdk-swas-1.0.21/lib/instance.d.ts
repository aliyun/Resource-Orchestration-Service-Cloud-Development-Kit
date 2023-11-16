import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './swas.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::SWAS::Instance`
 */
export interface InstanceProps {
    /**
     * Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;
    /**
     * Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SWAS::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InnerIpAddress: The inner IP address of simple application server.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the simple application server.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute PublicIpAddress: The public IP address of simple application server.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SWAS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
