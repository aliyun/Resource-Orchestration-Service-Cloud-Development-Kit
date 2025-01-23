import * as ros from '@alicloud/ros-cdk-core';
import { RosRdsExternalStore } from './sls.generated';
export { RosRdsExternalStore as RdsExternalStoreProperty };
/**
 * Properties for defining a `RdsExternalStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
 */
export interface RdsExternalStoreProps {
    /**
     * Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
     */
    readonly db: string | ros.IResolvable;
    /**
     * Property externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
     */
    readonly externalStoreName: string | ros.IResolvable;
    /**
     * Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
     */
    readonly host: string | ros.IResolvable;
    /**
     * Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    readonly password: string | ros.IResolvable;
    /**
     * Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
     */
    readonly port: number | ros.IResolvable;
    /**
     * Property project: The name of the project.
     */
    readonly project: string | ros.IResolvable;
    /**
     * Property region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
     */
    readonly region: string | ros.IResolvable;
    /**
     * Property storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
     */
    readonly storeType: string | ros.IResolvable;
    /**
     * Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
     */
    readonly table: string | ros.IResolvable;
    /**
     * Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    readonly username: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property instanceId: The id of the RDS instance
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * Represents a `RdsExternalStore`.
 */
export interface IRdsExternalStore extends ros.IResource {
    readonly props: RdsExternalStoreProps;
    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    readonly attrExternalStoreName: ros.IResolvable | string;
    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    readonly attrProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::RdsExternalStore`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRdsExternalStore`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
 */
export declare class RdsExternalStore extends ros.Resource implements IRdsExternalStore {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RdsExternalStoreProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    readonly attrExternalStoreName: ros.IResolvable | string;
    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    readonly attrProject: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RdsExternalStoreProps, enableResourcePropertyConstraint?: boolean);
}
