import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupClients } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackupClients as BackupClientsProperty };

/**
 * Properties for defining a `BackupClients`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export interface BackupClientsProps {

    /**
     * Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosBackupClients.TagsProperty[];
}

/**
 * Represents a `BackupClients`.
 */
export interface IBackupClients extends ros.IResource {
    readonly props: BackupClientsProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClientIds: ID list of clients installed in instances
     */
    readonly attrClientIds: ros.IResolvable | string;

    /**
     * Attribute InstanceIds: ID list of instances to install backup client
     */
    readonly attrInstanceIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::BackupClients`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupClients`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export class BackupClients extends ros.Resource implements IBackupClients {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackupClientsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClientIds: ID list of clients installed in instances
     */
    public readonly attrClientIds: ros.IResolvable | string;

    /**
     * Attribute InstanceIds: ID list of instances to install backup client
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupClientsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackupClients = new RosBackupClients(this, id,  {
            instanceIds: props.instanceIds,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupClients;
        this.attrArn = rosBackupClients.attrArn;
        this.attrClientIds = rosBackupClients.attrClientIds;
        this.attrInstanceIds = rosBackupClients.attrInstanceIds;
    }
}
