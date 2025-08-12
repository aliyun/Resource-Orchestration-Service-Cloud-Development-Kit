import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDesktopGroupAddition } from './ecd.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserDesktopGroupAddition as UserDesktopGroupAdditionProperty };

/**
 * Properties for defining a `UserDesktopGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
 */
export interface UserDesktopGroupAdditionProps {

    /**
     * Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    readonly desktopGroupId: string | ros.IResolvable;

    /**
     * Property endUserIds: The regular users to whom you want to assign the desktop group.
     */
    readonly endUserIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `UserDesktopGroupAddition`.
 */
export interface IUserDesktopGroupAddition extends ros.IResource {
    readonly props: UserDesktopGroupAdditionProps;

    /**
     * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    readonly attrDesktopGroupId: ros.IResolvable | string;

    /**
     * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
     */
    readonly attrEndUserIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::UserDesktopGroupAddition`, which is used grant the permissions on a cloud computer pool to users.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDesktopGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
 */
export class UserDesktopGroupAddition extends ros.Resource implements IUserDesktopGroupAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserDesktopGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    public readonly attrDesktopGroupId: ros.IResolvable | string;

    /**
     * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
     */
    public readonly attrEndUserIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDesktopGroupAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserDesktopGroupAddition = new RosUserDesktopGroupAddition(this, id,  {
            desktopGroupId: props.desktopGroupId,
            endUserIds: props.endUserIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserDesktopGroupAddition;
        this.attrDesktopGroupId = rosUserDesktopGroupAddition.attrDesktopGroupId;
        this.attrEndUserIds = rosUserDesktopGroupAddition.attrEndUserIds;
    }
}
