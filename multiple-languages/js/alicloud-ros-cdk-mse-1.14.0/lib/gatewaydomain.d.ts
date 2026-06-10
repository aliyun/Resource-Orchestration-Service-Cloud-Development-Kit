import * as ros from '@alicloud/ros-cdk-core';
import { RosGatewayDomain } from './mse.generated';
export { RosGatewayDomain as GatewayDomainProperty };
/**
 * Properties for defining a `GatewayDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export interface GatewayDomainProps {
    /**
     * Property gatewayUniqueId: The unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * Property name: The domain name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property protocol: The protocol type: HTTP, HTTPS.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * Property certIdentifier: Certificate ID.
     */
    readonly certIdentifier?: string | ros.IResolvable;
    /**
     * Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    readonly http2?: string | ros.IResolvable;
    /**
     * Property mustHttps: Whether to enable HTTPS.
     */
    readonly mustHttps?: boolean | ros.IResolvable;
    /**
     * Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    readonly tlsCipherSuitesConfigJson?: RosGatewayDomain.TlsCipherSuitesConfigJSONProperty | ros.IResolvable;
    /**
     * Property tlsMax: The maximum TLS version.
     */
    readonly tlsMax?: string | ros.IResolvable;
    /**
     * Property tlsMin: The minimum TLS version.
     */
    readonly tlsMin?: string | ros.IResolvable;
}
/**
 * Represents a `GatewayDomain`.
 */
export interface IGatewayDomain extends ros.IResource {
    readonly props: GatewayDomainProps;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::GatewayDomain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGatewayDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export declare class GatewayDomain extends ros.Resource implements IGatewayDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewayDomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayDomainProps, enableResourcePropertyConstraint?: boolean);
}
