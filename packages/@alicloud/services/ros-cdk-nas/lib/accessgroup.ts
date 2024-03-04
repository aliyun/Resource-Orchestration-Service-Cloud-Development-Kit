import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessGroup as AccessGroupProperty };

/**
 * Properties for defining a `AccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
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

    /**
     * Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    readonly fileSystemType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::AccessGroup`, which is used to create a permission group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export class AccessGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessGroupName: Permission group name
     */
    public readonly attrAccessGroupName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessGroup = new RosAccessGroup(this, id,  {
            accessGroupType: props.accessGroupType,
            description: props.description,
            fileSystemType: props.fileSystemType === undefined || props.fileSystemType === null ? 'standard' : props.fileSystemType,
            accessGroupName: props.accessGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroup;
        this.attrAccessGroupName = rosAccessGroup.attrAccessGroupName;
    }
}
