import * as ros from '@alicloud/ros-cdk-core';
import { RosKeywordLib } from './aligreen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKeywordLib as KeywordLibProperty };

/**
 * Properties for defining a `KeywordLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
export interface KeywordLibProps {

    /**
     * Property keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    readonly keywordLibName: string | ros.IResolvable;

    /**
     * Property resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * Property bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
     */
    readonly bizTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property category: The category of the text library. Valid values:
     * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
     */
    readonly category?: string | ros.IResolvable;

    /**
     * Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property language: Language used by the text Library. Example: zh:Chinese、en:English
     */
    readonly language?: string | ros.IResolvable;

    /**
     * Property libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
     */
    readonly libType?: string | ros.IResolvable;

    /**
     * Property matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
     */
    readonly matchMode?: string | ros.IResolvable;
}

/**
 * Represents a `KeywordLib`.
 */
export interface IKeywordLib extends ros.IResource {
    readonly props: KeywordLibProps;

    /**
     * Attribute BizTypes: The business scenario.
     */
    readonly attrBizTypes: ros.IResolvable | string;

    /**
     * Attribute Category: The category of the text library.
     */
    readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute Enable: Specifies whether to enable text library.
     */
    readonly attrEnable: ros.IResolvable | string;

    /**
     * Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    readonly attrKeywordLibId: ros.IResolvable | string;

    /**
     * Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    readonly attrKeywordLibName: ros.IResolvable | string;

    /**
     * Attribute Language: Language used by the text Library.
     */
    readonly attrLanguage: ros.IResolvable | string;

    /**
     * Attribute LibType: The category of the text library in each moderation scenario.
     */
    readonly attrLibType: ros.IResolvable | string;

    /**
     * Attribute MatchMode: The matching method.
     */
    readonly attrMatchMode: ros.IResolvable | string;

    /**
     * Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    readonly attrResourceType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::KeywordLib`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeywordLib`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
export class KeywordLib extends ros.Resource implements IKeywordLib {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KeywordLibProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BizTypes: The business scenario.
     */
    public readonly attrBizTypes: ros.IResolvable | string;

    /**
     * Attribute Category: The category of the text library.
     */
    public readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute Enable: Specifies whether to enable text library.
     */
    public readonly attrEnable: ros.IResolvable | string;

    /**
     * Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    public readonly attrKeywordLibId: ros.IResolvable | string;

    /**
     * Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    public readonly attrKeywordLibName: ros.IResolvable | string;

    /**
     * Attribute Language: Language used by the text Library.
     */
    public readonly attrLanguage: ros.IResolvable | string;

    /**
     * Attribute LibType: The category of the text library in each moderation scenario.
     */
    public readonly attrLibType: ros.IResolvable | string;

    /**
     * Attribute MatchMode: The matching method.
     */
    public readonly attrMatchMode: ros.IResolvable | string;

    /**
     * Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeywordLibProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKeywordLib = new RosKeywordLib(this, id,  {
            matchMode: props.matchMode,
            category: props.category,
            language: props.language,
            bizTypes: props.bizTypes,
            enable: props.enable,
            resourceType: props.resourceType,
            libType: props.libType,
            keywordLibName: props.keywordLibName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeywordLib;
        this.attrBizTypes = rosKeywordLib.attrBizTypes;
        this.attrCategory = rosKeywordLib.attrCategory;
        this.attrEnable = rosKeywordLib.attrEnable;
        this.attrKeywordLibId = rosKeywordLib.attrKeywordLibId;
        this.attrKeywordLibName = rosKeywordLib.attrKeywordLibName;
        this.attrLanguage = rosKeywordLib.attrLanguage;
        this.attrLibType = rosKeywordLib.attrLibType;
        this.attrMatchMode = rosKeywordLib.attrMatchMode;
        this.attrResourceType = rosKeywordLib.attrResourceType;
    }
}
