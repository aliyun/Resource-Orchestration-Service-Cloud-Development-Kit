import * as ros from '@alicloud/ros-cdk-core';
import { RosNodes } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNodes as NodesProperty };

/**
 * Properties for defining a `DATASOURCE::EHPC::Nodes`
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
 * A ROS resource type:  `DATASOURCE::EHPC::Nodes`
 */
export class Nodes extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NodeIds: The list of node IDs.
     */
    public readonly attrNodeIds: ros.IResolvable;

    /**
     * Attribute Nodes: The list of nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::EHPC::Nodes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NodesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNodes = new RosNodes(this, id,  {
            role: props.role,
            hostNameSuffix: props.hostNameSuffix,
            privateIpAddress: props.privateIpAddress,
            clusterId: props.clusterId,
            hostNamePrefix: props.hostNamePrefix,
            hostName: props.hostName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNodes;
        this.attrNodeIds = rosNodes.attrNodeIds;
        this.attrNodes = rosNodes.attrNodes;
    }
}
