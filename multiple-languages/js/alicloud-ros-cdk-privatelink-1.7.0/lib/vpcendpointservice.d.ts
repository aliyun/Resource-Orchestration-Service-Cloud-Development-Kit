import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpointService } from './privatelink.generated';
export { RosVpcEndpointService as VpcEndpointServiceProperty };
/**
 * Properties for defining a `VpcEndpointService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
export interface VpcEndpointServiceProps {
    /**
     * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    readonly autoAcceptEnabled?: boolean | ros.IResolvable;
    /**
     * Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit\/s.
     */
    readonly connectBandwidth?: number | ros.IResolvable;
    /**
     * Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
     * - True
     * - False (default)
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property payer: The payer of the endpoint service. Valid values:
     * Endpoint: the service consumer.
     * EndpointService: the service provider.
     */
    readonly payer?: string | ros.IResolvable;
    /**
     * Property resource:
     */
    readonly resource?: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property serviceDescription: The description for the endpoint service.
     */
    readonly serviceDescription?: string | ros.IResolvable;
    /**
     * Property serviceResourceType: Service resource type.
     */
    readonly serviceResourceType?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpcEndpointService.TagsProperty[];
    /**
     * Property user: Account IDs to the whitelist of an endpoint service.
     */
    readonly user?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * true: yes.
     * false (default): no
     */
    readonly zoneAffinityEnabled?: boolean | ros.IResolvable;
}
/**
 * Represents a `VpcEndpointService`.
 */
export interface IVpcEndpointService extends ros.IResource {
    readonly props: VpcEndpointServiceProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    readonly attrMaxBandwidth: ros.IResolvable | string;
    /**
     * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    readonly attrMinBandwidth: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: The description of the endpoint service.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceDomain: The domain name of the endpoint service.
     */
    readonly attrServiceDomain: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of the endpoint service.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of the endpoint service.
     */
    readonly attrServiceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PrivateLink::VpcEndpointService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcEndpointService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
export declare class VpcEndpointService extends ros.Resource implements IVpcEndpointService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcEndpointServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    readonly attrMaxBandwidth: ros.IResolvable | string;
    /**
     * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    readonly attrMinBandwidth: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: The description of the endpoint service.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceDomain: The domain name of the endpoint service.
     */
    readonly attrServiceDomain: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of the endpoint service.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of the endpoint service.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VpcEndpointServiceProps, enableResourcePropertyConstraint?: boolean);
}
