import * as ros from '@alicloud/ros-cdk-core';
import { RosMountTarget } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMountTarget as MountTargetProperty };

/**
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface MountTargetProps {

    /**
     * Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string;

    /**
     * Property fileSystemId: File system ID
     */
    readonly fileSystemId: string;

    /**
     * Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string;

    /**
     * Property status: Status, including Active and Inactive
     */
    readonly status?: string;

    /**
     * Property vpcId: VPC network ID
     */
    readonly vpcId?: string;

    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::NAS::MountTarget`
 */
export class MountTarget extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute MountTargetDomain: Mount point domain name
     */
    public readonly attrMountTargetDomain: any;

    /**
     * Create a new `ALIYUN::NAS::MountTarget`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MountTargetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMountTarget = new RosMountTarget(this, id,  {
            status: props.status,
            vpcId: props.vpcId,
            networkType: props.networkType,
            vSwitchId: props.vSwitchId,
            accessGroupName: props.accessGroupName ? props.accessGroupName : 'DEFAULT_VPC_GROUP_NAME',
            fileSystemId: props.fileSystemId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMountTarget;
        this.attrMountTargetDomain = rosMountTarget.attrMountTargetDomain;
    }
}
