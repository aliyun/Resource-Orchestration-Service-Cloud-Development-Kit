import * as ros from '@ros-cdk/core';
import { RosSslVpnClientCert } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSslVpnClientCert as SslVpnClientCertProperty };

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnClientCert`
 */
export interface SslVpnClientCertProps {

    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string;

    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::SslVpnClientCert`
 */
export class SslVpnClientCert extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SslVpnClientCertId: The ID of the client certificate.
     */
    public readonly attrSslVpnClientCertId: any;

    /**
     * Create a new `ALIYUN::VPC::SslVpnClientCert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
