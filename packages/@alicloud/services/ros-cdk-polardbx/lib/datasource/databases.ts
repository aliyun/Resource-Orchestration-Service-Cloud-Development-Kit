import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabases } from './polardbx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatabases as DatabasesProperty };

/**
 * Properties for defining a `Databases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export interface DatabasesProps {

    /**
     * Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Databases`.
 */
export interface IDatabases extends ros.IResource {
    readonly props: DatabasesProps;

    /**
     * Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.
     */
    readonly attrPolarDbxDatabaseNames: ros.IResolvable | string;

    /**
     * Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.
     */
    readonly attrPolarDbxDatabases: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PolarDBX::Databases`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabases`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export class Databases extends ros.Resource implements IDatabases {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DatabasesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.
     */
    public readonly attrPolarDbxDatabaseNames: ros.IResolvable | string;

    /**
     * Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.
     */
    public readonly attrPolarDbxDatabases: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabasesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDatabases = new RosDatabases(this, id,  {
            dbInstanceId: props.dbInstanceId,
            polarDbxDatabaseName: props.polarDbxDatabaseName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatabases;
        this.attrPolarDbxDatabaseNames = rosDatabases.attrPolarDbxDatabaseNames;
        this.attrPolarDbxDatabases = rosDatabases.attrPolarDbxDatabases;
    }
}
