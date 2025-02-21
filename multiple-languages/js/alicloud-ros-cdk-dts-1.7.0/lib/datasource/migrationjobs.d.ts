import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJobs } from './dts.generated';
export { RosMigrationJobs as MigrationJobsProperty };
/**
 * Properties for defining a `MigrationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export interface MigrationJobsProps {
    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `MigrationJobs`.
 */
export interface IMigrationJobs extends ros.IResource {
    readonly props: MigrationJobsProps;
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable | string;
    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationJobs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJobs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export declare class MigrationJobs extends ros.Resource implements IMigrationJobs {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MigrationJobsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable | string;
    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MigrationJobsProps, enableResourcePropertyConstraint?: boolean);
}
