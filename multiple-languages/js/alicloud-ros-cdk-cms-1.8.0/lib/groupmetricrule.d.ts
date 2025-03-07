import * as ros from '@alicloud/ros-cdk-core';
import { RosGroupMetricRule } from './cms.generated';
export { RosGroupMetricRule as GroupMetricRuleProperty };
/**
 * Properties for defining a `GroupMetricRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
 */
export interface GroupMetricRuleProps {
    /**
     * Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    readonly category: string | ros.IResolvable;
    /**
     * Property escalations: undefined
     */
    readonly escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * Property groupId: The ID of application group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * Property dimensions: The expended resource dimensions.
     */
    readonly dimensions?: string | ros.IResolvable;
    /**
     * Property effectiveInterval: The period when the alert rule is effective.
     */
    readonly effectiveInterval?: string | ros.IResolvable;
    /**
     * Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string | ros.IResolvable;
    /**
     * Property interval: The detection period of alerts.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string | ros.IResolvable;
    /**
     * Property period: The aggregation period. Unite: second.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    readonly silenceTime?: number | ros.IResolvable;
    /**
     * Property webhook: The URL of the callback triggered when an alert occurs.
     */
    readonly webhook?: string | ros.IResolvable;
}
/**
 * Represents a `GroupMetricRule`.
 */
export interface IGroupMetricRule extends ros.IResource {
    readonly props: GroupMetricRuleProps;
    /**
     * Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::GroupMetricRule`, which is used to create an alert rule for an application group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroupMetricRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
 */
export declare class GroupMetricRule extends ros.Resource implements IGroupMetricRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GroupMetricRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupMetricRuleProps, enableResourcePropertyConstraint?: boolean);
}
