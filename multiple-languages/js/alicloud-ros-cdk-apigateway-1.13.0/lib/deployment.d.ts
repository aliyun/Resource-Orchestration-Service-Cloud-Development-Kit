import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployment } from './apigateway.generated';
export { RosDeployment as DeploymentProperty };
/**
 * Properties for defining a `Deployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-deployment
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
 * Represents a `Deployment`.
 */
export interface IDeployment extends ros.IResource {
    readonly props: DeploymentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Deployment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeployment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-deployment
 */
export declare class Deployment extends ros.Resource implements IDeployment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DeploymentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeploymentProps, enableResourcePropertyConstraint?: boolean);
}
