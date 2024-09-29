import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
export interface RosAliasProps {
    /**
     * @Property aliasName: Alias name
     */
    readonly aliasName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property additionalVersion: Additional version
     */
    readonly additionalVersion?: string | ros.IResolvable;
    /**
     * @Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    readonly additionalWeight?: number | ros.IResolvable;
    /**
     * @Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property versionId: Version ID
     */
    readonly versionId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Alias`, which is used to create an Alias.
 * @Note This class does not contain additional functions, so it is recommended to use the `Alias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
export declare class RosAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Alias";
    /**
     * @Attribute AliasName: The alias name
     */
    readonly attrAliasName: ros.IResolvable;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aliasName: Alias name
     */
    aliasName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property additionalVersion: Additional version
     */
    additionalVersion: string | ros.IResolvable | undefined;
    /**
     * @Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    additionalWeight: number | ros.IResolvable | undefined;
    /**
     * @Property description: Version description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property versionId: Version ID
     */
    versionId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAliasProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCustomDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
export interface RosCustomDomainProps {
    /**
     * @Property domainName: domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property apiVersion: api version
     */
    readonly apiVersion?: string | ros.IResolvable;
    /**
     * @Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;
    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::CustomDomain`, which is used to create a custom domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
export declare class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::CustomDomain";
    /**
     * @Attribute Domain: The domain with protocol.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * @Attribute DomainName: The domain name
     */
    readonly attrDomainName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: domain name
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property apiVersion: api version
     */
    apiVersion: string | ros.IResolvable | undefined;
    /**
     * @Property certConfig: certificate info
     */
    certConfig: RosCustomDomain.CertConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    routeConfig: RosCustomDomain.RouteConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface CertConfigProperty {
        /**
         * @Property privateKey: private key
         */
        readonly privateKey: string | ros.IResolvable;
        /**
         * @Property certName: custom certificate name
         */
        readonly certName: string | ros.IResolvable;
        /**
         * @Property certificate: certificate
         */
        readonly certificate: string | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface RouteConfigProperty {
        /**
         * @Property routes: PathConfig Array
         */
        readonly routes: Array<RosCustomDomain.RoutesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface RoutesProperty {
        /**
         * @Property path: HTTP request path when a function is called with a custom domain name, for example: "\/login\/*"
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property functionName: Path to the function, for example: "login"
         */
        readonly functionName: string | ros.IResolvable;
        /**
         * @Property serviceName: Path to the service, for example: "blogService"
         */
        readonly serviceName: string | ros.IResolvable;
        /**
         * @Property qualifier: Service version or alias
         */
        readonly qualifier?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosFunction`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
 */
export interface RosFunctionProps {
    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property handler: The function execution entry point.
     */
    readonly handler: string | ros.IResolvable;
    /**
     * @Property runtime: The function runtime environment. Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
     */
    readonly runtime: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property asyncConfiguration: Configuration of asynchronous function calls
     */
    readonly asyncConfiguration?: RosFunction.AsyncConfigurationProperty | ros.IResolvable;
    /**
     * @Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
     */
    readonly caPort?: number | ros.IResolvable;
    /**
     * @Property code: The code that contains the function implementation.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;
    /**
     * @Property cpu: The number of vCPUs of the function. The value must be a multiple of 0.05.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;
    /**
     * @Property customDns: The custom DNS configurations of the function.
     */
    readonly customDns?: RosFunction.CustomDNSProperty | ros.IResolvable;
    /**
     * @Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
     */
    readonly customHealthCheckConfig?: RosFunction.CustomHealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property customRuntimeConfig: Custom runtime related configuration.
     */
    readonly customRuntimeConfig?: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable;
    /**
     * @Property description: Function description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property diskSize: The disk size of the function. Unit: MB. Valid values: 512 and 10240.
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * @Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property gpuMemorySize: The GPU memory capacity for the function. Unit: MB. The value must be a multiple of 1,024.
     */
    readonly gpuMemorySize?: number | ros.IResolvable;
    /**
     * @Property initializationTimeout: the max execution time of the initializer, in second
     */
    readonly initializationTimeout?: number | ros.IResolvable;
    /**
     * @Property initializer: the entry point of the initializer
     */
    readonly initializer?: string | ros.IResolvable;
    /**
     * @Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;
    /**
     * @Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
     */
    readonly instanceLifecycleConfig?: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable;
    /**
     * @Property instanceSoftConcurrency: The soft concurrency of the instance. You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
     */
    readonly instanceSoftConcurrency?: number | ros.IResolvable;
    /**
     * @Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    readonly memorySize?: number | ros.IResolvable;
    /**
     * @Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
     */
    readonly timeout?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Function`, which is used to create a function. Functions must be associated with services. All functions of a service share the same attributes as the service, such as service authorization and log configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `Function` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
 */
export declare class RosFunction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Function";
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
    /**
     * @Attribute ServiceId: The service ID
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property handler: The function execution entry point.
     */
    handler: string | ros.IResolvable;
    /**
     * @Property runtime: The function runtime environment. Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
     */
    runtime: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property asyncConfiguration: Configuration of asynchronous function calls
     */
    asyncConfiguration: RosFunction.AsyncConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
     */
    caPort: number | ros.IResolvable | undefined;
    /**
     * @Property code: The code that contains the function implementation.
     */
    code: RosFunction.CodeProperty | ros.IResolvable | undefined;
    /**
     * @Property cpu: The number of vCPUs of the function. The value must be a multiple of 0.05.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    customContainerConfig: RosFunction.CustomContainerConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property customDns: The custom DNS configurations of the function.
     */
    customDns: RosFunction.CustomDNSProperty | ros.IResolvable | undefined;
    /**
     * @Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
     */
    customHealthCheckConfig: RosFunction.CustomHealthCheckConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property customRuntimeConfig: Custom runtime related configuration.
     */
    customRuntimeConfig: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property description: Function description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskSize: The disk size of the function. Unit: MB. Valid values: 512 and 10240.
     */
    diskSize: number | ros.IResolvable | undefined;
    /**
     * @Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    environmentVariables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property gpuMemorySize: The GPU memory capacity for the function. Unit: MB. The value must be a multiple of 1,024.
     */
    gpuMemorySize: number | ros.IResolvable | undefined;
    /**
     * @Property initializationTimeout: the max execution time of the initializer, in second
     */
    initializationTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property initializer: the entry point of the initializer
     */
    initializer: string | ros.IResolvable | undefined;
    /**
     * @Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    instanceConcurrency: number | ros.IResolvable | undefined;
    /**
     * @Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
     */
    instanceLifecycleConfig: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceSoftConcurrency: The soft concurrency of the instance. You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
     */
    instanceSoftConcurrency: number | ros.IResolvable | undefined;
    /**
     * @Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    memorySize: number | ros.IResolvable | undefined;
    /**
     * @Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
     */
    timeout: number | ros.IResolvable | undefined;
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
    interface AsyncConfigurationProperty {
        /**
         * @Property destination: Set destination of asynchronous function calls
         */
        readonly destination?: RosFunction.DestinationProperty | ros.IResolvable;
        /**
         * @Property maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
         */
        readonly maxAsyncEventAgeInSeconds?: number | ros.IResolvable;
        /**
         * @Property statefulInvocation: Whether enable stateful invocation
         */
        readonly statefulInvocation?: boolean | ros.IResolvable;
        /**
         * @Property maxAsyncRetryAttempts: Configure the number of retries
         */
        readonly maxAsyncRetryAttempts?: number | ros.IResolvable;
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
         * @Property zipFile: Base64 encoded zip file content.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: OSS object name.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: OSS bucket name.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
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
         * @Property args: Container startup parameters. For example: ["-arg1", "value1"]
         */
        readonly args?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the Container Registry Enterprise Edition instance. If you use an Enterprise Edition instance for the container image, you must add the instance ID. The default resolution IP address of the instance must be the IP address of the virtual private cloud (VPC) that the instance belongs. Alibaba Cloud DNS PrivateZone cannot be used for domain name resolution.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property command: Container start command. For example: ["\/code\/myserver"]
         */
        readonly command?: string | ros.IResolvable;
        /**
         * @Property accelerationType: Whether to enable image acceleration. Valid Values:
     * Default: Indicates that image acceleration is enabled.
     * None: Indicates that image acceleration is disabled.
         */
        readonly accelerationType?: string | ros.IResolvable;
        /**
         * @Property webServerMode: Specifies whether the web server mode is used for image running.
     * A value of true indicates that a web server is implemented in your container image to listen on ports and process requests.
     * A value of false indicates that the container must actively exit the process after it runs, and the exit code is 0.
     * Default value: true.
         */
        readonly webServerMode?: boolean | ros.IResolvable;
        /**
         * @Property image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com\/fc-demo\/helloworld:v1beta1
         */
        readonly image: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomDNSProperty {
        /**
         * @Property searches: The value of the DNS search domain.
         */
        readonly searches?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dnsOptions: undefined
         */
        readonly dnsOptions?: Array<RosFunction.DnsOptionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nameServers: The IP address of the DNS server.
         */
        readonly nameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomHealthCheckConfigProperty {
        /**
         * @Property timeoutSeconds: The timeout period of health checks. Valid values: 1 to 3. Default value: 1.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The delay between the container startup and the health check. Valid values: 0 to 120. Default value: 0.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGetUrl: The health check URL of the custom container. The content can be up to 2,048 characters in length.
         */
        readonly httpGetUrl?: string | ros.IResolvable;
        /**
         * @Property periodSeconds: The health check period. Value range: 1 to 120. Default value: 3.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The threshold for health check failures. When this value is reached, the system considers the check failed. Value range: 1 to 120. Default value: 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The threshold for health check successes. When this value is reached, the system considers the check succeeded. Value range: 1 to 120. Default value: 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CustomRuntimeConfigProperty {
        /**
         * @Property args: The startup parameters.
         */
        readonly args?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property command: The startup command.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface DestinationProperty {
        /**
         * @Property onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
         */
        readonly onSuccess?: string | ros.IResolvable;
        /**
         * @Property onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
         */
        readonly onFailure?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface DnsOptionsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface InstanceLifecycleConfigProperty {
        /**
         * @Property preStop: The configuration of lifecycle callbacks.
         */
        readonly preStop?: RosFunction.PreStopProperty | ros.IResolvable;
        /**
         * @Property preFreeze: The configuration of lifecycle callbacks.
         */
        readonly preFreeze?: RosFunction.PreFreezeProperty | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface PreFreezeProperty {
        /**
         * @Property timeout: The timeout period for the execution. Unit: seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The handler of the function.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface PreStopProperty {
        /**
         * @Property timeout: The timeout period for the execution. Unit: seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The handler of the function.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosFunctionInvoker`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
export interface RosFunctionInvokerProps {
    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    readonly async?: boolean | ros.IResolvable;
    /**
     * @Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    readonly checkError?: boolean | ros.IResolvable;
    /**
     * @Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    readonly event?: string | ros.IResolvable;
    /**
     * @Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    readonly executeVersion?: number | ros.IResolvable;
    /**
     * @Property qualifier: service version, can be versionId or aliasName
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property serviceRegionId: Which region service belongs to.
     */
    readonly serviceRegionId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::FunctionInvoker`, which is used to invoke a function.
 * @Note This class does not contain additional functions, so it is recommended to use the `FunctionInvoker` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
export declare class RosFunctionInvoker extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::FunctionInvoker";
    /**
     * @Attribute Result: Depends on result type:
NoResult: Async invoke has no result.
Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
Failure: Error Message.
     */
    readonly attrResult: ros.IResolvable;
    /**
     * @Attribute ResultType: Result type:
NoResult: Async invoke has no result.
Success: Sync invoke succeeds.
Failure: Sync invoke fails.
     */
    readonly attrResultType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    async: boolean | ros.IResolvable | undefined;
    /**
     * @Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    checkError: boolean | ros.IResolvable | undefined;
    /**
     * @Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    event: string | ros.IResolvable | undefined;
    /**
     * @Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    executeVersion: number | ros.IResolvable | undefined;
    /**
     * @Property qualifier: service version, can be versionId or aliasName
     */
    qualifier: string | ros.IResolvable | undefined;
    /**
     * @Property serviceRegionId: Which region service belongs to.
     */
    serviceRegionId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionInvokerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosLayer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
 */
export interface RosLayerProps {
    /**
     * @Property code: The code of layer.
     */
    readonly code: RosLayer.CodeProperty | ros.IResolvable;
    /**
     * @Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
     */
    readonly compatibleRuntime: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property layerName: The name of layer
     */
    readonly layerName: string | ros.IResolvable;
    /**
     * @Property description: The description of the layer.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Layer`, which is used to publish layer versions.
 * @Note This class does not contain additional functions, so it is recommended to use the `Layer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
 */
export declare class RosLayer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Layer";
    /**
     * @Attribute Arn: The name of the layer resource.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute LayerName: The name of layer
     */
    readonly attrLayerName: ros.IResolvable;
    /**
     * @Attribute Version: The version of the layer resource.
     */
    readonly attrVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property code: The code of layer.
     */
    code: RosLayer.CodeProperty | ros.IResolvable;
    /**
     * @Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
     */
    compatibleRuntime: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property layerName: The name of layer
     */
    layerName: string | ros.IResolvable;
    /**
     * @Property description: The description of the layer.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLayerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLayer {
    /**
     * @stability external
     */
    interface CodeProperty {
        /**
         * @Property zipFile: The function code that is encoded in Base64.
     * Priority: ZipFile > OssBucketName&OssObjectName.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: The name of the OSS object that stores the ZIP package of the function code.
     * Priority: ZipFile > OssBucketName&OssObjectName.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: The name of the Object Storage Service (OSS) bucket that
     * stores the ZIP package of the function code.
     * Priority: ZipFile > OssBucketName&OssObjectName.
         */
        readonly ossBucketName?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
export interface RosProvisionConfigProps {
    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property target: Number of provision
     */
    readonly target: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::ProvisionConfig`, which is used to create provisioned instances in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProvisionConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
export declare class RosProvisionConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::ProvisionConfig";
    /**
     * @Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * @Attribute Qualifier: The service alias
     */
    readonly attrQualifier: ros.IResolvable;
    /**
     * @Attribute Resource: The resource
     */
    readonly attrResource: ros.IResolvable;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute Target: Number of provision
     */
    readonly attrTarget: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    qualifier: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property target: Number of provision
     */
    target: number | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProvisionConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
 */
export interface RosServiceProps {
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: Service description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property internetAccess: Set it to true to enable Internet access.
     */
    readonly internetAccess?: boolean | ros.IResolvable;
    /**
     * @Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
     */
    readonly logConfig?: RosService.LogConfigProperty | ros.IResolvable;
    /**
     * @Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
     */
    readonly nasConfig?: RosService.NasConfigProperty | ros.IResolvable;
    /**
     * @Property ossMountConfig: The OSS mount configurations.
     */
    readonly ossMountConfig?: RosService.OssMountConfigProperty | ros.IResolvable;
    /**
     * @Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    readonly role?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosService.TagsProperty[];
    /**
     * @Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
     */
    readonly tracingConfig?: RosService.TracingConfigProperty | ros.IResolvable;
    /**
     * @Property vpcBindings: Function Invocation only by Specified VPCs.
     * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
     */
    readonly vpcBindings?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
     */
    readonly vpcConfig?: RosService.VpcConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Service`, which is used to create a service in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
 */
export declare class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Service";
    /**
     * @Attribute InternetAccess: Whether enable Internet access
     */
    readonly attrInternetAccess: ros.IResolvable;
    /**
     * @Attribute LogProject: Log project of service
     */
    readonly attrLogProject: ros.IResolvable;
    /**
     * @Attribute Logstore: Log store of service
     */
    readonly attrLogstore: ros.IResolvable;
    /**
     * @Attribute Role: Role of service
     */
    readonly attrRole: ros.IResolvable;
    /**
     * @Attribute ServiceId: The service ID
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute Tags: Tags of service
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Service description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property internetAccess: Set it to true to enable Internet access.
     */
    internetAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
     */
    logConfig: RosService.LogConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
     */
    nasConfig: RosService.NasConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ossMountConfig: The OSS mount configurations.
     */
    ossMountConfig: RosService.OssMountConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    role: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosService.TagsProperty[] | undefined;
    /**
     * @Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
     */
    tracingConfig: RosService.TracingConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property vpcBindings: Function Invocation only by Specified VPCs.
     * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
     */
    vpcBindings: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
     */
    vpcConfig: RosService.VpcConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface LogConfigProperty {
        /**
         * @Property project: The project name of Logs service
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
     * None: disables the log splitting rule. This is the default value.
     * DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
         */
        readonly logBeginRule?: string | ros.IResolvable;
        /**
         * @Property logstore: The log store name of Logs service
         */
        readonly logstore?: string | ros.IResolvable;
        /**
         * @Property enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
     * false: disables request-level metrics.
     * true: enables request-level metrics. Default value: true.
         */
        readonly enableRequestMetrics?: boolean | ros.IResolvable;
    }
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface MountPointsProperty {
        /**
         * @Property serverAddr: The address of NAS instance.
         */
        readonly serverAddr: string | ros.IResolvable;
        /**
         * @Property mountDir: A local mount point.
         */
        readonly mountDir: string | ros.IResolvable;
    }
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface NasConfigProperty {
        /**
         * @Property mountPoints: Mount points
         */
        readonly mountPoints: Array<RosService.MountPointsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property userId: User ID
         */
        readonly userId: number | ros.IResolvable;
        /**
         * @Property groupId: Group ID
         */
        readonly groupId: number | ros.IResolvable;
    }
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface OssMountConfigProperty {
        /**
         * @Property mountPoints: The OSS mount point configurations.
         */
        readonly mountPoints: Array<RosService.OssMountConfigMountPointsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface OssMountConfigMountPointsProperty {
        /**
         * @Property readOnly: Whether the oss bucket is read-only
         */
        readonly readOnly: boolean | ros.IResolvable;
        /**
         * @Property bucketName: mount OSS bucket name.
         */
        readonly bucketName: string | ros.IResolvable;
        /**
         * @Property bucketPath: Path of the mounted OSS Bucket.
         */
        readonly bucketPath: string | ros.IResolvable;
        /**
         * @Property endPoint: OSS access address,
         */
        readonly endPoint: string | ros.IResolvable;
        /**
         * @Property mountDir: A local mount point.
         */
        readonly mountDir: string | ros.IResolvable;
    }
}
export declare namespace RosService {
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
export declare namespace RosService {
    /**
     * @stability external
     */
    interface TracingConfigProperty {
        /**
         * @Property type: The type of the tracing analysis system.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property params: The tracing analysis parameters.
         */
        readonly params?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
    }
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface VpcConfigProperty {
        /**
         * @Property vpcId: VPC ID
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property zoneId: Zone Id
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: List of VSwitch IDs
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID
         */
        readonly securityGroupId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
 */
export interface RosTriggerProps {
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string | ros.IResolvable;
    /**
     * @Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string | ros.IResolvable;
    /**
     * @Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role\/fc-test"
     */
    readonly invocationRole?: string | ros.IResolvable;
    /**
     * @Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    readonly sourceArn?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Trigger`, which is used to trigger the invocation of a function.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
 */
export declare class RosTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Trigger";
    /**
     * @Attribute FunctionName: Function name.
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * @Attribute ServiceName: Service name.
     */
    readonly attrServiceName: ros.IResolvable;
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
     * @Property functionName: Function name.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property serviceName: Service name.
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    triggerName: string | ros.IResolvable;
    /**
     * @Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    triggerType: string | ros.IResolvable;
    /**
     * @Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role\/fc-test"
     */
    invocationRole: string | ros.IResolvable | undefined;
    /**
     * @Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    qualifier: string | ros.IResolvable | undefined;
    /**
     * @Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
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
/**
 * Properties for defining a `RosVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
export interface RosVersionProps {
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Version`, which is used to release a Version.
 * @Note This class does not contain additional functions, so it is recommended to use the `Version` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
export declare class RosVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Version";
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Service name
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property description: Version description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVersionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
