import * as ros from '@alicloud/ros-cdk-core';
import { RosGlobalDatabaseNetwork } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGlobalDatabaseNetwork as GlobalDatabaseNetworkProperty };

/**
 * Properties for defining a `GlobalDatabaseNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
 */
export interface GlobalDatabaseNetworkProps {

    /**
     * Property gdnId: The ID of the GDN.
     */
    readonly gdnId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `GlobalDatabaseNetwork`.
 */
export interface IGlobalDatabaseNetwork extends ros.IResource {
    readonly props: GlobalDatabaseNetworkProps;

    /**
     * Attribute Connections: The information about the connection to the cluster.
     */
    readonly attrConnections: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time at which the GDN was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DbClusters: The clusters that are included in the GDN.
     */
    readonly attrDbClusters: ros.IResolvable | string;

    /**
     * Attribute DbType: The type of the database engine. Only MySQL is supported.
     */
    readonly attrDbType: ros.IResolvable | string;

    /**
     * Attribute DbVersion: The version of the database engine. Only version 8.0 is supported.
     */
    readonly attrDbVersion: ros.IResolvable | string;

    /**
     * Attribute GdnDescription: The description of the GDN. The description must meet the following requirements:
It cannot start with http:// or https://.
It must start with a letter.
It can contain letters, digits, underscores (_), and hyphens (-).
It must be 2 to 126 characters in length.
     */
    readonly attrGdnDescription: ros.IResolvable | string;

    /**
     * Attribute GdnId: The ID of the GDN.
     */
    readonly attrGdnId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetwork`, which is used to query the details of a Global Database Network (GDN) within the current Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalDatabaseNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
 */
export class GlobalDatabaseNetwork extends ros.Resource implements IGlobalDatabaseNetwork {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GlobalDatabaseNetworkProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Connections: The information about the connection to the cluster.
     */
    public readonly attrConnections: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time at which the GDN was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DbClusters: The clusters that are included in the GDN.
     */
    public readonly attrDbClusters: ros.IResolvable | string;

    /**
     * Attribute DbType: The type of the database engine. Only MySQL is supported.
     */
    public readonly attrDbType: ros.IResolvable | string;

    /**
     * Attribute DbVersion: The version of the database engine. Only version 8.0 is supported.
     */
    public readonly attrDbVersion: ros.IResolvable | string;

    /**
     * Attribute GdnDescription: The description of the GDN. The description must meet the following requirements:
It cannot start with http:// or https://.
It must start with a letter.
It can contain letters, digits, underscores (_), and hyphens (-).
It must be 2 to 126 characters in length.
     */
    public readonly attrGdnDescription: ros.IResolvable | string;

    /**
     * Attribute GdnId: The ID of the GDN.
     */
    public readonly attrGdnId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GlobalDatabaseNetworkProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGlobalDatabaseNetwork = new RosGlobalDatabaseNetwork(this, id,  {
            gdnId: props.gdnId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
