import * as ros from '@alicloud/ros-cdk-core';
import { RosRestoreJob } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRestoreJob as RestoreJobProperty };

/**
 * Properties for defining a `RestoreJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
 */
export interface RestoreJobProps {

    /**
     * Property restoreType: Restore type
     */
    readonly restoreType: string | ros.IResolvable;

    /**
     * Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string | ros.IResolvable;

    /**
     * Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string | ros.IResolvable;

    /**
     * Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * Property sourceType: Source type
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string | ros.IResolvable;

    /**
     * Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string | ros.IResolvable;

    /**
     * Property targetPath: Target path. For instance, "\/".
     */
    readonly targetPath: string | ros.IResolvable;

    /**
     * Property vaultId: Vault ID
     */
    readonly vaultId: string | ros.IResolvable;
}

/**
 * Represents a `RestoreJob`.
 */
export interface IRestoreJob extends ros.IResource {
    readonly props: RestoreJobProps;

    /**
     * Attribute ErrorMessage: Error message of restore job
     */
    readonly attrErrorMessage: ros.IResolvable | string;

    /**
     * Attribute RestoreId: Restore job ID
     */
    readonly attrRestoreId: ros.IResolvable | string;

    /**
     * Attribute RestoreType: Restore type
     */
    readonly attrRestoreType: ros.IResolvable | string;

    /**
     * Attribute SourceType: Source type
     */
    readonly attrSourceType: ros.IResolvable | string;

    /**
     * Attribute Status: Restore job status
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::RestoreJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRestoreJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
 */
export class RestoreJob extends ros.Resource implements IRestoreJob {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RestoreJobProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ErrorMessage: Error message of restore job
     */
    public readonly attrErrorMessage: ros.IResolvable | string;

    /**
     * Attribute RestoreId: Restore job ID
     */
    public readonly attrRestoreId: ros.IResolvable | string;

    /**
     * Attribute RestoreType: Restore type
     */
    public readonly attrRestoreType: ros.IResolvable | string;

    /**
     * Attribute SourceType: Source type
     */
    public readonly attrSourceType: ros.IResolvable | string;

    /**
     * Attribute Status: Restore job status
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RestoreJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRestoreJob = new RosRestoreJob(this, id,  {
            snapshotId: props.snapshotId,
            targetClientId: props.targetClientId,
            targetPath: props.targetPath,
            sourceType: props.sourceType,
            sourceClientId: props.sourceClientId,
            targetInstanceId: props.targetInstanceId,
            vaultId: props.vaultId,
            sourceInstanceId: props.sourceInstanceId,
            restoreType: props.restoreType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRestoreJob;
        this.attrErrorMessage = rosRestoreJob.attrErrorMessage;
        this.attrRestoreId = rosRestoreJob.attrRestoreId;
        this.attrRestoreType = rosRestoreJob.attrRestoreType;
        this.attrSourceType = rosRestoreJob.attrSourceType;
        this.attrStatus = rosRestoreJob.attrStatus;
    }
}
