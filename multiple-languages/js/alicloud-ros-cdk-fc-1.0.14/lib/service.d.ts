import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './fc.generated';
export { RosService as ServiceProperty };
/**
 * Properties for defining a `ALIYUN::FC::Service`
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
 * A ROS resource type:  `ALIYUN::FC::Service`
 */
export declare class Service extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InternetAccess: Whether enable Internet access
     */
    readonly attrInternetAccess: ros.IResolvable;
    /**
     * Attribute LogProject: Log project of service
     */
    readonly attrLogProject: ros.IResolvable;
    /**
     * Attribute Logstore: Log store of service
     */
    readonly attrLogstore: ros.IResolvable;
    /**
     * Attribute Role: Role of service
     */
    readonly attrRole: ros.IResolvable;
    /**
     * Attribute ServiceId: The service ID
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute Tags: Tags of service
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
