import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './pvtz.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `ALIYUN::PVTZ::Rule`
 */
export interface RuleProps {
    /**
     * Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
    /**
     * Property forwardIp: The destination external server.
     */
    readonly forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ruleName: The name of the forwarding rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    readonly zoneName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::PVTZ::Rule`
 */
export declare class Rule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable;
    /**
     * Attribute ForwardIp: The information about each destination external server.
     */
    readonly attrForwardIp: ros.IResolvable;
    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * Attribute Type: The type of the forwarding rule.
     */
    readonly attrType: ros.IResolvable;
    /**
     * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PVTZ::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
