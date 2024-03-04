import * as ros from '@alicloud/ros-cdk-core';
import { RosSAMLProvider } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSAMLProvider as SAMLProviderProperty };

/**
 * Properties for defining a `SAMLProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
export interface SAMLProviderProps {

    /**
     * Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string | ros.IResolvable;

    /**
     * Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly encodedSamlMetadataDocument?: string | ros.IResolvable;

    /**
     * Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocument?: string | ros.IResolvable;

    /**
     * Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocumentUrl?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::SAMLProvider`, which is used to create an identity provider (IdP) for role-based single sign-on (SSO).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSAMLProvider`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
export class SAMLProvider extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SAMLProviderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: ARN.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute SAMLProviderName: IdP Name.
     */
    public readonly attrSamlProviderName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SAMLProviderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSAMLProvider = new RosSAMLProvider(this, id,  {
            samlProviderName: props.samlProviderName,
            description: props.description,
            samlMetadataDocumentUrl: props.samlMetadataDocumentUrl,
            encodedSamlMetadataDocument: props.encodedSamlMetadataDocument,
            samlMetadataDocument: props.samlMetadataDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSAMLProvider;
        this.attrArn = rosSAMLProvider.attrArn;
        this.attrSamlProviderName = rosSAMLProvider.attrSamlProviderName;
    }
}
