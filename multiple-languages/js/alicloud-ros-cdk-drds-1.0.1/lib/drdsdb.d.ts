import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDB } from './drds.generated';
export { RosDrdsDB as DrdsDBProperty };
/**
 * Properties for defining a `ALIYUN::DRDS::DrdsDB`
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
 * A ROS resource type:  `ALIYUN::DRDS::DrdsDB`
 */
export declare class DrdsDB extends ros.Resource {
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
    constructor(scope: ros.Construct, id: string, props: DrdsDBProps, enableResourcePropertyConstraint?: boolean);
}
