import * as ros from '@alicloud/ros-cdk-core';
import { RosImageSharePermission } from './ecs.generated';
export { RosImageSharePermission as ImageSharePermissionProperty };
/**
 * Properties for defining a `ImageSharePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export interface ImageSharePermissionProps {
    /**
     * Property imageId: The ID of the custom image.
     * ><notice>
     * You can no longer share images that are encrypted by using a service key. You can
     * share only images that are encrypted by using a customer managed key (CMK). If
     * you attempt to share an image that is encrypted by using a service key, the
     * request fails.
     * ><\/notice>
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    readonly accounts?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property isPublic: Specifies whether to publish or unpublish the community image. Valid values:
     * - true: publishes the image as a community image.
     * - false: unpublishes the community image. The image becomes a custom image. If
     * the image is a custom image, this setting has no effect.
     * Default value: false.
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    readonly keepPermission?: boolean | ros.IResolvable;
}
/**
 * Represents a `ImageSharePermission`.
 */
export interface IImageSharePermission extends ros.IResource {
    readonly props: ImageSharePermissionProps;
    /**
     * Attribute ImageId: The shared custom image ID.
     */
    readonly attrImageId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ImageSharePermission`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageSharePermission`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export declare class ImageSharePermission extends ros.Resource implements IImageSharePermission {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageSharePermissionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageId: The shared custom image ID.
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageSharePermissionProps, enableResourcePropertyConstraint?: boolean);
}
