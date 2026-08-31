import * as ros from '@alicloud/ros-cdk-core';
import { RosAntiBruteForceRules } from './threatdetection.generated';
export { RosAntiBruteForceRules as AntiBruteForceRulesProperty };
/**
 * Properties for defining a `AntiBruteForceRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export interface AntiBruteForceRulesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `AntiBruteForceRules`.
 */
export interface IAntiBruteForceRules extends ros.IResource {
    readonly props: AntiBruteForceRulesProps;
    /**
     * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    readonly attrAntiBruteForceRuleIds: ros.IResolvable | string;
    /**
     * Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    readonly attrAntiBruteForceRules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRules`, which is used to query the basic information about defense rules against brute-force attacks.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAntiBruteForceRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export declare class AntiBruteForceRules extends ros.Resource implements IAntiBruteForceRules {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AntiBruteForceRulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    readonly attrAntiBruteForceRuleIds: ros.IResolvable | string;
    /**
     * Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    readonly attrAntiBruteForceRules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AntiBruteForceRulesProps, enableResourcePropertyConstraint?: boolean);
}
