import * as ros from '@alicloud/ros-cdk-core';
import { RosAntiBruteForceRules } from './threatdetection.generated';
export { RosAntiBruteForceRules as AntiBruteForceRulesProperty };
/**
 * Properties for defining a `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export interface AntiBruteForceRulesProps {
}
/**
 * A ROS resource type:  `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export declare class AntiBruteForceRules extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    readonly attrAntiBruteForceRuleIds: ros.IResolvable;
    /**
     * Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    readonly attrAntiBruteForceRules: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AntiBruteForceRulesProps, enableResourcePropertyConstraint?: boolean);
}
