import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabases } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatabases as DatabasesProperty };

/**
 * Properties for defining a `Databases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export interface DatabasesProps {

    /**
     * Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property dbName: The names of the databases whose information you want to query.
     */
    readonly dbName?: string | ros.IResolvable;

    /**
     * Property dbStatus: The status of the databases whose information you want to query.
     */
    readonly dbStatus?: string | ros.IResolvable;

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
     * Attribute DBNames: The list of The RDS database names.
     */
    readonly attrDbNames: ros.IResolvable | string;

    /**
     * Attribute Databases: The list of The RDS databases.
     */
    readonly attrDatabases: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::Databases`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabases`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export class Databases extends ros.Resource implements IDatabases {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DatabasesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBNames: The list of The RDS database names.
     */
    public readonly attrDbNames: ros.IResolvable | string;

    /**
     * Attribute Databases: The list of The RDS databases.
     */
    public readonly attrDatabases: ros.IResolvable | string;

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
            dbName: props.dbName,
            dbStatus: props.dbStatus,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatabases;
        this.attrDbNames = rosDatabases.attrDbNames;
        this.attrDatabases = rosDatabases.attrDatabases;
    }
}
