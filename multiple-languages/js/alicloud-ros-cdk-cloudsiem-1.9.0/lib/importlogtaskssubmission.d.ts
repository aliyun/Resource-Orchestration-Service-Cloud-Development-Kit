import * as ros from '@alicloud/ros-cdk-core';
import { RosImportLogTasksSubmission } from './cloudsiem.generated';
export { RosImportLogTasksSubmission as ImportLogTasksSubmissionProperty };
/**
 * Properties for defining a `ImportLogTasksSubmission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
export interface ImportLogTasksSubmissionProps {
    /**
     * Property accounts: The list of accounts to be submitted.
     */
    readonly accounts: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
     */
    readonly cloudCode: string | ros.IResolvable;
    /**
     * Property logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    readonly logCodes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
     */
    readonly prodCode: string | ros.IResolvable;
}
/**
 * Represents a `ImportLogTasksSubmission`.
 */
export interface IImportLogTasksSubmission extends ros.IResource {
    readonly props: ImportLogTasksSubmissionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSiem::ImportLogTasksSubmission`, which is used to import and submit a log collection task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImportLogTasksSubmission`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
export declare class ImportLogTasksSubmission extends ros.Resource implements IImportLogTasksSubmission {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImportLogTasksSubmissionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImportLogTasksSubmissionProps, enableResourcePropertyConstraint?: boolean);
}
