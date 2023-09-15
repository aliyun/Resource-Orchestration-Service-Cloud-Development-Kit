import * as ros from '@alicloud/ros-cdk-core';
import { RosBundle } from './ecd.generated';
export { RosBundle as BundleProperty };
/**
 * Properties for defining a `ALIYUN::ECD::Bundle`
 */
export interface BundleProps {
    /**
     * Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
     * Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
     */
    readonly desktopType: string | ros.IResolvable;
    /**
     * Property imageId: The ID of the image.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property rootDiskSizeGib: The root disk size gib.
     */
    readonly rootDiskSizeGib: number | ros.IResolvable;
    /**
     * Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
     * - The size of the data disk that supports the setting corresponds to the specification.
     * - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
     */
    readonly userDiskSizeGib: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * Property bundleName: The name of the bundle.
     */
    readonly bundleName?: string | ros.IResolvable;
    /**
     * Property description: The description of the bundle.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property language: The language. Valid values:
     * zh-CN: Simplified Chinese
     * zh-HK: Traditional Chinese (Hong Kong)
     * en-US: English
     * ja-JP: Japanese
     */
    readonly language?: string | ros.IResolvable;
    /**
     * Property rootDiskPerformanceLevel: The root disk performance level. Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly rootDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * Property userDiskPerformanceLevel: The user disk performance level.Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly userDiskPerformanceLevel?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECD::Bundle`
 */
export declare class Bundle extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BundleId: Desktop bundle ID.
     */
    readonly attrBundleId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECD::Bundle`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BundleProps, enableResourcePropertyConstraint?: boolean);
}
