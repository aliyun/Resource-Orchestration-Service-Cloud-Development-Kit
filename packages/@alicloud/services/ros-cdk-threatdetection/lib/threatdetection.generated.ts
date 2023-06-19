// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
export interface RosAntiBruteForceRuleProps {

    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    readonly antiBruteForceRuleName: string | ros.IResolvable;

    /**
     * @Property failCount: The maximum number of failed logon attempts from an account. 
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    readonly failCount: number | ros.IResolvable;

    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    readonly forbiddenTime: number | ros.IResolvable;

    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    readonly span: number | ros.IResolvable;

    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    readonly uuidList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule. 
     * Valid values:
     * - true: yes
     * - false: no
     */
    readonly defaultRule?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAntiBruteForceRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAntiBruteForceRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultRule', ros.validateBoolean)(properties.defaultRule));
    errors.collect(ros.propertyValidator('antiBruteForceRuleName', ros.requiredValidator)(properties.antiBruteForceRuleName));
    errors.collect(ros.propertyValidator('antiBruteForceRuleName', ros.validateString)(properties.antiBruteForceRuleName));
    errors.collect(ros.propertyValidator('forbiddenTime', ros.requiredValidator)(properties.forbiddenTime));
    if(properties.forbiddenTime && (typeof properties.forbiddenTime) !== 'object') {
        errors.collect(ros.propertyValidator('forbiddenTime', ros.validateAllowedValues)({
          data: properties.forbiddenTime,
          allowedValues: [5,15,30,60,120,360,720,1440,10080,52560000],
        }));
    }
    errors.collect(ros.propertyValidator('forbiddenTime', ros.validateNumber)(properties.forbiddenTime));
    errors.collect(ros.propertyValidator('uuidList', ros.requiredValidator)(properties.uuidList));
    errors.collect(ros.propertyValidator('uuidList', ros.listValidator(ros.validateString))(properties.uuidList));
    errors.collect(ros.propertyValidator('failCount', ros.requiredValidator)(properties.failCount));
    if(properties.failCount && (typeof properties.failCount) !== 'object') {
        errors.collect(ros.propertyValidator('failCount', ros.validateAllowedValues)({
          data: properties.failCount,
          allowedValues: [2,3,4,5,10,50,80,100],
        }));
    }
    errors.collect(ros.propertyValidator('failCount', ros.validateNumber)(properties.failCount));
    errors.collect(ros.propertyValidator('span', ros.requiredValidator)(properties.span));
    if(properties.span && (typeof properties.span) !== 'object') {
        errors.collect(ros.propertyValidator('span', ros.validateAllowedValues)({
          data: properties.span,
          allowedValues: [1,2,5,10,15],
        }));
    }
    errors.collect(ros.propertyValidator('span', ros.validateNumber)(properties.span));
    return errors.wrap('supplied properties not correct for "RosAntiBruteForceRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AntiBruteForceRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAntiBruteForceRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ThreatDetection::AntiBruteForceRule` resource.
 */
// @ts-ignore TS6133
function rosAntiBruteForceRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAntiBruteForceRulePropsValidator(properties).assertSuccess();
    }
    return {
      AntiBruteForceRuleName: ros.stringToRosTemplate(properties.antiBruteForceRuleName),
      FailCount: ros.numberToRosTemplate(properties.failCount),
      ForbiddenTime: ros.numberToRosTemplate(properties.forbiddenTime),
      Span: ros.numberToRosTemplate(properties.span),
      UuidList: ros.listMapper(ros.stringToRosTemplate)(properties.uuidList),
      DefaultRule: ros.booleanToRosTemplate(properties.defaultRule),
    };
}

/**
 * A ROS template type:  `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
export class RosAntiBruteForceRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AntiBruteForceRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    public readonly attrAntiBruteForceRuleId: ros.IResolvable;

    /**
     * @Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    public readonly attrAntiBruteForceRuleName: ros.IResolvable;

    /**
     * @Attribute DefaultRule: Specifies whether to set the defense rule as the default rule. 
Valid values:
- true: yes
- false: no
     */
    public readonly attrDefaultRule: ros.IResolvable;

    /**
     * @Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    public readonly attrFailCount: ros.IResolvable;

    /**
     * @Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    public readonly attrForbiddenTime: ros.IResolvable;

    /**
     * @Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    public readonly attrSpan: ros.IResolvable;

    /**
     * @Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    public readonly attrUuidList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    public antiBruteForceRuleName: string | ros.IResolvable;

    /**
     * @Property failCount: The maximum number of failed logon attempts from an account. 
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    public failCount: number | ros.IResolvable;

    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    public forbiddenTime: number | ros.IResolvable;

    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    public span: number | ros.IResolvable;

    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    public uuidList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule. 
     * Valid values:
     * - true: yes
     * - false: no
     */
    public defaultRule: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ThreatDetection::AntiBruteForceRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAntiBruteForceRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAntiBruteForceRuleId = this.getAtt('AntiBruteForceRuleId');
        this.attrAntiBruteForceRuleName = this.getAtt('AntiBruteForceRuleName');
        this.attrDefaultRule = this.getAtt('DefaultRule');
        this.attrFailCount = this.getAtt('FailCount');
        this.attrForbiddenTime = this.getAtt('ForbiddenTime');
        this.attrSpan = this.getAtt('Span');
        this.attrUuidList = this.getAtt('UuidList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.antiBruteForceRuleName = props.antiBruteForceRuleName;
        this.failCount = props.failCount;
        this.forbiddenTime = props.forbiddenTime;
        this.span = props.span;
        this.uuidList = props.uuidList;
        this.defaultRule = props.defaultRule;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            antiBruteForceRuleName: this.antiBruteForceRuleName,
            failCount: this.failCount,
            forbiddenTime: this.forbiddenTime,
            span: this.span,
            uuidList: this.uuidList,
            defaultRule: this.defaultRule,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAntiBruteForceRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
