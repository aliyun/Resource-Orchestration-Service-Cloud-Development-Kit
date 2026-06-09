import * as ros from '@alicloud/ros-cdk-core';
import { RosBackup } from './polardb.generated';
export { RosBackup as BackupProperty };
/**
 * Properties for defining a `Backup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
 */
export interface BackupProps {
    /**
     * Property dbClusterId: The cluster ID.
     */
    readonly dbClusterId: string | ros.IResolvable;
}
/**
 * Represents a `Backup`.
 */
export interface IBackup extends ros.IResource {
    readonly props: BackupProps;
    /**
     * Attribute BackupJobId: The ID of the backup set.
     */
    readonly attrBackupJobId: ros.IResolvable | string;
    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Backup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
 */
export declare class Backup extends ros.Resource implements IBackup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BackupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BackupJobId: The ID of the backup set.
     */
    readonly attrBackupJobId: ros.IResolvable | string;
    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupProps, enableResourcePropertyConstraint?: boolean);
}
