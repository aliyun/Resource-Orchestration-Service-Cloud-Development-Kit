import * as ros from '@alicloud/ros-cdk-core';
import { RosCommand } from './ecs.generated';
export { RosCommand as CommandProperty };
/**
 * Properties for defining a `Command`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export interface CommandProps {
    /**
     * Property commandId: Command ID.
     */
    readonly commandId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Command`.
 */
export interface ICommand extends ros.IResource {
    readonly props: CommandProps;
    /**
     * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    readonly attrCommandContent: ros.IResolvable | string;
    /**
     * Attribute CommandId: Command ID.
     */
    readonly attrCommandId: ros.IResolvable | string;
    /**
     * Attribute CommandName: Command name.
     */
    readonly attrCommandName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Command creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Command description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnableParameter: Whether to use parameters.
     */
    readonly attrEnableParameter: ros.IResolvable | string;
    /**
     * Attribute ParameterNames: Parameter name.
     */
    readonly attrParameterNames: ros.IResolvable | string;
    /**
     * Attribute Tags: The label information of the command.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Timeout: Timeout.
     */
    readonly attrTimeout: ros.IResolvable | string;
    /**
     * Attribute Type: Command type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute WorkingDir: Execution path.
     */
    readonly attrWorkingDir: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Command`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export declare class Command extends ros.Resource implements ICommand {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CommandProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    readonly attrCommandContent: ros.IResolvable | string;
    /**
     * Attribute CommandId: Command ID.
     */
    readonly attrCommandId: ros.IResolvable | string;
    /**
     * Attribute CommandName: Command name.
     */
    readonly attrCommandName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Command creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Command description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EnableParameter: Whether to use parameters.
     */
    readonly attrEnableParameter: ros.IResolvable | string;
    /**
     * Attribute ParameterNames: Parameter name.
     */
    readonly attrParameterNames: ros.IResolvable | string;
    /**
     * Attribute Tags: The label information of the command.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Timeout: Timeout.
     */
    readonly attrTimeout: ros.IResolvable | string;
    /**
     * Attribute Type: Command type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute WorkingDir: Execution path.
     */
    readonly attrWorkingDir: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandProps, enableResourcePropertyConstraint?: boolean);
}
