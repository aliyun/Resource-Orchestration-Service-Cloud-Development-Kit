import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './fc.generated';
export { RosService as ServiceProperty };
/**
 * Properties for defining a `ALIYUN::FC::Service`
 */
export interface ServiceProps {
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string;
    /**
     * @Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: Service description
     */
    readonly description?: string;
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
     * @Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    readonly role?: string;
    /**
     * @Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
    /**
     * @Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
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
     * @Attribute ServiceId: The service ID
     */
    readonly attrServiceId: any;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: any;
    /**
     * @Attribute Tags: Tags of service
     */
    readonly attrTags: any;
    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
