import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterEndpoint } from './polardb.generated';
export { RosDBClusterEndpoint as DBClusterEndpointProperty };
/**
 * Properties for defining a `DBClusterEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export interface DBClusterEndpointProps {
    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    readonly autoAddNewNodes?: string | ros.IResolvable;
    /**
     * Property endpointConfig:
     */
    readonly endpointConfig?: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable;
    /**
     * Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    readonly nodes?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property readWriteMode: The read\/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readonly readWriteMode?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBClusterEndpoint`, which is used to create a custom endpoint for a PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBClusterEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export declare class DBClusterEndpoint extends ros.Resource {
    /**
     * Attribute Addresses: The address items of the db cluster endpoint.
     */
    readonly attrAddresses: ros.IResolvable;
    /**
     * Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
     */
    readonly attrDbEndpointId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterEndpointProps, enableResourcePropertyConstraint?: boolean);
}
