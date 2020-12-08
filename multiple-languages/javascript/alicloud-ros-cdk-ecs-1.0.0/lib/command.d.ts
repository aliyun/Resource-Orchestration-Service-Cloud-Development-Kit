import * as ros from '@alicloud/ros-cdk-core';
import { RosCommand } from './ecs.generated';
export { RosCommand as CommandProperty };
/**
 * Properties for defining a `ALIYUN::ECS::Command`
 */
export interface CommandProps {
    /**
     * @Property type: The type of command.
     */
    readonly type: string;
    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    readonly commandContent?: string;
    /**
     * @Property description: The description of command.
     */
    readonly description?: string;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of command.
     */
    readonly name?: string;
    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    readonly timeout?: number;
    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    readonly workingDir?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::Command`
 */
export declare class Command extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: any;
    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommandProps, enableResourcePropertyConstraint?: boolean);
}
