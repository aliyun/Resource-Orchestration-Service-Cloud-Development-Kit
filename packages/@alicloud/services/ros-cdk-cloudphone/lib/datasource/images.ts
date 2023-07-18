import * as ros from '@alicloud/ros-cdk-core';
import { RosImages } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImages as ImagesProperty };

/**
 * Properties for defining a `DATASOURCE::CloudPhone::Images`
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
}

/**
 * A ROS resource type:  `DATASOURCE::CloudPhone::Images`
 */
export class Images extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ImageIds: The list of image IDs.
     */
    public readonly attrImageIds: ros.IResolvable;

    /**
     * Attribute Images: The list of images.
     */
    public readonly attrImages: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CloudPhone::Images`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosImages = new RosImages(this, id,  {
            imageName: props.imageName,
            imageCategory: props.imageCategory,
            imageId: props.imageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImages;
        this.attrImageIds = rosImages.attrImageIds;
        this.attrImages = rosImages.attrImages;
    }
}
