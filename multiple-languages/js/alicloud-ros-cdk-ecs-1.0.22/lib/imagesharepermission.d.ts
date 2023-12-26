import * as ros from '@alicloud/ros-cdk-core';
import { RosImageSharePermission } from './ecs.generated';
export { RosImageSharePermission as ImageSharePermissionProperty };
/**
 * Properties for defining a `ImageSharePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export interface ImageSharePermissionProps {
    /**
     * Property imageId: The shared custom image ID.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    readonly accounts?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property isPublic: Whether to publish or remove community mirrors.
     * If this property is not set, no changes will be made to the community image
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    readonly keepPermission?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ImageSharePermission`DATASOURCE::ECS::AutoSnapshotPolicies is used to query automatic snapshot policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageSharePermission`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export declare class ImageSharePermission extends ros.Resource {
    /**
     * Attribute ImageId: The shared custom image ID.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageSharePermissionProps, enableResourcePropertyConstraint?: boolean);
}
