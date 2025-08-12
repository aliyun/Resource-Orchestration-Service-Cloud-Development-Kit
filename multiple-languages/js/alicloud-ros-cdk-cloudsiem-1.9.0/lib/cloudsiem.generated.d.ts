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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSiem::ImportLogTasksSubmission`, which is used to import and submit a log collection task.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImportLogTasksSubmission` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
export declare class RosImportLogTasksSubmission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSiem::ImportLogTasksSubmission";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accounts: The list of accounts to be submitted.
     */
    accounts: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
     */
    cloudCode: string | ros.IResolvable;
    /**
     * @Property logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    logCodes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    prodCode: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImportLogTasksSubmissionProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSiem::UserSourceLogConfig`, which is used to add logs of a cloud service within an account.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserSourceLogConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
export declare class RosUserSourceLogConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSiem::UserSourceLogConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    sourceLogCode: string | ros.IResolvable;
    /**
     * @Property sourceLogInfo: The info of log to be added.
     */
    sourceLogInfo: RosUserSourceLogConfig.SourceLogInfoProperty | ros.IResolvable;
    /**
     * @Property sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    sourceProdCode: string | ros.IResolvable;
    /**
     * @Property subUserId: The Id of the account to be submitted.
     */
    subUserId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserSourceLogConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUserSourceLogConfig {
    /**
     * @stability external
     */
    interface SourceLogInfoProperty {
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
