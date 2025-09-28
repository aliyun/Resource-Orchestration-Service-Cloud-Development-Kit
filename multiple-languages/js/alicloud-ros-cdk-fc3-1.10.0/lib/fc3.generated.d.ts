import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAsyncInvokeConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
 */
export interface RosAsyncInvokeConfigProps {
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property asyncTask: Whether to enable asynchronous tasks (optional).
     */
    readonly asyncTask?: boolean | ros.IResolvable;
    /**
     * @Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
     */
    readonly destinationConfig?: RosAsyncInvokeConfig.DestinationConfigProperty | ros.IResolvable;
    /**
     * @Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
     */
    readonly maxAsyncEventAgeInSeconds?: number | ros.IResolvable;
    /**
     * @Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
     */
    readonly maxAsyncRetryAttempts?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::AsyncInvokeConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AsyncInvokeConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
 */
export declare class RosAsyncInvokeConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::AsyncInvokeConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property asyncTask: Whether to enable asynchronous tasks (optional).
     */
    asyncTask: boolean | ros.IResolvable | undefined;
    /**
     * @Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
     */
    destinationConfig: RosAsyncInvokeConfig.DestinationConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
     */
    maxAsyncEventAgeInSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
     */
    maxAsyncRetryAttempts: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAsyncInvokeConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAsyncInvokeConfig {
    /**
     * @stability external
     */
    interface DestinationConfigProperty {
        /**
         * @Property onSuccess: Successful callback target structure.
         */
        readonly onSuccess?: RosAsyncInvokeConfig.OnSuccessProperty | ros.IResolvable;
        /**
         * @Property onFailure: Failed callback target structure.
         */
        readonly onFailure?: RosAsyncInvokeConfig.OnFailureProperty | ros.IResolvable;
    }
}
export declare namespace RosAsyncInvokeConfig {
    /**
     * @stability external
     */
    interface OnFailureProperty {
        /**
         * @Property destination: Asynchronous invocation target resource descriptor.
         */
        readonly destination: string | ros.IResolvable;
    }
}
export declare namespace RosAsyncInvokeConfig {
    /**
     * @stability external
     */
    interface OnSuccessProperty {
        /**
         * @Property destination: Asynchronous invocation target resource descriptor.
         */
        readonly destination: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosConcurrencyConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export interface RosConcurrencyConfigProps {
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    readonly reservedConcurrency: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::ConcurrencyConfig`, which is used to configure reserved concurrency for a function in Function Compute 3.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConcurrencyConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export declare class RosConcurrencyConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ConcurrencyConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property functionName: Function name.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    reservedConcurrency: number | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConcurrencyConfigProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export interface RosCustomDomainProps {
    /**
     * @Property authConfig: Permission authentication configuration.
     */
    readonly authConfig: RosCustomDomain.AuthConfigProperty | ros.IResolvable;
    /**
     * @Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property protocol: Protocol types supported by the domain name. Valid values:
     * - HTTP: Only HTTP protocol is supported.
     * - HTTPS: HTTPS only is supported.
     * - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property certConfig: HTTPS certificate information.
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;
    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
    /**
     * @Property tlsConfig: TLS config.
     */
    readonly tlsConfig?: RosCustomDomain.TlsConfigProperty | ros.IResolvable;
    /**
     * @Property wafConfig: Web application firewall configuration information.
     */
    readonly wafConfig?: RosCustomDomain.WafConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::CustomDomain`, which is used to create a custom domain name in Function Compute 3.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export declare class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::CustomDomain";
    /**
     * @Attribute DomainName: The domain name
     */
    readonly attrDomainName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authConfig: Permission authentication configuration.
     */
    authConfig: RosCustomDomain.AuthConfigProperty | ros.IResolvable;
    /**
     * @Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property protocol: Protocol types supported by the domain name. Valid values:
     * - HTTP: Only HTTP protocol is supported.
     * - HTTPS: HTTPS only is supported.
     * - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property certConfig: HTTPS certificate information.
     */
    certConfig: RosCustomDomain.CertConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    routeConfig: RosCustomDomain.RouteConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property tlsConfig: TLS config.
     */
    tlsConfig: RosCustomDomain.TlsConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property wafConfig: Web application firewall configuration information.
     */
    wafConfig: RosCustomDomain.WafConfigProperty | ros.IResolvable | undefined;
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
    interface AuthConfigProperty {
        /**
         * @Property authInfo: Authentication information.
         */
        readonly authInfo?: string | ros.IResolvable;
        /**
         * @Property authType: Authentication type.
         */
        readonly authType: string | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface CertConfigProperty {
        /**
         * @Property privateKey: Private key in PEM format.
         */
        readonly privateKey: string | ros.IResolvable;
        /**
         * @Property certName: Certificate name.
         */
        readonly certName: string | ros.IResolvable;
        /**
         * @Property certificate: Certificates in PEM format.
         */
        readonly certificate: string | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface EqualRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface RegexRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface RewriteConfigProperty {
        /**
         * @Property wildcardRules: Wildcard matching rules.
         */
        readonly wildcardRules?: Array<RosCustomDomain.WildcardRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regexRules: Regular matching rules.
         */
        readonly regexRules?: Array<RosCustomDomain.RegexRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property equalRules: Exact matching rules.
         */
        readonly equalRules?: Array<RosCustomDomain.EqualRulesProperty | ros.IResolvable> | ros.IResolvable;
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
         * @Property qualifier: Service version or alias
         */
        readonly qualifier: string | ros.IResolvable;
        /**
         * @Property rewriteConfig: Rewrite configuration.
         */
        readonly rewriteConfig?: RosCustomDomain.RewriteConfigProperty | ros.IResolvable;
        /**
         * @Property methods: HTTP request methods. Valid values: HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS
         */
        readonly methods?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface TlsConfigProperty {
        /**
         * @Property minVersion: Minimum supported TLS version.
         */
        readonly minVersion: string | ros.IResolvable;
        /**
         * @Property maxVersion: Maximum supported TLS version.
         */
        readonly maxVersion?: string | ros.IResolvable;
        /**
         * @Property cipherSuites: TLS cipher suites.
         */
        readonly cipherSuites: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface WafConfigProperty {
        /**
         * @Property enableWaf: Whether to enable WAF.
         */
        readonly enableWaf?: boolean | ros.IResolvable;
    }
}
export declare namespace RosCustomDomain {
    /**
     * @stability external
     */
    interface WildcardRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
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
     * @Property disableOndemand: Whether to disable the creation of on-demand instances. When enabled, on-demand instances will not be created, and only reserved instances can be used.
     */
    readonly disableOndemand?: boolean | ros.IResolvable;
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
     * @Property instanceIsolationMode: Instance isolation mode.
     */
    readonly instanceIsolationMode?: string | ros.IResolvable;
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
     * @Property sessionAffinity: The session affinity policy for Function Compute requests. Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
     */
    readonly sessionAffinity?: string | ros.IResolvable;
    /**
     * @Property sessionAffinityConfig: Session affinity configuration.
     */
    readonly sessionAffinityConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to function. Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosFunction.TagsProperty[];
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Function`, which is used to create a Function Compute 3.0 function.
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
     * @Property disableOndemand: Whether to disable the creation of on-demand instances. When enabled, on-demand instances will not be created, and only reserved instances can be used.
     */
    disableOndemand: boolean | ros.IResolvable | undefined;
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
     * @Property instanceIsolationMode: Instance isolation mode.
     */
    instanceIsolationMode: string | ros.IResolvable | undefined;
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
     * @Property sessionAffinity: The session affinity policy for Function Compute requests. Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
     */
    sessionAffinity: string | ros.IResolvable | undefined;
    /**
     * @Property sessionAffinityConfig: Session affinity configuration.
     */
    sessionAffinityConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to function. Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosFunction.TagsProperty[] | undefined;
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
    interface AuthConfigProperty {
        /**
         * @Property userName: The username that is used to log on to the image repository.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property password: The password of the username that is used to log on to the image repository.
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosFunction {
    /**
     * @stability external
     */
    interface CertConfigProperty {
        /**
         * @Property insecure: Whether to skip certificate verification. Default value is false.
         */
        readonly insecure: boolean | ros.IResolvable;
        /**
         * @Property rootCaCertBase64: The certificate authority (CA) certificate of the image repository.
         */
        readonly rootCaCertBase64?: string | ros.IResolvable;
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
         * @Property registryConfig: The configurations of the image repository.
         */
        readonly registryConfig?: RosFunction.RegistryConfigProperty | ros.IResolvable;
        /**
         * @Property resolvedImageUri: The actual digest version of the deployed image. The code version specified by this digest is actually used when the function is started.
         */
        readonly resolvedImageUri?: string | ros.IResolvable;
        /**
         * @Property acrInstanceId: The ID of the ACR instance.
         */
        readonly acrInstanceId?: string | ros.IResolvable;
        /**
         * @Property accelerationInfo: Acceleration configuration.
         */
        readonly accelerationInfo?: RosFunction.AccelerationInfoProperty | ros.IResolvable;
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
    interface NetworkConfigProperty {
        /**
         * @Property vpcId: The ID of the virtual private cloud (VPC) that can be used to connect to the image repository.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch that can be used to connect to the image repository.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that can be used to connect to the image repository.
         */
        readonly securityGroupId: string | ros.IResolvable;
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
    interface RegistryConfigProperty {
        /**
         * @Property certConfig: The certificate configurations.
         */
        readonly certConfig: RosFunction.CertConfigProperty | ros.IResolvable;
        /**
         * @Property networkConfig: The network information of the image repository.
         */
        readonly networkConfig?: RosFunction.NetworkConfigProperty | ros.IResolvable;
        /**
         * @Property authConfig: The authentication information of the image repository.
         */
        readonly authConfig?: RosFunction.AuthConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosFunction {
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
 * Properties for defining a `RosFunctionInvoker`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker
 */
export interface RosFunctionInvokerProps {
    /**
     * @Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property async: Whether to invoke the function asynchronously.
     */
    readonly async?: boolean | ros.IResolvable;
    /**
     * @Property checkAsyncInvocation: Check async invocation setting.
     */
    readonly checkAsyncInvocation?: RosFunctionInvoker.CheckAsyncInvocationProperty | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::FunctionInvoker`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FunctionInvoker` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker
 */
export declare class RosFunctionInvoker extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::FunctionInvoker";
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
     * @Property functionName: The name of the function.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property async: Whether to invoke the function asynchronously.
     */
    async: boolean | ros.IResolvable | undefined;
    /**
     * @Property checkAsyncInvocation: Check async invocation setting.
     */
    checkAsyncInvocation: RosFunctionInvoker.CheckAsyncInvocationProperty | ros.IResolvable | undefined;
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
export declare namespace RosFunctionInvoker {
    /**
     * @stability external
     */
    interface CheckAsyncInvocationProperty {
        /**
         * @Property checkTimes: Check times for async invocation result.
     * Default is 10 times.
         */
        readonly checkTimes: number | ros.IResolvable;
        /**
         * @Property checkInterval: Check interval for async invocation result.
     * Default is 10 seconds. Unit is second
         */
        readonly checkInterval: number | ros.IResolvable;
        /**
         * @Property enabled: Whether check async invocation result.
     * If set true and function invocation type is async, the resource creation will wait until invocation finish and check result.
     * Default is false
         */
        readonly enabled: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export interface RosProvisionConfigProps {
    /**
     * @Property defaultTarget: The number of target resources to reserve.
     */
    readonly defaultTarget: number | ros.IResolvable;
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * @Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateCpu?: boolean | ros.IResolvable;
    /**
     * @Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateGpu?: boolean | ros.IResolvable;
    /**
     * @Property qualifier: Function alias or LATEST.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property scheduledActions: Timing policy configuration.
     */
    readonly scheduledActions?: Array<RosProvisionConfig.ScheduledActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property targetTrackingPolicies: Target tracking policy configuration.
     */
    readonly targetTrackingPolicies?: Array<RosProvisionConfig.TargetTrackingPoliciesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::ProvisionConfig`, which is used to create a provisioned configuration in Function Compute 3.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProvisionConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export declare class RosProvisionConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ProvisionConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property defaultTarget: The number of target resources to reserve.
     */
    defaultTarget: number | ros.IResolvable;
    /**
     * @Property functionName: Function name.
     */
    functionName: string | ros.IResolvable;
    /**
     * @Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
     */
    alwaysAllocateCpu: boolean | ros.IResolvable | undefined;
    /**
     * @Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
     */
    alwaysAllocateGpu: boolean | ros.IResolvable | undefined;
    /**
     * @Property qualifier: Function alias or LATEST.
     */
    qualifier: string | ros.IResolvable | undefined;
    /**
     * @Property scheduledActions: Timing policy configuration.
     */
    scheduledActions: Array<RosProvisionConfig.ScheduledActionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property targetTrackingPolicies: Target tracking policy configuration.
     */
    targetTrackingPolicies: Array<RosProvisionConfig.TargetTrackingPoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
export declare namespace RosProvisionConfig {
    /**
     * @stability external
     */
    interface ScheduledActionsProperty {
        /**
         * @Property scheduleExpression: Cron expression.
         */
        readonly scheduleExpression?: string | ros.IResolvable;
        /**
         * @Property timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
         */
        readonly timeZone?: string | ros.IResolvable;
        /**
         * @Property target: The number of target resources to reserve.
         */
        readonly target: number | ros.IResolvable;
        /**
         * @Property endTime: Policy expiration time.
         */
        readonly endTime?: string | ros.IResolvable;
        /**
         * @Property startTime: Policy start time.
         */
        readonly startTime?: string | ros.IResolvable;
        /**
         * @Property name: Policy name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosProvisionConfig {
    /**
     * @stability external
     */
    interface TargetTrackingPoliciesProperty {
        /**
         * @Property metricTarget: Tracking values for metrics.
         */
        readonly metricTarget: number | ros.IResolvable;
        /**
         * @Property timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
         */
        readonly timeZone?: string | ros.IResolvable;
        /**
         * @Property endTime: Policy end time (UTC).
         */
        readonly endTime?: string | ros.IResolvable;
        /**
         * @Property metricType: Tracking target type. Valid values:
     * - ProvisionedConcurrencyUtilization: reserve a pattern instance concurrent degree of utilization.
     * - CPUUtilization: CPU utilization.
     * - GPUMemUtilization: GPU utilization.
         */
        readonly metricType: string | ros.IResolvable;
        /**
         * @Property startTime: Policy start time (UTC).
         */
        readonly startTime?: string | ros.IResolvable;
        /**
         * @Property minCapacity: The minimum of the shrinkage.
         */
        readonly minCapacity: number | ros.IResolvable;
        /**
         * @Property name: Policy name.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property maxCapacity: The maximum of the expansion.
         */
        readonly maxCapacity: number | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Trigger`, which is used to create a Function Compute 3.0 trigger.
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
