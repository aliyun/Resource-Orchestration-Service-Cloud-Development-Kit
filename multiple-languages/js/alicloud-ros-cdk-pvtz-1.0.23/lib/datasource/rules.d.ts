import * as ros from '@alicloud/ros-cdk-core';
import { RosRules } from './pvtz.generated';
export { RosRules as RulesProperty };
/**
 * Properties for defining a `Rules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
 */
export interface RulesProps {
    /**
     * Property endpointId: EndpointId
     */
    readonly endpointId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PVTZ::Rules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
 */
export declare class Rules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable;
    /**
     * Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: RulesProps, enableResourcePropertyConstraint?: boolean);
}
