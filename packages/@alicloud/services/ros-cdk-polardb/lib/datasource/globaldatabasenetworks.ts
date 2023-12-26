import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalDatabaseNetworks } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGlobalDatabaseNetworks as GlobalDatabaseNetworksProperty };

/**
 * Properties for defining a `GlobalDatabaseNetworks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetworks`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalDatabaseNetworks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
 */
export class GlobalDatabaseNetworks extends ros.Resource {

    /**
     * Attribute GdnIds: The list of gdn IDs.
     */
    public readonly attrGdnIds: ros.IResolvable;

    /**
     * Attribute GlobalDatabaseNetworks: The list of global database networks.
     */
    public readonly attrGlobalDatabaseNetworks: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GlobalDatabaseNetworksProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGlobalDatabaseNetworks = new RosGlobalDatabaseNetworks(this, id,  {
            dbClusterId: props.dbClusterId,
            gdnId: props.gdnId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGlobalDatabaseNetworks;
        this.attrGdnIds = rosGlobalDatabaseNetworks.attrGdnIds;
        this.attrGlobalDatabaseNetworks = rosGlobalDatabaseNetworks.attrGlobalDatabaseNetworks;
    }
}
