import * as ros from '@alicloud/ros-cdk-core';
import { RosVideoProcessing } from './esa.generated';
export { RosVideoProcessing as VideoProcessingProperty };
/**
 * Properties for defining a `VideoProcessing`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
 */
export interface VideoProcessingProps {
    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property flvSeekEnd: Custom FLV end parameters.
     */
    readonly flvSeekEnd?: string | ros.IResolvable;
    /**
     * Property flvSeekStart: Custom FLV start parameters.
     */
    readonly flvSeekStart?: string | ros.IResolvable;
    /**
     * Property flvVideoSeekMode: FLV drag mode. Value range:
     * - `by_byte`: Drag by byte.
     * - `by_time`: Drag by time.
     */
    readonly flvVideoSeekMode?: string | ros.IResolvable;
    /**
     * Property mp4SeekEnd: Custom mp4 end parameters.
     */
    readonly mp4SeekEnd?: string | ros.IResolvable;
    /**
     * Property mp4SeekStart: Custom mp4 start parameters.
     */
    readonly mp4SeekStart?: string | ros.IResolvable;
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
     * Property sequence: The rule execution order prioritizes lower numerical values. It is only applicable when setting or modifying the order of individual rule configurations.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
    /**
     * Property videoSeekEnable: Drag and drop the play function switch. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly videoSeekEnable?: string | ros.IResolvable;
}
/**
 * Represents a `VideoProcessing`.
 */
export interface IVideoProcessing extends ros.IResource {
    readonly props: VideoProcessingProps;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute FlvSeekEnd: Custom FLV end parameters.
     */
    readonly attrFlvSeekEnd: ros.IResolvable | string;
    /**
     * Attribute FlvSeekStart: Custom FLV start parameters.
     */
    readonly attrFlvSeekStart: ros.IResolvable | string;
    /**
     * Attribute FlvVideoSeekMode: FLV drag mode.
     */
    readonly attrFlvVideoSeekMode: ros.IResolvable | string;
    /**
     * Attribute Mp4SeekEnd: Custom mp4 end parameters.
     */
    readonly attrMp4SeekEnd: ros.IResolvable | string;
    /**
     * Attribute Mp4SeekStart: Custom mp4 start parameters.
     */
    readonly attrMp4SeekStart: ros.IResolvable | string;
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
     * Attribute Sequence: The rule execution order prioritizes lower numerical values. It is only applicable when setting or modifying the order of individual rule configurations.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
    /**
     * Attribute VideoSeekEnable: Drag and drop the play function switch.
     */
    readonly attrVideoSeekEnable: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::VideoProcessing`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVideoProcessing`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
 */
export declare class VideoProcessing extends ros.Resource implements IVideoProcessing {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VideoProcessingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute FlvSeekEnd: Custom FLV end parameters.
     */
    readonly attrFlvSeekEnd: ros.IResolvable | string;
    /**
     * Attribute FlvSeekStart: Custom FLV start parameters.
     */
    readonly attrFlvSeekStart: ros.IResolvable | string;
    /**
     * Attribute FlvVideoSeekMode: FLV drag mode.
     */
    readonly attrFlvVideoSeekMode: ros.IResolvable | string;
    /**
     * Attribute Mp4SeekEnd: Custom mp4 end parameters.
     */
    readonly attrMp4SeekEnd: ros.IResolvable | string;
    /**
     * Attribute Mp4SeekStart: Custom mp4 start parameters.
     */
    readonly attrMp4SeekStart: ros.IResolvable | string;
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
     * Attribute Sequence: The rule execution order prioritizes lower numerical values. It is only applicable when setting or modifying the order of individual rule configurations.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
    /**
     * Attribute VideoSeekEnable: Drag and drop the play function switch.
     */
    readonly attrVideoSeekEnable: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VideoProcessingProps, enableResourcePropertyConstraint?: boolean);
}
