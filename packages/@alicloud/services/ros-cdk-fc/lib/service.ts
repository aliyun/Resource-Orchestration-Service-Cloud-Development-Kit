import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosService as ServiceProperty };

/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
 */
export interface ServiceProps {

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property description: Service description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property internetAccess: Set it to true to enable Internet access.
     */
    readonly internetAccess?: boolean | ros.IResolvable;

    /**
     * Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
     */
    readonly logConfig?: RosService.LogConfigProperty | ros.IResolvable;

    /**
     * Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
     */
    readonly nasConfig?: RosService.NasConfigProperty | ros.IResolvable;

    /**
     * Property ossMountConfig: The OSS mount configurations.
     */
    readonly ossMountConfig?: RosService.OssMountConfigProperty | ros.IResolvable;

    /**
     * Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    readonly role?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosService.TagsProperty[];

    /**
     * Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
     */
    readonly tracingConfig?: RosService.TracingConfigProperty | ros.IResolvable;

    /**
     * Property vpcBindings: Function Invocation only by Specified VPCs. 
     * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
     */
    readonly vpcBindings?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
     */
    readonly vpcConfig?: RosService.VpcConfigProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Service`, which is used to create a service in Function Compute.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
 */
export class Service extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InternetAccess: Whether enable Internet access
     */
    public readonly attrInternetAccess: ros.IResolvable;

    /**
     * Attribute LogProject: Log project of service
     */
    public readonly attrLogProject: ros.IResolvable;

    /**
     * Attribute Logstore: Log store of service
     */
    public readonly attrLogstore: ros.IResolvable;

    /**
     * Attribute Role: Role of service
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * Attribute ServiceId: The service ID
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Attribute Tags: Tags of service
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosService = new RosService(this, id,  {
            role: props.role,
            internetAccess: props.internetAccess,
            description: props.description,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            tracingConfig: props.tracingConfig,
            vpcConfig: props.vpcConfig,
            serviceName: props.serviceName,
            ossMountConfig: props.ossMountConfig,
            vpcBindings: props.vpcBindings,
            tags: props.tags,
            nasConfig: props.nasConfig,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrInternetAccess = rosService.attrInternetAccess;
        this.attrLogProject = rosService.attrLogProject;
        this.attrLogstore = rosService.attrLogstore;
        this.attrRole = rosService.attrRole;
        this.attrServiceId = rosService.attrServiceId;
        this.attrServiceName = rosService.attrServiceName;
        this.attrTags = rosService.attrTags;
        this.attrVpcId = rosService.attrVpcId;
    }
}
