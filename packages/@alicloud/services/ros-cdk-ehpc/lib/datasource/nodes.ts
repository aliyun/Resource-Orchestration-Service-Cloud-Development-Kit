import * as ros from '@alicloud/ros-cdk-core';
import { RosNodes } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property role: The type of the node. Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    readonly role?: string | ros.IResolvable;
}

/**
 * Represents a `Nodes`.
 */
export interface INodes extends ros.IResource {
    readonly props: NodesProps;

    /**
     * Attribute NodeIds: The list of node IDs.
     */
    readonly attrNodeIds: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of nodes.
     */
    readonly attrNodes: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EHPC::Nodes`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNodes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export class Nodes extends ros.Resource implements INodes {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NodesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NodeIds: The list of node IDs.
     */
    public readonly attrNodeIds: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of nodes.
     */
    public readonly attrNodes: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NodesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNodes = new RosNodes(this, id,  {
            role: props.role,
            hostNameSuffix: props.hostNameSuffix,
            privateIpAddress: props.privateIpAddress,
            clusterId: props.clusterId,
            hostNamePrefix: props.hostNamePrefix,
            hostName: props.hostName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNodes;
        this.attrNodeIds = rosNodes.attrNodeIds;
        this.attrNodes = rosNodes.attrNodes;
    }
}
