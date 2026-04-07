import * as ros from '@alicloud/ros-cdk-core';
import { RosRunCommand } from './swas.generated';
export { RosRunCommand as RunCommandProperty };
/**
 * Properties for defining a `RunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export interface RunCommandProps {
    /**
     * Property commandContent: The plaintext content of the command to run.
     */
    readonly commandContent: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property name: The name of the command to run.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property type: The language type of the O&M script. Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;
    /**
     * Property enableParameter: Specifies whether the command contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;
    /**
     * Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
     * Number of custom parameters: 0 to 20.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property sync: Whether to run the command synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;
    /**
     * Property workingDir: The directory in which to run the command on the instance. Default value:
     * Linux instances: \/root
     * Windows instances: C:\ProgramData\aliyun\assist\$(version)
     */
    readonly workingDir?: string | ros.IResolvable;
    /**
     * Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    readonly workingUser?: string | ros.IResolvable;
}
/**
 * Represents a `RunCommand`.
 */
export interface IRunCommand extends ros.IResource {
    readonly props: RunCommandProps;
    /**
     * Attribute InvokeId: The ID of the command execution.
     */
    readonly attrInvokeId: ros.IResolvable | string;
    /**
     * Attribute InvokeResult: The result of the command execution.
     */
    readonly attrInvokeResult: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SWAS::RunCommand`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRunCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export declare class RunCommand extends ros.Resource implements IRunCommand {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RunCommandProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InvokeId: The ID of the command execution.
     */
    readonly attrInvokeId: ros.IResolvable | string;
    /**
     * Attribute InvokeResult: The result of the command execution.
     */
    readonly attrInvokeResult: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RunCommandProps, enableResourcePropertyConstraint?: boolean);
}
