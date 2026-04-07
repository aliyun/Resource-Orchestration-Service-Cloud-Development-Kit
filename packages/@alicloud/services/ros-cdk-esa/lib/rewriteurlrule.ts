import * as ros from '@alicloud/ros-cdk-core';
import { RosRewriteUrlRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRewriteUrlRule as RewriteUrlRuleProperty };

/**
 * Properties for defining a `RewriteUrlRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
 */
export interface RewriteUrlRuleProps {

    /**
     * Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property queryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    readonly queryString?: string | ros.IResolvable;

    /**
     * Property rewriteQueryStringType: Query string rewrite type. Value range:
     * - `static`: Static mode.
     * - `dynamic`: Dynamic mode.
     */
    readonly rewriteQueryStringType?: string | ros.IResolvable;

    /**
     * Property rewriteUriType: URI rewrite type. Value range:
     * - `static`: Static mode.
     * - `dynamic`: Dynamic mode.
     */
    readonly rewriteUriType?: string | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     *  Match all incoming requests: value set to true
     *  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     *  on: open.
     *  off: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * Property siteVersion: Version number of the site configuration. For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    readonly siteVersion?: number | ros.IResolvable;

    /**
     * Property uri: The desired URI to which you want to rewrite the path in the original request.
     */
    readonly uri?: string | ros.IResolvable;
}

/**
 * Represents a `RewriteUrlRule`.
 */
export interface IRewriteUrlRule extends ros.IResource {
    readonly props: RewriteUrlRuleProps;

    /**
     * Attribute ConfigId: The configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: Configuration type. This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    readonly attrQueryString: ros.IResolvable | string;

    /**
     * Attribute RewriteQueryStringType: Query string rewrite type.
     */
    readonly attrRewriteQueryStringType: ros.IResolvable | string;

    /**
     * Attribute RewriteUriType: URI rewrite type.
     */
    readonly attrRewriteUriType: ros.IResolvable | string;

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
     * Attribute Sequence: Rule execution order. The smaller the value, the higher the priority of execution.
     */
    readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: Version number of the site configuration. For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;

    /**
     * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
     */
    readonly attrUri: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::RewriteUrlRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRewriteUrlRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
 */
export class RewriteUrlRule extends ros.Resource implements IRewriteUrlRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RewriteUrlRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: The configuration ID.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: Configuration type. This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    public readonly attrQueryString: ros.IResolvable | string;

    /**
     * Attribute RewriteQueryStringType: Query string rewrite type.
     */
    public readonly attrRewriteQueryStringType: ros.IResolvable | string;

    /**
     * Attribute RewriteUriType: URI rewrite type.
     */
    public readonly attrRewriteUriType: ros.IResolvable | string;

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
     * Attribute Sequence: Rule execution order. The smaller the value, the higher the priority of execution.
     */
    public readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: Version number of the site configuration. For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    public readonly attrSiteVersion: ros.IResolvable | string;

    /**
     * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
     */
    public readonly attrUri: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RewriteUrlRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRewriteUrlRule = new RosRewriteUrlRule(this, id,  {
            siteId: props.siteId,
            rewriteUriType: props.rewriteUriType,
            ruleEnable: props.ruleEnable,
            rewriteQueryStringType: props.rewriteQueryStringType,
            queryString: props.queryString,
            rule: props.rule,
            uri: props.uri,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRewriteUrlRule;
        this.attrConfigId = rosRewriteUrlRule.attrConfigId;
        this.attrConfigType = rosRewriteUrlRule.attrConfigType;
        this.attrQueryString = rosRewriteUrlRule.attrQueryString;
        this.attrRewriteQueryStringType = rosRewriteUrlRule.attrRewriteQueryStringType;
        this.attrRewriteUriType = rosRewriteUrlRule.attrRewriteUriType;
        this.attrRule = rosRewriteUrlRule.attrRule;
        this.attrRuleEnable = rosRewriteUrlRule.attrRuleEnable;
        this.attrRuleName = rosRewriteUrlRule.attrRuleName;
        this.attrSequence = rosRewriteUrlRule.attrSequence;
        this.attrSiteVersion = rosRewriteUrlRule.attrSiteVersion;
        this.attrUri = rosRewriteUrlRule.attrUri;
    }
}
