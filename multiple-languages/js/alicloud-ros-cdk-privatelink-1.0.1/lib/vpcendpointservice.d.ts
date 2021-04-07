import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpointService } from './privatelink.generated';
export { RosVpcEndpointService as VpcEndpointServiceProperty };
/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`
 */
export interface VpcEndpointServiceProps {
    /**
     * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    readonly autoAcceptEnabled?: boolean | ros.IResolvable;
    /**
     * Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
     */
    readonly connectBandwidth?: number | ros.IResolvable;
    /**
     * Property resource:
     */
    readonly resource?: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property serviceDescription: The description for the endpoint service.
     */
    readonly serviceDescription?: string | ros.IResolvable;
    /**
     * Property user: Account IDs to the whitelist of an endpoint service.
     */
    readonly user?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpointService`
 */
export declare class VpcEndpointService extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ServiceDomain: The domain name of the endpoint service.
     */
    readonly attrServiceDomain: ros.IResolvable;
    /**
     * Attribute ServiceId: The ID of the endpoint service.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * Attribute ServiceName: The name of the endpoint service.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VpcEndpointServiceProps, enableResourcePropertyConstraint?: boolean);
}
