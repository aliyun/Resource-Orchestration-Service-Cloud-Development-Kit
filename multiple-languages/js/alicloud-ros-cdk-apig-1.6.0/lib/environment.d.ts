import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './apig.generated';
export { RosEnvironment as EnvironmentProperty };
/**
 * Properties for defining a `Environment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export interface EnvironmentProps {
    /**
     * Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;
    /**
     * Property gatewayId: Gateway id.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Environment`.
 */
export interface IEnvironment extends ros.IResource {
    readonly props: EnvironmentProps;
    /**
     * Attribute Description: Description of the environment.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Environment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export declare class Environment extends ros.Resource implements IEnvironment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: Description of the environment.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint?: boolean);
}
