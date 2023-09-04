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
 * A ROS template type:  `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
export declare class RosAntiBruteForceRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AntiBruteForceRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    readonly attrAntiBruteForceRuleId: ros.IResolvable;
    /**
     * @Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    readonly attrAntiBruteForceRuleName: ros.IResolvable;
    /**
     * @Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
Valid values:
- true: yes
- false: no
     */
    readonly attrDefaultRule: ros.IResolvable;
    /**
     * @Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    readonly attrFailCount: ros.IResolvable;
    /**
     * @Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    readonly attrForbiddenTime: ros.IResolvable;
    /**
     * @Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    readonly attrSpan: ros.IResolvable;
    /**
     * @Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    readonly attrUuidList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    antiBruteForceRuleName: string | ros.IResolvable;
    /**
     * @Property failCount: The maximum number of failed logon attempts from an account.
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    failCount: number | ros.IResolvable;
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
    forbiddenTime: number | ros.IResolvable;
    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    span: number | ros.IResolvable;
    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    uuidList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * Valid values:
     * - true: yes
     * - false: no
     */
    defaultRule: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ThreatDetection::AntiBruteForceRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
