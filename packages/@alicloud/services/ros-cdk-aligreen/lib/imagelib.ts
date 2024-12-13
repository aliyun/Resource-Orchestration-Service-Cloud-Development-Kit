import * as ros from '@alicloud/ros-cdk-core';
import { RosImageLib } from './aligreen.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::ImageLib`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageLib`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
export class ImageLib extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageLibProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BizTypes: List of business scenarios.
     */
    public readonly attrBizTypes: ros.IResolvable;

    /**
     * Attribute Category: The category of the image library.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * Attribute Enable: Specifies whether to enable the image library.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * Attribute ImageLibId: The ID of the primary key of the image library.
     */
    public readonly attrImageLibId: ros.IResolvable;

    /**
     * Attribute ImageLibName: The name of the image library defined by the customer.
     */
    public readonly attrImageLibName: ros.IResolvable;

    /**
     * Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    public readonly attrScene: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageLibProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImageLib = new RosImageLib(this, id,  {
            category: props.category,
            bizTypes: props.bizTypes,
            enable: props.enable,
            scene: props.scene,
            imageLibName: props.imageLibName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageLib;
        this.attrBizTypes = rosImageLib.attrBizTypes;
        this.attrCategory = rosImageLib.attrCategory;
        this.attrEnable = rosImageLib.attrEnable;
        this.attrImageLibId = rosImageLib.attrImageLibId;
        this.attrImageLibName = rosImageLib.attrImageLibName;
        this.attrScene = rosImageLib.attrScene;
    }
}
