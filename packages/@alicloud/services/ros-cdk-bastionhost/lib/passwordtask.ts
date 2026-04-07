import * as ros from '@alicloud/ros-cdk-core';
import { RosPasswordTask } from './bastionhost.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPasswordTask as PasswordTaskProperty };

/**
 * Properties for defining a `PasswordTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
export interface PasswordTaskProps {

    /**
     * Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property name: The name of the password task.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property taskScheduleType: The schedule type of the password task.
     */
    readonly taskScheduleType: string | ros.IResolvable;

    /**
     * Property comment: The comment of the password task.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * Property credentialType: The credential type of the password task.
     */
    readonly credentialType?: string | ros.IResolvable;

    /**
     * Property keyPairGenerateConfig: The key pair generate config of the password task.
     */
    readonly keyPairGenerateConfig?: string | ros.IResolvable;

    /**
     * Property passwordGenerateConfig: The password generate config of the password task.
     */
    readonly passwordGenerateConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property passwordGenerateType: The password generate type of the password task.
     */
    readonly passwordGenerateType?: string | ros.IResolvable;

    /**
     * Property taskScheduleConfig: The schedule config of the password task.
     */
    readonly taskScheduleConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `PasswordTask`.
 */
export interface IPasswordTask extends ros.IResource {
    readonly props: PasswordTaskProps;

    /**
     * Attribute TaskId: The ID of the password task.
     */
    readonly attrTaskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::PasswordTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPasswordTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
export class PasswordTask extends ros.Resource implements IPasswordTask {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PasswordTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TaskId: The ID of the password task.
     */
    public readonly attrTaskId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PasswordTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPasswordTask = new RosPasswordTask(this, id,  {
            taskScheduleType: props.taskScheduleType,
            comment: props.comment,
            passwordGenerateConfig: props.passwordGenerateConfig,
            instanceId: props.instanceId,
            keyPairGenerateConfig: props.keyPairGenerateConfig,
            credentialType: props.credentialType,
            passwordGenerateType: props.passwordGenerateType,
            taskScheduleConfig: props.taskScheduleConfig,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPasswordTask;
        this.attrTaskId = rosPasswordTask.attrTaskId;
    }
}
