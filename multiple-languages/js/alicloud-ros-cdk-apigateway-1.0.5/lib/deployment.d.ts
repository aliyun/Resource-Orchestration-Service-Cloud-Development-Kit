import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployment } from './apigateway.generated';
export { RosDeployment as DeploymentProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Deployment`
 */
export interface DeploymentProps {
    /**
     * Property apiId: The id of the API.
     */
    readonly apiId: string | ros.IResolvable;
    /**
     * Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * Property description: Description of the deployment, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property historyVersion: The history version.
     */
    readonly historyVersion?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Deployment`
 */
export declare class Deployment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ApiGateway::Deployment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeploymentProps, enableResourcePropertyConstraint?: boolean);
}
