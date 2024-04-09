import * as ros from '@alicloud/ros-cdk-core';
import { RosCommand } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommand as CommandProperty };

/**
 * Properties for defining a `Command`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
 */
export interface CommandProps {

    /**
     * Property type: The type of command.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    readonly commandContent?: string | ros.IResolvable;

    /**
     * Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: Base64. If the specified value of this parameter is invalid, Base64 is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;

    /**
     * Property description: The description of command.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * Property name: The name of command.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to command. Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCommand.TagsProperty[];

    /**
     * Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * Property workingDir: The path where command will be executed in the instance.
     */
    readonly workingDir?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Command`, which is used to create a Cloud Assistant command.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
 */
export class Command extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommandProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CommandId: The id of command created.
     */
    public readonly attrCommandId: ros.IResolvable;

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
            workingDir: props.workingDir,
            commandContent: props.commandContent,
            type: props.type,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            timeout: props.timeout,
            enableParameter: props.enableParameter,
            contentEncoding: props.contentEncoding,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommand;
        this.attrCommandId = rosCommand.attrCommandId;
    }
}
