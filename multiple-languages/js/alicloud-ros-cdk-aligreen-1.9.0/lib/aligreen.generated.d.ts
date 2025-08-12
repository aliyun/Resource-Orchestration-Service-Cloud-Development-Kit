import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAuditCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
export interface RosAuditCallbackProps {
    /**
     * @Property auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    readonly auditCallbackName: string | ros.IResolvable;
    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    readonly callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    readonly callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
     */
    readonly cryptType: string | ros.IResolvable;
    /**
     * @Property url: The detection result will be called back to the url.
     */
    readonly url: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::AuditCallback`, which is used to create an audit callback.
 * @Note This class does not contain additional functions, so it is recommended to use the `AuditCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
export declare class RosAuditCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::AuditCallback";
    /**
     * @Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    readonly attrAuditCallbackName: ros.IResolvable;
    /**
     * @Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable;
    /**
     * @Attribute CallbackTypes: A list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable;
    /**
     * @Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    readonly attrCryptType: ros.IResolvable;
    /**
     * @Attribute Url: The detection result will be called back to the url.
     */
    readonly attrUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    auditCallbackName: string | ros.IResolvable;
    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
     */
    cryptType: string | ros.IResolvable;
    /**
     * @Property url: The detection result will be called back to the url.
     */
    url: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditCallbackProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBizType`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
export interface RosBizTypeProps {
    /**
     * @Property bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
     */
    readonly bizTypeName: string | ros.IResolvable;
    /**
     * @Property citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
     * true: imports the configuration of an industry template.
     * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
     */
    readonly citeTemplate: boolean | ros.IResolvable;
    /**
     * @Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
     */
    readonly bizTypeImport?: string | ros.IResolvable;
    /**
     * @Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
     */
    readonly industryInfo?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::BizType`, which is used to create a business scenario.
 * @Note This class does not contain additional functions, so it is recommended to use the `BizType` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
export declare class RosBizType extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::BizType";
    /**
     * @Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    readonly attrBizTypeName: ros.IResolvable;
    /**
     * @Attribute CiteTemplate: Specifies whether to import the configuration of an industry template. Default value: false.
     */
    readonly attrCiteTemplate: ros.IResolvable;
    /**
     * @Attribute Description: The description of the business scenario defined by the customer.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IndustryInfo: The industry classification.
     */
    readonly attrIndustryInfo: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
     */
    bizTypeName: string | ros.IResolvable;
    /**
     * @Property citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
     * true: imports the configuration of an industry template.
     * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
     */
    citeTemplate: boolean | ros.IResolvable;
    /**
     * @Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
     */
    bizTypeImport: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
     */
    industryInfo: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBizTypeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
export interface RosCallbackProps {
    /**
     * @Property callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    readonly callbackName: string | ros.IResolvable;
    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    readonly callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    readonly callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackUrl: The detection result will be called back to the url.
     */
    readonly callbackUrl: string | ros.IResolvable;
    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
     */
    readonly cryptType?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::Callback`, which is used to create a callback.
 * @Note This class does not contain additional functions, so it is recommended to use the `Callback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
export declare class RosCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::Callback";
    /**
     * @Attribute CallbackId: The ID of the primary key of the Callback.
     */
    readonly attrCallbackId: ros.IResolvable;
    /**
     * @Attribute CallbackName: The Callback name defined by the customer.
     */
    readonly attrCallbackName: ros.IResolvable;
    /**
     * @Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable;
    /**
     * @Attribute CallbackTypes: The list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable;
    /**
     * @Attribute CallbackUrl: The detection result will be called back to the url.
     */
    readonly attrCallbackUrl: ros.IResolvable;
    /**
     * @Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
     */
    readonly attrCryptType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    callbackName: string | ros.IResolvable;
    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property callbackUrl: The detection result will be called back to the url.
     */
    callbackUrl: string | ros.IResolvable;
    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
     */
    cryptType: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCallbackProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosImageLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export interface RosImageLibProps {
    /**
     * @Property category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
     */
    readonly category: string | ros.IResolvable;
    /**
     * @Property imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    readonly imageLibName: string | ros.IResolvable;
    /**
     * @Property scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
     */
    readonly scene: string | ros.IResolvable;
    /**
     * @Property bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
     */
    readonly bizTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property enable: Specifies whether to enable the image library. Valid values:
     * true: Enable the image library. This is the default value. false: Disable the image library.
     */
    readonly enable?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::ImageLib`, which is used to create a custom image library.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export declare class RosImageLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::ImageLib";
    /**
     * @Attribute BizTypes: List of business scenarios.
     */
    readonly attrBizTypes: ros.IResolvable;
    /**
     * @Attribute Category: The category of the image library.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute Enable: Specifies whether to enable the image library.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * @Attribute ImageLibId: The ID of the primary key of the image library.
     */
    readonly attrImageLibId: ros.IResolvable;
    /**
     * @Attribute ImageLibName: The name of the image library defined by the customer.
     */
    readonly attrImageLibName: ros.IResolvable;
    /**
     * @Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    readonly attrScene: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
     */
    category: string | ros.IResolvable;
    /**
     * @Property imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    imageLibName: string | ros.IResolvable;
    /**
     * @Property scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
     */
    scene: string | ros.IResolvable;
    /**
     * @Property bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
     */
    bizTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property enable: Specifies whether to enable the image library. Valid values:
     * true: Enable the image library. This is the default value. false: Disable the image library.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageLibProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosKeywordLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
export interface RosKeywordLibProps {
    /**
     * @Property keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    readonly keywordLibName: string | ros.IResolvable;
    /**
     * @Property resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * @Property bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
     */
    readonly bizTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property category: The category of the text library. Valid values:
     * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property language: Language used by the text Library. Example: zh:Chinese、en:English
     */
    readonly language?: string | ros.IResolvable;
    /**
     * @Property libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
     */
    readonly libType?: string | ros.IResolvable;
    /**
     * @Property matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
     */
    readonly matchMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::KeywordLib`, which is used to create a custom text library.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeywordLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
export declare class RosKeywordLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::KeywordLib";
    /**
     * @Attribute BizTypes: The business scenario.
     */
    readonly attrBizTypes: ros.IResolvable;
    /**
     * @Attribute Category: The category of the text library.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute Enable: Specifies whether to enable text library.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * @Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    readonly attrKeywordLibId: ros.IResolvable;
    /**
     * @Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    readonly attrKeywordLibName: ros.IResolvable;
    /**
     * @Attribute Language: Language used by the text Library.
     */
    readonly attrLanguage: ros.IResolvable;
    /**
     * @Attribute LibType: The category of the text library in each moderation scenario.
     */
    readonly attrLibType: ros.IResolvable;
    /**
     * @Attribute MatchMode: The matching method.
     */
    readonly attrMatchMode: ros.IResolvable;
    /**
     * @Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    readonly attrResourceType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    keywordLibName: string | ros.IResolvable;
    /**
     * @Property resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
     */
    resourceType: string | ros.IResolvable;
    /**
     * @Property bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
     */
    bizTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property category: The category of the text library. Valid values:
     * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property language: Language used by the text Library. Example: zh:Chinese、en:English
     */
    language: string | ros.IResolvable | undefined;
    /**
     * @Property libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
     */
    libType: string | ros.IResolvable | undefined;
    /**
     * @Property matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
     */
    matchMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeywordLibProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosOssStockTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
export interface RosOssStockTaskProps {
    /**
     * @Property buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
     */
    readonly buckets: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
     */
    readonly startDate: string | ros.IResolvable;
    /**
     * @Property audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
     */
    readonly audioAntispamFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly audioAutoFreezeOpened?: boolean | ros.IResolvable;
    /**
     * @Property audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
     */
    readonly audioMaxSize?: number | ros.IResolvable;
    /**
     * @Property audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
     */
    readonly audioOpened?: boolean | ros.IResolvable;
    /**
     * @Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
     */
    readonly audioScanLimit?: number | ros.IResolvable;
    /**
     * @Property audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
     */
    readonly audioScenes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
     */
    readonly autoFreezeType?: string | ros.IResolvable;
    /**
     * @Property bizType: Business scenarios used by the oss stock scan task.
     */
    readonly bizType?: string | ros.IResolvable;
    /**
     * @Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    readonly callbackId?: number | ros.IResolvable;
    /**
     * @Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
     */
    readonly endDate?: string | ros.IResolvable;
    /**
     * @Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageAdFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    readonly imageAutoFreezeOpened?: boolean | ros.IResolvable;
    /**
     * @Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageLiveFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
     */
    readonly imageOpened?: boolean | ros.IResolvable;
    /**
     * @Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imagePornFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
     */
    readonly imageScanLimit?: number | ros.IResolvable;
    /**
     * @Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection.
     */
    readonly imageScenes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageTerrorismFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property ossStockTaskName: The name of the oss stock scan task.
     */
    readonly ossStockTaskName?: string | ros.IResolvable;
    /**
     * @Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
     */
    readonly scanImageNoFileType?: boolean | ros.IResolvable;
    /**
     * @Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoAdFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly videoAutoFreezeOpened?: boolean | ros.IResolvable;
    /**
     * @Property videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
     */
    readonly videoFrameInterval?: number | ros.IResolvable;
    /**
     * @Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoLiveFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
     */
    readonly videoMaxFrames?: number | ros.IResolvable;
    /**
     * @Property videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
     */
    readonly videoMaxSize?: number | ros.IResolvable;
    /**
     * @Property videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
     */
    readonly videoOpened?: boolean | ros.IResolvable;
    /**
     * @Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
     */
    readonly videoPornFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
     */
    readonly videoScanLimit?: number | ros.IResolvable;
    /**
     * @Property videoScenes: The video detection scenarios included in the oss stock scan task.
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection
     * antispam: Video voice antispam.
     */
    readonly videoScenes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoTerrorismFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoVoiceAntispamFreezeConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::OssStockTask`, which is used to create a full scan task for Object Storage Service (OSS) buckets.
 * @Note This class does not contain additional functions, so it is recommended to use the `OssStockTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
export declare class RosOssStockTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::OssStockTask";
    /**
     * @Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
     */
    readonly attrAudioAntispamFreezeConfig: ros.IResolvable;
    /**
     * @Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly attrAudioAutoFreezeOpened: ros.IResolvable;
    /**
     * @Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
     */
    readonly attrAudioMaxSize: ros.IResolvable;
    /**
     * @Attribute AudioOpened: oss stock scan task detect audio.
     */
    readonly attrAudioOpened: ros.IResolvable;
    /**
     * @Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
     */
    readonly attrAudioScanLimit: ros.IResolvable;
    /**
     * @Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to antispam.
     */
    readonly attrAudioScenes: ros.IResolvable;
    /**
     * @Attribute AutoFreezeType: Automatic freeze type.
     */
    readonly attrAutoFreezeType: ros.IResolvable;
    /**
     * @Attribute BizType: Business scenarios used by the oss stock scan task.
     */
    readonly attrBizType: ros.IResolvable;
    /**
     * @Attribute Buckets: The bucket configuration list of the oss stock scan task.
     */
    readonly attrBuckets: ros.IResolvable;
    /**
     * @Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    readonly attrCallbackId: ros.IResolvable;
    /**
     * @Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
     */
    readonly attrEndDate: ros.IResolvable;
    /**
     * @Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
     */
    readonly attrImageAdFreezeConfig: ros.IResolvable;
    /**
     * @Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    readonly attrImageAutoFreezeOpened: ros.IResolvable;
    /**
     * @Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
     */
    readonly attrImageLiveFreezeConfig: ros.IResolvable;
    /**
     * @Attribute ImageOpened: oss stock scan task detect images.
     */
    readonly attrImageOpened: ros.IResolvable;
    /**
     * @Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
     */
    readonly attrImagePornFreezeConfig: ros.IResolvable;
    /**
     * @Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
     */
    readonly attrImageScanLimit: ros.IResolvable;
    /**
     * @Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
     */
    readonly attrImageScenes: ros.IResolvable;
    /**
     * @Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
     */
    readonly attrImageTerrorismFreezeConfig: ros.IResolvable;
    /**
     * @Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
     */
    readonly attrScanImageNoFileType: ros.IResolvable;
    /**
     * @Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
     */
    readonly attrStartDate: ros.IResolvable;
    /**
     * @Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
     */
    readonly attrVideoAdFreezeConfig: ros.IResolvable;
    /**
     * @Attribute VideoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly attrVideoAutoFreezeOpened: ros.IResolvable;
    /**
     * @Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
     */
    readonly attrVideoFrameInterval: ros.IResolvable;
    /**
     * @Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
     */
    readonly attrVideoLiveFreezeConfig: ros.IResolvable;
    /**
     * @Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
     */
    readonly attrVideoMaxFrames: ros.IResolvable;
    /**
     * @Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
     */
    readonly attrVideoMaxSize: ros.IResolvable;
    /**
     * @Attribute VideoOpened: oss stock scan task detect video.
     */
    readonly attrVideoOpened: ros.IResolvable;
    /**
     * @Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
     */
    readonly attrVideoPornFreezeConfig: ros.IResolvable;
    /**
     * @Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
     */
    readonly attrVideoScanLimit: ros.IResolvable;
    /**
     * @Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
     */
    readonly attrVideoScenes: ros.IResolvable;
    /**
     * @Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
     */
    readonly attrVideoTerrorismFreezeConfig: ros.IResolvable;
    /**
     * @Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
     */
    readonly attrVideoVoiceAntispamFreezeConfig: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
     */
    buckets: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
     */
    startDate: string | ros.IResolvable;
    /**
     * @Property audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
     */
    audioAntispamFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    audioAutoFreezeOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
     */
    audioMaxSize: number | ros.IResolvable | undefined;
    /**
     * @Property audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
     */
    audioOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
     */
    audioScanLimit: number | ros.IResolvable | undefined;
    /**
     * @Property audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
     */
    audioScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
     */
    autoFreezeType: string | ros.IResolvable | undefined;
    /**
     * @Property bizType: Business scenarios used by the oss stock scan task.
     */
    bizType: string | ros.IResolvable | undefined;
    /**
     * @Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    callbackId: number | ros.IResolvable | undefined;
    /**
     * @Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
     */
    endDate: string | ros.IResolvable | undefined;
    /**
     * @Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    imageAdFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    imageAutoFreezeOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    imageLiveFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
     */
    imageOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    imagePornFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
     */
    imageScanLimit: number | ros.IResolvable | undefined;
    /**
     * @Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection.
     */
    imageScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    imageTerrorismFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property ossStockTaskName: The name of the oss stock scan task.
     */
    ossStockTaskName: string | ros.IResolvable | undefined;
    /**
     * @Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
     */
    scanImageNoFileType: boolean | ros.IResolvable | undefined;
    /**
     * @Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    videoAdFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    videoAutoFreezeOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
     */
    videoFrameInterval: number | ros.IResolvable | undefined;
    /**
     * @Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    videoLiveFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
     */
    videoMaxFrames: number | ros.IResolvable | undefined;
    /**
     * @Property videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
     */
    videoMaxSize: number | ros.IResolvable | undefined;
    /**
     * @Property videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
     */
    videoOpened: boolean | ros.IResolvable | undefined;
    /**
     * @Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
     */
    videoPornFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
     */
    videoScanLimit: number | ros.IResolvable | undefined;
    /**
     * @Property videoScenes: The video detection scenarios included in the oss stock scan task.
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection
     * antispam: Video voice antispam.
     */
    videoScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    videoTerrorismFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    videoVoiceAntispamFreezeConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOssStockTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
