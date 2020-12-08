import * as ros from '@alicloud/ros-cdk-core';
import { RosMountTarget } from './nas.generated';
export { RosMountTarget as MountTargetProperty };
/**
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface MountTargetProps {
    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string;
    /**
     * @Property fileSystemId: File system ID
     */
    readonly fileSystemId: string;
    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string;
    /**
     * @Property status: Status, including Active and Inactive
     */
    readonly status?: string;
    /**
     * @Property vpcId: VPC network ID
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;
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
     * @Attribute MountTargetDomain: Mount point domain name
     */
    readonly attrMountTargetDomain: any;
    /**
     * Create a new `ALIYUN::NAS::MountTarget`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MountTargetProps, enableResourcePropertyConstraint?: boolean);
}
