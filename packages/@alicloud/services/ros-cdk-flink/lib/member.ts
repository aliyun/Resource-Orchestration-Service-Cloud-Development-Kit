import * as ros from '@alicloud/ros-cdk-core';
import { RosMember } from './flink.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMember as MemberProperty };

/**
 * Properties for defining a `Member`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export interface MemberProps {

    /**
     * Property member: The user ID of the member.
     */
    readonly member: string | ros.IResolvable;

    /**
     * Property namespace: The project space name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property role: The role of the member.
     */
    readonly role: string | ros.IResolvable;

    /**
     * Property workspace: The work space ID.
     */
    readonly workspace: string | ros.IResolvable;
}

/**
 * Represents a `Member`.
 */
export interface IMember extends ros.IResource {
    readonly props: MemberProps;

    /**
     * Attribute MemberInfo: The detailed info of the flink member.
     */
    readonly attrMemberInfo: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Flink::Member`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMember`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export class Member extends ros.Resource implements IMember {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MemberProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute MemberInfo: The detailed info of the flink member.
     */
    public readonly attrMemberInfo: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MemberProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMember = new RosMember(this, id,  {
            role: props.role,
            member: props.member,
            namespace: props.namespace,
            workspace: props.workspace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMember;
        this.attrMemberInfo = rosMember.attrMemberInfo;
    }
}
