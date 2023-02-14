import * as ros from '@alicloud/ros-cdk-core';
import { RosRunCommand } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRunCommand as RunCommandProperty };

/**
 * Properties for defining a `ALIYUN::ECS::RunCommand`
 */
export interface RunCommandProps {

    /**
     * Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    readonly commandContent: string | ros.IResolvable;

    /**
     * Property instanceIds: The instance id list. Instances status must be running.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;

    /**
     * Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    readonly frequency?: string | ros.IResolvable;

    /**
     * Property keepCommand: Specifies whether to retain the script after it is run. Valid values:
     * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
     * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
     * Default value: false
     */
    readonly keepCommand?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the script, which supports all character sets. It can be up to 128 characters in length.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;

    /**
     * Property timed: Specifies whether to periodically run the script. Valid values:
     * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
     * false: runs once only.
     * Default value: false
     */
    readonly timed?: boolean | ros.IResolvable;

    /**
     * Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    readonly workingDir?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::RunCommand`
 */
export class RunCommand extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CommandId: The id of command created.
     */
    public readonly attrCommandId: ros.IResolvable;

    /**
     * Attribute InvokeId: The invoke id of command.
     */
    public readonly attrInvokeId: ros.IResolvable;

    /**
     * Attribute InvokeInstances: The InvokeInstances of command.
     */
    public readonly attrInvokeInstances: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RunCommandProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRunCommand = new RosRunCommand(this, id,  {
            parameters: props.parameters,
            description: props.description,
            timeout: props.timeout,
            timed: props.timed,
            contentEncoding: props.contentEncoding,
            name: props.name,
            workingDir: props.workingDir,
            commandContent: props.commandContent,
            type: props.type,
            frequency: props.frequency,
            enableParameter: props.enableParameter,
            sync: props.sync === undefined || props.sync === null ? false : props.sync,
            instanceIds: props.instanceIds,
            keepCommand: props.keepCommand,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRunCommand;
        this.attrCommandId = rosRunCommand.attrCommandId;
        this.attrInvokeId = rosRunCommand.attrInvokeId;
        this.attrInvokeInstances = rosRunCommand.attrInvokeInstances;
    }
}
