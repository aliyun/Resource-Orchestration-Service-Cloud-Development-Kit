import * as ros from '@alicloud/ros-cdk-core';
import { RosMountPoint } from './dfs.generated';
export { RosMountPoint as MountPointProperty };
/**
 * Properties for defining a `MountPoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export interface MountPointProps {
    /**
     * Property accessGroupId: The ID of the Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;
    /**
     * Property fileSystemId: The ID of the File System.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * Property networkType: The network type of the Mount Point. Valid values: VPC.
     */
    readonly networkType: string | ros.IResolvable;
    /**
     * Property vpcId: The vpc id.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vswitch id.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property description: The description of the Mount Point.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property status: The status of the Mount Point.
     * Valid values: Active, Inactive
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * Represents a `MountPoint`.
 */
export interface IMountPoint extends ros.IResource {
    readonly props: MountPointProps;
    /**
     * Attribute MountPointId: The ID of the mount point.
     */
    readonly attrMountPointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DFS::MountPoint`, which is used to create a mount target.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMountPoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export declare class MountPoint extends ros.Resource implements IMountPoint {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MountPointProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute MountPointId: The ID of the mount point.
     */
    readonly attrMountPointId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MountPointProps, enableResourcePropertyConstraint?: boolean);
}
