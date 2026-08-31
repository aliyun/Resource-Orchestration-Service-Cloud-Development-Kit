import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationEndpointAddress } from './polardb.generated';
export { RosApplicationEndpointAddress as ApplicationEndpointAddressProperty };
/**
 * Properties for defining a `ApplicationEndpointAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
 */
export interface ApplicationEndpointAddressProps {
    /**
     * Property applicationId: The id of the application.
     */
    readonly applicationId: string | ros.IResolvable;
    /**
     * Property endpointId: The id of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
    /**
     * Property netType: Network type for adding connection address.
     */
    readonly netType: string | ros.IResolvable;
}
/**
 * Represents a `ApplicationEndpointAddress`.
 */
export interface IApplicationEndpointAddress extends ros.IResource {
    readonly props: ApplicationEndpointAddressProps;
    /**
     * Attribute PrivateEndpoint: Private endpoint.
     */
    readonly attrPrivateEndpoint: ros.IResolvable | string;
    /**
     * Attribute PublicEndpoint: Public endpoint.
     */
    readonly attrPublicEndpoint: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::ApplicationEndpointAddress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationEndpointAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
 */
export declare class ApplicationEndpointAddress extends ros.Resource implements IApplicationEndpointAddress {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationEndpointAddressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PrivateEndpoint: Private endpoint.
     */
    readonly attrPrivateEndpoint: ros.IResolvable | string;
    /**
     * Attribute PublicEndpoint: Public endpoint.
     */
    readonly attrPublicEndpoint: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationEndpointAddressProps, enableResourcePropertyConstraint?: boolean);
}
