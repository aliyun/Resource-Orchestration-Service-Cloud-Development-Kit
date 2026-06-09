import * as ros from '@alicloud/ros-cdk-core';
import { RosWebsite } from './oss.generated';
export { RosWebsite as WebsiteProperty };
/**
 * Properties for defining a `Website`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export interface WebsiteProps {
    /**
     * Property bucketName: Bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * Property websiteConfiguration: Website configuration.
     */
    readonly websiteConfiguration?: RosWebsite.WebsiteConfigurationProperty | ros.IResolvable;
}
/**
 * Represents a `Website`.
 */
export interface IWebsite extends ros.IResource {
    readonly props: WebsiteProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Website`, which is used to configure static website hosting and redirection rules for an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWebsite`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export declare class Website extends ros.Resource implements IWebsite {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WebsiteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WebsiteProps, enableResourcePropertyConstraint?: boolean);
}
