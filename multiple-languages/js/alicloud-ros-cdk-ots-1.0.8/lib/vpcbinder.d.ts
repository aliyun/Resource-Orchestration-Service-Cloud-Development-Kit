import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcBinder } from './ots.generated';
export { RosVpcBinder as VpcBinderProperty };
/**
 * Properties for defining a `ALIYUN::OTS::VpcBinder`
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
 * A ROS resource type:  `ALIYUN::OTS::VpcBinder`
 */
export declare class VpcBinder extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    readonly attrEndpoints: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OTS::VpcBinder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcBinderProps, enableResourcePropertyConstraint?: boolean);
}
