// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosNodesProps`
 *
 * @param properties - the TypeScript properties of a `RosNodesProps`
 *
 * @returns the result of the validation.
 */
function RosNodesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('hostNameSuffix', ros.validateString)(properties.hostNameSuffix));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('hostNamePrefix', ros.validateString)(properties.hostNamePrefix));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    return errors.wrap('supplied properties not correct for "RosNodesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EHPC::Nodes` resource
 *
 * @param properties - the TypeScript properties of a `RosNodesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EHPC::Nodes` resource.
 */
// @ts-ignore TS6133
function rosNodesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNodesPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      HostName: ros.stringToRosTemplate(properties.hostName),
      HostNamePrefix: ros.stringToRosTemplate(properties.hostNamePrefix),
      HostNameSuffix: ros.stringToRosTemplate(properties.hostNameSuffix),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      Role: ros.stringToRosTemplate(properties.role),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EHPC::Nodes`, which is used to query nodes in an Elastic High Performance Computing (E-HPC) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Nodes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
export class RosNodes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EHPC::Nodes";

    /**
     * @Attribute NodeIds: The list of node IDs.
     */
    public readonly attrNodeIds: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
     */
    public hostNamePrefix: string | ros.IResolvable | undefined;

    /**
     * @Property hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
     */
    public hostNameSuffix: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private IP address of the node.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property role: The type of the node. Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    public role: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNodesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNodes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNodeIds = this.getAtt('NodeIds');
        this.attrNodes = this.getAtt('Nodes');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.hostName = props.hostName;
        this.hostNamePrefix = props.hostNamePrefix;
        this.hostNameSuffix = props.hostNameSuffix;
        this.privateIpAddress = props.privateIpAddress;
        this.role = props.role;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            hostName: this.hostName,
            hostNamePrefix: this.hostNamePrefix,
            hostNameSuffix: this.hostNameSuffix,
            privateIpAddress: this.privateIpAddress,
            role: this.role,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNodesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
