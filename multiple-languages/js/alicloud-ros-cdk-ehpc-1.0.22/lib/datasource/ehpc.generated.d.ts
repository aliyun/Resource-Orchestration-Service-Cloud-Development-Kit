import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosNodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export interface RosNodesProps {
    /**
     * @Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
     */
    readonly hostNamePrefix?: string | ros.IResolvable;
    /**
     * @Property hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
     */
    readonly hostNameSuffix?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The private IP address of the node.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property role: The type of the node. Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    readonly role?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EHPC::Nodes`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Nodes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export declare class RosNodes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EHPC::Nodes";
    /**
     * @Attribute NodeIds: The list of node IDs.
     */
    readonly attrNodeIds: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of nodes.
     */
    readonly attrNodes: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
     */
    hostNamePrefix: string | ros.IResolvable | undefined;
    /**
     * @Property hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
     */
    hostNameSuffix: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private IP address of the node.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property role: The type of the node. Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    role: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNodesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
