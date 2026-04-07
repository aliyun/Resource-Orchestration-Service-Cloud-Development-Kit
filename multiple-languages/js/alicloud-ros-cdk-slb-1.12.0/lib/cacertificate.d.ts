import * as ros from '@alicloud/ros-cdk-core';
import { RosCaCertificate } from './slb.generated';
export { RosCaCertificate as CaCertificateProperty };
/**
 * Properties for defining a `CaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-cacertificate
 */
export interface CaCertificateProps {
    /**
     * Property caCertificate: The information about the CA certificate.
     */
    readonly caCertificate: string | ros.IResolvable;
    /**
     * Property caCertificateName: The CA certificate name.
     */
    readonly caCertificateName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of ca certificate.
     */
    readonly tags?: RosCaCertificate.TagsProperty[];
}
/**
 * Represents a `CaCertificate`.
 */
export interface ICaCertificate extends ros.IResource {
    readonly props: CaCertificateProps;
    /**
     * Attribute CaCertificateId: The ID of the CA certificate.
     */
    readonly attrCaCertificateId: ros.IResolvable | string;
    /**
     * Attribute CaCertificateName: The CA certificate name.
     */
    readonly attrCaCertificateName: ros.IResolvable | string;
    /**
     * Attribute CommonName: The domain name on the CA certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the CA certificate was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CreatedTimestamp: The create time stamp of the CA certificate.
     */
    readonly attrCreatedTimestamp: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The time when the CA certificate expires.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
     */
    readonly attrExpiredTimestamp: ros.IResolvable | string;
    /**
     * Attribute Fingerprint: The fingerprint of the server certificate.
     */
    readonly attrFingerprint: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of ca certificate.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::CaCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCaCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-cacertificate
 */
export declare class CaCertificate extends ros.Resource implements ICaCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CaCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CaCertificateId: The ID of the CA certificate.
     */
    readonly attrCaCertificateId: ros.IResolvable | string;
    /**
     * Attribute CaCertificateName: The CA certificate name.
     */
    readonly attrCaCertificateName: ros.IResolvable | string;
    /**
     * Attribute CommonName: The domain name on the CA certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the CA certificate was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CreatedTimestamp: The create time stamp of the CA certificate.
     */
    readonly attrCreatedTimestamp: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The time when the CA certificate expires.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
     */
    readonly attrExpiredTimestamp: ros.IResolvable | string;
    /**
     * Attribute Fingerprint: The fingerprint of the server certificate.
     */
    readonly attrFingerprint: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of ca certificate.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CaCertificateProps, enableResourcePropertyConstraint?: boolean);
}
