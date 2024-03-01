import * as ros from '@alicloud/ros-cdk-core';
import { RosAntiBruteForceRule } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAntiBruteForceRule as AntiBruteForceRuleProperty };

/**
 * Properties for defining a `AntiBruteForceRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
export interface AntiBruteForceRuleProps {

    /**
     * Property antiBruteForceRuleName: The name of the defense rule.
     */
    readonly antiBruteForceRuleName: string | ros.IResolvable;

    /**
     * Property failCount: The maximum number of failed logon attempts from an account. 
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    readonly failCount: number | ros.IResolvable;

    /**
     * Property forbiddenTime: The period of time during which logons from an account are not allowed.
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
     * Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    readonly span: number | ros.IResolvable;

    /**
     * Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    readonly uuidList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property defaultRule: Specifies whether to set the defense rule as the default rule. 
     * Valid values:
     * - true: yes
     * - false: no
     */
    readonly defaultRule?: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::AntiBruteForceRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAntiBruteForceRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
export class AntiBruteForceRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AntiBruteForceRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    public readonly attrAntiBruteForceRuleId: ros.IResolvable;

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    public readonly attrAntiBruteForceRuleName: ros.IResolvable;

    /**
     * Attribute DefaultRule: Specifies whether to set the defense rule as the default rule. 
Valid values:
- true: yes
- false: no
     */
    public readonly attrDefaultRule: ros.IResolvable;

    /**
     * Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    public readonly attrFailCount: ros.IResolvable;

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    public readonly attrForbiddenTime: ros.IResolvable;

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    public readonly attrSpan: ros.IResolvable;

    /**
     * Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    public readonly attrUuidList: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AntiBruteForceRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAntiBruteForceRule = new RosAntiBruteForceRule(this, id,  {
            defaultRule: props.defaultRule,
            antiBruteForceRuleName: props.antiBruteForceRuleName,
            forbiddenTime: props.forbiddenTime,
            uuidList: props.uuidList,
            failCount: props.failCount,
            span: props.span,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAntiBruteForceRule;
        this.attrAntiBruteForceRuleId = rosAntiBruteForceRule.attrAntiBruteForceRuleId;
        this.attrAntiBruteForceRuleName = rosAntiBruteForceRule.attrAntiBruteForceRuleName;
        this.attrDefaultRule = rosAntiBruteForceRule.attrDefaultRule;
        this.attrFailCount = rosAntiBruteForceRule.attrFailCount;
        this.attrForbiddenTime = rosAntiBruteForceRule.attrForbiddenTime;
        this.attrSpan = rosAntiBruteForceRule.attrSpan;
        this.attrUuidList = rosAntiBruteForceRule.attrUuidList;
    }
}
