import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpRequestHeaderModificationRule } from './esa.generated';
export { RosHttpRequestHeaderModificationRule as HttpRequestHeaderModificationRuleProperty };
/**
 * Properties for defining a `HttpRequestHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export interface HttpRequestHeaderModificationRuleProps {
    /**
     * Property requestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly requestHeaderModification: Array<RosHttpRequestHeaderModificationRule.RequestHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;
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
     * - on: open.
     * - off: close.
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
 * Represents a `HttpRequestHeaderModificationRule`.
 */
export interface IHttpRequestHeaderModificationRule extends ros.IResource {
    readonly props: HttpRequestHeaderModificationRuleProps;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute RequestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly attrRequestHeaderModification: ros.IResolvable | string;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::HttpRequestHeaderModificationRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpRequestHeaderModificationRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export declare class HttpRequestHeaderModificationRule extends ros.Resource implements IHttpRequestHeaderModificationRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HttpRequestHeaderModificationRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute RequestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly attrRequestHeaderModification: ros.IResolvable | string;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpRequestHeaderModificationRuleProps, enableResourcePropertyConstraint?: boolean);
}
