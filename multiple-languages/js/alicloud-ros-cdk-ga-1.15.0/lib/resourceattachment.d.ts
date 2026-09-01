import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceAttachment } from './ga.generated';
export { RosResourceAttachment as ResourceAttachmentProperty };
/**
 * Properties for defining a `ResourceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
 */
export interface ResourceAttachmentProps {
    /**
     * Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property associatedResourceId: The ID of the associated resource.
     */
    readonly associatedResourceId: string | ros.IResolvable;
    /**
     * Property associatedResourceRegionId: The region ID of the associated resource.
     */
    readonly associatedResourceRegionId: string | ros.IResolvable;
    /**
     * Property associatedResourceType: The type of the associated resource.
     */
    readonly associatedResourceType: string | ros.IResolvable;
    /**
     * Property associatedMode: The mode of the association.
     */
    readonly associatedMode?: string | ros.IResolvable;
}
/**
 * Represents a `ResourceAttachment`.
 */
export interface IResourceAttachment extends ros.IResource {
    readonly props: ResourceAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::ResourceAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
 */
export declare class ResourceAttachment extends ros.Resource implements IResourceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ResourceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
