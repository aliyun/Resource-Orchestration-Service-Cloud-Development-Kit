import * as ros from '@alicloud/ros-cdk-core';
import { RosOIDCProvider } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOIDCProvider as OIDCProviderProperty };

/**
 * Properties for defining a `OIDCProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
export interface OIDCProviderProps {

    /**
     * Property fingerprints: The list of the fingerprints, max length is 5
     */
    readonly fingerprints: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property issuerUrl: The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.
     * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
     * The URL can be up to 255 characters in length.
     */
    readonly issuerUrl: string | ros.IResolvable;

    /**
     * Property oidcProviderName: The name of the OIDC IdP.
     * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
     * The name can be up to 128 characters in length.
     */
    readonly oidcProviderName: string | ros.IResolvable;

    /**
     * Property clientIds: The list of the client IDs, max length is 20
     */
    readonly clientIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of the OIDC IdP.
     * The description can be up to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
     */
    readonly issuanceLimitTime?: number | ros.IResolvable;
}

/**
 * Represents a `OIDCProvider`.
 */
export interface IOIDCProvider extends ros.IResource {
    readonly props: OIDCProviderProps;

    /**
     * Attribute OIDCProviderName: The name of the OIDC IdP.
The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
The name can be up to 128 characters in length.
     */
    readonly attrOidcProviderName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::OIDCProvider`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOIDCProvider`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
export class OIDCProvider extends ros.Resource implements IOIDCProvider {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OIDCProviderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute OIDCProviderName: The name of the OIDC IdP.
The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
The name can be up to 128 characters in length.
     */
    public readonly attrOidcProviderName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OIDCProviderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOIDCProvider = new RosOIDCProvider(this, id,  {
            description: props.description,
            oidcProviderName: props.oidcProviderName,
            fingerprints: props.fingerprints,
            issuerUrl: props.issuerUrl,
            issuanceLimitTime: props.issuanceLimitTime,
            clientIds: props.clientIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOIDCProvider;
        this.attrOidcProviderName = rosOIDCProvider.attrOidcProviderName;
    }
}
