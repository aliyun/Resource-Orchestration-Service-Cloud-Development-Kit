import * as ros from '@alicloud/ros-cdk-core';
import { RosCommands } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommands as CommandsProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::Commands`
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
     * Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::Commands`
 */
export class Commands extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CommandIds: The list of command IDs.
     */
    public readonly attrCommandIds: ros.IResolvable;

    /**
     * Attribute Commands: The list of commands.
     */
    public readonly attrCommands: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::Commands`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCommands = new RosCommands(this, id,  {
            type: props.type,
            description: props.description,
            commandId: props.commandId,
            commandName: props.commandName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommands;
        this.attrCommandIds = rosCommands.attrCommandIds;
        this.attrCommands = rosCommands.attrCommands;
    }
}
