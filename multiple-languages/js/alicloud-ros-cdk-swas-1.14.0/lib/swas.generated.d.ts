import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export interface RosInstanceProps {
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instance`, which is used to create a subscription simple application server.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instance";
    /**
     * @Attribute InnerIpAddress: The inner IP address of simple application server.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the simple application server.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PublicIpAddress: The public IP address of simple application server.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    planId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    dataDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export interface RosInstancesProps {
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;
    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstances.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instances`, which is used to create subscription simple application servers.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instances";
    /**
     * @Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
     */
    readonly attrInnerIpAddresses: ros.IResolvable;
    /**
     * @Attribute InstanceIds: The IDs of the simple application servers.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute PublicIpAddresses: The public IP addresses of simple application servers.
     */
    readonly attrPublicIpAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    planId: string | ros.IResolvable;
    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    amount: number | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    dataDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstances.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstances {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export interface RosRunCommandProps {
    /**
     * @Property commandContent: The plaintext content of the command to run.
     */
    readonly commandContent: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of the command to run.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;
    /**
     * @Property enableParameter: Specifies whether the command contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
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
     * @Property sync: Whether to run the command synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * @Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;
    /**
     * @Property workingDir: The directory in which to run the command on the instance. Default value:
     * Linux instances: \/root
     * Windows instances: C:\ProgramData\aliyun\assist\$(version)
     */
    readonly workingDir?: string | ros.IResolvable;
    /**
     * @Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    readonly workingUser?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::RunCommand`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommand` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export declare class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::RunCommand";
    /**
     * @Attribute InvokeId: The ID of the command execution.
     */
    readonly attrInvokeId: ros.IResolvable;
    /**
     * @Attribute InvokeResult: The result of the command execution.
     */
    readonly attrInvokeResult: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandContent: The plaintext content of the command to run.
     */
    commandContent: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of the command to run.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    type: string | ros.IResolvable;
    /**
     * @Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    contentEncoding: string | ros.IResolvable | undefined;
    /**
     * @Property enableParameter: Specifies whether the command contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
     * Number of custom parameters: 0 to 20.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property sync: Whether to run the command synchronously.
     */
    sync: boolean | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    windowsPasswordName: string | ros.IResolvable | undefined;
    /**
     * @Property workingDir: The directory in which to run the command on the instance. Default value:
     * Linux instances: \/root
     * Windows instances: C:\ProgramData\aliyun\assist\$(version)
     */
    workingDir: string | ros.IResolvable | undefined;
    /**
     * @Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    workingUser: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
