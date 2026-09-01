import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpResponseHeaderModificationRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHttpResponseHeaderModificationRule as HttpResponseHeaderModificationRuleProperty };

/**
 * Properties for defining a `HttpResponseHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export interface HttpResponseHeaderModificationRuleProps {

    /**
     * Property responseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    readonly responseHeaderModification: Array<RosHttpResponseHeaderModificationRule.ResponseHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Represents a `HttpResponseHeaderModificationRule`.
 */
export interface IHttpResponseHeaderModificationRule extends ros.IResource {
    readonly props: HttpResponseHeaderModificationRuleProps;

    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The configuration type.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute ResponseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    readonly attrResponseHeaderModification: ros.IResolvable | string;

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::HttpResponseHeaderModificationRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpResponseHeaderModificationRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export class HttpResponseHeaderModificationRule extends ros.Resource implements IHttpResponseHeaderModificationRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HttpResponseHeaderModificationRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The configuration type.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute ResponseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    public readonly attrResponseHeaderModification: ros.IResolvable | string;

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpResponseHeaderModificationRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHttpResponseHeaderModificationRule = new RosHttpResponseHeaderModificationRule(this, id,  {
            siteId: props.siteId,
            ruleEnable: props.ruleEnable,
            responseHeaderModification: props.responseHeaderModification,
            sequence: props.sequence,
            rule: props.rule,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHttpResponseHeaderModificationRule;
        this.attrConfigId = rosHttpResponseHeaderModificationRule.attrConfigId;
        this.attrConfigType = rosHttpResponseHeaderModificationRule.attrConfigType;
        this.attrResponseHeaderModification = rosHttpResponseHeaderModificationRule.attrResponseHeaderModification;
        this.attrRule = rosHttpResponseHeaderModificationRule.attrRule;
        this.attrRuleEnable = rosHttpResponseHeaderModificationRule.attrRuleEnable;
        this.attrRuleName = rosHttpResponseHeaderModificationRule.attrRuleName;
        this.attrSequence = rosHttpResponseHeaderModificationRule.attrSequence;
        this.attrSiteVersion = rosHttpResponseHeaderModificationRule.attrSiteVersion;
    }
}
