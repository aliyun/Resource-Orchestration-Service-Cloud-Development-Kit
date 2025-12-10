import * as ros from '@alicloud/ros-cdk-core';
import { RosScheduledPreloadJob } from './esa.generated';
export { RosScheduledPreloadJob as ScheduledPreloadJobProperty };
/**
 * Properties for defining a `ScheduledPreloadJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export interface ScheduledPreloadJobProps {
    /**
     * Property insertWay: The method to submit the URLs to be prefetched.
     */
    readonly insertWay: string | ros.IResolvable;
    /**
     * Property scheduledPreloadJobName: The name of the scheduled prefetch task.
     */
    readonly scheduledPreloadJobName: string | ros.IResolvable;
    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
     */
    readonly ossUrl?: string | ros.IResolvable;
    /**
     * Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
     */
    readonly urlList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ScheduledPreloadJob`.
 */
export interface IScheduledPreloadJob extends ros.IResource {
    readonly props: ScheduledPreloadJobProps;
    /**
     * Attribute CreateTime: The time when the task was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Domains: The domain names to be prefetched.
     */
    readonly attrDomains: ros.IResolvable | string;
    /**
     * Attribute ErrorInfo: The error message.
     */
    readonly attrErrorInfo: ros.IResolvable | string;
    /**
     * Attribute FailedFileOss: OSS address of failed file.
     */
    readonly attrFailedFileOss: ros.IResolvable | string;
    /**
     * Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    readonly attrFileId: ros.IResolvable | string;
    /**
     * Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    readonly attrInsertWay: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly attrScheduledPreloadJobId: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobName: The task name.
     */
    readonly attrScheduledPreloadJobName: ros.IResolvable | string;
    /**
     * Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    readonly attrTaskSubmitted: ros.IResolvable | string;
    /**
     * Attribute TaskType: The task type. Valid values: refresh and preload.
     */
    readonly attrTaskType: ros.IResolvable | string;
    /**
     * Attribute UrlCount: The total number of URLs.
     */
    readonly attrUrlCount: ros.IResolvable | string;
    /**
     * Attribute UrlSubmitted: The number of submitted URLs.
     */
    readonly attrUrlSubmitted: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::ScheduledPreloadJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScheduledPreloadJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export declare class ScheduledPreloadJob extends ros.Resource implements IScheduledPreloadJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScheduledPreloadJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the task was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Domains: The domain names to be prefetched.
     */
    readonly attrDomains: ros.IResolvable | string;
    /**
     * Attribute ErrorInfo: The error message.
     */
    readonly attrErrorInfo: ros.IResolvable | string;
    /**
     * Attribute FailedFileOss: OSS address of failed file.
     */
    readonly attrFailedFileOss: ros.IResolvable | string;
    /**
     * Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    readonly attrFileId: ros.IResolvable | string;
    /**
     * Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    readonly attrInsertWay: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly attrScheduledPreloadJobId: ros.IResolvable | string;
    /**
     * Attribute ScheduledPreloadJobName: The task name.
     */
    readonly attrScheduledPreloadJobName: ros.IResolvable | string;
    /**
     * Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    readonly attrTaskSubmitted: ros.IResolvable | string;
    /**
     * Attribute TaskType: The task type. Valid values: refresh and preload.
     */
    readonly attrTaskType: ros.IResolvable | string;
    /**
     * Attribute UrlCount: The total number of URLs.
     */
    readonly attrUrlCount: ros.IResolvable | string;
    /**
     * Attribute UrlSubmitted: The number of submitted URLs.
     */
    readonly attrUrlSubmitted: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduledPreloadJobProps, enableResourcePropertyConstraint?: boolean);
}
