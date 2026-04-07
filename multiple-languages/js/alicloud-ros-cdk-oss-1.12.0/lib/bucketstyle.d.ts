import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketStyle } from './oss.generated';
export { RosBucketStyle as BucketStyleProperty };
/**
 * Properties for defining a `BucketStyle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
 */
export interface BucketStyleProps {
    /**
     * Property bucket: Storage space to which the picture style belongs.
     */
    readonly bucket: string | ros.IResolvable;
    /**
     * Property content: The Image style content can contain single or multiple image processing parameters.
     */
    readonly content: string | ros.IResolvable;
    /**
     * Property styleName: Image Style Name.
     */
    readonly styleName: string | ros.IResolvable;
    /**
     * Property category: Style category, valid values: image, document, video.
     */
    readonly category?: string | ros.IResolvable;
}
/**
 * Represents a `BucketStyle`.
 */
export interface IBucketStyle extends ros.IResource {
    readonly props: BucketStyleProps;
    /**
     * Attribute Category: Style category, valid values: image, document, video.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute Content: The Image style content can contain single or multiple image processing parameters.
     */
    readonly attrContent: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Image Style Creation Time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute LastModifyTime: Last modification time of Image style.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;
    /**
     * Attribute StyleName: Image Style Name.
     */
    readonly attrStyleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketStyle`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketStyle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
 */
export declare class BucketStyle extends ros.Resource implements IBucketStyle {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketStyleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Category: Style category, valid values: image, document, video.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute Content: The Image style content can contain single or multiple image processing parameters.
     */
    readonly attrContent: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Image Style Creation Time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute LastModifyTime: Last modification time of Image style.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;
    /**
     * Attribute StyleName: Image Style Name.
     */
    readonly attrStyleName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketStyleProps, enableResourcePropertyConstraint?: boolean);
}
