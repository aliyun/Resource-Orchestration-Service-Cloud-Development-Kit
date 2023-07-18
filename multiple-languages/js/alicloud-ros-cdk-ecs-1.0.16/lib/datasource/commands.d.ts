import * as ros from '@alicloud/ros-cdk-core';
import { RosCommands } from './ecs.generated';
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
export declare class Commands extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CommandIds: The list of command IDs.
     */
    readonly attrCommandIds: ros.IResolvable;
    /**
     * Attribute Commands: The list of commands.
     */
    readonly attrCommands: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::Commands`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CommandsProps, enableResourcePropertyConstraint?: boolean);
}
