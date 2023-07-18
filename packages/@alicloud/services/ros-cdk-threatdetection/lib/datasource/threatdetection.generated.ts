// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export interface RosAntiBruteForceRulesProps {
}

/**
 * Determine whether the given properties match those of a `RosAntiBruteForceRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRulesProps`
 *
 * @returns the result of the validation.
 */
function RosAntiBruteForceRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosAntiBruteForceRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ThreatDetection::AntiBruteForceRules` resource
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ThreatDetection::AntiBruteForceRules` resource.
 */
// @ts-ignore TS6133
function rosAntiBruteForceRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAntiBruteForceRulesPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::ThreatDetection::AntiBruteForceRules`
 */
export class RosAntiBruteForceRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::AntiBruteForceRules";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    public readonly attrAntiBruteForceRuleIds: ros.IResolvable;

    /**
     * @Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    public readonly attrAntiBruteForceRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAntiBruteForceRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAntiBruteForceRuleIds = this.getAtt('AntiBruteForceRuleIds');
        this.attrAntiBruteForceRules = this.getAtt('AntiBruteForceRules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAntiBruteForceRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
