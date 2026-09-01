import * as ros from '@alicloud/ros-cdk-core';
import { RosExportConfigJob } from './bastionhost.generated';
export { RosExportConfigJob as ExportConfigJobProperty };
/**
 * Properties for defining a `ExportConfigJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
 */
export interface ExportConfigJobProps {
    /**
     * Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * Represents a `ExportConfigJob`.
 */
export interface IExportConfigJob extends ros.IResource {
    readonly props: ExportConfigJobProps;
    /**
     * Attribute DownloadUrl: The download url of the export config job.
     */
    readonly attrDownloadUrl: ros.IResolvable | string;
    /**
     * Attribute JobId: The ID of the export config job.
     */
    readonly attrJobId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::ExportConfigJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExportConfigJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
 */
export declare class ExportConfigJob extends ros.Resource implements IExportConfigJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ExportConfigJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DownloadUrl: The download url of the export config job.
     */
    readonly attrDownloadUrl: ros.IResolvable | string;
    /**
     * Attribute JobId: The ID of the export config job.
     */
    readonly attrJobId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExportConfigJobProps, enableResourcePropertyConstraint?: boolean);
}
