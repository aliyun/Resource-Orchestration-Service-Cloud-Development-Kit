import * as ros from '@alicloud/ros-cdk-core';
import { RosHoneypotNode } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHoneypotNode as HoneypotNodeProperty };

/**
 * Properties for defining a `HoneypotNode`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export interface HoneypotNodeProps {

    /**
     * Property nodeName: The name of the management node.
     */
    readonly nodeName: string | ros.IResolvable;

    /**
     * Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
     * *   **true**: allows honeypots to access the Internet.
     * *   **false**: does not allow honeypots to access the Internet.
     */
    readonly allowHoneypotAccessInternet?: boolean | ros.IResolvable;

    /**
     * Property availableProbeNum: The number of available probes.
     */
    readonly availableProbeNum?: number | ros.IResolvable;

    /**
     * Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    readonly securityGroupProbeIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `HoneypotNode`.
 */
export interface IHoneypotNode extends ros.IResource {
    readonly props: HoneypotNodeProps;

    /**
     * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    readonly attrAllowHoneypotAccessInternet: ros.IResolvable | string;

    /**
     * Attribute AvailableProbeNum: The number of available probes.
     */
    readonly attrAvailableProbeNum: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the management node was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute NodeId: Honeypot management node id.
     */
    readonly attrNodeId: ros.IResolvable | string;

    /**
     * Attribute NodeName: The name of the management node.
     */
    readonly attrNodeName: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    readonly attrSecurityGroupProbeIpList: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::HoneypotNode`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHoneypotNode`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export class HoneypotNode extends ros.Resource implements IHoneypotNode {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HoneypotNodeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    public readonly attrAllowHoneypotAccessInternet: ros.IResolvable | string;

    /**
     * Attribute AvailableProbeNum: The number of available probes.
     */
    public readonly attrAvailableProbeNum: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the management node was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute NodeId: Honeypot management node id.
     */
    public readonly attrNodeId: ros.IResolvable | string;

    /**
     * Attribute NodeName: The name of the management node.
     */
    public readonly attrNodeName: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    public readonly attrSecurityGroupProbeIpList: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HoneypotNodeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHoneypotNode = new RosHoneypotNode(this, id,  {
            nodeName: props.nodeName,
            availableProbeNum: props.availableProbeNum,
            allowHoneypotAccessInternet: props.allowHoneypotAccessInternet,
            securityGroupProbeIpList: props.securityGroupProbeIpList,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHoneypotNode;
        this.attrAllowHoneypotAccessInternet = rosHoneypotNode.attrAllowHoneypotAccessInternet;
        this.attrAvailableProbeNum = rosHoneypotNode.attrAvailableProbeNum;
        this.attrCreateTime = rosHoneypotNode.attrCreateTime;
        this.attrNodeId = rosHoneypotNode.attrNodeId;
        this.attrNodeName = rosHoneypotNode.attrNodeName;
        this.attrSecurityGroupProbeIpList = rosHoneypotNode.attrSecurityGroupProbeIpList;
    }
}
