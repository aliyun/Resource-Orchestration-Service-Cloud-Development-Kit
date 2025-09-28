// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosCategoryProps`
 *
 * @param properties - the TypeScript properties of a `RosCategoryProps`
 *
 * @returns the result of the validation.
 */
function RosCategoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parentId', ros.validateNumber)(properties.parentId));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["material","default"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('cateName', ros.requiredValidator)(properties.cateName));
    errors.collect(ros.propertyValidator('cateName', ros.validateString)(properties.cateName));
    return errors.wrap('supplied properties not correct for "RosCategoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::Category` resource
 *
 * @param properties - the TypeScript properties of a `RosCategoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::Category` resource.
 */
// @ts-ignore TS6133
function rosCategoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCategoryPropsValidator(properties).assertSuccess();
    }
    return {
      'CateName': ros.stringToRosTemplate(properties.cateName),
      'ParentId': ros.numberToRosTemplate(properties.parentId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::Category`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Category` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
export class RosCategory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::Category";

    /**
     * @Attribute CateId: The ID of the category.
     */
    public readonly attrCateId: ros.IResolvable;

    /**
     * @Attribute Level: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
     */
    public readonly attrLevel: ros.IResolvable;

    /**
     * @Attribute ParentId: The ID of the parent category.
     */
    public readonly attrParentId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cateName: The category name.
     * The value can be up to 64 bytes in length.
     * The value must be encoded in UTF-8.
     */
    public cateName: string | ros.IResolvable;

    /**
     * @Property parentId: The ID of the parent category.
     */
    public parentId: number | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the category. Valid values:
     * default: audio, video, and image files. This is the default value.
     * material: short video materials.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCategoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCategory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCateId = this.getAtt('CateId');
        this.attrLevel = this.getAtt('Level');
        this.attrParentId = this.getAtt('ParentId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cateName = props.cateName;
        this.parentId = props.parentId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cateName: this.cateName,
            parentId: this.parentId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCategoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly msgBody?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
     */
    readonly searchLibName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInsertMediaToSearchLibProps`
 *
 * @param properties - the TypeScript properties of a `RosInsertMediaToSearchLibProps`
 *
 * @returns the result of the validation.
 */
function RosInsertMediaToSearchLibPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('input', ros.requiredValidator)(properties.input));
    errors.collect(ros.propertyValidator('input', ros.validateString)(properties.input));
    errors.collect(ros.propertyValidator('mediaId', ros.validateString)(properties.mediaId));
    errors.collect(ros.propertyValidator('searchLibName', ros.validateString)(properties.searchLibName));
    if(properties.mediaType && (typeof properties.mediaType) !== 'object') {
        errors.collect(ros.propertyValidator('mediaType', ros.validateAllowedValues)({
          data: properties.mediaType,
          allowedValues: ["video","image","audio"],
        }));
    }
    errors.collect(ros.propertyValidator('mediaType', ros.validateString)(properties.mediaType));
    errors.collect(ros.propertyValidator('msgBody', ros.hashValidator(ros.validateAny))(properties.msgBody));
    return errors.wrap('supplied properties not correct for "RosInsertMediaToSearchLibProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::InsertMediaToSearchLib` resource
 *
 * @param properties - the TypeScript properties of a `RosInsertMediaToSearchLibProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::InsertMediaToSearchLib` resource.
 */
// @ts-ignore TS6133
function rosInsertMediaToSearchLibPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInsertMediaToSearchLibPropsValidator(properties).assertSuccess();
    }
    return {
      'Input': ros.stringToRosTemplate(properties.input),
      'MediaId': ros.stringToRosTemplate(properties.mediaId),
      'MediaType': ros.stringToRosTemplate(properties.mediaType),
      'MsgBody': ros.hashMapper(ros.objectToRosTemplate)(properties.msgBody),
      'SearchLibName': ros.stringToRosTemplate(properties.searchLibName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::InsertMediaToSearchLib`, which is used to add a media asset to a search library.
 * @Note This class does not contain additional functions, so it is recommended to use the `InsertMediaToSearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
export class RosInsertMediaToSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::InsertMediaToSearchLib";

    /**
     * @Attribute MediaId: The ID of the media asset.
     */
    public readonly attrMediaId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property input: The URL of the video, audio, or image file that you want to import to the search library.
     * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
     * Specify an Object Storage Service (OSS) URL in the following format: oss:\/\/[Bucket name]\/[File path]. For example, you can specify oss:\/\/[example-bucket-]\/[object_path-].
     * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http:\/\/example-test-****.mp4.
     */
    public input: string | ros.IResolvable;

    /**
     * @Property mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
     */
    public mediaId: string | ros.IResolvable | undefined;

    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * video (default)
     * image
     * audio
     */
    public mediaType: string | ros.IResolvable | undefined;

    /**
     * @Property msgBody: The message body.
     */
    public msgBody: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
     */
    public searchLibName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInsertMediaToSearchLibProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInsertMediaToSearchLib.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMediaId = this.getAtt('MediaId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.input = props.input;
        this.mediaId = props.mediaId;
        this.mediaType = props.mediaType;
        this.msgBody = props.msgBody;
        this.searchLibName = props.searchLibName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            input: this.input,
            mediaId: this.mediaId,
            mediaType: this.mediaType,
            msgBody: this.msgBody,
            searchLibName: this.searchLibName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInsertMediaToSearchLibPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly userData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property workflowId: The workflow ID.
     */
    readonly workflowId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMediaInfoProps`
 *
 * @param properties - the TypeScript properties of a `RosMediaInfoProps`
 *
 * @returns the result of the validation.
 */
function RosMediaInfoPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('registerConfig', ros.validateString)(properties.registerConfig));
    errors.collect(ros.propertyValidator('overwrite', ros.validateBoolean)(properties.overwrite));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('userData', ros.hashValidator(ros.validateAny))(properties.userData));
    if(properties.businessType && (typeof properties.businessType) !== 'object') {
        errors.collect(ros.propertyValidator('businessType', ros.validateAllowedValues)({
          data: properties.businessType,
          allowedValues: ["subtitles","watermark","opening","ending","general"],
        }));
    }
    errors.collect(ros.propertyValidator('businessType', ros.validateString)(properties.businessType));
    if(properties.title && (Array.isArray(properties.title) || (typeof properties.title) === 'string')) {
        errors.collect(ros.propertyValidator('title', ros.validateLength)({
            data: properties.title.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    errors.collect(ros.propertyValidator('cateId', ros.validateNumber)(properties.cateId));
    errors.collect(ros.propertyValidator('workflowId', ros.validateString)(properties.workflowId));
    errors.collect(ros.propertyValidator('inputUrl', ros.requiredValidator)(properties.inputUrl));
    errors.collect(ros.propertyValidator('inputUrl', ros.validateString)(properties.inputUrl));
    if(properties.smartTagTemplateId && (typeof properties.smartTagTemplateId) !== 'object') {
        errors.collect(ros.propertyValidator('smartTagTemplateId', ros.validateAllowedValues)({
          data: properties.smartTagTemplateId,
          allowedValues: ["S00000101-300080","S00000103-000001","S00000103-000002"],
        }));
    }
    errors.collect(ros.propertyValidator('smartTagTemplateId', ros.validateString)(properties.smartTagTemplateId));
    if(properties.referenceId && (Array.isArray(properties.referenceId) || (typeof properties.referenceId) === 'string')) {
        errors.collect(ros.propertyValidator('referenceId', ros.validateLength)({
            data: properties.referenceId.length,
            min: 6,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('referenceId', ros.validateString)(properties.referenceId));
    if(properties.mediaType && (typeof properties.mediaType) !== 'object') {
        errors.collect(ros.propertyValidator('mediaType', ros.validateAllowedValues)({
          data: properties.mediaType,
          allowedValues: ["image","video","audio","text"],
        }));
    }
    errors.collect(ros.propertyValidator('mediaType', ros.validateString)(properties.mediaType));
    if(properties.coverUrl && (Array.isArray(properties.coverUrl) || (typeof properties.coverUrl) === 'string')) {
        errors.collect(ros.propertyValidator('coverUrl', ros.validateLength)({
            data: properties.coverUrl.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('coverUrl', ros.validateString)(properties.coverUrl));
    if(properties.mediaTags && (Array.isArray(properties.mediaTags) || (typeof properties.mediaTags) === 'string')) {
        errors.collect(ros.propertyValidator('mediaTags', ros.validateLength)({
            data: properties.mediaTags.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('mediaTags', ros.listValidator(ros.validateString))(properties.mediaTags));
    return errors.wrap('supplied properties not correct for "RosMediaInfoProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::MediaInfo` resource
 *
 * @param properties - the TypeScript properties of a `RosMediaInfoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::MediaInfo` resource.
 */
// @ts-ignore TS6133
function rosMediaInfoPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMediaInfoPropsValidator(properties).assertSuccess();
    }
    return {
      'InputURL': ros.stringToRosTemplate(properties.inputUrl),
      'BusinessType': ros.stringToRosTemplate(properties.businessType),
      'CateId': ros.numberToRosTemplate(properties.cateId),
      'CoverURL': ros.stringToRosTemplate(properties.coverUrl),
      'Description': ros.stringToRosTemplate(properties.description),
      'MediaTags': ros.listMapper(ros.stringToRosTemplate)(properties.mediaTags),
      'MediaType': ros.stringToRosTemplate(properties.mediaType),
      'Overwrite': ros.booleanToRosTemplate(properties.overwrite),
      'ReferenceId': ros.stringToRosTemplate(properties.referenceId),
      'RegisterConfig': ros.stringToRosTemplate(properties.registerConfig),
      'SmartTagTemplateId': ros.stringToRosTemplate(properties.smartTagTemplateId),
      'Title': ros.stringToRosTemplate(properties.title),
      'UserData': ros.hashMapper(ros.objectToRosTemplate)(properties.userData),
      'WorkflowId': ros.stringToRosTemplate(properties.workflowId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::MediaInfo`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MediaInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
export class RosMediaInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::MediaInfo";

    /**
     * @Attribute MediaId: The ID of the media asset in IMS.
     */
    public readonly attrMediaId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
     * OSS URL in one of the following formats:
     * http(s):\/\/example-bucket.oss-cn-shanghai.aliyuncs.com\/example.mp4
     * oss:\/\/example-bucket\/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
     * URL of an ApsaraVideo VOD media asset
     * vod:\/\/***20b48fb04483915d4f2cd8ac****
     */
    public inputUrl: string | ros.IResolvable;

    /**
     * @Property businessType: The business type of the media asset. Valid values:
     * subtitles
     * watermark
     * opening
     * ending
     * general
     */
    public businessType: string | ros.IResolvable | undefined;

    /**
     * @Property cateId: The category ID.
     */
    public cateId: number | ros.IResolvable | undefined;

    /**
     * @Property coverUrl: The thumbnail URL of the media asset.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    public coverUrl: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the media asset.
     * The value can be up to 1,024 bytes in length.
     * The value must be encoded in UTF-8.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property mediaTags: The tags of the media asset.
     * Up to 16 tags are supported.
     * Separate multiple tags with commas (,).
     * Each tag can be up to 32 bytes in length.
     * The value must be encoded in UTF-8.
     */
    public mediaTags: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property mediaType: The type of the media asset. Valid values:
     * image
     * video
     * audio
     * text
     * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
     * .
     */
    public mediaType: string | ros.IResolvable | undefined;

    /**
     * @Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:
     * - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
     * - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
     */
    public overwrite: boolean | ros.IResolvable | undefined;

    /**
     * @Property referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
     */
    public referenceId: string | ros.IResolvable | undefined;

    /**
     * @Property registerConfig: The registration configurations.
     * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
     * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
     */
    public registerConfig: string | ros.IResolvable | undefined;

    /**
     * @Property smartTagTemplateId: The ID of the smart tagging template. Valid values:
     * S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
     * S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
     * S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
     * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
     */
    public smartTagTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
     * The value can be up to 128 bytes in length.
     * The value must be encoded in UTF-8.
     */
    public title: string | ros.IResolvable | undefined;

    /**
     * @Property userData: The user data. You can specify a custom callback URL.
     */
    public userData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property workflowId: The workflow ID.
     */
    public workflowId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMediaInfoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMediaInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMediaId = this.getAtt('MediaId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.inputUrl = props.inputUrl;
        this.businessType = props.businessType;
        this.cateId = props.cateId;
        this.coverUrl = props.coverUrl;
        this.description = props.description;
        this.mediaTags = props.mediaTags;
        this.mediaType = props.mediaType;
        this.overwrite = props.overwrite;
        this.referenceId = props.referenceId;
        this.registerConfig = props.registerConfig;
        this.smartTagTemplateId = props.smartTagTemplateId;
        this.title = props.title;
        this.userData = props.userData;
        this.workflowId = props.workflowId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            inputUrl: this.inputUrl,
            businessType: this.businessType,
            cateId: this.cateId,
            coverUrl: this.coverUrl,
            description: this.description,
            mediaTags: this.mediaTags,
            mediaType: this.mediaType,
            overwrite: this.overwrite,
            referenceId: this.referenceId,
            registerConfig: this.registerConfig,
            smartTagTemplateId: this.smartTagTemplateId,
            title: this.title,
            userData: this.userData,
            workflowId: this.workflowId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMediaInfoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSearchLibProps`
 *
 * @param properties - the TypeScript properties of a `RosSearchLibProps`
 *
 * @returns the result of the validation.
 */
function RosSearchLibPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('searchLibName', ros.requiredValidator)(properties.searchLibName));
    errors.collect(ros.propertyValidator('searchLibName', ros.validateString)(properties.searchLibName));
    return errors.wrap('supplied properties not correct for "RosSearchLibProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::SearchLib` resource
 *
 * @param properties - the TypeScript properties of a `RosSearchLibProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::SearchLib` resource.
 */
// @ts-ignore TS6133
function rosSearchLibPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSearchLibPropsValidator(properties).assertSuccess();
    }
    return {
      'SearchLibName': ros.stringToRosTemplate(properties.searchLibName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::SearchLib`, which is used to create a search library.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export class RosSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::SearchLib";

    /**
     * @Attribute SearchLibName: The name of the Search Lib.
     */
    public readonly attrSearchLibName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    public searchLibName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchLibProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSearchLib.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSearchLibName = this.getAtt('SearchLibName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.searchLibName = props.searchLibName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            searchLibName: this.searchLibName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSearchLibPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly fileInfo?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly mediaMetaData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
     */
    readonly postProcessConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property uploadTargetConfig: The destination storage address.
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    readonly uploadTargetConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
     */
    readonly userData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUploadMediaProps`
 *
 * @param properties - the TypeScript properties of a `RosUploadMediaProps`
 *
 * @returns the result of the validation.
 */
function RosUploadMediaPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entityId', ros.validateString)(properties.entityId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('fileInfo', ros.hashValidator(ros.validateAny))(properties.fileInfo));
    errors.collect(ros.propertyValidator('userData', ros.hashValidator(ros.validateAny))(properties.userData));
    errors.collect(ros.propertyValidator('uploadTargetConfig', ros.hashValidator(ros.validateAny))(properties.uploadTargetConfig));
    errors.collect(ros.propertyValidator('mediaMetaData', ros.hashValidator(ros.validateAny))(properties.mediaMetaData));
    errors.collect(ros.propertyValidator('postProcessConfig', ros.hashValidator(ros.validateAny))(properties.postProcessConfig));
    return errors.wrap('supplied properties not correct for "RosUploadMediaProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::UploadMedia` resource
 *
 * @param properties - the TypeScript properties of a `RosUploadMediaProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::UploadMedia` resource.
 */
// @ts-ignore TS6133
function rosUploadMediaPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUploadMediaPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'EntityId': ros.stringToRosTemplate(properties.entityId),
      'FileInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.fileInfo),
      'MediaMetaData': ros.hashMapper(ros.objectToRosTemplate)(properties.mediaMetaData),
      'PostProcessConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.postProcessConfig),
      'UploadTargetConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.uploadTargetConfig),
      'UserData': ros.hashMapper(ros.objectToRosTemplate)(properties.userData),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::UploadMedia`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UploadMedia` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
 */
export class RosUploadMedia extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::UploadMedia";

    /**
     * @Attribute FileURL: The OSS URL of the file. The URL does not contain the information used for authentication.
     */
    public readonly attrFileUrl: ros.IResolvable;

    /**
     * @Attribute MediaId: The ID of the media asset.
     */
    public readonly attrMediaId: ros.IResolvable;

    /**
     * @Attribute MediaURL: The URL of the media asset.
Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
     */
    public readonly attrMediaUrl: ros.IResolvable;

    /**
     * @Attribute UploadAddress: The upload URL.
Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    public readonly attrUploadAddress: ros.IResolvable;

    /**
     * @Attribute UploadAuth: The upload credential.
Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
     */
    public readonly attrUploadAuth: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The application ID. Default value: app-1000000.
     */
    public appId: string | ros.IResolvable | undefined;

    /**
     * @Property entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
     */
    public entityId: string | ros.IResolvable | undefined;

    /**
     * @Property fileInfo: The file information, which is in the JSON format and contains the following fields:
     * Type: required. The file type. Valid values: video, image, audio, text, and other.
     * Name: required. The file name without the extension.
     * Size: optional. The file size.
     * Ext: required. The file name extension.
     */
    public fileInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

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
    public mediaMetaData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
     */
    public postProcessConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property uploadTargetConfig: The destination storage address.
     * Set StorageType to oss.
     * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
     */
    public uploadTargetConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
     */
    public userData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUploadMediaProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUploadMedia.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileUrl = this.getAtt('FileURL');
        this.attrMediaId = this.getAtt('MediaId');
        this.attrMediaUrl = this.getAtt('MediaURL');
        this.attrUploadAddress = this.getAtt('UploadAddress');
        this.attrUploadAuth = this.getAtt('UploadAuth');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.entityId = props.entityId;
        this.fileInfo = props.fileInfo;
        this.mediaMetaData = props.mediaMetaData;
        this.postProcessConfig = props.postProcessConfig;
        this.uploadTargetConfig = props.uploadTargetConfig;
        this.userData = props.userData;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            entityId: this.entityId,
            fileInfo: this.fileInfo,
            mediaMetaData: this.mediaMetaData,
            postProcessConfig: this.postProcessConfig,
            uploadTargetConfig: this.uploadTargetConfig,
            userData: this.userData,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUploadMediaPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
