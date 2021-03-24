import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDB } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsDB as DrdsDBProperty };

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsDB`
 */
export interface DrdsDBProps {

    /**
     * Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string;

    /**
     * Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string;

    /**
     * Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;

    /**
     * Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string;

    /**
     * Property dbName: Database Name
     */
    readonly dbName?: string;

    /**
     * Property encode: Encoding used by the database
     */
    readonly encode?: string;

    /**
     * Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property password: The logon password of the database instance.
     */
    readonly password?: string;

    /**
     * Property rdsInstance: This property is required only for vertical partitioning.
     */
    readonly rdsInstance?: string[];

    /**
     * Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string;
}

/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsDB`
 */
export class DrdsDB extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDrdsDB = new RosDrdsDB(this, id,  {
            dbInstType: props.dbInstType,
            type: props.type ? props.type : 'HORIZONTAL',
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
