import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationDeployment } from './cs.generated';
export { RosApplicationDeployment as ApplicationDeploymentProperty };
/**
 * Properties for defining a `ApplicationDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export interface ApplicationDeploymentProps {
    /**
     * Property chartUrl: Helm chart package URL, must be a valid URL.
     */
    readonly chartUrl: string | ros.IResolvable;
    /**
     * Property clusterId: The cluster id of the deployed application.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property name: Name of the deployed application.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property namespace: Deployment namespace.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property type: Type of the deployed application, currently can only be helm.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property values: Helm deployment parameters, a map that will be converted to YAML text.
     */
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * Represents a `ApplicationDeployment`.
 */
export interface IApplicationDeployment extends ros.IResource {
    readonly props: ApplicationDeploymentProps;
    /**
     * Attribute TaskId: The task ID of the application deployment.
     */
    readonly attrTaskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ApplicationDeployment`, which is used to deploy an application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationDeployment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export declare class ApplicationDeployment extends ros.Resource implements IApplicationDeployment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationDeploymentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TaskId: The task ID of the application deployment.
     */
    readonly attrTaskId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationDeploymentProps, enableResourcePropertyConstraint?: boolean);
}
