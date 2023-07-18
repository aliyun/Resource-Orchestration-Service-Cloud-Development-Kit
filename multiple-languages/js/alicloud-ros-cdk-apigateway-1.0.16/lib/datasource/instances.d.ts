import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './apigateway.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `DATASOURCE::ApiGateway::Instances`
 */
export interface InstancesProps {
    /**
     * Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property language: Language Type.
     */
    readonly language?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Instances`
 */
export declare class Instances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApiGatewayInstanceIds: The list of The ApiGateway group ids.
     */
    readonly attrApiGatewayInstanceIds: ros.IResolvable;
    /**
     * Attribute ApiGatewayInstances: The information about ApiGateway groups.
     */
    readonly attrApiGatewayInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ApiGateway::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
