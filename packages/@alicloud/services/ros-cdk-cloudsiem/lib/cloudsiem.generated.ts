// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosImportLogTasksSubmission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
export interface RosImportLogTasksSubmissionProps {

    /**
     * @Property accounts: The list of accounts to be submitted.
     */
    readonly accounts: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
     */
    readonly cloudCode: string | ros.IResolvable;

    /**
     * @Property logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    readonly logCodes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    readonly prodCode: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImportLogTasksSubmissionProps`
 *
 * @param properties - the TypeScript properties of a `RosImportLogTasksSubmissionProps`
 *
 * @returns the result of the validation.
 */
function RosImportLogTasksSubmissionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cloudCode', ros.requiredValidator)(properties.cloudCode));
    if(properties.cloudCode && (typeof properties.cloudCode) !== 'object') {
        errors.collect(ros.propertyValidator('cloudCode', ros.validateAllowedValues)({
          data: properties.cloudCode,
          allowedValues: ["qcloud","hcloud","aliyun"],
        }));
    }
    errors.collect(ros.propertyValidator('cloudCode', ros.validateString)(properties.cloudCode));
    errors.collect(ros.propertyValidator('logCodes', ros.requiredValidator)(properties.logCodes));
    errors.collect(ros.propertyValidator('logCodes', ros.listValidator(ros.validateString))(properties.logCodes));
    errors.collect(ros.propertyValidator('prodCode', ros.requiredValidator)(properties.prodCode));
    errors.collect(ros.propertyValidator('prodCode', ros.validateString)(properties.prodCode));
    errors.collect(ros.propertyValidator('accounts', ros.requiredValidator)(properties.accounts));
    errors.collect(ros.propertyValidator('accounts', ros.listValidator(ros.validateString))(properties.accounts));
    return errors.wrap('supplied properties not correct for "RosImportLogTasksSubmissionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::ImportLogTasksSubmission` resource
 *
 * @param properties - the TypeScript properties of a `RosImportLogTasksSubmissionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::ImportLogTasksSubmission` resource.
 */
// @ts-ignore TS6133
function rosImportLogTasksSubmissionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImportLogTasksSubmissionPropsValidator(properties).assertSuccess();
    }
    return {
      'Accounts': ros.listMapper(ros.stringToRosTemplate)(properties.accounts),
      'CloudCode': ros.stringToRosTemplate(properties.cloudCode),
      'LogCodes': ros.listMapper(ros.stringToRosTemplate)(properties.logCodes),
      'ProdCode': ros.stringToRosTemplate(properties.prodCode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSiem::ImportLogTasksSubmission`, which is used to import and submit a log collection task.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImportLogTasksSubmission` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
export class RosImportLogTasksSubmission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSiem::ImportLogTasksSubmission";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accounts: The list of accounts to be submitted.
     */
    public accounts: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
     */
    public cloudCode: string | ros.IResolvable;

    /**
     * @Property logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    public logCodes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    public prodCode: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImportLogTasksSubmissionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImportLogTasksSubmission.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accounts = props.accounts;
        this.cloudCode = props.cloudCode;
        this.logCodes = props.logCodes;
        this.prodCode = props.prodCode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accounts: this.accounts,
            cloudCode: this.cloudCode,
            logCodes: this.logCodes,
            prodCode: this.prodCode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImportLogTasksSubmissionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserSourceLogConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
export interface RosUserSourceLogConfigProps {

    /**
     * @Property sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    readonly sourceLogCode: string | ros.IResolvable;

    /**
     * @Property sourceLogInfo: The info of log to be added.
     */
    readonly sourceLogInfo: RosUserSourceLogConfig.SourceLogInfoProperty | ros.IResolvable;

    /**
     * @Property sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    readonly sourceProdCode: string | ros.IResolvable;

    /**
     * @Property subUserId: The Id of the account to be submitted.
     */
    readonly subUserId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserSourceLogConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosUserSourceLogConfigProps`
 *
 * @returns the result of the validation.
 */
function RosUserSourceLogConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceProdCode', ros.requiredValidator)(properties.sourceProdCode));
    errors.collect(ros.propertyValidator('sourceProdCode', ros.validateString)(properties.sourceProdCode));
    errors.collect(ros.propertyValidator('subUserId', ros.requiredValidator)(properties.subUserId));
    errors.collect(ros.propertyValidator('subUserId', ros.validateString)(properties.subUserId));
    errors.collect(ros.propertyValidator('sourceLogInfo', ros.requiredValidator)(properties.sourceLogInfo));
    errors.collect(ros.propertyValidator('sourceLogInfo', RosUserSourceLogConfig_SourceLogInfoPropertyValidator)(properties.sourceLogInfo));
    errors.collect(ros.propertyValidator('sourceLogCode', ros.requiredValidator)(properties.sourceLogCode));
    errors.collect(ros.propertyValidator('sourceLogCode', ros.validateString)(properties.sourceLogCode));
    return errors.wrap('supplied properties not correct for "RosUserSourceLogConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::UserSourceLogConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosUserSourceLogConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::UserSourceLogConfig` resource.
 */
// @ts-ignore TS6133
function rosUserSourceLogConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserSourceLogConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'SourceLogCode': ros.stringToRosTemplate(properties.sourceLogCode),
      'SourceLogInfo': rosUserSourceLogConfigSourceLogInfoPropertyToRosTemplate(properties.sourceLogInfo),
      'SourceProdCode': ros.stringToRosTemplate(properties.sourceProdCode),
      'SubUserId': ros.stringToRosTemplate(properties.subUserId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSiem::UserSourceLogConfig`, which is used to add logs of a cloud service within an account.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserSourceLogConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
export class RosUserSourceLogConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSiem::UserSourceLogConfig";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    public sourceLogCode: string | ros.IResolvable;

    /**
     * @Property sourceLogInfo: The info of log to be added.
     */
    public sourceLogInfo: RosUserSourceLogConfig.SourceLogInfoProperty | ros.IResolvable;

    /**
     * @Property sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    public sourceProdCode: string | ros.IResolvable;

    /**
     * @Property subUserId: The Id of the account to be submitted.
     */
    public subUserId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserSourceLogConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserSourceLogConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceLogCode = props.sourceLogCode;
        this.sourceLogInfo = props.sourceLogInfo;
        this.sourceProdCode = props.sourceProdCode;
        this.subUserId = props.subUserId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sourceLogCode: this.sourceLogCode,
            sourceLogInfo: this.sourceLogInfo,
            sourceProdCode: this.sourceProdCode,
            subUserId: this.subUserId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserSourceLogConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUserSourceLogConfig {
    /**
     * @stability external
     */
    export interface SourceLogInfoProperty {
        /**
         * @Property project: The log project name
         */
        readonly project: string | ros.IResolvable;
        /**
         * @Property regionCode: The region of the log
         */
        readonly regionCode: string | ros.IResolvable;
        /**
         * @Property logStore: The logstore name.
         */
        readonly logStore: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceLogInfoProperty`
 *
 * @param properties - the TypeScript properties of a `SourceLogInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosUserSourceLogConfig_SourceLogInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('regionCode', ros.requiredValidator)(properties.regionCode));
    errors.collect(ros.propertyValidator('regionCode', ros.validateString)(properties.regionCode));
    errors.collect(ros.propertyValidator('logStore', ros.requiredValidator)(properties.logStore));
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    return errors.wrap('supplied properties not correct for "SourceLogInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::UserSourceLogConfig.SourceLogInfo` resource
 *
 * @param properties - the TypeScript properties of a `SourceLogInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSiem::UserSourceLogConfig.SourceLogInfo` resource.
 */
// @ts-ignore TS6133
function rosUserSourceLogConfigSourceLogInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUserSourceLogConfig_SourceLogInfoPropertyValidator(properties).assertSuccess();
    return {
      'Project': ros.stringToRosTemplate(properties.project),
      'RegionCode': ros.stringToRosTemplate(properties.regionCode),
      'LogStore': ros.stringToRosTemplate(properties.logStore),
    };
}
