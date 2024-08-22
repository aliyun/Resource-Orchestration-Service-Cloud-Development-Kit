import * as ros from '@alicloud/ros-cdk-core';
import { RosWebsite } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Website`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWebsite`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
export class Website extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WebsiteProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WebsiteProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWebsite = new RosWebsite(this, id,  {
            bucketName: props.bucketName,
            websiteConfiguration: props.websiteConfiguration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWebsite;
    }
}
