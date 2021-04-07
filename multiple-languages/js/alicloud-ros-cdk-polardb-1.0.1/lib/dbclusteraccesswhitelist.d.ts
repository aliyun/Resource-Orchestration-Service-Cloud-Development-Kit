import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterAccessWhiteList } from './polardb.generated';
export { RosDBClusterAccessWhiteList as DBClusterAccessWhiteListProperty };
/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export interface DBClusterAccessWhiteListProps {
    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
     * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    readonly securityIps: string | ros.IResolvable;
    /**
     * Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    readonly dbClusterIpArrayName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export declare class DBClusterAccessWhiteList extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterAccessWhiteListProps, enableResourcePropertyConstraint?: boolean);
}
