import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCategory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
export interface RosCategoryProps {
    /**
     * @Property cateName: The category name.
     * The value can be up to 64 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly cateName: string | ros.IResolvable;
    /**
     * @Property parentId: The ID of the parent category.
     */
    readonly parentId?: number | ros.IResolvable;
    /**
     * @Property type: The type of the category. Valid values:
     * default: audio, video, and image files. This is the default value.
     * material: short video materials.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::Category`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Category` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
export declare class RosCategory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::Category";
    /**
     * @Attribute CateId: The ID of the category.
     */
    readonly attrCateId: ros.IResolvable;
    /**
     * @Attribute Level: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
     */
    readonly attrLevel: ros.IResolvable;
    /**
     * @Attribute ParentId: The ID of the parent category.
     */
    readonly attrParentId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cateName: The category name.
     * The value can be up to 64 bytes in length.
     * The value must be encoded in UTF-8.
     */
    cateName: string | ros.IResolvable;
    /**
     * @Property parentId: The ID of the parent category.
     */
    parentId: number | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the category. Valid values:
     * default: audio, video, and image files. This is the default value.
     * material: short video materials.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCategoryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInsertMediaToSearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
export interface RosInsertMediaToSearchLibProps {
    /**
     * @Property input: The URL of the video, audio, or image file that you want to import to the search library.
     * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
     * Specify an Object Storage Service (OSS) URL in the following format: oss:\/\/[Bucket name]\/[File path]. For example, you can specify oss:\/\/[example-bucket-]\/[object_path-].
     * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http:\/\/example-test-****.mp4.
     */
    readonly input: string | ros.IResolvable;
    /**
     * @Property mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
     */
    readonly mediaId?: string | ros.IResolvable;
    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * video (default)
     * image
     * audio
     */
    readonly mediaType?: string | ros.IResolvable;
    /**
     * @Property msgBody: The message body.
     */
    readonly msgBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
     */
    readonly searchLibName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::InsertMediaToSearchLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InsertMediaToSearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
export declare class RosInsertMediaToSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::InsertMediaToSearchLib";
    /**
     * @Attribute MediaId: The ID of the media asset.
     */
    readonly attrMediaId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property input: The URL of the video, audio, or image file that you want to import to the search library.
     * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
     * Specify an Object Storage Service (OSS) URL in the following format: oss:\/\/[Bucket name]\/[File path]. For example, you can specify oss:\/\/[example-bucket-]\/[object_path-].
     * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http:\/\/example-test-****.mp4.
     */
    input: string | ros.IResolvable;
    /**
     * @Property mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
     */
    mediaId: string | ros.IResolvable | undefined;
    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * video (default)
     * image
     * audio
     */
    mediaType: string | ros.IResolvable | undefined;
    /**
     * @Property msgBody: The message body.
     */
    msgBody: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
     */
    searchLibName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInsertMediaToSearchLibProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosMediaInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
export interface RosMediaInfoProps {
    /**
     * @Property inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
     * OSS URL in one of the following formats:
     * http(s):\/\/example-bucket.oss-cn-shanghai.aliyuncs.com\/example.mp4
     * oss:\/\/example-bucket\/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
     * URL of an ApsaraVideo VOD media asset
     * vod:\/\/***20b48fb04483915d4f2cd8ac****
     */
    readonly inputUrl: string | ros.IResolvable;
    /**
     * @Property businessType: The business type of the media asset. Valid values:
     * subtitles
     * watermark
     * opening
     * ending
     * general
     */
    readonly businessType?: string | ros.IResolvable;
    /**
     * @Property cateId: The category ID.
     */
    readonly cateId?: number | ros.IResolvable;
    /**
     * @Property coverUrl: The thumbnail URL of the media asset.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly coverUrl?: string | ros.IResolvable;
    /**
     * @Property description: The description of the media asset.
     * The value can be up to 1,024 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property mediaTags: The tags of the media asset.
     * Up to 16 tags are supported.
     * Separate multiple tags with commas (,).
     * Each tag can be up to 32 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly mediaTags?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * image
     * video
     * audio
     * text
     * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
     * .
     */
    readonly mediaType?: string | ros.IResolvable;
    /**
     * @Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:
     * - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
     * - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
     */
    readonly overwrite?: boolean | ros.IResolvable;
    /**
     * @Property referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
     */
    readonly referenceId?: string | ros.IResolvable;
    /**
     * @Property registerConfig: The registration configurations.
     * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
     * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
     */
    readonly registerConfig?: string | ros.IResolvable;
    /**
     * @Property smartTagTemplateId: The ID of the smart tagging template. Valid values:
     * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
     * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
     * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
     * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
     */
    readonly smartTagTemplateId?: string | ros.IResolvable;
    /**
     * @Property title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly title?: string | ros.IResolvable;
    /**
     * @Property userData: The user data. You can specify a custom callback URL.
     */
    readonly userData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property workflowId: The workflow ID.
     */
    readonly workflowId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::MediaInfo`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MediaInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
export declare class RosMediaInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::MediaInfo";
    /**
     * @Attribute MediaId: The ID of the media asset in IMS.
     */
    readonly attrMediaId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
     * OSS URL in one of the following formats:
     * http(s):\/\/example-bucket.oss-cn-shanghai.aliyuncs.com\/example.mp4
     * oss:\/\/example-bucket\/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
     * URL of an ApsaraVideo VOD media asset
     * vod:\/\/***20b48fb04483915d4f2cd8ac****
     */
    inputUrl: string | ros.IResolvable;
    /**
     * @Property businessType: The business type of the media asset. Valid values:
     * subtitles
     * watermark
     * opening
     * ending
     * general
     */
    businessType: string | ros.IResolvable | undefined;
    /**
     * @Property cateId: The category ID.
     */
    cateId: number | ros.IResolvable | undefined;
    /**
     * @Property coverUrl: The thumbnail URL of the media asset.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    coverUrl: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the media asset.
     * The value can be up to 1,024 bytes in length.
     * The value must be encoded in UTF-8.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property mediaTags: The tags of the media asset.
     * Up to 16 tags are supported.
     * Separate multiple tags with commas (,).
     * Each tag can be up to 32 bytes in length.
     * The value must be encoded in UTF-8.
     */
    mediaTags: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * image
     * video
     * audio
     * text
     * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
     * .
     */
    mediaType: string | ros.IResolvable | undefined;
    /**
     * @Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:
     * - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
     * - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
     */
    overwrite: boolean | ros.IResolvable | undefined;
    /**
     * @Property referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
     */
    referenceId: string | ros.IResolvable | undefined;
    /**
     * @Property registerConfig: The registration configurations.
     * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
     * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
     */
    registerConfig: string | ros.IResolvable | undefined;
    /**
     * @Property smartTagTemplateId: The ID of the smart tagging template. Valid values:
     * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
     * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
     * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
     * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
     */
    smartTagTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    title: string | ros.IResolvable | undefined;
    /**
     * @Property userData: The user data. You can specify a custom callback URL.
     */
    userData: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property workflowId: The workflow ID.
     */
    workflowId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMediaInfoProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export interface RosSearchLibProps {
    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    readonly searchLibName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::SearchLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export declare class RosSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::SearchLib";
    /**
     * @Attribute SearchLibName: The name of the Search Lib.
     */
    readonly attrSearchLibName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    searchLibName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchLibProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosUploadMedia`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
export interface RosUploadMediaProps {
    /**
     * @Property appId: The application ID. Default value: app-1000000.
     */
    readonly appId?: string | ros.IResolvable;
    /**
     * @Property entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
     */
    readonly entityId?: string | ros.IResolvable;
    /**
     * @Property fileInfo: The file information, which is in the JSON format and contains the following fields:
     * Type: required. The file type. Valid values: video, image, audio, text, and other.
     * Name: required. The file name without the extension.
     * Size: optional. The file size.
     * Ext: required. The file name extension.
     */
    readonly fileInfo?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields:
     * Title: required.
     * The value can be up to 128 characters in length.
     * The value must be encoded in UTF-8.
     * Description: optional.
     * The value can be up to 1,024 characters in length.
     * The value must be encoded in UTF-8.
     * CateId: optional.
     * Tags: optional.
     * BusinessType: required. Valid values:
     * opening or ending if Type is set to video
     * default or cover if Type is set to image
     * subtitles or font if Type is set to text
     * watermark if Type is set to material
     * general CoverURL: optional.
     * DynamicMetaData: The value is a string.
     */
    readonly mediaMetaData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
     */
    readonly postProcessConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property uploadTargetConfig: The destination storage address.
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    readonly uploadTargetConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
     */
    readonly userData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::UploadMedia`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UploadMedia` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
export declare class RosUploadMedia extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::UploadMedia";
    /**
     * @Attribute FileURL: The OSS URL of the file. The URL does not contain the information used for authentication.
     */
    readonly attrFileUrl: ros.IResolvable;
    /**
     * @Attribute MediaId: The ID of the media asset.
     */
    readonly attrMediaId: ros.IResolvable;
    /**
     * @Attribute MediaURL: The URL of the media asset.
Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    readonly attrMediaUrl: ros.IResolvable;
    /**
     * @Attribute UploadAddress: The upload URL.
Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAddress: ros.IResolvable;
    /**
     * @Attribute UploadAuth: The upload credential.
Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    readonly attrUploadAuth: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The application ID. Default value: app-1000000.
     */
    appId: string | ros.IResolvable | undefined;
    /**
     * @Property entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
     */
    entityId: string | ros.IResolvable | undefined;
    /**
     * @Property fileInfo: The file information, which is in the JSON format and contains the following fields:
     * Type: required. The file type. Valid values: video, image, audio, text, and other.
     * Name: required. The file name without the extension.
     * Size: optional. The file size.
     * Ext: required. The file name extension.
     */
    fileInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields:
     * Title: required.
     * The value can be up to 128 characters in length.
     * The value must be encoded in UTF-8.
     * Description: optional.
     * The value can be up to 1,024 characters in length.
     * The value must be encoded in UTF-8.
     * CateId: optional.
     * Tags: optional.
     * BusinessType: required. Valid values:
     * opening or ending if Type is set to video
     * default or cover if Type is set to image
     * subtitles or font if Type is set to text
     * watermark if Type is set to material
     * general CoverURL: optional.
     * DynamicMetaData: The value is a string.
     */
    mediaMetaData: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
     */
    postProcessConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property uploadTargetConfig: The destination storage address.
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    uploadTargetConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
     */
    userData: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUploadMediaProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
