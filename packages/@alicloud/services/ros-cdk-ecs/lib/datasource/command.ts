import * as ros from '@alicloud/ros-cdk-core';
import { RosCommand } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Command`, which is used to query an available command that is manually created.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export class Command extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommandProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    public readonly attrCommandContent: ros.IResolvable;

    /**
     * Attribute CommandId: Command ID.
     */
    public readonly attrCommandId: ros.IResolvable;

    /**
     * Attribute CommandName: Command name.
     */
    public readonly attrCommandName: ros.IResolvable;

    /**
     * Attribute CreateTime: Command creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: Command description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EnableParameter: Whether to use parameters.
     */
    public readonly attrEnableParameter: ros.IResolvable;

    /**
     * Attribute ParameterNames: Parameter name.
     */
    public readonly attrParameterNames: ros.IResolvable;

    /**
     * Attribute Tags: The label information of the command.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute Timeout: Timeout.
     */
    public readonly attrTimeout: ros.IResolvable;

    /**
     * Attribute Type: Command type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Attribute WorkingDir: Execution path.
     */
    public readonly attrWorkingDir: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCommand = new RosCommand(this, id,  {
            commandId: props.commandId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommand;
        this.attrCommandContent = rosCommand.attrCommandContent;
        this.attrCommandId = rosCommand.attrCommandId;
        this.attrCommandName = rosCommand.attrCommandName;
        this.attrCreateTime = rosCommand.attrCreateTime;
        this.attrDescription = rosCommand.attrDescription;
        this.attrEnableParameter = rosCommand.attrEnableParameter;
        this.attrParameterNames = rosCommand.attrParameterNames;
        this.attrTags = rosCommand.attrTags;
        this.attrTimeout = rosCommand.attrTimeout;
        this.attrType = rosCommand.attrType;
        this.attrWorkingDir = rosCommand.attrWorkingDir;
    }
}
