import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJob } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMigrationJob as MigrationJobProperty };

/**
 * Properties for defining a `ALIYUN::DTS::MigrationJob`
 */
export interface MigrationJobProps {

    /**
     * Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    readonly migrationJobClass: string | ros.IResolvable;

    /**
     * Property destinationEndpoint: Migration target configuration
     */
    readonly destinationEndpoint?: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable;

    /**
     * Property migrationJobName: Migrating job name
     */
    readonly migrationJobName?: string | ros.IResolvable;

    /**
     * Property migrationMode: Migration mode
     */
    readonly migrationMode?: RosMigrationJob.MigrationModeProperty | ros.IResolvable;

    /**
     * Property migrationObject: Objects that need to be migrated
     */
    readonly migrationObject?: Array<RosMigrationJob.MigrationObjectProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property sourceEndpoint: Migration source configuration
     */
    readonly sourceEndpoint?: RosMigrationJob.SourceEndpointProperty | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DTS::MigrationJob`
 */
export class MigrationJob extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute MigrationJobId: Migration tasks task ID
     */
    public readonly attrMigrationJobId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMigrationJob = new RosMigrationJob(this, id,  {
            migrationObject: props.migrationObject,
            destinationEndpoint: props.destinationEndpoint,
            migrationJobClass: props.migrationJobClass,
            sourceEndpoint: props.sourceEndpoint,
            migrationJobName: props.migrationJobName,
            migrationMode: props.migrationMode,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationJob;
        this.attrMigrationJobId = rosMigrationJob.attrMigrationJobId;
    }
}
