import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosFunction`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export interface RosFunctionProps {
    /**
     * @Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property handler: The handler of the function.
     */
    readonly handler: string | ros.IResolvable;
    /**
     * @Property runtime: The programming language of the function.
     */
    readonly runtime: string | ros.IResolvable;
    /**
     * @Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;
    /**
     * @Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;
    /**
     * @Property customDns: Custom DNS configuration.
     */
    readonly customDns?: RosFunction.CustomDnsProperty | ros.IResolvable;
    /**
     * @Property customRuntimeConfig: Custom runtime configuration.
     */
    readonly customRuntimeConfig?: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable;
    /**
     * @Property description: Function description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property diskSize: The disk size of the function, in MB.
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * @Property environmentVariables: The environment variables of the function.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property gpuConfig: The GPU configuration of the function.
     */
    readonly gpuConfig?: RosFunction.GpuConfigProperty | ros.IResolvable;
    /**
     * @Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;
    /**
     * @Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    readonly instanceLifecycleConfig?: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable;
    /**
     * @Property internetAccess: Whether the function can access the Internet.
     */
    readonly internetAccess?: boolean | ros.IResolvable;
    /**
     * @Property layers: The layers of the function.
     */
    readonly layers?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property logConfig: The log configuration of the function.
     */
    readonly logConfig?: RosFunction.LogConfigProperty | ros.IResolvable;
    /**
     * @Property memorySize: The memory size of the function, in MB.
     */
    readonly memorySize?: number | ros.IResolvable;
    /**
     * @Property nasConfig: The NAS configuration of the function.
     */
    readonly nasConfig?: RosFunction.NasConfigProperty | ros.IResolvable;
    /**
     * @Property ossMountConfig: The OSS mount configuration of the function.
     */
    readonly ossMountConfig?: RosFunction.OssMountConfigProperty | ros.IResolvable;
    /**
     * @Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    readonly role?: string | ros.IResolvable;
    /**
     * @Property timeout: The timeout of the function.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property tracingConfig: The tracing configuration of the function.
     */
    readonly tracingConfig?: RosFunction.TracingConfigProperty | ros.IResolvable;
    /**
     * @Property vpcConfig: The VPC configuration of the function.
     */
    readonly vpcConfig?: RosFunction.VpcConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Function`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Function` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export declare class RosFunction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Function";
    /**
     * @Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute FunctionId: The function ID
     */
    readonly attrFunctionId: ros.IResolvable;
    /**
     * @Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: The name of the function.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property handler: The handler of the function.
     */
    handler: string | ros.IResolvable;
    /**
     * @Property runtime: The programming language of the function.
     */
    runtime: string | ros.IResolvable;
    /**
     * @Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
     */
    code: RosFunction.CodeProperty | ros.IResolvable | undefined;
    /**
     * @Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
     */
    customContainerConfig: RosFunction.CustomContainerConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property customDns: Custom DNS configuration.
     */
    customDns: RosFunction.CustomDnsProperty | ros.IResolvable | undefined;
    /**
     * @Property customRuntimeConfig: Custom runtime configuration.
     */
    customRuntimeConfig: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property description: Function description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskSize: The disk size of the function, in MB.
     */
    diskSize: number | ros.IResolvable | undefined;
    /**
     * @Property environmentVariables: The environment variables of the function.
     */
    environmentVariables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property gpuConfig: The GPU configuration of the function.
     */
    gpuConfig: RosFunction.GpuConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    instanceConcurrency: number | ros.IResolvable | undefined;
    /**
     * @Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    instanceLifecycleConfig: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property internetAccess: Whether the function can access the Internet.
     */
    internetAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property layers: The layers of the function.
     */
    layers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property logConfig: The log configuration of the function.
     */
    logConfig: RosFunction.LogConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property memorySize: The memory size of the function, in MB.
     */
    memorySize: number | ros.IResolvable | undefined;
    /**
     * @Property nasConfig: The NAS configuration of the function.
     */
    nasConfig: RosFunction.NasConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ossMountConfig: The OSS mount configuration of the function.
     */
    ossMountConfig: RosFunction.OssMountConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    role: string | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout of the function.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property tracingConfig: The tracing configuration of the function.
     */
    tracingConfig: RosFunction.TracingConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property vpcConfig: The VPC configuration of the function.
     */
    vpcConfig: RosFunction.VpcConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface AccelerationInfoProperty {
        /**
         * @Property status: Acceleration status.
         */
        readonly status?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CodeProperty {
        /**
         * @Property sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
     * Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly sourceCode?: string | ros.IResolvable;
        /**
         * @Property zipFile: Function code Base 64 encoding of the ZIP package.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property checksum: CRC-64 value of the function code package. If a checksum is provided, Function Compute will verify whether the checksum of the code package is consistent with the provided checksum.
         */
        readonly checksum?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: The name of the OSS object where the code package is stored.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: The name of the OSS bucket where the code package is stored.
         */
        readonly ossBucketName?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomContainerConfigProperty {
        /**
         * @Property resolvedImageUri: The actual digest version of the deployed image. The code version specified by this digest is actually used when the function is started.
         */
        readonly resolvedImageUri?: string | ros.IResolvable;
        /**
         * @Property accelerationInfo: Acceleration configuration.
         */
        readonly accelerationInfo?: RosFunction.AccelerationInfoProperty | ros.IResolvable;
        /**
         * @Property acrInstanceId: The ID of the ACR instance.
         */
        readonly acrInstanceId?: string | ros.IResolvable;
        /**
         * @Property entrypoint: The entrypoints to run in the container.
         */
        readonly entrypoint?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property command: The commands to run in the container.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property accelerationType: Whether to enable mirror acceleration. Default means to turn on mirror acceleration, and None means to turn off mirror acceleration.
         */
        readonly accelerationType?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the container.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property healthCheckConfig: Health check configuration.
         */
        readonly healthCheckConfig?: RosFunction.HealthCheckConfigProperty | ros.IResolvable;
        /**
         * @Property image: The image address.
         */
        readonly image?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomDnsProperty {
        /**
         * @Property searches: List of DNS search domains.
         */
        readonly searches?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dnsOptions: List of DNS resolution configurations in the resolv.conf file.
         */
        readonly dnsOptions?: Array<RosFunction.DnsOptionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nameServers: List of DNS servers.
         */
        readonly nameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomRuntimeConfigProperty {
        /**
         * @Property args: Instance startup parameters.
         */
        readonly args?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property command: Instance startup commands.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property port: The listening port of the HTTP Server.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property healthCheckConfig: Health check configuration.
         */
        readonly healthCheckConfig?: RosFunction.CustomRuntimeConfigHealthCheckConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomRuntimeConfigHealthCheckConfigProperty {
        /**
         * @Property timeoutSeconds: The timeout for the health check.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
         */
        readonly httpGetUrl?: string | ros.IResolvable;
        /**
         * @Property periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface DnsOptionsProperty {
        /**
         * @Property value: The value of the DNS resolution configuration.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the DNS resolution configuration.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface GpuConfigProperty {
        /**
         * @Property gpuMemorySize: GPU memory specifications in MB, multiples of 1024MB.
         */
        readonly gpuMemorySize?: number | ros.IResolvable;
        /**
         * @Property gpuType: GPU instance type.
         */
        readonly gpuType?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface HealthCheckConfigProperty {
        /**
         * @Property timeoutSeconds: The timeout for the health check.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
         */
        readonly httpGetUrl?: string | ros.IResolvable;
        /**
         * @Property periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface InitializerProperty {
        /**
         * @Property timeout: The timeout for the callback method.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The execution entry of the callback method has a similar meaning to the request handler.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface InstanceLifecycleConfigProperty {
        /**
         * @Property preStop: Instance lifecycle callback method configuration.
         */
        readonly preStop?: RosFunction.PreStopProperty | ros.IResolvable;
        /**
         * @Property initializer: Instance lifecycle callback method configuration.
         */
        readonly initializer?: RosFunction.InitializerProperty | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface LogConfigProperty {
        /**
         * @Property project: The project of the function.
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logBeginRule: The log begin rule.
         */
        readonly logBeginRule?: string | ros.IResolvable;
        /**
         * @Property logstore: The logstore of the function.
         */
        readonly logstore?: string | ros.IResolvable;
        /**
         * @Property enableInstanceMetrics: Whether to enable the instance metrics.
         */
        readonly enableInstanceMetrics?: boolean | ros.IResolvable;
        /**
         * @Property enableRequestMetrics: Whether to enable the request metrics.
         */
        readonly enableRequestMetrics?: boolean | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface MountPointsProperty {
        /**
         * @Property enableTls: Mount using transport encryption. Note: Only general-purpose NAS supports transmission encryption.
         */
        readonly enableTls?: boolean | ros.IResolvable;
        /**
         * @Property serverAddr: NAS server address.
         */
        readonly serverAddr?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the function.
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface NasConfigProperty {
        /**
         * @Property mountPoints: The mount points of the function.
         */
        readonly mountPoints?: Array<RosFunction.MountPointsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property userId: The user ID of the function.
         */
        readonly userId?: number | ros.IResolvable;
        /**
         * @Property groupId: The group ID of the function.
         */
        readonly groupId?: number | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface OssMountConfigProperty {
        /**
         * @Property mountPoints: The mount points of the function.
         */
        readonly mountPoints?: Array<RosFunction.OssMountConfigMountPointsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface OssMountConfigMountPointsProperty {
        /**
         * @Property readOnly: Mounted OSS Bucket read-only.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property bucketName: Mounted OSS Bucket.
         */
        readonly bucketName?: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the bucket.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property bucketPath: Mounted OSS Bucket path.
         */
        readonly bucketPath?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the function.
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface PreStopProperty {
        /**
         * @Property timeout: The timeout for the callback method.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The execution entry of the callback method has a similar meaning to the request handler.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface TracingConfigProperty {
        /**
         * @Property type: The type of the function.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property params: Link tracking parameters.
         */
        readonly params?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface VpcConfigProperty {
        /**
         * @Property vpcId: The ID of the VPC.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of the VSwitch.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export interface RosTriggerProps {
    /**
     * @Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property triggerConfig: Trigger config.
     */
    readonly triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerName: Name of the trigger.
     */
    readonly triggerName: string | ros.IResolvable;
    /**
     * @Property triggerType: Type of the trigger.
     */
    readonly triggerType: string | ros.IResolvable;
    /**
     * @Property description: Description of the trigger.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property invocationRole: Invocation role.
     */
    readonly invocationRole?: string | ros.IResolvable;
    /**
     * @Property qualifier: Qualifier of the trigger.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property sourceArn: Source ARN of the trigger.
     */
    readonly sourceArn?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Trigger`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export declare class RosTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Trigger";
    /**
     * @Attribute FunctionName: Function name.
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * @Attribute TriggerId: The trigger ID.
     */
    readonly attrTriggerId: ros.IResolvable;
    /**
     * @Attribute TriggerName: Trigger name.
     */
    readonly attrTriggerName: ros.IResolvable;
    /**
     * @Attribute UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    readonly attrUrlInternet: ros.IResolvable;
    /**
     * @Attribute UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    readonly attrUrlIntranet: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: The name of the function.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property triggerConfig: Trigger config.
     */
    triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerName: Name of the trigger.
     */
    triggerName: string | ros.IResolvable;
    /**
     * @Property triggerType: Type of the trigger.
     */
    triggerType: string | ros.IResolvable;
    /**
     * @Property description: Description of the trigger.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property invocationRole: Invocation role.
     */
    invocationRole: string | ros.IResolvable | undefined;
    /**
     * @Property qualifier: Qualifier of the trigger.
     */
    qualifier: string | ros.IResolvable | undefined;
    /**
     * @Property sourceArn: Source ARN of the trigger.
     */
    sourceArn: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTriggerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
