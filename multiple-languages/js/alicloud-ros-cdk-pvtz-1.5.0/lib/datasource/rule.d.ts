import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './pvtz.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
 */
export interface RuleProps {
    /**
     * Property ruleId: The ID of the forwarding rule.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PVTZ::Rule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
 */
export declare class Rule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the forwarding rule was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EndpointId: The endpoint ID.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * Attribute EndpointName: The endpoint name.
     */
    readonly attrEndpointName: ros.IResolvable;
    /**
     * Attribute ForwardIp: The destination IP address.
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
     * Attribute Vpcs: The virtual private clouds (VPCs) that are associated with the forwarding rule.
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * Attribute ZoneName: The name of the forward zone.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
