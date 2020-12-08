import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterAccessWhiteList } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBClusterAccessWhiteList as DBClusterAccessWhiteListProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export interface DBClusterAccessWhiteListProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly dbClusterId: string;

    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
     * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    readonly securityIps: string;

    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    readonly dbClusterIpArrayName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterAccessWhiteList`
 */
export class DBClusterAccessWhiteList extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public readonly attrDbClusterId: any;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterAccessWhiteListProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBClusterAccessWhiteList = new RosDBClusterAccessWhiteList(this, id,  {
            securityIps: props.securityIps,
            dbClusterIpArrayName: props.dbClusterIpArrayName,
            dbClusterId: props.dbClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusterAccessWhiteList;
        this.attrDbClusterId = rosDBClusterAccessWhiteList.attrDbClusterId;
    }
}
