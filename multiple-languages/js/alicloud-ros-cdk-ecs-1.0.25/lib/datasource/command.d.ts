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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Command`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export declare class Command extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommandProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    readonly attrCommandContent: ros.IResolvable;
    /**
     * Attribute CommandId: Command ID.
     */
    readonly attrCommandId: ros.IResolvable;
    /**
     * Attribute CommandName: Command name.
     */
    readonly attrCommandName: ros.IResolvable;
    /**
     * Attribute CreateTime: Command creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Command description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute EnableParameter: Whether to use parameters.
     */
    readonly attrEnableParameter: ros.IResolvable;
    /**
     * Attribute ParameterNames: Parameter name.
     */
    readonly attrParameterNames: ros.IResolvable;
    /**
     * Attribute Tags: The label information of the command.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute Timeout: Timeout.
     */
    readonly attrTimeout: ros.IResolvable;
    /**
     * Attribute Type: Command type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * Attribute WorkingDir: Execution path.
     */
    readonly attrWorkingDir: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandProps, enableResourcePropertyConstraint?: boolean);
}
