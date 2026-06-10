import * as ros from '@alicloud/ros-cdk-core';
import { RosMediaInfo } from './ice.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMediaInfo as MediaInfoProperty };

/**
 * Properties for defining a `MediaInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
export interface MediaInfoProps {

    /**
     * Property inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
     * OSS URL in one of the following formats:
     * http(s):\/\/example-bucket.oss-cn-shanghai.aliyuncs.com\/example.mp4
     * oss:\/\/example-bucket\/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
     * URL of an ApsaraVideo VOD media asset
     * vod:\/\/***20b48fb04483915d4f2cd8ac****
     */
    readonly inputUrl: string | ros.IResolvable;

    /**
     * Property businessType: The business type of the media asset. Valid values:
     * subtitles
     * watermark
     * opening
     * ending
     * general
     */
    readonly businessType?: string | ros.IResolvable;

    /**
     * Property cateId: The category ID.
     */
    readonly cateId?: number | ros.IResolvable;

    /**
     * Property coverUrl: The thumbnail URL of the media asset.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly coverUrl?: string | ros.IResolvable;

    /**
     * Property description: The description of the media asset.
     * The value can be up to 1,024 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property mediaTags: The tags of the media asset.
     * Up to 16 tags are supported.
     * Separate multiple tags with commas (,).
     * Each tag can be up to 32 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly mediaTags?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property mediaType: The type of the media asset. Valid values:
     * image
     * video
     * audio
     * text
     * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
     * .
     */
    readonly mediaType?: string | ros.IResolvable;

    /**
     * Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:
     * - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
     * - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
     */
    readonly overwrite?: boolean | ros.IResolvable;

    /**
     * Property referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
     */
    readonly referenceId?: string | ros.IResolvable;

    /**
     * Property registerConfig: The registration configurations.
     * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
     * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
     */
    readonly registerConfig?: string | ros.IResolvable;

    /**
     * Property smartTagTemplateId: The ID of the smart tagging template. Valid values:
     * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
     * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
     * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
     * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
     */
    readonly smartTagTemplateId?: string | ros.IResolvable;

    /**
     * Property title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly title?: string | ros.IResolvable;

    /**
     * Property userData: The user data. You can specify a custom callback URL.
     */
    readonly userData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property workflowId: The workflow ID.
     */
    readonly workflowId?: string | ros.IResolvable;
}

/**
 * Represents a `MediaInfo`.
 */
export interface IMediaInfo extends ros.IResource {
    readonly props: MediaInfoProps;

    /**
     * Attribute MediaId: The ID of the media asset in IMS.
     */
    readonly attrMediaId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ICE::MediaInfo`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMediaInfo`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
export class MediaInfo extends ros.Resource implements IMediaInfo {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MediaInfoProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute MediaId: The ID of the media asset in IMS.
     */
    public readonly attrMediaId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MediaInfoProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMediaInfo = new RosMediaInfo(this, id,  {
            registerConfig: props.registerConfig,
            overwrite: props.overwrite,
            description: props.description,
            userData: props.userData,
            businessType: props.businessType,
            title: props.title,
            cateId: props.cateId,
            workflowId: props.workflowId,
            inputUrl: props.inputUrl,
            smartTagTemplateId: props.smartTagTemplateId,
            referenceId: props.referenceId,
            mediaType: props.mediaType,
            coverUrl: props.coverUrl,
            mediaTags: props.mediaTags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMediaInfo;
        this.attrMediaId = rosMediaInfo.attrMediaId;
    }
}
