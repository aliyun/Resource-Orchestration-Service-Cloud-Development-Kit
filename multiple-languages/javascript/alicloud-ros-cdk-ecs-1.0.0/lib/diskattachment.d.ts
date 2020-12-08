import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskAttachment } from './ecs.generated';
export { RosDiskAttachment as DiskAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ECS::DiskAttachment`
 */
export interface DiskAttachmentProps {
    /**
     * @Property diskId: The disk id to attached.
     */
    readonly diskId: string;
    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    readonly instanceId: string;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;
    /**
     * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[b-z]. If not specification, will use default value.
     */
    readonly device?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::DiskAttachment`
 */
export declare class DiskAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Device: The device where the volume is exposed on ecs instance.
     */
    readonly attrDevice: any;
    /**
     * @Attribute DiskId: The disk id of created disk
     */
    readonly attrDiskId: any;
    /**
     * @Attribute Status: The disk status now.
     */
    readonly attrStatus: any;
    /**
     * Create a new `ALIYUN::ECS::DiskAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
