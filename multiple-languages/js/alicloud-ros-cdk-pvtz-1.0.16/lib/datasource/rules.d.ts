import * as ros from '@alicloud/ros-cdk-core';
import { RosRules } from './pvtz.generated';
export { RosRules as RulesProperty };
/**
 * Properties for defining a `DATASOURCE::PVTZ::Rules`
 */
export interface RulesProps {
    /**
     * Property endpointId: EndpointId
     */
    readonly endpointId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::PVTZ::Rules`
 */
export declare class Rules extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable;
    /**
     * Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::PVTZ::Rules`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: RulesProps, enableResourcePropertyConstraint?: boolean);
}
