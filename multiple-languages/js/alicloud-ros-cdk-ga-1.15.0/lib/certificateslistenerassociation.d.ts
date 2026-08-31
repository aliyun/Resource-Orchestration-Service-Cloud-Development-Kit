import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificatesListenerAssociation } from './ga.generated';
export { RosCertificatesListenerAssociation as CertificatesListenerAssociationProperty };
/**
 * Properties for defining a `CertificatesListenerAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-certificateslistenerassociation
 */
export interface CertificatesListenerAssociationProps {
    /**
     * Property acceleratorId: The ID of the Global Accelerator instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property certificates: The additional certificates to associate with the HTTPS listener.
     */
    readonly certificates: Array<RosCertificatesListenerAssociation.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerId: The ID of the HTTPS listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * Represents a `CertificatesListenerAssociation`.
 */
export interface ICertificatesListenerAssociation extends ros.IResource {
    readonly props: CertificatesListenerAssociationProps;
    /**
     * Attribute Certificates: The additional certificates.
     */
    readonly attrCertificates: ros.IResolvable | string;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::CertificatesListenerAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCertificatesListenerAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-certificateslistenerassociation
 */
export declare class CertificatesListenerAssociation extends ros.Resource implements ICertificatesListenerAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CertificatesListenerAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Certificates: The additional certificates.
     */
    readonly attrCertificates: ros.IResolvable | string;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificatesListenerAssociationProps, enableResourcePropertyConstraint?: boolean);
}
