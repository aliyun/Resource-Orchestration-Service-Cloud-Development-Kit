import * as ros from '@alicloud/ros-cdk-core';
import { RosRunCommand } from './cloudphone.generated';
export { RosRunCommand as RunCommandProperty };
/**
 * Properties for defining a `RunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export interface RunCommandProps {
    /**
     * Property command: The command to be executed.
     * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
     */
    readonly command: string | ros.IResolvable;
    /**
     * Property instanceIds: ID of the instance executing the command.
     * Range of n: 1 ~ 10
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property runAgainOn: The stage of executing the command again.
     */
    readonly runAgainOn?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `RunCommand`.
 */
export interface IRunCommand extends ros.IResource {
    readonly props: RunCommandProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::RunCommand`, which is used to run a command on cloud phones.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRunCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
 */
export declare class RunCommand extends ros.Resource implements IRunCommand {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RunCommandProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RunCommandProps, enableResourcePropertyConstraint?: boolean);
}
