import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './nas.generated';
export { RosAccessGroup as AccessGroupProperty };
/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`
 */
export interface AccessGroupProps {
    /**
     * Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string | ros.IResolvable;
    /**
     * Property description: Permission group description. It is the same as the permission group name by default.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::NAS::AccessGroup`
 */
export declare class AccessGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps, enableResourcePropertyConstraint?: boolean);
}
