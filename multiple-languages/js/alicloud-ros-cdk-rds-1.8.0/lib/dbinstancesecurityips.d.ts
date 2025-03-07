import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceSecurityIps } from './rds.generated';
export { RosDBInstanceSecurityIps as DBInstanceSecurityIpsProperty };
/**
 * Properties for defining a `DBInstanceSecurityIps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
 */
export interface DBInstanceSecurityIpsProps {
    /**
     * Property dbInstanceId: Database instance id to update security ips.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    readonly dbInstanceIpArrayAttribute: string | ros.IResolvable;
    /**
     * Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    readonly dbInstanceIpArrayName?: string | ros.IResolvable;
}
/**
 * Represents a `DBInstanceSecurityIps`.
 */
export interface IDBInstanceSecurityIps extends ros.IResource {
    readonly props: DBInstanceSecurityIpsProps;
    /**
     * Attribute SecurityIps: The security ips of selected database instance.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBInstanceSecurityIps`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstanceSecurityIps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
 */
export declare class DBInstanceSecurityIps extends ros.Resource implements IDBInstanceSecurityIps {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBInstanceSecurityIpsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SecurityIps: The security ips of selected database instance.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceSecurityIpsProps, enableResourcePropertyConstraint?: boolean);
}
