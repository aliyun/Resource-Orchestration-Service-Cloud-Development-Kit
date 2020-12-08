import * as ros from '@alicloud/ros-cdk-core';
import { RosSAMLProvider } from './ram.generated';
export { RosSAMLProvider as SAMLProviderProperty };
/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`
 */
export interface SAMLProviderProps {
    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string;
    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    readonly samlMetadataDocument?: string;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    readonly samlMetadataDocumentUrl?: string;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::SAMLProvider`
 */
export declare class SAMLProvider extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Arn: ARN.
     */
    readonly attrArn: any;
    /**
     * @Attribute SAMLProviderName: IdP Name.
     */
    readonly attrSamlProviderName: any;
    /**
     * Create a new `ALIYUN::RAM::SAMLProvider`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SAMLProviderProps, enableResourcePropertyConstraint?: boolean);
}
