import * as ros from '@alicloud/ros-cdk-core';
import { RosSchedulerRule } from './ddospro.generated';
export { RosSchedulerRule as SchedulerRuleProperty };
/**
 * Properties for defining a `SchedulerRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
export interface SchedulerRuleProps {
    /**
     * Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * Property rules: The details of the scheduling rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter:
     * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
     * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
     * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
     * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
     * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
     */
    readonly rules: string | ros.IResolvable;
    /**
     * Property ruleType: The type of the custom defense rule. Valid values:
     * 2: tiered protection
     * 3: network acceleration
     * 5: CDN interaction
     * 6: cloud service interaction
     * 8: secure acceleration
     */
    readonly ruleType: number | ros.IResolvable;
    /**
     * Property param: The details of the CDN interaction rule. This parameter is a JSON string. The following list describes the fields in the value of the parameter:
     * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
     * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
     */
    readonly param?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::SchedulerRule`, which is used to create a scheduling rule for Sec-Traffic Manager.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSchedulerRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
export declare class SchedulerRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SchedulerRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SchedulerRuleProps, enableResourcePropertyConstraint?: boolean);
}
