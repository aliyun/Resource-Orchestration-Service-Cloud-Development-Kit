import * as ros from '@alicloud/ros-cdk-core';
import { RosMountPoint } from './dfs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::DFS::MountPoint`, which is used to create a mount target.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMountPoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
export class MountPoint extends ros.Resource {

    /**
     * Attribute MountPointId: The ID of the mount point.
     */
    public readonly attrMountPointId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MountPointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMountPoint = new RosMountPoint(this, id,  {
            status: props.status,
            description: props.description,
            vpcId: props.vpcId,
            networkType: props.networkType,
            vSwitchId: props.vSwitchId,
            fileSystemId: props.fileSystemId,
            accessGroupId: props.accessGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMountPoint;
        this.attrMountPointId = rosMountPoint.attrMountPointId;
    }
}
