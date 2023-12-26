import * as ros from '@alicloud/ros-cdk-core';
import { RosRestoreJob } from './hbr.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::RestoreJob`, which is used to create a restore job.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRestoreJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
 */
export declare class RestoreJob extends ros.Resource {
    /**
     * Attribute ErrorMessage: Error message of restore job
     */
    readonly attrErrorMessage: ros.IResolvable;
    /**
     * Attribute RestoreId: Restore job ID
     */
    readonly attrRestoreId: ros.IResolvable;
    /**
     * Attribute RestoreType: Restore type
     */
    readonly attrRestoreType: ros.IResolvable;
    /**
     * Attribute SourceType: Source type
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * Attribute Status: Restore job status
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RestoreJobProps, enableResourcePropertyConstraint?: boolean);
}
