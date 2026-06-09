import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './apig.generated';
export { RosEnvironment as EnvironmentProperty };
/**
 * Properties for defining a `Environment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environment
 */
export interface EnvironmentProps {
    /**
     * Property environmentId: The ID of the Environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Environment`.
 */
export interface IEnvironment extends ros.IResource {
    readonly props: EnvironmentProps;
    /**
     * Attribute Description: The description of the Environment.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the Environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the Environment.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute GatewayId: Cloud-native API Gateway ID.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Environment`The , which type is used to query environment.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environment
 */
export declare class Environment extends ros.Resource implements IEnvironment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the Environment.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the Environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the Environment.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute GatewayId: Cloud-native API Gateway ID.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint?: boolean);
}
