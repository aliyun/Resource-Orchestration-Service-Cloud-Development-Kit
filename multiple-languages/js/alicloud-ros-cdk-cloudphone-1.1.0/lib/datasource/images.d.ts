import * as ros from '@alicloud/ros-cdk-core';
import { RosImages } from './cloudphone.generated';
export { RosImages as ImagesProperty };
/**
 * Properties for defining a `Images`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export interface ImagesProps {
    /**
     * Property imageCategory: Mirror type.
     */
    readonly imageCategory?: string | ros.IResolvable;
    /**
     * Property imageId: Image ID.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property imageName: The name of the mirror image.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::Images`, which is used to query the information about available images.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export declare class Images extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImagesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageIds: The list of image IDs.
     */
    readonly attrImageIds: ros.IResolvable;
    /**
     * Attribute Images: The list of images.
     */
    readonly attrImages: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ImagesProps, enableResourcePropertyConstraint?: boolean);
}
