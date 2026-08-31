import * as ros from '@alicloud/ros-cdk-core';
import { RosImageLib } from './aligreen.generated';
export { RosImageLib as ImageLibProperty };
/**
 * Properties for defining a `ImageLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export interface ImageLibProps {
    /**
     * Property category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
     */
    readonly category: string | ros.IResolvable;
    /**
     * Property imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    readonly imageLibName: string | ros.IResolvable;
    /**
     * Property scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
     */
    readonly scene: string | ros.IResolvable;
    /**
     * Property bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
     */
    readonly bizTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property enable: Specifies whether to enable the image library. Valid values:
     * true: Enable the image library. This is the default value. false: Disable the image library.
     */
    readonly enable?: boolean | ros.IResolvable;
}
/**
 * Represents a `ImageLib`.
 */
export interface IImageLib extends ros.IResource {
    readonly props: ImageLibProps;
    /**
     * Attribute BizTypes: List of business scenarios.
     */
    readonly attrBizTypes: ros.IResolvable | string;
    /**
     * Attribute Category: The category of the image library.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute Enable: Specifies whether to enable the image library.
     */
    readonly attrEnable: ros.IResolvable | string;
    /**
     * Attribute ImageLibId: The ID of the primary key of the image library.
     */
    readonly attrImageLibId: ros.IResolvable | string;
    /**
     * Attribute ImageLibName: The name of the image library defined by the customer.
     */
    readonly attrImageLibName: ros.IResolvable | string;
    /**
     * Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    readonly attrScene: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::ImageLib`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageLib`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export declare class ImageLib extends ros.Resource implements IImageLib {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageLibProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BizTypes: List of business scenarios.
     */
    readonly attrBizTypes: ros.IResolvable | string;
    /**
     * Attribute Category: The category of the image library.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute Enable: Specifies whether to enable the image library.
     */
    readonly attrEnable: ros.IResolvable | string;
    /**
     * Attribute ImageLibId: The ID of the primary key of the image library.
     */
    readonly attrImageLibId: ros.IResolvable | string;
    /**
     * Attribute ImageLibName: The name of the image library defined by the customer.
     */
    readonly attrImageLibName: ros.IResolvable | string;
    /**
     * Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    readonly attrScene: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageLibProps, enableResourcePropertyConstraint?: boolean);
}
