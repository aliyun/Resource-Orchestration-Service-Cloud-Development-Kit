import * as ros from '@alicloud/ros-cdk-core';
import { RosMountTarget } from './nas.generated';
export { RosMountTarget as MountTargetProperty };
/**
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface MountTargetProps {
    /**
     * Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * Property fileSystemId: File system ID
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string | ros.IResolvable;
    /**
     * Property enableIpv6: Whether to create an IPv6 mount point.Value:
     * true: create
     * false (default): do not create
     * Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;
    /**
     * Property securityGroupId: Security group Id
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property status: Status, including Active and Inactive
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property vpcId: VPC network ID
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::NAS::MountTarget`
 */
export declare class MountTarget extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute MountTargetDomain: Mount point domain name
     */
    readonly attrMountTargetDomain: ros.IResolvable;
    /**
     * Create a new `ALIYUN::NAS::MountTarget`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MountTargetProps, enableResourcePropertyConstraint?: boolean);
}
