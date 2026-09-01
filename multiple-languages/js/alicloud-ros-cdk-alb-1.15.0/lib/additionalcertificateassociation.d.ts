import * as ros from '@alicloud/ros-cdk-core';
import { RosAdditionalCertificateAssociation } from './alb.generated';
export { RosAdditionalCertificateAssociation as AdditionalCertificateAssociationProperty };
/**
 * Properties for defining a `AdditionalCertificateAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
 */
export interface AdditionalCertificateAssociationProps {
    /**
     * Property certificates: The list of the additional certificates.
     */
    readonly certificates: Array<RosAdditionalCertificateAssociation.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * Represents a `AdditionalCertificateAssociation`.
 */
export interface IAdditionalCertificateAssociation extends ros.IResource {
    readonly props: AdditionalCertificateAssociationProps;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AdditionalCertificateAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAdditionalCertificateAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
 */
export declare class AdditionalCertificateAssociation extends ros.Resource implements IAdditionalCertificateAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AdditionalCertificateAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AdditionalCertificateAssociationProps, enableResourcePropertyConstraint?: boolean);
}
