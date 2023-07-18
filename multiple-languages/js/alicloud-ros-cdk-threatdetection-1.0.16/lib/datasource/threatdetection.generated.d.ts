import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export interface RosAntiBruteForceRulesProps {
}
/**
 * A ROS template type:  `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export declare class RosAntiBruteForceRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::AntiBruteForceRules";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    readonly attrAntiBruteForceRuleIds: ros.IResolvable;
    /**
     * @Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    readonly attrAntiBruteForceRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
