import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJobs } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationJobs`, which is used to query the information about data migration tasks in Data Transmission Service (DTS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJobs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export class MigrationJobs extends ros.Resource implements IMigrationJobs {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MigrationJobsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable | string;

    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    public readonly attrMigrationInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationJobsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMigrationJobs = new RosMigrationJobs(this, id,  {
            dtsInstanceId: props.dtsInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationJobs;
        this.attrDtsInstanceIds = rosMigrationJobs.attrDtsInstanceIds;
        this.attrMigrationInstances = rosMigrationJobs.attrMigrationInstances;
    }
}
