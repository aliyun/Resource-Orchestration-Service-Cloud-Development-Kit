import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstances } from './rds.generated';
export { RosDBInstances as DBInstancesProperty };
/**
 * Properties for defining a `DBInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
export interface DBInstancesProps {
    /**
     * Property connectionMode: The connection mode of the instance.
     */
    readonly connectionMode?: string | ros.IResolvable;
    /**
     * Property connectionString: The endpoint of the instance.
     */
    readonly connectionString?: string | ros.IResolvable;
    /**
     * Property dbInstanceClass: The instance type of the instances.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * Property dbInstanceStatus: The status of the instances.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;
    /**
     * Property dbInstanceType: The role of the instances.
     */
    readonly dbInstanceType?: string | ros.IResolvable;
    /**
     * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * Property engine: The database engine that is run by the instances.
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * Property engineVersion: The version of the database engine that is run by the instances.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * Property expired: Specifies whether the instances have expired.
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    readonly instanceLevel?: number | ros.IResolvable;
    /**
     * Property instanceNetworkType: The network type of the instances.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * Property payType: The billing method of the instances.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property proxyId: The ID of the proxy mode.
     */
    readonly proxyId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    readonly searchKey?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone to which the instances belong
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `DBInstances`.
 */
export interface IDBInstances extends ros.IResource {
    readonly props: DBInstancesProps;
    /**
     * Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    readonly attrDbInstanceIds: ros.IResolvable | string;
    /**
     * Attribute DBInstances: The list of The RDS Database instances.
     */
    readonly attrDbInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstances`, which is used to query ApsaraDB RDS instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
export declare class DBInstances extends ros.Resource implements IDBInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    readonly attrDbInstanceIds: ros.IResolvable | string;
    /**
     * Attribute DBInstances: The list of The RDS Database instances.
     */
    readonly attrDbInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DBInstancesProps, enableResourcePropertyConstraint?: boolean);
}
