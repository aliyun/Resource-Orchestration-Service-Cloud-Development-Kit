import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
 */
export interface AccountProps {

    /**
     * Property accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID. For obtaining it, visit RAM console.
     * If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
     */
    readonly accountAccessKey: string | ros.IResolvable;

    /**
     * Property accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
     */
    readonly accountAccessKeySecret: string | ros.IResolvable;

    /**
     * Property instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;

    /**
     * Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
     */
    readonly attrAccountAccessKey: ros.IResolvable | string;

    /**
     * Attribute CreateTimestamp: The timestamp when the account was created.
     */
    readonly attrCreateTimestamp: ros.IResolvable | string;

    /**
     * Attribute Password: The created static user password.
     */
    readonly attrPassword: ros.IResolvable | string;

    /**
     * Attribute UserName: The created account user name.
     */
    readonly attrUserName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
     */
    public readonly attrAccountAccessKey: ros.IResolvable | string;

    /**
     * Attribute CreateTimestamp: The timestamp when the account was created.
     */
    public readonly attrCreateTimestamp: ros.IResolvable | string;

    /**
     * Attribute Password: The created static user password.
     */
    public readonly attrPassword: ros.IResolvable | string;

    /**
     * Attribute UserName: The created account user name.
     */
    public readonly attrUserName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccount = new RosAccount(this, id,  {
            instanceId: props.instanceId,
            accountAccessKey: props.accountAccessKey,
            accountAccessKeySecret: props.accountAccessKeySecret,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountAccessKey = rosAccount.attrAccountAccessKey;
        this.attrCreateTimestamp = rosAccount.attrCreateTimestamp;
        this.attrPassword = rosAccount.attrPassword;
        this.attrUserName = rosAccount.attrUserName;
    }
}
