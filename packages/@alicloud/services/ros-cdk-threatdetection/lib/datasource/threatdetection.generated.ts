// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAntiBruteForceRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AntiBruteForceRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export class RosAntiBruteForceRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::AntiBruteForceRules";

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

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceId: The first ID of the resource.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ThreatDetection::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ThreatDetection::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ThreatDetection::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::Instances";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The first ID of the resource.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
