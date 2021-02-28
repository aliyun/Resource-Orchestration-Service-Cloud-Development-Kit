import * as ros from '@alicloud/ros-cdk-core';
import { RosRestoreJob } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRestoreJob as RestoreJobProperty };

/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`
 */
export interface RestoreJobProps {

    /**
     * Property restoreType: Restore type
     */
    readonly restoreType: string;

    /**
     * Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string;

    /**
     * Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string;

    /**
     * Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string;

    /**
     * Property sourceType: Source type
     */
    readonly sourceType: string;

    /**
     * Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string;

    /**
     * Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string;

    /**
     * Property targetPath: Target path. For instance, "/".
     */
    readonly targetPath: string;

    /**
     * Property vaultId: Vault ID
     */
    readonly vaultId: string;
}

/**
 * A ROS resource type:  `ALIYUN::HBR::RestoreJob`
 */
export class RestoreJob extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ErrorMessage: Error message of restore job
     */
    public readonly attrErrorMessage: any;

    /**
     * Attribute RestoreId: Restore job ID
     */
    public readonly attrRestoreId: any;

    /**
     * Attribute RestoreType: Restore type
     */
    public readonly attrRestoreType: any;

    /**
     * Attribute SourceType: Source type
     */
    public readonly attrSourceType: any;

    /**
     * Attribute Status: Restore job status
     */
    public readonly attrStatus: any;

    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RestoreJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
