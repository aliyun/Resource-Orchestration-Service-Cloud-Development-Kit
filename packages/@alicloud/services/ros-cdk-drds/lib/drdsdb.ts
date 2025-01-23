import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDB } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsDB as DrdsDBProperty };

/**
 * Properties for defining a `DrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export interface DrdsDBProps {

    /**
     * Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string | ros.IResolvable;

    /**
     * Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;

    /**
     * Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string | ros.IResolvable;

    /**
     * Property dbName: Database Name
     */
    readonly dbName?: string | ros.IResolvable;

    /**
     * Property encode: Encoding used by the database
     */
    readonly encode?: string | ros.IResolvable;

    /**
     * Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property password: The logon password of the database instance.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property rdsInstance: This property is required only for vertical partitioning.
     */
    readonly rdsInstance?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `DrdsDB`.
 */
export interface IDrdsDB extends ros.IResource {
    readonly props: DrdsDBProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DRDS::DrdsDB`, which is used to create a Distributed Relational Database Service (DRDS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsDB`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export class DrdsDB extends ros.Resource implements IDrdsDB {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DrdsDBProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDrdsDB = new RosDrdsDB(this, id,  {
            dbInstType: props.dbInstType,
            type: props.type === undefined || props.type === null ? 'HORIZONTAL' : props.type,
            drdsInstanceId: props.drdsInstanceId,
            rdsInstance: props.rdsInstance,
            dbInstanceIsCreating: props.dbInstanceIsCreating,
            instDbName: props.instDbName,
            dbName: props.dbName,
            encode: props.encode,
            accountName: props.accountName,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsDB;
    }
}
