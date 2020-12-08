import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusterEndpointAddress } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBClusterEndpointAddress as DBClusterEndpointAddressProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBClusterEndpointAddress`
 */
export interface DBClusterEndpointAddressProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    readonly dbClusterId: string;

    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    readonly dbEndpointId: string;

    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    readonly connectionStringPrefix?: string;

    /**
     * @Property netType: The network type of the connection string. 
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    readonly netType?: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterEndpointAddress`
 */
export class DBClusterEndpointAddress extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Address: The details of the endpoint address.
     */
    public readonly attrAddress: any;

    /**
     * @Attribute ConnectionString: The connection string of the endpoint address.
     */
    public readonly attrConnectionString: any;

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpointAddress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterEndpointAddressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBClusterEndpointAddress = new RosDBClusterEndpointAddress(this, id,  {
            dbEndpointId: props.dbEndpointId,
            dbClusterId: props.dbClusterId,
            connectionStringPrefix: props.connectionStringPrefix,
            netType: props.netType ? props.netType : 'Public',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusterEndpointAddress;
        this.attrAddress = rosDBClusterEndpointAddress.attrAddress;
        this.attrConnectionString = rosDBClusterEndpointAddress.attrConnectionString;
    }
}
