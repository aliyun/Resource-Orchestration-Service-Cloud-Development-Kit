import * as ros from '@alicloud/ros-cdk-core';
import { RosImageTransform } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImageTransform as ImageTransformProperty };

/**
 * Properties for defining a `ImageTransform`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export interface ImageTransformProps {

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    readonly enable?: string | ros.IResolvable;

    /**
     * Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
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
 * Represents a `ImageTransform`.
 */
export interface IImageTransform extends ros.IResource {
    readonly props: ImageTransformProps;

    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Enable: Indicates whether the image transformations feature is enabled.
     */
    readonly attrEnable: ros.IResolvable | string;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::ImageTransform`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageTransform`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export class ImageTransform extends ros.Resource implements IImageTransform {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ImageTransformProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Enable: Indicates whether the image transformations feature is enabled.
     */
    public readonly attrEnable: ros.IResolvable | string;

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
    constructor(scope: ros.Construct, id: string, props: ImageTransformProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImageTransform = new RosImageTransform(this, id,  {
            siteId: props.siteId,
            ruleEnable: props.ruleEnable,
            enable: props.enable,
            paymentType: props.paymentType,
            sequence: props.sequence,
            rule: props.rule,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageTransform;
        this.attrConfigId = rosImageTransform.attrConfigId;
        this.attrConfigType = rosImageTransform.attrConfigType;
        this.attrEnable = rosImageTransform.attrEnable;
        this.attrRule = rosImageTransform.attrRule;
        this.attrRuleEnable = rosImageTransform.attrRuleEnable;
        this.attrRuleName = rosImageTransform.attrRuleName;
        this.attrSequence = rosImageTransform.attrSequence;
        this.attrSiteVersion = rosImageTransform.attrSiteVersion;
    }
}
