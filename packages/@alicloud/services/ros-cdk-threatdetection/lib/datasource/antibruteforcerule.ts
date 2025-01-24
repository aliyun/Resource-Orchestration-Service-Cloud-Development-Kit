import * as ros from '@alicloud/ros-cdk-core';
import { RosAntiBruteForceRule } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAntiBruteForceRule as AntiBruteForceRuleProperty };

/**
 * Properties for defining a `AntiBruteForceRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerule
 */
export interface AntiBruteForceRuleProps {

    /**
     * Property antiBruteForceRuleId: The ID of the defense rule.
     */
    readonly antiBruteForceRuleId: number | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `AntiBruteForceRule`.
 */
export interface IAntiBruteForceRule extends ros.IResource {
    readonly props: AntiBruteForceRuleProps;

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    readonly attrAntiBruteForceRuleId: ros.IResolvable | string;

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    readonly attrAntiBruteForceRuleName: ros.IResolvable | string;

    /**
     * Attribute DefaultRule: Indicates whether the defense rule is the default rule.
     */
    readonly attrDefaultRule: ros.IResolvable | string;

    /**
     * Attribute FailCount: The threshold of logon failures that is specified in the defense rule.
     */
    readonly attrFailCount: ros.IResolvable | string;

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    readonly attrForbiddenTime: ros.IResolvable | string;

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.
     */
    readonly attrSpan: ros.IResolvable | string;

    /**
     * Attribute UuidList: An array consisting of the UUIDs of servers to which the defense rule is applied.
     */
    readonly attrUuidList: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAntiBruteForceRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerule
 */
export class AntiBruteForceRule extends ros.Resource implements IAntiBruteForceRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AntiBruteForceRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    public readonly attrAntiBruteForceRuleId: ros.IResolvable | string;

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    public readonly attrAntiBruteForceRuleName: ros.IResolvable | string;

    /**
     * Attribute DefaultRule: Indicates whether the defense rule is the default rule.
     */
    public readonly attrDefaultRule: ros.IResolvable | string;

    /**
     * Attribute FailCount: The threshold of logon failures that is specified in the defense rule.
     */
    public readonly attrFailCount: ros.IResolvable | string;

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    public readonly attrForbiddenTime: ros.IResolvable | string;

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.
     */
    public readonly attrSpan: ros.IResolvable | string;

    /**
     * Attribute UuidList: An array consisting of the UUIDs of servers to which the defense rule is applied.
     */
    public readonly attrUuidList: ros.IResolvable | string;

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
            antiBruteForceRuleId: props.antiBruteForceRuleId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
