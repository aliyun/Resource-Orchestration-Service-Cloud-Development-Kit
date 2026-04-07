import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironments } from './arms.generated';
export { RosEnvironments as EnvironmentsProperty };
/**
 * Properties for defining a `Environments`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environments
 */
export interface EnvironmentsProps {
    /**
     * Property environmentType: Type of environment.
     */
    readonly environmentType?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Environments`.
 */
export interface IEnvironments extends ros.IResource {
    readonly props: EnvironmentsProps;
    /**
     * Attribute EnvironmentIds: The list of environment IDs.
     */
    readonly attrEnvironmentIds: ros.IResolvable | string;
    /**
     * Attribute Environments: The list of environments.
     */
    readonly attrEnvironments: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Environments`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironments`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environments
 */
export declare class Environments extends ros.Resource implements IEnvironments {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvironmentsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EnvironmentIds: The list of environment IDs.
     */
    readonly attrEnvironmentIds: ros.IResolvable | string;
    /**
     * Attribute Environments: The list of environments.
     */
    readonly attrEnvironments: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: EnvironmentsProps, enableResourcePropertyConstraint?: boolean);
}
