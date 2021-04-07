import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptionInstance } from './dts.generated';
export { RosSubscriptionInstance as SubscriptionInstanceProperty };
/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`
 */
export interface SubscriptionInstanceProps {
    /**
     * Property configuration: Subscription configuration.
     */
    readonly configuration?: RosSubscriptionInstance.ConfigurationProperty | ros.IResolvable;
    /**
     * Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
     */
    readonly sourceEndpointInstanceType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DTS::SubscriptionInstance`
 */
export declare class SubscriptionInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute PrivateHost: Private host.
     */
    readonly attrPrivateHost: ros.IResolvable;
    /**
     * Attribute PublicHost: Public host.
     */
    readonly attrPublicHost: ros.IResolvable;
    /**
     * Attribute SubscriptionInstanceId: The ID of Data subscription instance.
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable;
    /**
     * Attribute VPCHost: VPC host.
     */
    readonly attrVpcHost: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SubscriptionInstanceProps, enableResourcePropertyConstraint?: boolean);
}
