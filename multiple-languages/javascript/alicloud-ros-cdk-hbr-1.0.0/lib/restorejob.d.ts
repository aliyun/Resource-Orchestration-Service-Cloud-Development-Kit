import * as ros from '@alicloud/ros-cdk-core';
import { RosRestoreJob } from './hbr.generated';
export { RosRestoreJob as RestoreJobProperty };
/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`
 */
export interface RestoreJobProps {
    /**
     * @Property restoreType: Restore type
     */
    readonly restoreType: string;
    /**
     * @Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string;
    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string;
    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string;
    /**
     * @Property sourceType: Source type
     */
    readonly sourceType: string;
    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string;
    /**
     * @Property targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string;
    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    readonly targetPath: string;
    /**
     * @Property vaultId: Vault ID
     */
    readonly vaultId: string;
}
/**
 * A ROS resource type:  `ALIYUN::HBR::RestoreJob`
 */
export declare class RestoreJob extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ErrorMessage: Error message of restore job
     */
    readonly attrErrorMessage: any;
    /**
     * @Attribute RestoreId: Restore job ID
     */
    readonly attrRestoreId: any;
    /**
     * @Attribute RestoreType: Restore type
     */
    readonly attrRestoreType: any;
    /**
     * @Attribute SourceType: Source type
     */
    readonly attrSourceType: any;
    /**
     * @Attribute Status: Restore job status
     */
    readonly attrStatus: any;
    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RestoreJobProps, enableResourcePropertyConstraint?: boolean);
}
