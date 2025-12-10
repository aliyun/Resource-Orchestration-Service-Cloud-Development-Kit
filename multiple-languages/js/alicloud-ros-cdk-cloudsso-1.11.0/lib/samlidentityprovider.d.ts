import * as ros from '@alicloud/ros-cdk-core';
import { RosSAMLIdentityProvider } from './cloudsso.generated';
export { RosSAMLIdentityProvider as SAMLIdentityProviderProperty };
/**
 * Properties for defining a `SAMLIdentityProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export interface SAMLIdentityProviderProps {
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
     * The file is provided by the IdP that supports SAML 2.0.
     */
    readonly encodedMetadataDocument?: string | ros.IResolvable;
    /**
     * Property entityId: The entity ID of the IdP.
     */
    readonly entityId?: string | ros.IResolvable;
    /**
     * Property loginUrl: The logon URL of the IdP.
     */
    readonly loginUrl?: string | ros.IResolvable;
    /**
     * Property ssoStatus: The status of SSO logon. Valid values:
     * - Enabled
     * - Disabled (default)
     */
    readonly ssoStatus?: string | ros.IResolvable;
    /**
     * Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
     * - true: yes
     * - false: no (default)
     */
    readonly wantRequestSigned?: boolean | ros.IResolvable;
    /**
     * Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
     */
    readonly x509Certificate?: string | ros.IResolvable;
}
/**
 * Represents a `SAMLIdentityProvider`.
 */
export interface ISAMLIdentityProvider extends ros.IResource {
    readonly props: SAMLIdentityProviderProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SAMLIdentityProvider`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSAMLIdentityProvider`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export declare class SAMLIdentityProvider extends ros.Resource implements ISAMLIdentityProvider {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SAMLIdentityProviderProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SAMLIdentityProviderProps, enableResourcePropertyConstraint?: boolean);
}
