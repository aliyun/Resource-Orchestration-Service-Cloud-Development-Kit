import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodeClasses } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBNodeClasses as DBNodeClassesProperty };

/**
 * Properties for defining a `DBNodeClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
export interface DBNodeClassesProps {

    /**
     * Property payType: The billing method. Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
     */
    readonly dbNodeClass?: string | ros.IResolvable;

    /**
     * Property dbType: The database engine. Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType?: string | ros.IResolvable;

    /**
     * Property dbVersion: The version number of the database engine
     * Valid values for the MySQL database engine:
     * 5.6
     * 5.7
     * 8
     * Valid value for the PostgreSQL database engine: 11
     * Valid value for the Oracle database engine: 11
     * Note If you specify the DBType parameter, you must specify this parameter
     */
    readonly dbVersion?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DBNodeClasses`.
 */
export interface IDBNodeClasses extends ros.IResource {
    readonly props: DBNodeClassesProps;

    /**
     * Attribute DBNodeClassIds: The list of db node class ids.
     */
    readonly attrDbNodeClassIds: ros.IResolvable | string;

    /**
     * Attribute DBNodeClasses: The list of db node classes.
     */
    readonly attrDbNodeClasses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::DBNodeClasses`, which is used to query available PolarDB cluster resources.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBNodeClasses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
export class DBNodeClasses extends ros.Resource implements IDBNodeClasses {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBNodeClassesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBNodeClassIds: The list of db node class ids.
     */
    public readonly attrDbNodeClassIds: ros.IResolvable | string;

    /**
     * Attribute DBNodeClasses: The list of db node classes.
     */
    public readonly attrDbNodeClasses: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodeClassesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBNodeClasses = new RosDBNodeClasses(this, id,  {
            dbVersion: props.dbVersion,
            zoneId: props.zoneId,
            dbType: props.dbType,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            dbNodeClass: props.dbNodeClass,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodeClasses;
        this.attrDbNodeClassIds = rosDBNodeClasses.attrDbNodeClassIds;
        this.attrDbNodeClasses = rosDBNodeClasses.attrDbNodeClasses;
    }
}
