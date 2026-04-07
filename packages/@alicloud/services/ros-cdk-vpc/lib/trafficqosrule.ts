import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficQosRule } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficQosRule as TrafficQosRuleProperty };

/**
 * Properties for defining a `TrafficQosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
 */
export interface TrafficQosRuleProps {

    /**
     * Property priority: The priority of the QoS rule. Valid values: 1 to 9000. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * Property protocol: QoS rule protocol type, value:
     * - **ALL**
     * - **ICMP(IPv4)**
     * - **ICMPv6(IPv6)* *
     * - **TCP**
     * - **UDP**
     * - **GRE**
     * - **SSH**
     * - **Telnet**
     * - **HTTP**
     * - **HTTPS**
     * - **MS SQL**
     * - **Oracle**
     * - **MySql**
     * - **RDP**
     * - **PostgreSQL**
     * - **Redis**.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * Property qosId: The QoS policy ID.
     */
    readonly qosId: string | ros.IResolvable;

    /**
     * Property queueId: The QoS queue ID.
     */
    readonly queueId: string | ros.IResolvable;

    /**
     * Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
     * > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
     */
    readonly dstCidr?: string | ros.IResolvable;

    /**
     * Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
     * > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
     */
    readonly dstIpv6Cidr?: string | ros.IResolvable;

    /**
     * Property dstPortRange: QoS rule traffic matches the destination port number range. Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types. The values are as follows:
     * - **ALL**:-1\/-1, not editable.
     * - **ICMP(IPv4)**:-1\/-1, non-editable.
     * - **ICMPv6(IPv6)**:-1\/-1, non-editable.
     * - **TCP**:-1\/-1, editable.
     * - **UDP**:-1\/-1, editable.
     * - **GRE**:-1\/-1, not editable.
     * - **SSH**:22\/22, not editable.
     * - **Telnet**:23\/23, not editable.
     * - **HTTP**:80\/80, non-editable.
     * - **HTTPS**:443\/443, which cannot be edited.
     * - **MS SQL**:1443\/1443, which cannot be edited.
     * - **Oracle**:1521\/1521, non-editable.
     * - **MySql**:3306\/3306, non-editable.
     * - **RDP**:3389\/3389, non-editable.
     * - **PostgreSQL**:5432\/5432, non-editable.
     * - **Redis**:6379\/6379, non-editable.
     */
    readonly dstPortRange?: string | ros.IResolvable;

    /**
     * Property matchDscp: The DSCP value that matches the QoS rule traffic. Valid values: 0 to 63. If no value is matched, the value is -1.
     */
    readonly matchDscp?: number | ros.IResolvable;

    /**
     * Property remarkingDscp: The new DSCP value. Valid values: 0 to 63. If you do not change the value, set the value to -1.
     */
    readonly remarkingDscp?: number | ros.IResolvable;

    /**
     * Property ruleDescription: The description of the QoS rule.
     * The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
     */
    readonly ruleDescription?: string | ros.IResolvable;

    /**
     * Property ruleName: The name of the QoS rule.
     * The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
     * > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
     */
    readonly srcCidr?: string | ros.IResolvable;

    /**
     * Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
     * > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
     */
    readonly srcIpv6Cidr?: string | ros.IResolvable;

    /**
     * Property srcPortRange: The source port number of the QoS rule traffic matching. The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
     */
    readonly srcPortRange?: string | ros.IResolvable;
}

/**
 * Represents a `TrafficQosRule`.
 */
export interface ITrafficQosRule extends ros.IResource {
    readonly props: TrafficQosRuleProps;

    /**
     * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
     */
    readonly attrDstCidr: ros.IResolvable | string;

    /**
     * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
     */
    readonly attrDstIpv6Cidr: ros.IResolvable | string;

    /**
     * Attribute DstPortRange: QoS rule traffic matches the destination port number range. Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
     */
    readonly attrDstPortRange: ros.IResolvable | string;

    /**
     * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule. Value range: **0** to **63**. If not, the value is -1.
     */
    readonly attrMatchDscp: ros.IResolvable | string;

    /**
     * Attribute Priority: QoS rule priority. Value range: **1** to **9000**. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
     */
    readonly attrPriority: ros.IResolvable | string;

    /**
     * Attribute Protocol: QoS rule protocol type.
     */
    readonly attrProtocol: ros.IResolvable | string;

    /**
     * Attribute QosId: The QoS policy ID.
     */
    readonly attrQosId: ros.IResolvable | string;

    /**
     * Attribute QueueId: The QoS queue ID.
     */
    readonly attrQueueId: ros.IResolvable | string;

    /**
     * Attribute RemarkingDscp: Modify The DSCP value in the flow. Value range: **0** to **63**. If the value is not modified, the value is -1.
     */
    readonly attrRemarkingDscp: ros.IResolvable | string;

    /**
     * Attribute RuleDescription: The description of the QoS rule.
     */
    readonly attrRuleDescription: ros.IResolvable | string;

    /**
     * Attribute RuleId: The ID of the QoS rule.
     */
    readonly attrRuleId: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the QoS rule.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
     */
    readonly attrSrcCidr: ros.IResolvable | string;

    /**
     * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
     */
    readonly attrSrcIpv6Cidr: ros.IResolvable | string;

    /**
     * Attribute SrcPortRange: The source port number of the QoS rule traffic matching. The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
     */
    readonly attrSrcPortRange: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficQosRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficQosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
 */
export class TrafficQosRule extends ros.Resource implements ITrafficQosRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrafficQosRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
     */
    public readonly attrDstCidr: ros.IResolvable | string;

    /**
     * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
     */
    public readonly attrDstIpv6Cidr: ros.IResolvable | string;

    /**
     * Attribute DstPortRange: QoS rule traffic matches the destination port number range. Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
     */
    public readonly attrDstPortRange: ros.IResolvable | string;

    /**
     * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule. Value range: **0** to **63**. If not, the value is -1.
     */
    public readonly attrMatchDscp: ros.IResolvable | string;

    /**
     * Attribute Priority: QoS rule priority. Value range: **1** to **9000**. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
     */
    public readonly attrPriority: ros.IResolvable | string;

    /**
     * Attribute Protocol: QoS rule protocol type.
     */
    public readonly attrProtocol: ros.IResolvable | string;

    /**
     * Attribute QosId: The QoS policy ID.
     */
    public readonly attrQosId: ros.IResolvable | string;

    /**
     * Attribute QueueId: The QoS queue ID.
     */
    public readonly attrQueueId: ros.IResolvable | string;

    /**
     * Attribute RemarkingDscp: Modify The DSCP value in the flow. Value range: **0** to **63**. If the value is not modified, the value is -1.
     */
    public readonly attrRemarkingDscp: ros.IResolvable | string;

    /**
     * Attribute RuleDescription: The description of the QoS rule.
     */
    public readonly attrRuleDescription: ros.IResolvable | string;

    /**
     * Attribute RuleId: The ID of the QoS rule.
     */
    public readonly attrRuleId: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the QoS rule.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
     */
    public readonly attrSrcCidr: ros.IResolvable | string;

    /**
     * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
     */
    public readonly attrSrcIpv6Cidr: ros.IResolvable | string;

    /**
     * Attribute SrcPortRange: The source port number of the QoS rule traffic matching. The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
     */
    public readonly attrSrcPortRange: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficQosRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficQosRule = new RosTrafficQosRule(this, id,  {
            ruleDescription: props.ruleDescription,
            dstIpv6Cidr: props.dstIpv6Cidr,
            matchDscp: props.matchDscp,
            priority: props.priority,
            queueId: props.queueId,
            srcIpv6Cidr: props.srcIpv6Cidr,
            dstPortRange: props.dstPortRange,
            remarkingDscp: props.remarkingDscp,
            srcCidr: props.srcCidr,
            qosId: props.qosId,
            protocol: props.protocol,
            srcPortRange: props.srcPortRange,
            dstCidr: props.dstCidr,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficQosRule;
        this.attrDstCidr = rosTrafficQosRule.attrDstCidr;
        this.attrDstIpv6Cidr = rosTrafficQosRule.attrDstIpv6Cidr;
        this.attrDstPortRange = rosTrafficQosRule.attrDstPortRange;
        this.attrMatchDscp = rosTrafficQosRule.attrMatchDscp;
        this.attrPriority = rosTrafficQosRule.attrPriority;
        this.attrProtocol = rosTrafficQosRule.attrProtocol;
        this.attrQosId = rosTrafficQosRule.attrQosId;
        this.attrQueueId = rosTrafficQosRule.attrQueueId;
        this.attrRemarkingDscp = rosTrafficQosRule.attrRemarkingDscp;
        this.attrRuleDescription = rosTrafficQosRule.attrRuleDescription;
        this.attrRuleId = rosTrafficQosRule.attrRuleId;
        this.attrRuleName = rosTrafficQosRule.attrRuleName;
        this.attrSrcCidr = rosTrafficQosRule.attrSrcCidr;
        this.attrSrcIpv6Cidr = rosTrafficQosRule.attrSrcIpv6Cidr;
        this.attrSrcPortRange = rosTrafficQosRule.attrSrcPortRange;
    }
}
