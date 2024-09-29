import * as ros from '@alicloud/ros-cdk-core';
import { RosFunction } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunction as FunctionProperty };

/**
 * Properties for defining a `Function`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export interface FunctionProps {

    /**
     * Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property handler: The handler of the function.
     */
    readonly handler: string | ros.IResolvable;

    /**
     * Property runtime: The programming language of the function.
     */
    readonly runtime: string | ros.IResolvable;

    /**
     * Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;

    /**
     * Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;

    /**
     * Property customDns: Custom DNS configuration.
     */
    readonly customDns?: RosFunction.CustomDnsProperty | ros.IResolvable;

    /**
     * Property customRuntimeConfig: Custom runtime configuration.
     */
    readonly customRuntimeConfig?: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable;

    /**
     * Property description: Function description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskSize: The disk size of the function, in MB.
     */
    readonly diskSize?: number | ros.IResolvable;

    /**
     * Property environmentVariables: The environment variables of the function.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property gpuConfig: The GPU configuration of the function.
     */
    readonly gpuConfig?: RosFunction.GpuConfigProperty | ros.IResolvable;

    /**
     * Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;

    /**
     * Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    readonly instanceLifecycleConfig?: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable;

    /**
     * Property internetAccess: Whether the function can access the Internet.
     */
    readonly internetAccess?: boolean | ros.IResolvable;

    /**
     * Property layers: The layers of the function.
     */
    readonly layers?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property logConfig: The log configuration of the function.
     */
    readonly logConfig?: RosFunction.LogConfigProperty | ros.IResolvable;

    /**
     * Property memorySize: The memory size of the function, in MB.
     */
    readonly memorySize?: number | ros.IResolvable;

    /**
     * Property nasConfig: The NAS configuration of the function.
     */
    readonly nasConfig?: RosFunction.NasConfigProperty | ros.IResolvable;

    /**
     * Property ossMountConfig: The OSS mount configuration of the function.
     */
    readonly ossMountConfig?: RosFunction.OssMountConfigProperty | ros.IResolvable;

    /**
     * Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    readonly role?: string | ros.IResolvable;

    /**
     * Property timeout: The timeout of the function.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * Property tracingConfig: The tracing configuration of the function.
     */
    readonly tracingConfig?: RosFunction.TracingConfigProperty | ros.IResolvable;

    /**
     * Property vpcConfig: The VPC configuration of the function.
     */
    readonly vpcConfig?: RosFunction.VpcConfigProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::Function`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunction`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export class Function extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FunctionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute FunctionId: The function ID
     */
    public readonly attrFunctionId: ros.IResolvable;

    /**
     * Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFunction = new RosFunction(this, id,  {
            memorySize: props.memorySize,
            description: props.description,
            tracingConfig: props.tracingConfig,
            vpcConfig: props.vpcConfig,
            timeout: props.timeout,
            instanceLifecycleConfig: props.instanceLifecycleConfig,
            handler: props.handler,
            cpu: props.cpu,
            customContainerConfig: props.customContainerConfig,
            code: props.code,
            role: props.role,
            functionName: props.functionName,
            internetAccess: props.internetAccess,
            runtime: props.runtime,
            environmentVariables: props.environmentVariables,
            customRuntimeConfig: props.customRuntimeConfig,
            gpuConfig: props.gpuConfig,
            ossMountConfig: props.ossMountConfig,
            diskSize: props.diskSize,
            customDns: props.customDns,
            instanceConcurrency: props.instanceConcurrency,
            layers: props.layers,
            nasConfig: props.nasConfig,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunction;
        this.attrArn = rosFunction.attrArn;
        this.attrFunctionId = rosFunction.attrFunctionId;
        this.attrFunctionName = rosFunction.attrFunctionName;
    }
}
