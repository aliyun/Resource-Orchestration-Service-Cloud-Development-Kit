import * as ros from '@alicloud/ros-cdk-core';
import { RosUserProvision } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserProvision as UserProvisionProperty };

/**
 * Properties for defining a `UserProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export interface UserProvisionProps {

    /**
     * Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
     * - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
     */
    readonly deletionStrategy: string | ros.IResolvable;

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
     * - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
     */
    readonly duplicationStrategy: string | ros.IResolvable;

    /**
     * Property principalId: The ID of the principal. Valid values:
     * - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
     * - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
     */
    readonly principalId: string | ros.IResolvable;

    /**
     * Property principalType: The type of the principal. Valid values:
     * - User: The principal is a cloud SSO user.
     * - Group: The principal is a cloud SSO group.
     */
    readonly principalType: string | ros.IResolvable;

    /**
     * Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
     */
    readonly targetId: string | ros.IResolvable;

    /**
     * Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
     */
    readonly targetType: string | ros.IResolvable;

    /**
     * Property description: The description of the user.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::UserProvision`, which is used to create a Resource Access Management (RAM) user provisioning.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserProvision`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export class UserProvision extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserProvisionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute UserProvisionId: The ID of the user provisioning.
     */
    public readonly attrUserProvisionId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProvisionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserProvision = new RosUserProvision(this, id,  {
            description: props.description,
            directoryId: props.directoryId,
            principalId: props.principalId,
            targetType: props.targetType,
            duplicationStrategy: props.duplicationStrategy,
            deletionStrategy: props.deletionStrategy,
            principalType: props.principalType,
            targetId: props.targetId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserProvision;
        this.attrUserProvisionId = rosUserProvision.attrUserProvisionId;
    }
}
