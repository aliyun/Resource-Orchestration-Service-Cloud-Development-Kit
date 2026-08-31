import * as ros from '@alicloud/ros-cdk-core';
import { RosProductVersion } from './servicecatalog.generated';
export { RosProductVersion as ProductVersionProperty };
/**
 * Properties for defining a `ProductVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
export interface ProductVersionProps {
    /**
     * Property productId: The ID of the product to which the product version belongs.
     */
    readonly productId: string | ros.IResolvable;
    /**
     * Property productVersionName: The name of the product version.
     */
    readonly productVersionName: string | ros.IResolvable;
    /**
     * Property templateType: The type of the product template. Valid values:
     * * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
     * * RosStandardTemplate: the standard ROS template.
     */
    readonly templateType: string | ros.IResolvable;
    /**
     * Property templateUrl: The URL of the template.
     */
    readonly templateUrl: string | ros.IResolvable;
    /**
     * Property active: Specifies whether the product version is active.
     */
    readonly active?: boolean | ros.IResolvable;
    /**
     * Property description: The description of the product version. The value must be 1 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property guidance: The recommendation information. Valid values:
     * * Default: No recommendation information is provided. This is the default value.
     * * Recommended: the recommendation version.
     * * Latest: the latest version.
     * * Deprecated: the version that is about to be discontinued.
     */
    readonly guidance?: string | ros.IResolvable;
}
/**
 * Represents a `ProductVersion`.
 */
export interface IProductVersion extends ros.IResource {
    readonly props: ProductVersionProps;
    /**
     * Attribute Active: Specifies whether the product version is active.
     */
    readonly attrActive: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the product version.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the product version.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Guidance: The recommendation information.
     */
    readonly attrGuidance: ros.IResolvable | string;
    /**
     * Attribute ProductId: The ID of the product to which the product version belongs.
     */
    readonly attrProductId: ros.IResolvable | string;
    /**
     * Attribute ProductVersionId: The ID of the product version.
     */
    readonly attrProductVersionId: ros.IResolvable | string;
    /**
     * Attribute ProductVersionName: The name of the product version.
     */
    readonly attrProductVersionName: ros.IResolvable | string;
    /**
     * Attribute TemplateType: The type of the product template.
     */
    readonly attrTemplateType: ros.IResolvable | string;
    /**
     * Attribute TemplateUrl: The URL of the template.
     */
    readonly attrTemplateUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ServiceCatalog::ProductVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProductVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
export declare class ProductVersion extends ros.Resource implements IProductVersion {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProductVersionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Active: Specifies whether the product version is active.
     */
    readonly attrActive: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the product version.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the product version.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Guidance: The recommendation information.
     */
    readonly attrGuidance: ros.IResolvable | string;
    /**
     * Attribute ProductId: The ID of the product to which the product version belongs.
     */
    readonly attrProductId: ros.IResolvable | string;
    /**
     * Attribute ProductVersionId: The ID of the product version.
     */
    readonly attrProductVersionId: ros.IResolvable | string;
    /**
     * Attribute ProductVersionName: The name of the product version.
     */
    readonly attrProductVersionName: ros.IResolvable | string;
    /**
     * Attribute TemplateType: The type of the product template.
     */
    readonly attrTemplateType: ros.IResolvable | string;
    /**
     * Attribute TemplateUrl: The URL of the template.
     */
    readonly attrTemplateUrl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProductVersionProps, enableResourcePropertyConstraint?: boolean);
}
