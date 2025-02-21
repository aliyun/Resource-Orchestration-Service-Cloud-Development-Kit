import * as ros from '@alicloud/ros-cdk-core';
import { RosCategory } from './ice.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCategory as CategoryProperty };

/**
 * Properties for defining a `Category`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
export interface CategoryProps {

    /**
     * Property cateName: The category name.
     * The value can be up to 64 bytes in length.
     * The value must be encoded in UTF-8.
     */
    readonly cateName: string | ros.IResolvable;

    /**
     * Property parentId: The ID of the parent category.
     */
    readonly parentId?: number | ros.IResolvable;

    /**
     * Property type: The type of the category. Valid values:
     * default: audio, video, and image files. This is the default value.
     * material: short video materials.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `Category`.
 */
export interface ICategory extends ros.IResource {
    readonly props: CategoryProps;

    /**
     * Attribute CateId: The ID of the category.
     */
    readonly attrCateId: ros.IResolvable | string;

    /**
     * Attribute Level: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
     */
    readonly attrLevel: ros.IResolvable | string;

    /**
     * Attribute ParentId: The ID of the parent category.
     */
    readonly attrParentId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ICE::Category`, which is used to create a media asset category.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCategory`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
export class Category extends ros.Resource implements ICategory {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CategoryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CateId: The ID of the category.
     */
    public readonly attrCateId: ros.IResolvable | string;

    /**
     * Attribute Level: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
     */
    public readonly attrLevel: ros.IResolvable | string;

    /**
     * Attribute ParentId: The ID of the parent category.
     */
    public readonly attrParentId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CategoryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCategory = new RosCategory(this, id,  {
            parentId: props.parentId,
            type: props.type,
            cateName: props.cateName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCategory;
        this.attrCateId = rosCategory.attrCateId;
        this.attrLevel = rosCategory.attrLevel;
        this.attrParentId = rosCategory.attrParentId;
    }
}
