import * as ros from '@alicloud/ros-cdk-core';
import { RosAdditionalCertificateAssociation } from './alb.generated';
export { RosAdditionalCertificateAssociation as AdditionalCertificateAssociationProperty };
/**
 * Properties for defining a `ALIYUN::ALB::AdditionalCertificateAssociation`
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
 * A ROS resource type:  `ALIYUN::ALB::AdditionalCertificateAssociation`
 */
export declare class AdditionalCertificateAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::AdditionalCertificateAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AdditionalCertificateAssociationProps, enableResourcePropertyConstraint?: boolean);
}
