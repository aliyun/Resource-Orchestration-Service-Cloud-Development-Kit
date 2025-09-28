import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosOriginInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export interface RosOriginInstanceProps {
    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    readonly edition: string | ros.IResolvable;
    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    readonly protectionMode: string | ros.IResolvable;
    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    readonly cleanBandwidth?: number | ros.IResolvable;
    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    readonly enableLog?: boolean | ros.IResolvable;
    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    readonly ipAddresses?: number | ros.IResolvable;
    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    readonly networkProtocol?: string | ros.IResolvable;
    /**
     * @Property period: The period of the instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosOriginInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoS::OriginInstance`, which is used to create an Anti-DDoS Origin instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export declare class RosOriginInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoS::OriginInstance";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    edition: string | ros.IResolvable;
    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    protectionMode: string | ros.IResolvable;
    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    cleanBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    enableLog: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    ipAddresses: number | ros.IResolvable | undefined;
    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    networkProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property period: The period of the instance.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosOriginInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosOriginInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export interface RosPolicyProps {
    /**
     * @Property policyName: The name of the policy.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property type: The type of the policy. Values:
     * - default: Indicates the default protection strategy.
     * - l3: Indicates the IP protection strategy.
     * - l4: Indicates the port protection strategy.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property actionType: Operation type
     * ActionType = 10 Modify policy name
     * ActionType = 11 Modify whitelist and whitelist timeout
     * ActionType = 12 modify add white high anti-back source network segment switch
     * ActionType = 13 Modify the switch to discard ICMP
     * ActionType = 20 Add black and white list
     * ActionType = 21 Delete whitelist and whitelist
     * ActionType = 22 Clear White List
     * ActionType = 23 Clear the blacklist
     * ActionType = 30 Modify Smart Switch
     * ActionType = 31 Modify regional ban
     * ActionType = 32 Modify Source Speed Limit Black
     * ActionType = 34 Modifying Reflective Port Filtering
     * ActionType = 40,41,42 Create, delete, and modify Port rules
     * ActionType = 50,51,52 Create, delete, and modify fingerprint rules
     * ActionType = 60 switch L4 protection
     * ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    readonly actionType?: string | ros.IResolvable;
    /**
     * @Property blackIpList: Blacklist list.
     */
    readonly blackIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property content: Configuration Content.
     */
    readonly content?: RosPolicy.ContentProperty | ros.IResolvable;
    /**
     * @Property whiteIpList: Whitelist IP list.
     */
    readonly whiteIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoS::Policy`, which is used to create a mitigation policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export declare class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoS::Policy";
    /**
     * @Attribute Content: Configuration Content.
     */
    readonly attrContent: ros.IResolvable;
    /**
     * @Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * @Attribute PolicyName: The name of the policy.
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * @Attribute Type: The type of the policy.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: The name of the policy.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property type: The type of the policy. Values:
     * - default: Indicates the default protection strategy.
     * - l3: Indicates the IP protection strategy.
     * - l4: Indicates the port protection strategy.
     */
    type: string | ros.IResolvable;
    /**
     * @Property actionType: Operation type
     * ActionType = 10 Modify policy name
     * ActionType = 11 Modify whitelist and whitelist timeout
     * ActionType = 12 modify add white high anti-back source network segment switch
     * ActionType = 13 Modify the switch to discard ICMP
     * ActionType = 20 Add black and white list
     * ActionType = 21 Delete whitelist and whitelist
     * ActionType = 22 Clear White List
     * ActionType = 23 Clear the blacklist
     * ActionType = 30 Modify Smart Switch
     * ActionType = 31 Modify regional ban
     * ActionType = 32 Modify Source Speed Limit Black
     * ActionType = 34 Modifying Reflective Port Filtering
     * ActionType = 40,41,42 Create, delete, and modify Port rules
     * ActionType = 50,51,52 Create, delete, and modify fingerprint rules
     * ActionType = 60 switch L4 protection
     * ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    actionType: string | ros.IResolvable | undefined;
    /**
     * @Property blackIpList: Blacklist list.
     */
    blackIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property content: Configuration Content.
     */
    content: RosPolicy.ContentProperty | ros.IResolvable | undefined;
    /**
     * @Property whiteIpList: Whitelist IP list.
     */
    whiteIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface ConditionListProperty {
        /**
         * @Property position: Position to start matching, starting from 0.
         */
        readonly position: number | ros.IResolvable;
        /**
         * @Property arg: Matching target character.
         */
        readonly arg: string | ros.IResolvable;
        /**
         * @Property depth: Depth of Matching.
         */
        readonly depth: number | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface ContentProperty {
        /**
         * @Property whitenGfbrNets: Add white high protection back to source network segment switch.
         */
        readonly whitenGfbrNets?: boolean | ros.IResolvable;
        /**
         * @Property portRuleList: Port Rule List.
         */
        readonly portRuleList?: Array<RosPolicy.PortRuleListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionBlockCountryList: List of Regional Banned Countries.
         */
        readonly regionBlockCountryList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionBlockProvinceList: List of Prohibited Provinces by Region.
         */
        readonly regionBlockProvinceList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fingerPrintRuleList: Fingerprint Rules.
         */
        readonly fingerPrintRuleList?: Array<RosPolicy.FingerPrintRuleListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sourceLimit: Do not fill in when the source speed limit is deleted.
         */
        readonly sourceLimit?: RosPolicy.SourceLimitProperty | ros.IResolvable;
        /**
         * @Property enableDefense: Whether to enable L4 protection.
         */
        readonly enableDefense?: boolean | ros.IResolvable;
        /**
         * @Property enableIntelligence: Whether the intelligent switch is on.
         */
        readonly enableIntelligence?: boolean | ros.IResolvable;
        /**
         * @Property sourceBlockList: Source pull Black.
         */
        readonly sourceBlockList?: Array<RosPolicy.SourceBlockListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property enableDropIcmp: Switch to discard ICMP.
         */
        readonly enableDropIcmp?: boolean | ros.IResolvable;
        /**
         * @Property intelligenceLevel: Smart mode. Valid values: weak, hard, and default.
         */
        readonly intelligenceLevel?: string | ros.IResolvable;
        /**
         * @Property reflectBlockUdpPortList: Reflective port filtering.
         */
        readonly reflectBlockUdpPortList?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property blackIpListExpireAt: Blacklist and whitelist timeout.
         */
        readonly blackIpListExpireAt?: number | ros.IResolvable;
        /**
         * @Property layer4RuleList: L4 protection rules.
         */
        readonly layer4RuleList?: Array<RosPolicy.Layer4RuleListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface FingerPrintRuleListProperty {
        /**
         * @Property srcPortEnd: Source Port end 0-65535.
         */
        readonly srcPortEnd: number | ros.IResolvable;
        /**
         * @Property seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
         */
        readonly seqNo: number | ros.IResolvable;
        /**
         * @Property srcPortStart: Source port start 0-65535.
         */
        readonly srcPortStart: number | ros.IResolvable;
        /**
         * @Property fingerPrintRuleId: The UUID of the rule is required to be deleted and modified, and it is not required to be created.
         */
        readonly fingerPrintRuleId?: string | ros.IResolvable;
        /**
         * @Property rateValue: Speed limit value 1-100000.
         */
        readonly rateValue?: number | ros.IResolvable;
        /**
         * @Property payloadBytes: Load match, hexadecimal string; Similar to 'abcd'.
         */
        readonly payloadBytes?: string | ros.IResolvable;
        /**
         * @Property dstPortStart: Destination Port start 0-65535.
         */
        readonly dstPortStart: number | ros.IResolvable;
        /**
         * @Property matchAction: Actions. Currently, drop, accept, session_rate, and ip_rate are supported.
         */
        readonly matchAction: string | ros.IResolvable;
        /**
         * @Property offset: Offset.
         */
        readonly offset?: number | ros.IResolvable;
        /**
         * @Property maxPktLen: Maximum bag length.
         */
        readonly maxPktLen: number | ros.IResolvable;
        /**
         * @Property minPktLen: Minimum package length.
         */
        readonly minPktLen: number | ros.IResolvable;
        /**
         * @Property dstPortEnd: End of destination port 0-65535.
         */
        readonly dstPortEnd: number | ros.IResolvable;
        /**
         * @Property protocol: Protocol, tcp or udp.
         */
        readonly protocol: string | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface Layer4RuleListProperty {
        /**
         * @Property action: 1 for observation 2 for blocking.
         */
        readonly action: string | ros.IResolvable;
        /**
         * @Property conditionList: Matching Condition.
         */
        readonly conditionList: Array<RosPolicy.ConditionListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property priority: 1-100, priority, the lower the number, the higher the priority.
         */
        readonly priority: number | ros.IResolvable;
        /**
         * @Property method: Char indicates a string match hex match.
         */
        readonly method: string | ros.IResolvable;
        /**
         * @Property limited: <2048, length limit, 0 means no limit.
         */
        readonly limited: number | ros.IResolvable;
        /**
         * @Property name: Rule Name.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property match: 0 indicates that the condition is not met 1 indicates that the condition is met.
         */
        readonly match: string | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface PortRuleListProperty {
        /**
         * @Property srcPortEnd: Source Port end 0-65535.
         */
        readonly srcPortEnd: number | ros.IResolvable;
        /**
         * @Property seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
         */
        readonly seqNo: number | ros.IResolvable;
        /**
         * @Property srcPortStart: Source port start 0-65535.
         */
        readonly srcPortStart: number | ros.IResolvable;
        /**
         * @Property portRuleId: Rule UUID is required to be deleted and modified, and is not required to be created.
         */
        readonly portRuleId?: string | ros.IResolvable;
        /**
         * @Property dstPortStart: Destination Port start 0-65535.
         */
        readonly dstPortStart: number | ros.IResolvable;
        /**
         * @Property dstPortEnd: End of destination port 0-65535.
         */
        readonly dstPortEnd: number | ros.IResolvable;
        /**
         * @Property protocol: Protocol, tcp or udp.
         */
        readonly protocol: string | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface SourceBlockListProperty {
        /**
         * @Property type: The type of black is optional source PPS speed limit Black: 3 source BPS speed limit Black: 4 SYNPPS speed limit Black: 5 SYNBPS speed limit Black: 6.
         */
        readonly type: number | ros.IResolvable;
        /**
         * @Property exceedLimitTimes: The number of times the speed limit is exceeded in a statistical period ranges from 1 to 1200.
         */
        readonly exceedLimitTimes: number | ros.IResolvable;
        /**
         * @Property everySeconds: The time (unit second) for automatically releasing the black after triggering the speed limit is 60~2592000.
         */
        readonly everySeconds: number | ros.IResolvable;
        /**
         * @Property blockExpireSeconds: Statistical cycle range 60-1200.
         */
        readonly blockExpireSeconds: number | ros.IResolvable;
    }
}
export declare namespace RosPolicy {
    /**
     * @stability external
     */
    interface SourceLimitProperty {
        /**
         * @Property pps: Pps range 32~500000.
         */
        readonly pps?: number | ros.IResolvable;
        /**
         * @Property synBps: SynBps range 1024~268435456.
         */
        readonly synBps?: number | ros.IResolvable;
        /**
         * @Property bps: bps range 1024~268435456.
         */
        readonly bps?: number | ros.IResolvable;
        /**
         * @Property synPps: SynPps range 1~100000.
         */
        readonly synPps?: number | ros.IResolvable;
    }
}
