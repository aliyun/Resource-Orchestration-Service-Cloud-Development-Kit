import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalDatabaseNetworks } from './polardb.generated';
export { RosGlobalDatabaseNetworks as GlobalDatabaseNetworksProperty };
/**
 * Properties for defining a `DATASOURCE::POLARDB::GlobalDatabaseNetworks`
 */
export interface GlobalDatabaseNetworksProps {
    /**
     * Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * Property gdnId: The ID of the GDN.
     */
    readonly gdnId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::POLARDB::GlobalDatabaseNetworks`
 */
export declare class GlobalDatabaseNetworks extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GdnIds: The list of gdn IDs.
     */
    readonly attrGdnIds: ros.IResolvable;
    /**
     * Attribute GlobalDatabaseNetworks: The list of global database networks.
     */
    readonly attrGlobalDatabaseNetworks: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::POLARDB::GlobalDatabaseNetworks`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GlobalDatabaseNetworksProps, enableResourcePropertyConstraint?: boolean);
}
