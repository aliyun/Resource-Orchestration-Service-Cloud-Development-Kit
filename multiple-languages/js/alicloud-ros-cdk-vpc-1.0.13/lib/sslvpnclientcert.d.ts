import * as ros from '@alicloud/ros-cdk-core';
import { RosSslVpnClientCert } from './vpc.generated';
export { RosSslVpnClientCert as SslVpnClientCertProperty };
/**
 * Properties for defining a `ALIYUN::VPC::SslVpnClientCert`
 */
export interface SslVpnClientCertProps {
    /**
     * Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string | ros.IResolvable;
    /**
     * Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::SslVpnClientCert`
 */
export declare class SslVpnClientCert extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SslVpnClientCertId: The ID of the client certificate.
     */
    readonly attrSslVpnClientCertId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::SslVpnClientCert`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SslVpnClientCertProps, enableResourcePropertyConstraint?: boolean);
}
