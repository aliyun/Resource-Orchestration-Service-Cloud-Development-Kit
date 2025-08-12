import * as ros from '@alicloud/ros-cdk-core';
import { RosCompressionRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCompressionRule as CompressionRuleProperty };

/**
 * Properties for defining a `CompressionRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export interface CompressionRuleProps {

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly brotli?: string | ros.IResolvable;

    /**
     * Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly gzip?: string | ros.IResolvable;

    /**
     * Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
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

    /**
     * Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly zstd?: string | ros.IResolvable;
}

/**
 * Represents a `CompressionRule`.
 */
export interface ICompressionRule extends ros.IResource {
    readonly props: CompressionRuleProps;

    /**
     * Attribute Brotli: Brotli compression.
     */
    readonly attrBrotli: ros.IResolvable | string;

    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Gzip: Gzip compression.
     */
    readonly attrGzip: ros.IResolvable | string;

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
     * Attribute Zstd: Zstd compression.
     */
    readonly attrZstd: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CompressionRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCompressionRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export class CompressionRule extends ros.Resource implements ICompressionRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CompressionRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Brotli: Brotli compression.
     */
    public readonly attrBrotli: ros.IResolvable | string;

    /**
     * Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Gzip: Gzip compression.
     */
    public readonly attrGzip: ros.IResolvable | string;

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
     * Attribute Zstd: Zstd compression.
     */
    public readonly attrZstd: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CompressionRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCompressionRule = new RosCompressionRule(this, id,  {
            siteId: props.siteId,
            zstd: props.zstd,
            ruleEnable: props.ruleEnable,
            brotli: props.brotli,
            gzip: props.gzip,
            paymentType: props.paymentType,
            sequence: props.sequence,
            rule: props.rule,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCompressionRule;
        this.attrBrotli = rosCompressionRule.attrBrotli;
        this.attrConfigId = rosCompressionRule.attrConfigId;
        this.attrConfigType = rosCompressionRule.attrConfigType;
        this.attrGzip = rosCompressionRule.attrGzip;
        this.attrRule = rosCompressionRule.attrRule;
        this.attrRuleEnable = rosCompressionRule.attrRuleEnable;
        this.attrRuleName = rosCompressionRule.attrRuleName;
        this.attrSequence = rosCompressionRule.attrSequence;
        this.attrSiteVersion = rosCompressionRule.attrSiteVersion;
        this.attrZstd = rosCompressionRule.attrZstd;
    }
}
