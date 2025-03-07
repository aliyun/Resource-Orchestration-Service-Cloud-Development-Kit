import * as ros from '@alicloud/ros-cdk-core';
import { RosSaslUser } from './kafka.generated';
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
 * Represents a `SaslUser`.
 */
export interface ISaslUser extends ros.IResource {
    readonly props: SaslUserProps;
    /**
     * Attribute InstanceId: The instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Username: The user name of the instance.
     */
    readonly attrUsername: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KAFKA::SaslUser`, which is used to create a Simple Authentication and Security Layer (SASL) user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSaslUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
export declare class SaslUser extends ros.Resource implements ISaslUser {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SaslUserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Username: The user name of the instance.
     */
    readonly attrUsername: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SaslUserProps, enableResourcePropertyConstraint?: boolean);
}
