import * as ros from '@alicloud/ros-cdk-core';
import { RosSaslUser } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSaslUser as SaslUserProperty };

/**
 * Properties for defining a `SaslUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
export interface SaslUserProps {

    /**
     * Property instanceId: The instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property password: The password of the SASL user.
     */
    readonly password: string | ros.IResolvable;

    /**
     * Property username: The name of the SASL user.
     */
    readonly username: string | ros.IResolvable;

    /**
     * Property mechanism: The encryption method. Valid values:
     * SCRAM-SHA-512 (default)
     * SCRAM-SHA-256
     * Note
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly mechanism?: string | ros.IResolvable;

    /**
     * Property type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
     * plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
     * SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
     * LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
     * Default value: plain.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KAFKA::SaslUser`, which is used to create a Simple Authentication and Security Layer (SASL) user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSaslUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
export class SaslUser extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SaslUserProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Username: The user name of the instance.
     */
    public readonly attrUsername: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SaslUserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSaslUser = new RosSaslUser(this, id,  {
            type: props.type,
            username: props.username,
            instanceId: props.instanceId,
            mechanism: props.mechanism,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSaslUser;
        this.attrInstanceId = rosSaslUser.attrInstanceId;
        this.attrUsername = rosSaslUser.attrUsername;
    }
}
