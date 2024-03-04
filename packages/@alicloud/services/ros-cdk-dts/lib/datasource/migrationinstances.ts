import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationInstances } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMigrationInstances as MigrationInstancesProperty };

/**
 * Properties for defining a `MigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface MigrationInstancesProps {

    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationInstances`, which is used to query information about Data Transmission Service (DTS) tasks.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export class MigrationInstances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MigrationInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable;

    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    public readonly attrMigrationInstances: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMigrationInstances = new RosMigrationInstances(this, id,  {
            dtsInstanceId: props.dtsInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationInstances;
        this.attrDtsInstanceIds = rosMigrationInstances.attrDtsInstanceIds;
        this.attrMigrationInstances = rosMigrationInstances.attrMigrationInstances;
    }
}
