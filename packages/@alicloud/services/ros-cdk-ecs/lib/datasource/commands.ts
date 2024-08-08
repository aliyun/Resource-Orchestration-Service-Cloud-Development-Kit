import * as ros from '@alicloud/ros-cdk-core';
import { RosCommands } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommands as CommandsProperty };

/**
 * Properties for defining a `Commands`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export interface CommandsProps {

    /**
     * Property commandId: The ID of the command.
     */
    readonly commandId?: string | ros.IResolvable;

    /**
     * Property commandName: The name of the command. Partial command names are not supported.
     */
    readonly commandName?: string | ros.IResolvable;

    /**
     * Property description: Command description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Commands`, which is used to query all available commands that you created.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommands`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export class Commands extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommandsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CommandIds: The list of command IDs.
     */
    public readonly attrCommandIds: ros.IResolvable;

    /**
     * Attribute Commands: The list of commands.
     */
    public readonly attrCommands: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCommands = new RosCommands(this, id,  {
            type: props.type,
            description: props.description,
            commandId: props.commandId,
            commandName: props.commandName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommands;
        this.attrCommandIds = rosCommands.attrCommandIds;
        this.attrCommands = rosCommands.attrCommands;
    }
}
