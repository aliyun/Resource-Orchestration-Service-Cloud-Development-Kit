import * as ros from '@alicloud/ros-cdk-core';
import { RosUserCertificate } from './cas.generated';
export { RosUserCertificate as UserCertificateProperty };
/**
 * Properties for defining a `UserCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
export interface UserCertificateProps {
    /**
     * Property cert: The certificate content in PEM format.
     */
    readonly cert?: string | ros.IResolvable;
    /**
     * Property certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     *  The certificate name under the same user cannot be duplicated.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * Property encryptCert: The content of the encryption certificate in PEM format.
     */
    readonly encryptCert?: string | ros.IResolvable;
    /**
     * Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    readonly encryptPrivateKey?: string | ros.IResolvable;
    /**
     * Property key: The private key content of the certificate in PEM format.
     */
    readonly key?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property resourceId: Resource ID.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * Property signCert: The signature certificate content in PEM format.
     */
    readonly signCert?: string | ros.IResolvable;
    /**
     * Property signPrivateKey: The private key content of the signature certificate in PEM format.
     */
    readonly signPrivateKey?: string | ros.IResolvable;
    /**
     * Property tags: Tags of certificate.
     */
    readonly tags?: RosUserCertificate.TagsProperty[];
}
/**
 * Represents a `UserCertificate`.
 */
export interface IUserCertificate extends ros.IResource {
    readonly props: UserCertificateProps;
    /**
     * Attribute Cert: The certificate content in PEM format.
     */
    readonly attrCert: ros.IResolvable | string;
    /**
     * Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable | string;
    /**
     * Attribute CertificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    readonly attrCertificateName: ros.IResolvable | string;
    /**
     * Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    readonly attrEncryptCert: ros.IResolvable | string;
    /**
     * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    readonly attrEncryptPrivateKey: ros.IResolvable | string;
    /**
     * Attribute Key: The private key content of the certificate in PEM format.
     */
    readonly attrKey: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SignCert: The signature certificate content in PEM format.
     */
    readonly attrSignCert: ros.IResolvable | string;
    /**
     * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    readonly attrSignPrivateKey: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CAS::UserCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
export declare class UserCertificate extends ros.Resource implements IUserCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Cert: The certificate content in PEM format.
     */
    readonly attrCert: ros.IResolvable | string;
    /**
     * Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable | string;
    /**
     * Attribute CertificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    readonly attrCertificateName: ros.IResolvable | string;
    /**
     * Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    readonly attrEncryptCert: ros.IResolvable | string;
    /**
     * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    readonly attrEncryptPrivateKey: ros.IResolvable | string;
    /**
     * Attribute Key: The private key content of the certificate in PEM format.
     */
    readonly attrKey: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SignCert: The signature certificate content in PEM format.
     */
    readonly attrSignCert: ros.IResolvable | string;
    /**
     * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    readonly attrSignPrivateKey: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UserCertificateProps, enableResourcePropertyConstraint?: boolean);
}
