// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAuditCallbackProps`
 *
 * @param properties - the TypeScript properties of a `RosAuditCallbackProps`
 *
 * @returns the result of the validation.
 */
function RosAuditCallbackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cryptType', ros.requiredValidator)(properties.cryptType));
    if(properties.cryptType && (typeof properties.cryptType) !== 'object') {
        errors.collect(ros.propertyValidator('cryptType', ros.validateAllowedValues)({
          data: properties.cryptType,
          allowedValues: ["SHA256","SM3"],
        }));
    }
    errors.collect(ros.propertyValidator('cryptType', ros.validateString)(properties.cryptType));
    errors.collect(ros.propertyValidator('callbackTypes', ros.requiredValidator)(properties.callbackTypes));
    if(properties.callbackTypes && (Array.isArray(properties.callbackTypes) || (typeof properties.callbackTypes) === 'string')) {
        errors.collect(ros.propertyValidator('callbackTypes', ros.validateLength)({
            data: properties.callbackTypes.length,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('callbackTypes', ros.listValidator(ros.validateString))(properties.callbackTypes));
    errors.collect(ros.propertyValidator('auditCallbackName', ros.requiredValidator)(properties.auditCallbackName));
    errors.collect(ros.propertyValidator('auditCallbackName', ros.validateString)(properties.auditCallbackName));
    errors.collect(ros.propertyValidator('url', ros.requiredValidator)(properties.url));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    errors.collect(ros.propertyValidator('callbackSuggestions', ros.requiredValidator)(properties.callbackSuggestions));
    if(properties.callbackSuggestions && (Array.isArray(properties.callbackSuggestions) || (typeof properties.callbackSuggestions) === 'string')) {
        errors.collect(ros.propertyValidator('callbackSuggestions', ros.validateLength)({
            data: properties.callbackSuggestions.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('callbackSuggestions', ros.listValidator(ros.validateString))(properties.callbackSuggestions));
    return errors.wrap('supplied properties not correct for "RosAuditCallbackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::AuditCallback` resource
 *
 * @param properties - the TypeScript properties of a `RosAuditCallbackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::AuditCallback` resource.
 */
// @ts-ignore TS6133
function rosAuditCallbackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAuditCallbackPropsValidator(properties).assertSuccess();
    }
    return {
      'AuditCallbackName': ros.stringToRosTemplate(properties.auditCallbackName),
      'CallbackSuggestions': ros.listMapper(ros.stringToRosTemplate)(properties.callbackSuggestions),
      'CallbackTypes': ros.listMapper(ros.stringToRosTemplate)(properties.callbackTypes),
      'CryptType': ros.stringToRosTemplate(properties.cryptType),
      'Url': ros.stringToRosTemplate(properties.url),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::AuditCallback`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AuditCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
export class RosAuditCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::AuditCallback";

    /**
     * @Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    public readonly attrAuditCallbackName: ros.IResolvable;

    /**
     * @Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    public readonly attrCallbackSuggestions: ros.IResolvable;

    /**
     * @Attribute CallbackTypes: A list of Callback types.
     */
    public readonly attrCallbackTypes: ros.IResolvable;

    /**
     * @Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    public readonly attrCryptType: ros.IResolvable;

    /**
     * @Attribute Url: The detection result will be called back to the url.
     */
    public readonly attrUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    public auditCallbackName: string | ros.IResolvable;

    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    public callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    public callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
     */
    public cryptType: string | ros.IResolvable;

    /**
     * @Property url: The detection result will be called back to the url.
     */
    public url: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditCallbackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAuditCallback.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuditCallbackName = this.getAtt('AuditCallbackName');
        this.attrCallbackSuggestions = this.getAtt('CallbackSuggestions');
        this.attrCallbackTypes = this.getAtt('CallbackTypes');
        this.attrCryptType = this.getAtt('CryptType');
        this.attrUrl = this.getAtt('Url');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.auditCallbackName = props.auditCallbackName;
        this.callbackSuggestions = props.callbackSuggestions;
        this.callbackTypes = props.callbackTypes;
        this.cryptType = props.cryptType;
        this.url = props.url;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            auditCallbackName: this.auditCallbackName,
            callbackSuggestions: this.callbackSuggestions,
            callbackTypes: this.callbackTypes,
            cryptType: this.cryptType,
            url: this.url,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAuditCallbackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosBizTypeProps`
 *
 * @param properties - the TypeScript properties of a `RosBizTypeProps`
 *
 * @returns the result of the validation.
 */
function RosBizTypePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bizTypeImport', ros.validateString)(properties.bizTypeImport));
    errors.collect(ros.propertyValidator('bizTypeName', ros.requiredValidator)(properties.bizTypeName));
    errors.collect(ros.propertyValidator('bizTypeName', ros.validateString)(properties.bizTypeName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('citeTemplate', ros.requiredValidator)(properties.citeTemplate));
    errors.collect(ros.propertyValidator('citeTemplate', ros.validateBoolean)(properties.citeTemplate));
    errors.collect(ros.propertyValidator('industryInfo', ros.validateString)(properties.industryInfo));
    return errors.wrap('supplied properties not correct for "RosBizTypeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::BizType` resource
 *
 * @param properties - the TypeScript properties of a `RosBizTypeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::BizType` resource.
 */
// @ts-ignore TS6133
function rosBizTypePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBizTypePropsValidator(properties).assertSuccess();
    }
    return {
      'BizTypeName': ros.stringToRosTemplate(properties.bizTypeName),
      'CiteTemplate': ros.booleanToRosTemplate(properties.citeTemplate),
      'BizTypeImport': ros.stringToRosTemplate(properties.bizTypeImport),
      'Description': ros.stringToRosTemplate(properties.description),
      'IndustryInfo': ros.stringToRosTemplate(properties.industryInfo),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::BizType`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BizType` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
export class RosBizType extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::BizType";

    /**
     * @Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    public readonly attrBizTypeName: ros.IResolvable;

    /**
     * @Attribute CiteTemplate: Specifies whether to import the configuration of an industry template. Default value: false.
     */
    public readonly attrCiteTemplate: ros.IResolvable;

    /**
     * @Attribute Description: The description of the business scenario defined by the customer.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IndustryInfo: The industry classification.
     */
    public readonly attrIndustryInfo: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
     */
    public bizTypeName: string | ros.IResolvable;

    /**
     * @Property citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
     * true: imports the configuration of an industry template.
     * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
     */
    public citeTemplate: boolean | ros.IResolvable;

    /**
     * @Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
     */
    public bizTypeImport: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
     */
    public industryInfo: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBizTypeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBizType.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBizTypeName = this.getAtt('BizTypeName');
        this.attrCiteTemplate = this.getAtt('CiteTemplate');
        this.attrDescription = this.getAtt('Description');
        this.attrIndustryInfo = this.getAtt('IndustryInfo');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bizTypeName = props.bizTypeName;
        this.citeTemplate = props.citeTemplate;
        this.bizTypeImport = props.bizTypeImport;
        this.description = props.description;
        this.industryInfo = props.industryInfo;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bizTypeName: this.bizTypeName,
            citeTemplate: this.citeTemplate,
            bizTypeImport: this.bizTypeImport,
            description: this.description,
            industryInfo: this.industryInfo,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBizTypePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosCallbackProps`
 *
 * @param properties - the TypeScript properties of a `RosCallbackProps`
 *
 * @returns the result of the validation.
 */
function RosCallbackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('callbackUrl', ros.requiredValidator)(properties.callbackUrl));
    errors.collect(ros.propertyValidator('callbackUrl', ros.validateString)(properties.callbackUrl));
    if(properties.cryptType && (typeof properties.cryptType) !== 'object') {
        errors.collect(ros.propertyValidator('cryptType', ros.validateAllowedValues)({
          data: properties.cryptType,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('cryptType', ros.validateNumber)(properties.cryptType));
    errors.collect(ros.propertyValidator('callbackName', ros.requiredValidator)(properties.callbackName));
    errors.collect(ros.propertyValidator('callbackName', ros.validateString)(properties.callbackName));
    errors.collect(ros.propertyValidator('callbackTypes', ros.requiredValidator)(properties.callbackTypes));
    if(properties.callbackTypes && (Array.isArray(properties.callbackTypes) || (typeof properties.callbackTypes) === 'string')) {
        errors.collect(ros.propertyValidator('callbackTypes', ros.validateLength)({
            data: properties.callbackTypes.length,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('callbackTypes', ros.listValidator(ros.validateString))(properties.callbackTypes));
    errors.collect(ros.propertyValidator('callbackSuggestions', ros.requiredValidator)(properties.callbackSuggestions));
    if(properties.callbackSuggestions && (Array.isArray(properties.callbackSuggestions) || (typeof properties.callbackSuggestions) === 'string')) {
        errors.collect(ros.propertyValidator('callbackSuggestions', ros.validateLength)({
            data: properties.callbackSuggestions.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('callbackSuggestions', ros.listValidator(ros.validateString))(properties.callbackSuggestions));
    return errors.wrap('supplied properties not correct for "RosCallbackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::Callback` resource
 *
 * @param properties - the TypeScript properties of a `RosCallbackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::Callback` resource.
 */
// @ts-ignore TS6133
function rosCallbackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCallbackPropsValidator(properties).assertSuccess();
    }
    return {
      'CallbackName': ros.stringToRosTemplate(properties.callbackName),
      'CallbackSuggestions': ros.listMapper(ros.stringToRosTemplate)(properties.callbackSuggestions),
      'CallbackTypes': ros.listMapper(ros.stringToRosTemplate)(properties.callbackTypes),
      'CallbackUrl': ros.stringToRosTemplate(properties.callbackUrl),
      'CryptType': ros.numberToRosTemplate(properties.cryptType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::Callback`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Callback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
export class RosCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::Callback";

    /**
     * @Attribute CallbackId: The ID of the primary key of the Callback.
     */
    public readonly attrCallbackId: ros.IResolvable;

    /**
     * @Attribute CallbackName: The Callback name defined by the customer.
     */
    public readonly attrCallbackName: ros.IResolvable;

    /**
     * @Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    public readonly attrCallbackSuggestions: ros.IResolvable;

    /**
     * @Attribute CallbackTypes: The list of Callback types.
     */
    public readonly attrCallbackTypes: ros.IResolvable;

    /**
     * @Attribute CallbackUrl: The detection result will be called back to the url.
     */
    public readonly attrCallbackUrl: ros.IResolvable;

    /**
     * @Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
     */
    public readonly attrCryptType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    public callbackName: string | ros.IResolvable;

    /**
     * @Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    public callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    public callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property callbackUrl: The detection result will be called back to the url.
     */
    public callbackUrl: string | ros.IResolvable;

    /**
     * @Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
     */
    public cryptType: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCallbackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCallback.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCallbackId = this.getAtt('CallbackId');
        this.attrCallbackName = this.getAtt('CallbackName');
        this.attrCallbackSuggestions = this.getAtt('CallbackSuggestions');
        this.attrCallbackTypes = this.getAtt('CallbackTypes');
        this.attrCallbackUrl = this.getAtt('CallbackUrl');
        this.attrCryptType = this.getAtt('CryptType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.callbackName = props.callbackName;
        this.callbackSuggestions = props.callbackSuggestions;
        this.callbackTypes = props.callbackTypes;
        this.callbackUrl = props.callbackUrl;
        this.cryptType = props.cryptType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            callbackName: this.callbackName,
            callbackSuggestions: this.callbackSuggestions,
            callbackTypes: this.callbackTypes,
            callbackUrl: this.callbackUrl,
            cryptType: this.cryptType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCallbackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosImageLibProps`
 *
 * @param properties - the TypeScript properties of a `RosImageLibProps`
 *
 * @returns the result of the validation.
 */
function RosImageLibPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["BLACK","WHITE","REVIEW"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    if(properties.bizTypes && (Array.isArray(properties.bizTypes) || (typeof properties.bizTypes) === 'string')) {
        errors.collect(ros.propertyValidator('bizTypes', ros.validateLength)({
            data: properties.bizTypes.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('bizTypes', ros.listValidator(ros.validateString))(properties.bizTypes));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('scene', ros.requiredValidator)(properties.scene));
    if(properties.scene && (typeof properties.scene) !== 'object') {
        errors.collect(ros.propertyValidator('scene', ros.validateAllowedValues)({
          data: properties.scene,
          allowedValues: ["PORN","AD","ILLEGAL"],
        }));
    }
    errors.collect(ros.propertyValidator('scene', ros.validateString)(properties.scene));
    errors.collect(ros.propertyValidator('imageLibName', ros.requiredValidator)(properties.imageLibName));
    errors.collect(ros.propertyValidator('imageLibName', ros.validateString)(properties.imageLibName));
    return errors.wrap('supplied properties not correct for "RosImageLibProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::ImageLib` resource
 *
 * @param properties - the TypeScript properties of a `RosImageLibProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::ImageLib` resource.
 */
// @ts-ignore TS6133
function rosImageLibPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageLibPropsValidator(properties).assertSuccess();
    }
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'ImageLibName': ros.stringToRosTemplate(properties.imageLibName),
      'Scene': ros.stringToRosTemplate(properties.scene),
      'BizTypes': ros.listMapper(ros.stringToRosTemplate)(properties.bizTypes),
      'Enable': ros.booleanToRosTemplate(properties.enable),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::ImageLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export class RosImageLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::ImageLib";

    /**
     * @Attribute BizTypes: List of business scenarios.
     */
    public readonly attrBizTypes: ros.IResolvable;

    /**
     * @Attribute Category: The category of the image library.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute Enable: Specifies whether to enable the image library.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute ImageLibId: The ID of the primary key of the image library.
     */
    public readonly attrImageLibId: ros.IResolvable;

    /**
     * @Attribute ImageLibName: The name of the image library defined by the customer.
     */
    public readonly attrImageLibName: ros.IResolvable;

    /**
     * @Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    public readonly attrScene: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
     */
    public category: string | ros.IResolvable;

    /**
     * @Property imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    public imageLibName: string | ros.IResolvable;

    /**
     * @Property scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
     */
    public scene: string | ros.IResolvable;

    /**
     * @Property bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
     */
    public bizTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property enable: Specifies whether to enable the image library. Valid values:
     * true: Enable the image library. This is the default value. false: Disable the image library.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageLibProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageLib.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBizTypes = this.getAtt('BizTypes');
        this.attrCategory = this.getAtt('Category');
        this.attrEnable = this.getAtt('Enable');
        this.attrImageLibId = this.getAtt('ImageLibId');
        this.attrImageLibName = this.getAtt('ImageLibName');
        this.attrScene = this.getAtt('Scene');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.imageLibName = props.imageLibName;
        this.scene = props.scene;
        this.bizTypes = props.bizTypes;
        this.enable = props.enable;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            imageLibName: this.imageLibName,
            scene: this.scene,
            bizTypes: this.bizTypes,
            enable: this.enable,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageLibPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosKeywordLibProps`
 *
 * @param properties - the TypeScript properties of a `RosKeywordLibProps`
 *
 * @returns the result of the validation.
 */
function RosKeywordLibPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.matchMode && (typeof properties.matchMode) !== 'object') {
        errors.collect(ros.propertyValidator('matchMode', ros.validateAllowedValues)({
          data: properties.matchMode,
          allowedValues: ["fuzzy","precise"],
        }));
    }
    errors.collect(ros.propertyValidator('matchMode', ros.validateString)(properties.matchMode));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["BLACK","WHITE","REVIEW"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('language', ros.validateString)(properties.language));
    if(properties.bizTypes && (Array.isArray(properties.bizTypes) || (typeof properties.bizTypes) === 'string')) {
        errors.collect(ros.propertyValidator('bizTypes', ros.validateLength)({
            data: properties.bizTypes.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('bizTypes', ros.listValidator(ros.validateString))(properties.bizTypes));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["TEXT","IMAGE","VOICE"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    if(properties.libType && (typeof properties.libType) !== 'object') {
        errors.collect(ros.propertyValidator('libType', ros.validateAllowedValues)({
          data: properties.libType,
          allowedValues: ["textKeyword","similarText","voiceText"],
        }));
    }
    errors.collect(ros.propertyValidator('libType', ros.validateString)(properties.libType));
    errors.collect(ros.propertyValidator('keywordLibName', ros.requiredValidator)(properties.keywordLibName));
    errors.collect(ros.propertyValidator('keywordLibName', ros.validateString)(properties.keywordLibName));
    return errors.wrap('supplied properties not correct for "RosKeywordLibProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::KeywordLib` resource
 *
 * @param properties - the TypeScript properties of a `RosKeywordLibProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::KeywordLib` resource.
 */
// @ts-ignore TS6133
function rosKeywordLibPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeywordLibPropsValidator(properties).assertSuccess();
    }
    return {
      'KeywordLibName': ros.stringToRosTemplate(properties.keywordLibName),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'BizTypes': ros.listMapper(ros.stringToRosTemplate)(properties.bizTypes),
      'Category': ros.stringToRosTemplate(properties.category),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'Language': ros.stringToRosTemplate(properties.language),
      'LibType': ros.stringToRosTemplate(properties.libType),
      'MatchMode': ros.stringToRosTemplate(properties.matchMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::KeywordLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeywordLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
export class RosKeywordLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::KeywordLib";

    /**
     * @Attribute BizTypes: The business scenario.
     */
    public readonly attrBizTypes: ros.IResolvable;

    /**
     * @Attribute Category: The category of the text library.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute Enable: Specifies whether to enable text library.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    public readonly attrKeywordLibId: ros.IResolvable;

    /**
     * @Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    public readonly attrKeywordLibName: ros.IResolvable;

    /**
     * @Attribute Language: Language used by the text Library.
     */
    public readonly attrLanguage: ros.IResolvable;

    /**
     * @Attribute LibType: The category of the text library in each moderation scenario.
     */
    public readonly attrLibType: ros.IResolvable;

    /**
     * @Attribute MatchMode: The matching method.
     */
    public readonly attrMatchMode: ros.IResolvable;

    /**
     * @Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    public readonly attrResourceType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    public keywordLibName: string | ros.IResolvable;

    /**
     * @Property resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
     */
    public resourceType: string | ros.IResolvable;

    /**
     * @Property bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
     */
    public bizTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property category: The category of the text library. Valid values:
     * BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property language: Language used by the text Library. Example: zh:Chinese、en:English
     */
    public language: string | ros.IResolvable | undefined;

    /**
     * @Property libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
     */
    public libType: string | ros.IResolvable | undefined;

    /**
     * @Property matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
     */
    public matchMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeywordLibProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeywordLib.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBizTypes = this.getAtt('BizTypes');
        this.attrCategory = this.getAtt('Category');
        this.attrEnable = this.getAtt('Enable');
        this.attrKeywordLibId = this.getAtt('KeywordLibId');
        this.attrKeywordLibName = this.getAtt('KeywordLibName');
        this.attrLanguage = this.getAtt('Language');
        this.attrLibType = this.getAtt('LibType');
        this.attrMatchMode = this.getAtt('MatchMode');
        this.attrResourceType = this.getAtt('ResourceType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keywordLibName = props.keywordLibName;
        this.resourceType = props.resourceType;
        this.bizTypes = props.bizTypes;
        this.category = props.category;
        this.enable = props.enable;
        this.language = props.language;
        this.libType = props.libType;
        this.matchMode = props.matchMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keywordLibName: this.keywordLibName,
            resourceType: this.resourceType,
            bizTypes: this.bizTypes,
            category: this.category,
            enable: this.enable,
            language: this.language,
            libType: this.libType,
            matchMode: this.matchMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeywordLibPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly audioAntispamFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly imageAdFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    readonly imageAutoFreezeOpened?: boolean | ros.IResolvable;

    /**
     * @Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageLiveFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
     */
    readonly imageOpened?: boolean | ros.IResolvable;

    /**
     * @Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imagePornFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly imageTerrorismFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly videoAdFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly videoLiveFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly videoPornFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly videoTerrorismFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoVoiceAntispamFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOssStockTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosOssStockTaskProps`
 *
 * @returns the result of the validation.
 */
function RosOssStockTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageOpened', ros.validateBoolean)(properties.imageOpened));
    errors.collect(ros.propertyValidator('audioAntispamFreezeConfig', ros.hashValidator(ros.validateAny))(properties.audioAntispamFreezeConfig));
    errors.collect(ros.propertyValidator('ossStockTaskName', ros.validateString)(properties.ossStockTaskName));
    errors.collect(ros.propertyValidator('scanImageNoFileType', ros.validateBoolean)(properties.scanImageNoFileType));
    errors.collect(ros.propertyValidator('audioOpened', ros.validateBoolean)(properties.audioOpened));
    errors.collect(ros.propertyValidator('buckets', ros.requiredValidator)(properties.buckets));
    if(properties.buckets && (Array.isArray(properties.buckets) || (typeof properties.buckets) === 'string')) {
        errors.collect(ros.propertyValidator('buckets', ros.validateLength)({
            data: properties.buckets.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('buckets', ros.listValidator(ros.validateAny))(properties.buckets));
    errors.collect(ros.propertyValidator('startDate', ros.requiredValidator)(properties.startDate));
    errors.collect(ros.propertyValidator('startDate', ros.validateString)(properties.startDate));
    errors.collect(ros.propertyValidator('imageLiveFreezeConfig', ros.hashValidator(ros.validateAny))(properties.imageLiveFreezeConfig));
    errors.collect(ros.propertyValidator('imageAutoFreezeOpened', ros.validateBoolean)(properties.imageAutoFreezeOpened));
    if(properties.autoFreezeType && (typeof properties.autoFreezeType) !== 'object') {
        errors.collect(ros.propertyValidator('autoFreezeType', ros.validateAllowedValues)({
          data: properties.autoFreezeType,
          allowedValues: ["acl","copy"],
        }));
    }
    errors.collect(ros.propertyValidator('autoFreezeType', ros.validateString)(properties.autoFreezeType));
    if(properties.imageScenes && (Array.isArray(properties.imageScenes) || (typeof properties.imageScenes) === 'string')) {
        errors.collect(ros.propertyValidator('imageScenes', ros.validateLength)({
            data: properties.imageScenes.length,
            min: undefined,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('imageScenes', ros.listValidator(ros.validateString))(properties.imageScenes));
    if(properties.audioMaxSize && (typeof properties.audioMaxSize) !== 'object') {
        errors.collect(ros.propertyValidator('audioMaxSize', ros.validateRange)({
            data: properties.audioMaxSize,
            min: 1,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('audioMaxSize', ros.validateNumber)(properties.audioMaxSize));
    errors.collect(ros.propertyValidator('videoTerrorismFreezeConfig', ros.hashValidator(ros.validateAny))(properties.videoTerrorismFreezeConfig));
    errors.collect(ros.propertyValidator('videoOpened', ros.validateBoolean)(properties.videoOpened));
    errors.collect(ros.propertyValidator('imageTerrorismFreezeConfig', ros.hashValidator(ros.validateAny))(properties.imageTerrorismFreezeConfig));
    if(properties.callbackId && (typeof properties.callbackId) !== 'object') {
        errors.collect(ros.propertyValidator('callbackId', ros.validateRange)({
            data: properties.callbackId,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('callbackId', ros.validateNumber)(properties.callbackId));
    if(properties.imageScanLimit && (typeof properties.imageScanLimit) !== 'object') {
        errors.collect(ros.propertyValidator('imageScanLimit', ros.validateRange)({
            data: properties.imageScanLimit,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('imageScanLimit', ros.validateNumber)(properties.imageScanLimit));
    errors.collect(ros.propertyValidator('bizType', ros.validateString)(properties.bizType));
    errors.collect(ros.propertyValidator('imageAdFreezeConfig', ros.hashValidator(ros.validateAny))(properties.imageAdFreezeConfig));
    if(properties.audioScenes && (Array.isArray(properties.audioScenes) || (typeof properties.audioScenes) === 'string')) {
        errors.collect(ros.propertyValidator('audioScenes', ros.validateLength)({
            data: properties.audioScenes.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('audioScenes', ros.listValidator(ros.validateString))(properties.audioScenes));
    if(properties.videoFrameInterval && (typeof properties.videoFrameInterval) !== 'object') {
        errors.collect(ros.propertyValidator('videoFrameInterval', ros.validateRange)({
            data: properties.videoFrameInterval,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('videoFrameInterval', ros.validateNumber)(properties.videoFrameInterval));
    errors.collect(ros.propertyValidator('endDate', ros.validateString)(properties.endDate));
    errors.collect(ros.propertyValidator('imagePornFreezeConfig', ros.hashValidator(ros.validateAny))(properties.imagePornFreezeConfig));
    errors.collect(ros.propertyValidator('videoLiveFreezeConfig', ros.hashValidator(ros.validateAny))(properties.videoLiveFreezeConfig));
    errors.collect(ros.propertyValidator('audioAutoFreezeOpened', ros.validateBoolean)(properties.audioAutoFreezeOpened));
    if(properties.videoScanLimit && (typeof properties.videoScanLimit) !== 'object') {
        errors.collect(ros.propertyValidator('videoScanLimit', ros.validateRange)({
            data: properties.videoScanLimit,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('videoScanLimit', ros.validateNumber)(properties.videoScanLimit));
    errors.collect(ros.propertyValidator('videoPornFreezeConfig', ros.hashValidator(ros.validateAny))(properties.videoPornFreezeConfig));
    errors.collect(ros.propertyValidator('videoAutoFreezeOpened', ros.validateBoolean)(properties.videoAutoFreezeOpened));
    errors.collect(ros.propertyValidator('videoVoiceAntispamFreezeConfig', ros.hashValidator(ros.validateAny))(properties.videoVoiceAntispamFreezeConfig));
    if(properties.audioScanLimit && (typeof properties.audioScanLimit) !== 'object') {
        errors.collect(ros.propertyValidator('audioScanLimit', ros.validateRange)({
            data: properties.audioScanLimit,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('audioScanLimit', ros.validateNumber)(properties.audioScanLimit));
    if(properties.videoScenes && (Array.isArray(properties.videoScenes) || (typeof properties.videoScenes) === 'string')) {
        errors.collect(ros.propertyValidator('videoScenes', ros.validateLength)({
            data: properties.videoScenes.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('videoScenes', ros.listValidator(ros.validateString))(properties.videoScenes));
    errors.collect(ros.propertyValidator('videoAdFreezeConfig', ros.hashValidator(ros.validateAny))(properties.videoAdFreezeConfig));
    if(properties.videoMaxFrames && (typeof properties.videoMaxFrames) !== 'object') {
        errors.collect(ros.propertyValidator('videoMaxFrames', ros.validateRange)({
            data: properties.videoMaxFrames,
            min: 5,
            max: 20000,
          }));
    }
    errors.collect(ros.propertyValidator('videoMaxFrames', ros.validateNumber)(properties.videoMaxFrames));
    errors.collect(ros.propertyValidator('videoMaxSize', ros.validateNumber)(properties.videoMaxSize));
    return errors.wrap('supplied properties not correct for "RosOssStockTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::OssStockTask` resource
 *
 * @param properties - the TypeScript properties of a `RosOssStockTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Aligreen::OssStockTask` resource.
 */
// @ts-ignore TS6133
function rosOssStockTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOssStockTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'Buckets': ros.listMapper(ros.objectToRosTemplate)(properties.buckets),
      'StartDate': ros.stringToRosTemplate(properties.startDate),
      'AudioAntispamFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.audioAntispamFreezeConfig),
      'AudioAutoFreezeOpened': ros.booleanToRosTemplate(properties.audioAutoFreezeOpened),
      'AudioMaxSize': ros.numberToRosTemplate(properties.audioMaxSize),
      'AudioOpened': ros.booleanToRosTemplate(properties.audioOpened),
      'AudioScanLimit': ros.numberToRosTemplate(properties.audioScanLimit),
      'AudioScenes': ros.listMapper(ros.stringToRosTemplate)(properties.audioScenes),
      'AutoFreezeType': ros.stringToRosTemplate(properties.autoFreezeType),
      'BizType': ros.stringToRosTemplate(properties.bizType),
      'CallbackId': ros.numberToRosTemplate(properties.callbackId),
      'EndDate': ros.stringToRosTemplate(properties.endDate),
      'ImageAdFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.imageAdFreezeConfig),
      'ImageAutoFreezeOpened': ros.booleanToRosTemplate(properties.imageAutoFreezeOpened),
      'ImageLiveFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.imageLiveFreezeConfig),
      'ImageOpened': ros.booleanToRosTemplate(properties.imageOpened),
      'ImagePornFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.imagePornFreezeConfig),
      'ImageScanLimit': ros.numberToRosTemplate(properties.imageScanLimit),
      'ImageScenes': ros.listMapper(ros.stringToRosTemplate)(properties.imageScenes),
      'ImageTerrorismFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.imageTerrorismFreezeConfig),
      'OssStockTaskName': ros.stringToRosTemplate(properties.ossStockTaskName),
      'ScanImageNoFileType': ros.booleanToRosTemplate(properties.scanImageNoFileType),
      'VideoAdFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.videoAdFreezeConfig),
      'VideoAutoFreezeOpened': ros.booleanToRosTemplate(properties.videoAutoFreezeOpened),
      'VideoFrameInterval': ros.numberToRosTemplate(properties.videoFrameInterval),
      'VideoLiveFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.videoLiveFreezeConfig),
      'VideoMaxFrames': ros.numberToRosTemplate(properties.videoMaxFrames),
      'VideoMaxSize': ros.numberToRosTemplate(properties.videoMaxSize),
      'VideoOpened': ros.booleanToRosTemplate(properties.videoOpened),
      'VideoPornFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.videoPornFreezeConfig),
      'VideoScanLimit': ros.numberToRosTemplate(properties.videoScanLimit),
      'VideoScenes': ros.listMapper(ros.stringToRosTemplate)(properties.videoScenes),
      'VideoTerrorismFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.videoTerrorismFreezeConfig),
      'VideoVoiceAntispamFreezeConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.videoVoiceAntispamFreezeConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::OssStockTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OssStockTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
export class RosOssStockTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Aligreen::OssStockTask";

    /**
     * @Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
     */
    public readonly attrAudioAntispamFreezeConfig: ros.IResolvable;

    /**
     * @Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public readonly attrAudioAutoFreezeOpened: ros.IResolvable;

    /**
     * @Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
     */
    public readonly attrAudioMaxSize: ros.IResolvable;

    /**
     * @Attribute AudioOpened: oss stock scan task detect audio.
     */
    public readonly attrAudioOpened: ros.IResolvable;

    /**
     * @Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
     */
    public readonly attrAudioScanLimit: ros.IResolvable;

    /**
     * @Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to antispam.
     */
    public readonly attrAudioScenes: ros.IResolvable;

    /**
     * @Attribute AutoFreezeType: Automatic freeze type.
     */
    public readonly attrAutoFreezeType: ros.IResolvable;

    /**
     * @Attribute BizType: Business scenarios used by the oss stock scan task.
     */
    public readonly attrBizType: ros.IResolvable;

    /**
     * @Attribute Buckets: The bucket configuration list of the oss stock scan task.
     */
    public readonly attrBuckets: ros.IResolvable;

    /**
     * @Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    public readonly attrCallbackId: ros.IResolvable;

    /**
     * @Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
     */
    public readonly attrEndDate: ros.IResolvable;

    /**
     * @Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
     */
    public readonly attrImageAdFreezeConfig: ros.IResolvable;

    /**
     * @Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    public readonly attrImageAutoFreezeOpened: ros.IResolvable;

    /**
     * @Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
     */
    public readonly attrImageLiveFreezeConfig: ros.IResolvable;

    /**
     * @Attribute ImageOpened: oss stock scan task detect images.
     */
    public readonly attrImageOpened: ros.IResolvable;

    /**
     * @Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
     */
    public readonly attrImagePornFreezeConfig: ros.IResolvable;

    /**
     * @Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
     */
    public readonly attrImageScanLimit: ros.IResolvable;

    /**
     * @Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
     */
    public readonly attrImageScenes: ros.IResolvable;

    /**
     * @Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
     */
    public readonly attrImageTerrorismFreezeConfig: ros.IResolvable;

    /**
     * @Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
     */
    public readonly attrScanImageNoFileType: ros.IResolvable;

    /**
     * @Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
     */
    public readonly attrStartDate: ros.IResolvable;

    /**
     * @Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
     */
    public readonly attrVideoAdFreezeConfig: ros.IResolvable;

    /**
     * @Attribute VideoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public readonly attrVideoAutoFreezeOpened: ros.IResolvable;

    /**
     * @Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
     */
    public readonly attrVideoFrameInterval: ros.IResolvable;

    /**
     * @Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
     */
    public readonly attrVideoLiveFreezeConfig: ros.IResolvable;

    /**
     * @Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
     */
    public readonly attrVideoMaxFrames: ros.IResolvable;

    /**
     * @Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
     */
    public readonly attrVideoMaxSize: ros.IResolvable;

    /**
     * @Attribute VideoOpened: oss stock scan task detect video.
     */
    public readonly attrVideoOpened: ros.IResolvable;

    /**
     * @Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
     */
    public readonly attrVideoPornFreezeConfig: ros.IResolvable;

    /**
     * @Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
     */
    public readonly attrVideoScanLimit: ros.IResolvable;

    /**
     * @Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
     */
    public readonly attrVideoScenes: ros.IResolvable;

    /**
     * @Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
     */
    public readonly attrVideoTerrorismFreezeConfig: ros.IResolvable;

    /**
     * @Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
     */
    public readonly attrVideoVoiceAntispamFreezeConfig: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
     */
    public buckets: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
     */
    public startDate: string | ros.IResolvable;

    /**
     * @Property audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
     */
    public audioAntispamFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public audioAutoFreezeOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
     */
    public audioMaxSize: number | ros.IResolvable | undefined;

    /**
     * @Property audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
     */
    public audioOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
     */
    public audioScanLimit: number | ros.IResolvable | undefined;

    /**
     * @Property audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
     */
    public audioScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
     */
    public autoFreezeType: string | ros.IResolvable | undefined;

    /**
     * @Property bizType: Business scenarios used by the oss stock scan task.
     */
    public bizType: string | ros.IResolvable | undefined;

    /**
     * @Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    public callbackId: number | ros.IResolvable | undefined;

    /**
     * @Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
     */
    public endDate: string | ros.IResolvable | undefined;

    /**
     * @Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    public imageAdFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    public imageAutoFreezeOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    public imageLiveFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
     */
    public imageOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    public imagePornFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
     */
    public imageScanLimit: number | ros.IResolvable | undefined;

    /**
     * @Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection.
     */
    public imageScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    public imageTerrorismFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property ossStockTaskName: The name of the oss stock scan task.
     */
    public ossStockTaskName: string | ros.IResolvable | undefined;

    /**
     * @Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
     */
    public scanImageNoFileType: boolean | ros.IResolvable | undefined;

    /**
     * @Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    public videoAdFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public videoAutoFreezeOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
     */
    public videoFrameInterval: number | ros.IResolvable | undefined;

    /**
     * @Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    public videoLiveFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
     */
    public videoMaxFrames: number | ros.IResolvable | undefined;

    /**
     * @Property videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
     */
    public videoMaxSize: number | ros.IResolvable | undefined;

    /**
     * @Property videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
     */
    public videoOpened: boolean | ros.IResolvable | undefined;

    /**
     * @Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
     */
    public videoPornFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
     */
    public videoScanLimit: number | ros.IResolvable | undefined;

    /**
     * @Property videoScenes: The video detection scenarios included in the oss stock scan task.
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection
     * antispam: Video voice antispam.
     */
    public videoScenes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    public videoTerrorismFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    public videoVoiceAntispamFreezeConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOssStockTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOssStockTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAudioAntispamFreezeConfig = this.getAtt('AudioAntispamFreezeConfig');
        this.attrAudioAutoFreezeOpened = this.getAtt('AudioAutoFreezeOpened');
        this.attrAudioMaxSize = this.getAtt('AudioMaxSize');
        this.attrAudioOpened = this.getAtt('AudioOpened');
        this.attrAudioScanLimit = this.getAtt('AudioScanLimit');
        this.attrAudioScenes = this.getAtt('AudioScenes');
        this.attrAutoFreezeType = this.getAtt('AutoFreezeType');
        this.attrBizType = this.getAtt('BizType');
        this.attrBuckets = this.getAtt('Buckets');
        this.attrCallbackId = this.getAtt('CallbackId');
        this.attrEndDate = this.getAtt('EndDate');
        this.attrImageAdFreezeConfig = this.getAtt('ImageAdFreezeConfig');
        this.attrImageAutoFreezeOpened = this.getAtt('ImageAutoFreezeOpened');
        this.attrImageLiveFreezeConfig = this.getAtt('ImageLiveFreezeConfig');
        this.attrImageOpened = this.getAtt('ImageOpened');
        this.attrImagePornFreezeConfig = this.getAtt('ImagePornFreezeConfig');
        this.attrImageScanLimit = this.getAtt('ImageScanLimit');
        this.attrImageScenes = this.getAtt('ImageScenes');
        this.attrImageTerrorismFreezeConfig = this.getAtt('ImageTerrorismFreezeConfig');
        this.attrScanImageNoFileType = this.getAtt('ScanImageNoFileType');
        this.attrStartDate = this.getAtt('StartDate');
        this.attrVideoAdFreezeConfig = this.getAtt('VideoAdFreezeConfig');
        this.attrVideoAutoFreezeOpened = this.getAtt('VideoAutoFreezeOpened');
        this.attrVideoFrameInterval = this.getAtt('VideoFrameInterval');
        this.attrVideoLiveFreezeConfig = this.getAtt('VideoLiveFreezeConfig');
        this.attrVideoMaxFrames = this.getAtt('VideoMaxFrames');
        this.attrVideoMaxSize = this.getAtt('VideoMaxSize');
        this.attrVideoOpened = this.getAtt('VideoOpened');
        this.attrVideoPornFreezeConfig = this.getAtt('VideoPornFreezeConfig');
        this.attrVideoScanLimit = this.getAtt('VideoScanLimit');
        this.attrVideoScenes = this.getAtt('VideoScenes');
        this.attrVideoTerrorismFreezeConfig = this.getAtt('VideoTerrorismFreezeConfig');
        this.attrVideoVoiceAntispamFreezeConfig = this.getAtt('VideoVoiceAntispamFreezeConfig');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.buckets = props.buckets;
        this.startDate = props.startDate;
        this.audioAntispamFreezeConfig = props.audioAntispamFreezeConfig;
        this.audioAutoFreezeOpened = props.audioAutoFreezeOpened;
        this.audioMaxSize = props.audioMaxSize;
        this.audioOpened = props.audioOpened;
        this.audioScanLimit = props.audioScanLimit;
        this.audioScenes = props.audioScenes;
        this.autoFreezeType = props.autoFreezeType;
        this.bizType = props.bizType;
        this.callbackId = props.callbackId;
        this.endDate = props.endDate;
        this.imageAdFreezeConfig = props.imageAdFreezeConfig;
        this.imageAutoFreezeOpened = props.imageAutoFreezeOpened;
        this.imageLiveFreezeConfig = props.imageLiveFreezeConfig;
        this.imageOpened = props.imageOpened;
        this.imagePornFreezeConfig = props.imagePornFreezeConfig;
        this.imageScanLimit = props.imageScanLimit;
        this.imageScenes = props.imageScenes;
        this.imageTerrorismFreezeConfig = props.imageTerrorismFreezeConfig;
        this.ossStockTaskName = props.ossStockTaskName;
        this.scanImageNoFileType = props.scanImageNoFileType;
        this.videoAdFreezeConfig = props.videoAdFreezeConfig;
        this.videoAutoFreezeOpened = props.videoAutoFreezeOpened;
        this.videoFrameInterval = props.videoFrameInterval;
        this.videoLiveFreezeConfig = props.videoLiveFreezeConfig;
        this.videoMaxFrames = props.videoMaxFrames;
        this.videoMaxSize = props.videoMaxSize;
        this.videoOpened = props.videoOpened;
        this.videoPornFreezeConfig = props.videoPornFreezeConfig;
        this.videoScanLimit = props.videoScanLimit;
        this.videoScenes = props.videoScenes;
        this.videoTerrorismFreezeConfig = props.videoTerrorismFreezeConfig;
        this.videoVoiceAntispamFreezeConfig = props.videoVoiceAntispamFreezeConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            buckets: this.buckets,
            startDate: this.startDate,
            audioAntispamFreezeConfig: this.audioAntispamFreezeConfig,
            audioAutoFreezeOpened: this.audioAutoFreezeOpened,
            audioMaxSize: this.audioMaxSize,
            audioOpened: this.audioOpened,
            audioScanLimit: this.audioScanLimit,
            audioScenes: this.audioScenes,
            autoFreezeType: this.autoFreezeType,
            bizType: this.bizType,
            callbackId: this.callbackId,
            endDate: this.endDate,
            imageAdFreezeConfig: this.imageAdFreezeConfig,
            imageAutoFreezeOpened: this.imageAutoFreezeOpened,
            imageLiveFreezeConfig: this.imageLiveFreezeConfig,
            imageOpened: this.imageOpened,
            imagePornFreezeConfig: this.imagePornFreezeConfig,
            imageScanLimit: this.imageScanLimit,
            imageScenes: this.imageScenes,
            imageTerrorismFreezeConfig: this.imageTerrorismFreezeConfig,
            ossStockTaskName: this.ossStockTaskName,
            scanImageNoFileType: this.scanImageNoFileType,
            videoAdFreezeConfig: this.videoAdFreezeConfig,
            videoAutoFreezeOpened: this.videoAutoFreezeOpened,
            videoFrameInterval: this.videoFrameInterval,
            videoLiveFreezeConfig: this.videoLiveFreezeConfig,
            videoMaxFrames: this.videoMaxFrames,
            videoMaxSize: this.videoMaxSize,
            videoOpened: this.videoOpened,
            videoPornFreezeConfig: this.videoPornFreezeConfig,
            videoScanLimit: this.videoScanLimit,
            videoScenes: this.videoScenes,
            videoTerrorismFreezeConfig: this.videoTerrorismFreezeConfig,
            videoVoiceAntispamFreezeConfig: this.videoVoiceAntispamFreezeConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOssStockTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
