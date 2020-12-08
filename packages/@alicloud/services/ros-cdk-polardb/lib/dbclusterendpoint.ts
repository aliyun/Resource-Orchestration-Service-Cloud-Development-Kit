import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterEndpoint } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBClusterEndpoint as DBClusterEndpointProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterEndpoint`
 */
export interface DBClusterEndpointProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    readonly autoAddNewNodes?: string;

    /**
     * @Property endpointConfig:
     */
    readonly endpointConfig?: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable;

    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    readonly endpointType?: string;

    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    readonly nodes?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property readWriteMode: The read/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readonly readWriteMode?: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterEndpoint`
 */
export class DBClusterEndpoint extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Addresses: The address items of the db cluster endpoint.
     */
    public readonly attrAddresses: any;

    /**
     * @Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    public readonly attrConnectionString: any;

    /**
     * @Attribute DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
     */
    public readonly attrDbEndpointId: any;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpoint`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterEndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBClusterEndpoint = new RosDBClusterEndpoint(this, id,  {
            autoAddNewNodes: props.autoAddNewNodes ? props.autoAddNewNodes : 'Disable',
            dbClusterId: props.dbClusterId,
            endpointType: props.endpointType ? props.endpointType : 'Custom',
            readWriteMode: props.readWriteMode ? props.readWriteMode : 'ReadOnly',
            endpointConfig: props.endpointConfig,
            nodes: props.nodes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusterEndpoint;
        this.attrAddresses = rosDBClusterEndpoint.attrAddresses;
        this.attrConnectionString = rosDBClusterEndpoint.attrConnectionString;
        this.attrDbEndpointId = rosDBClusterEndpoint.attrDbEndpointId;
    }
}
