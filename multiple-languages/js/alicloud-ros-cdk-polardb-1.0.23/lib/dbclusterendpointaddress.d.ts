import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterEndpointAddress } from './polardb.generated';
export { RosDBClusterEndpointAddress as DBClusterEndpointAddressProperty };
/**
 * Properties for defining a `DBClusterEndpointAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export interface DBClusterEndpointAddressProps {
    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property dbEndpointId: The ID of the cluster connection point.
     */
    readonly dbEndpointId: string | ros.IResolvable;
    /**
     * Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * Property netType: The network type of the connection string.
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    readonly netType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBClusterEndpointAddress`, which is used to create a public endpoint for an Apsara PolarDB cluster. The public endpoint can be a primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBClusterEndpointAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export declare class DBClusterEndpointAddress extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBClusterEndpointAddressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Address: The details of the endpoint address.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * Attribute ConnectionString: The connection string of the endpoint address.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterEndpointAddressProps, enableResourcePropertyConstraint?: boolean);
}
