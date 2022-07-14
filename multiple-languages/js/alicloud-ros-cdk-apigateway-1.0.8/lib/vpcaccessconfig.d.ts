import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcAccessConfig } from './apigateway.generated';
export { RosVpcAccessConfig as VpcAccessConfigProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export interface VpcAccessConfigProps {
    /**
     * Property instanceId: The id of the instance (ECS/SLB).
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property name: The name of one VPC access configuration.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property port: The port of the VPC.
     */
    readonly port: number | ros.IResolvable;
    /**
     * Property vpcId: The id of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export declare class VpcAccessConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ApiGateway::VpcAccessConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcAccessConfigProps, enableResourcePropertyConstraint?: boolean);
}
