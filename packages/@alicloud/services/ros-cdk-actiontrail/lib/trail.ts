import * as ros from '@alicloud/ros-cdk-core';
import { RosTrail } from './actiontrail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrail as TrailProperty };

/**
 * Properties for defining a `Trail`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export interface TrailProps {

    /**
     * Property name: The name of the trail to be created.
     * Length should be between 6 and 36 characters, must start with a lowercase letter,
     * and can include lowercase letters, numbers, hyphens (-), and underscores (_).
     * > The trail name must be unique within the same account.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string | ros.IResolvable;

    /**
     * Property ossBucketName: The OSS bucket for the trail delivery.
     * Length should be between 3 and 63 characters, must start with a lowercase letter
     * or number, and can include lowercase letters, numbers, and hyphens (-).
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    readonly ossBucketName?: string | ros.IResolvable;

    /**
     * Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
     * Length should be between 6 and 32 characters, must start with a letter, and can
     * include letters, numbers, hyphens (-), forward slashes (\/), and underscores (_).
     */
    readonly ossKeyPrefix?: string | ros.IResolvable;

    /**
     * Property roleName: The name of the associated role for Operation Audit, with a default value of
     * serviceroleforactiontrail.
     */
    readonly roleName?: string | ros.IResolvable;

    /**
     * Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    readonly slsProjectArn?: string | ros.IResolvable;

    /**
     * Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events
     * to the Log Service project.
     * - If this parameter is not specified, Operation Audit will create the necessary
     * resources by creating a service-linked role. 
     * - If this parameter is specified, when you need to deliver events to the current
     * account, you need to grant the RAM role the permissions of the Operation Audit
     * service-linked role. When you need to deliver events to another account, you need
     * to bind the system permission policy for event delivery to the RAM role. For more
     * information on cross-account delivery, see Deliver Events from Multiple
     * Accounts to One Account.
     */
    readonly slsWriteRoleArn?: string | ros.IResolvable;
}

/**
 * Represents a `Trail`.
 */
export interface ITrail extends ros.IResource {
    readonly props: TrailProps;

    /**
     * Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACTIONTRAIL::Trail`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrail`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export class Trail extends ros.Resource implements ITrail {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrailProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrail = new RosTrail(this, id,  {
            slsProjectArn: props.slsProjectArn,
            roleName: props.roleName,
            eventRw: props.eventRw === undefined || props.eventRw === null ? 'Write' : props.eventRw,
            ossKeyPrefix: props.ossKeyPrefix,
            ossBucketName: props.ossBucketName,
            slsWriteRoleArn: props.slsWriteRoleArn,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrail;
        this.attrName = rosTrail.attrName;
    }
}
