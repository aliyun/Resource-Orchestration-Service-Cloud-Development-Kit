import * as ros from '@alicloud/ros-cdk-core';
import { RosNodes } from './ehpc.generated';
export { RosNodes as NodesProperty };
/**
 * Properties for defining a `Nodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export interface NodesProps {
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * Property hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
     */
    readonly hostNamePrefix?: string | ros.IResolvable;
    /**
     * Property hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
     */
    readonly hostNameSuffix?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: The private IP address of the node.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property role: The type of the node. Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    readonly role?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EHPC::Nodes`, which is used to query nodes in an Elastic High Performance Computing (E-HPC) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNodes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export declare class Nodes extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NodesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NodeIds: The list of node IDs.
     */
    readonly attrNodeIds: ros.IResolvable;
    /**
     * Attribute Nodes: The list of nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NodesProps, enableResourcePropertyConstraint?: boolean);
}
