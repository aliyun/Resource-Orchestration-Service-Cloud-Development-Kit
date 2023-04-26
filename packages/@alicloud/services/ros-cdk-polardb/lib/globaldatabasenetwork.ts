import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalDatabaseNetwork } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGlobalDatabaseNetwork as GlobalDatabaseNetworkProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::GlobalDatabaseNetwork`
 */
export interface GlobalDatabaseNetworkProps {

    /**
     * Property dbClusterId: The ID of the primary cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property gdnDescription: The description of the GDN.
     */
    readonly gdnDescription?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::GlobalDatabaseNetwork`
 */
export class GlobalDatabaseNetwork extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Connections: The information about the connection to the cluster.
     */
    public readonly attrConnections: ros.IResolvable;

    /**
     * Attribute CreateTime: The time at which the GDN was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DbClusters: The clusters that are included in the GDN.
     */
    public readonly attrDbClusters: ros.IResolvable;

    /**
     * Attribute DbType: The type of the database engine.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * Attribute DbVersion: The version of the database engine.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * Attribute GdnDescription: The description of the GDN.
     */
    public readonly attrGdnDescription: ros.IResolvable;

    /**
     * Attribute GdnId: The ID of the GDN.
     */
    public readonly attrGdnId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::POLARDB::GlobalDatabaseNetwork`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GlobalDatabaseNetworkProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGlobalDatabaseNetwork = new RosGlobalDatabaseNetwork(this, id,  {
            resourceGroupId: props.resourceGroupId,
            dbClusterId: props.dbClusterId,
            gdnDescription: props.gdnDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGlobalDatabaseNetwork;
        this.attrConnections = rosGlobalDatabaseNetwork.attrConnections;
        this.attrCreateTime = rosGlobalDatabaseNetwork.attrCreateTime;
        this.attrDbClusters = rosGlobalDatabaseNetwork.attrDbClusters;
        this.attrDbType = rosGlobalDatabaseNetwork.attrDbType;
        this.attrDbVersion = rosGlobalDatabaseNetwork.attrDbVersion;
        this.attrGdnDescription = rosGlobalDatabaseNetwork.attrGdnDescription;
        this.attrGdnId = rosGlobalDatabaseNetwork.attrGdnId;
    }
}
