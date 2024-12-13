import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAcl as AclProperty };

/**
 * Properties for defining a `Acl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
 */
export interface AclProps {

    /**
     * Property aclOperationTypes: The types of operations allowed by the ACL.
     */
    readonly aclOperationTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property aclResourceName: The resource name.
     * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
     * You can use an asterisk (*) to specify the names of all resources of the specified type.
     * Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
     */
    readonly aclResourceName: string | ros.IResolvable;

    /**
     * Property aclResourcePatternType: The matching mode. Valid values:
     * LITERAL: exact match
     * PREFIXED: prefix match
     */
    readonly aclResourcePatternType: string | ros.IResolvable;

    /**
     * Property aclResourceType: The resource type. Valid values:
     * Topic
     * Group
     * Cluster
     * TransactionalId: transactional ID
     */
    readonly aclResourceType: string | ros.IResolvable;

    /**
     * Property instanceId: The instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property username: The username.
     * You can use an asterisk (*) to specify all usernames.
     * Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
     */
    readonly username: string | ros.IResolvable;

    /**
     * Property aclPermissionType: The authorization method. Valid values:
     * DENY
     * ALLOW
     * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly aclPermissionType?: string | ros.IResolvable;

    /**
     * Property host: The source IP address.
     * Note
     * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly host?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KAFKA::Acl`, which is used to create an access control list (ACL).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
 */
export class Acl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclResourceType: The resource type.
     */
    public readonly attrAclResourceType: ros.IResolvable;

    /**
     * Attribute InstanceId: The instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Username: The username.
     */
    public readonly attrUsername: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAcl = new RosAcl(this, id,  {
            aclResourceName: props.aclResourceName,
            aclOperationTypes: props.aclOperationTypes,
            username: props.username,
            instanceId: props.instanceId,
            aclResourceType: props.aclResourceType,
            aclPermissionType: props.aclPermissionType,
            aclResourcePatternType: props.aclResourcePatternType,
            host: props.host,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAcl;
        this.attrAclResourceType = rosAcl.attrAclResourceType;
        this.attrInstanceId = rosAcl.attrInstanceId;
        this.attrUsername = rosAcl.attrUsername;
    }
}
