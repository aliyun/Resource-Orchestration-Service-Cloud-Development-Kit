import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './nas.generated';
export { RosAccessGroup as AccessGroupProperty };
/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`
 */
export interface AccessGroupProps {
    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string;
    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    readonly description?: string;
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
     * @Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: any;
    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps, enableResourcePropertyConstraint?: boolean);
}
