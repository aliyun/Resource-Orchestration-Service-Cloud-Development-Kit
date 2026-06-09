import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConstraint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export interface RosConstraintProps {
    /**
     * @Property config: The configuration of the constraint.
     */
    readonly config: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property constraintType: The type of the constraint.
     */
    readonly constraintType: string | ros.IResolvable;
    /**
     * @Property portfolioId: The ID of the portfolio.
     */
    readonly portfolioId: string | ros.IResolvable;
    /**
     * @Property productId: The ID of the product.
     */
    readonly productId: string | ros.IResolvable;
    /**
     * @Property description: The description of the constraint.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::Constraint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Constraint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export declare class RosConstraint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::Constraint";
    /**
     * @Attribute ConstraintId: The ID of the constraint.
     */
    readonly attrConstraintId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property config: The configuration of the constraint.
     */
    config: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property constraintType: The type of the constraint.
     */
    constraintType: string | ros.IResolvable;
    /**
     * @Property portfolioId: The ID of the portfolio.
     */
    portfolioId: string | ros.IResolvable;
    /**
     * @Property productId: The ID of the product.
     */
    productId: string | ros.IResolvable;
    /**
     * @Property description: The description of the constraint.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConstraintProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosProductPortfolioAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
export interface RosProductPortfolioAssociationProps {
    /**
     * @Property portfolioId: The ID of the product portfolio.
     */
    readonly portfolioId: string | ros.IResolvable;
    /**
     * @Property productId: The ID of the product.
     */
    readonly productId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::ProductPortfolioAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductPortfolioAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
export declare class RosProductPortfolioAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::ProductPortfolioAssociation";
    /**
     * @Attribute ProductId: The ID of the product.
     */
    readonly attrProductId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property portfolioId: The ID of the product portfolio.
     */
    portfolioId: string | ros.IResolvable;
    /**
     * @Property productId: The ID of the product.
     */
    productId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductPortfolioAssociationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosProductVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
export interface RosProductVersionProps {
    /**
     * @Property productId: The ID of the product to which the product version belongs.
     */
    readonly productId: string | ros.IResolvable;
    /**
     * @Property productVersionName: The name of the product version.
     */
    readonly productVersionName: string | ros.IResolvable;
    /**
     * @Property templateType: The type of the product template. Valid values:
     * * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
     * * RosStandardTemplate: the standard ROS template.
     */
    readonly templateType: string | ros.IResolvable;
    /**
     * @Property templateUrl: The URL of the template.
     */
    readonly templateUrl: string | ros.IResolvable;
    /**
     * @Property active: Specifies whether the product version is active.
     */
    readonly active?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the product version. The value must be 1 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property guidance: The recommendation information. Valid values:
     * * Default: No recommendation information is provided. This is the default value.
     * * Recommended: the recommendation version.
     * * Latest: the latest version.
     * * Deprecated: the version that is about to be discontinued.
     */
    readonly guidance?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::ProductVersion`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductVersion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
export declare class RosProductVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::ProductVersion";
    /**
     * @Attribute Active: Specifies whether the product version is active.
     */
    readonly attrActive: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the product version.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the product version.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Guidance: The recommendation information.
     */
    readonly attrGuidance: ros.IResolvable;
    /**
     * @Attribute ProductId: The ID of the product to which the product version belongs.
     */
    readonly attrProductId: ros.IResolvable;
    /**
     * @Attribute ProductVersionId: The ID of the product version.
     */
    readonly attrProductVersionId: ros.IResolvable;
    /**
     * @Attribute ProductVersionName: The name of the product version.
     */
    readonly attrProductVersionName: ros.IResolvable;
    /**
     * @Attribute TemplateType: The type of the product template.
     */
    readonly attrTemplateType: ros.IResolvable;
    /**
     * @Attribute TemplateUrl: The URL of the template.
     */
    readonly attrTemplateUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property productId: The ID of the product to which the product version belongs.
     */
    productId: string | ros.IResolvable;
    /**
     * @Property productVersionName: The name of the product version.
     */
    productVersionName: string | ros.IResolvable;
    /**
     * @Property templateType: The type of the product template. Valid values:
     * * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
     * * RosStandardTemplate: the standard ROS template.
     */
    templateType: string | ros.IResolvable;
    /**
     * @Property templateUrl: The URL of the template.
     */
    templateUrl: string | ros.IResolvable;
    /**
     * @Property active: Specifies whether the product version is active.
     */
    active: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the product version. The value must be 1 to 128 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property guidance: The recommendation information. Valid values:
     * * Default: No recommendation information is provided. This is the default value.
     * * Recommended: the recommendation version.
     * * Latest: the latest version.
     * * Deprecated: the version that is about to be discontinued.
     */
    guidance: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductVersionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
