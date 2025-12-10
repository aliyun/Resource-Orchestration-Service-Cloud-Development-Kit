import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstanceAttachment } from './cen.generated';
export { RosCenInstanceAttachment as CenInstanceAttachmentProperty };
/**
 * Properties for defining a `CenInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export interface CenInstanceAttachmentProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string | ros.IResolvable;
    /**
     * Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;
    /**
     * Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string | ros.IResolvable;
    /**
     * Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number | ros.IResolvable;
}
/**
 * Represents a `CenInstanceAttachment`.
 */
export interface ICenInstanceAttachment extends ros.IResource {
    readonly props: CenInstanceAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenInstanceAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenInstanceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export declare class CenInstanceAttachment extends ros.Resource implements ICenInstanceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CenInstanceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstanceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
