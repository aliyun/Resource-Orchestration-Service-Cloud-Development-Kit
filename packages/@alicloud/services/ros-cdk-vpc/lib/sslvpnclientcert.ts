import * as ros from '@alicloud/ros-cdk-core';
import { RosSslVpnClientCert } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSslVpnClientCert as SslVpnClientCertProperty };

/**
 * Properties for defining a `SslVpnClientCert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
export interface SslVpnClientCertProps {

    /**
     * Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string | ros.IResolvable;

    /**
     * Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::SslVpnClientCert`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSslVpnClientCert`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
export class SslVpnClientCert extends ros.Resource {

    /**
     * Attribute SslVpnClientCertId: The ID of the client certificate.
     */
    public readonly attrSslVpnClientCertId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SslVpnClientCertProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSslVpnClientCert = new RosSslVpnClientCert(this, id,  {
            sslVpnServerId: props.sslVpnServerId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSslVpnClientCert;
        this.attrSslVpnClientCertId = rosSslVpnClientCert.attrSslVpnClientCertId;
    }
}
