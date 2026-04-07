// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosConstraint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export interface RosConstraintProps {

    /**
     * @Property config: The configuration of the constraint.
     */
    readonly config: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosConstraintProps`
 *
 * @param properties - the TypeScript properties of a `RosConstraintProps`
 *
 * @returns the result of the validation.
 */
function RosConstraintPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('config', ros.requiredValidator)(properties.config));
    errors.collect(ros.propertyValidator('config', ros.hashValidator(ros.validateAny))(properties.config));
    errors.collect(ros.propertyValidator('portfolioId', ros.requiredValidator)(properties.portfolioId));
    errors.collect(ros.propertyValidator('portfolioId', ros.validateString)(properties.portfolioId));
    errors.collect(ros.propertyValidator('constraintType', ros.requiredValidator)(properties.constraintType));
    errors.collect(ros.propertyValidator('constraintType', ros.validateString)(properties.constraintType));
    errors.collect(ros.propertyValidator('productId', ros.requiredValidator)(properties.productId));
    errors.collect(ros.propertyValidator('productId', ros.validateString)(properties.productId));
    return errors.wrap('supplied properties not correct for "RosConstraintProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::Constraint` resource
 *
 * @param properties - the TypeScript properties of a `RosConstraintProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::Constraint` resource.
 */
// @ts-ignore TS6133
function rosConstraintPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConstraintPropsValidator(properties).assertSuccess();
    }
    return {
      'Config': ros.hashMapper(ros.objectToRosTemplate)(properties.config),
      'ConstraintType': ros.stringToRosTemplate(properties.constraintType),
      'PortfolioId': ros.stringToRosTemplate(properties.portfolioId),
      'ProductId': ros.stringToRosTemplate(properties.productId),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::Constraint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Constraint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
export class RosConstraint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::Constraint";

    /**
     * @Attribute ConstraintId: The ID of the constraint.
     */
    public readonly attrConstraintId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property config: The configuration of the constraint.
     */
    public config: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property constraintType: The type of the constraint.
     */
    public constraintType: string | ros.IResolvable;

    /**
     * @Property portfolioId: The ID of the portfolio.
     */
    public portfolioId: string | ros.IResolvable;

    /**
     * @Property productId: The ID of the product.
     */
    public productId: string | ros.IResolvable;

    /**
     * @Property description: The description of the constraint.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConstraintProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConstraint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConstraintId = this.getAtt('ConstraintId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.config = props.config;
        this.constraintType = props.constraintType;
        this.portfolioId = props.portfolioId;
        this.productId = props.productId;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            config: this.config,
            constraintType: this.constraintType,
            portfolioId: this.portfolioId,
            productId: this.productId,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConstraintPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosProductPortfolioAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosProductPortfolioAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosProductPortfolioAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('portfolioId', ros.requiredValidator)(properties.portfolioId));
    errors.collect(ros.propertyValidator('portfolioId', ros.validateString)(properties.portfolioId));
    errors.collect(ros.propertyValidator('productId', ros.requiredValidator)(properties.productId));
    errors.collect(ros.propertyValidator('productId', ros.validateString)(properties.productId));
    return errors.wrap('supplied properties not correct for "RosProductPortfolioAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::ProductPortfolioAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosProductPortfolioAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::ProductPortfolioAssociation` resource.
 */
// @ts-ignore TS6133
function rosProductPortfolioAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProductPortfolioAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'PortfolioId': ros.stringToRosTemplate(properties.portfolioId),
      'ProductId': ros.stringToRosTemplate(properties.productId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::ProductPortfolioAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductPortfolioAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
export class RosProductPortfolioAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::ProductPortfolioAssociation";

    /**
     * @Attribute ProductId: The ID of the product.
     */
    public readonly attrProductId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property portfolioId: The ID of the product portfolio.
     */
    public portfolioId: string | ros.IResolvable;

    /**
     * @Property productId: The ID of the product.
     */
    public productId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductPortfolioAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProductPortfolioAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProductId = this.getAtt('ProductId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.portfolioId = props.portfolioId;
        this.productId = props.productId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            portfolioId: this.portfolioId,
            productId: this.productId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProductPortfolioAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosProductVersionProps`
 *
 * @param properties - the TypeScript properties of a `RosProductVersionProps`
 *
 * @returns the result of the validation.
 */
function RosProductVersionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.guidance && (typeof properties.guidance) !== 'object') {
        errors.collect(ros.propertyValidator('guidance', ros.validateAllowedValues)({
          data: properties.guidance,
          allowedValues: ["Default","Recommended","Latest","Deprecated"],
        }));
    }
    errors.collect(ros.propertyValidator('guidance', ros.validateString)(properties.guidance));
    errors.collect(ros.propertyValidator('templateUrl', ros.requiredValidator)(properties.templateUrl));
    errors.collect(ros.propertyValidator('templateUrl', ros.validateString)(properties.templateUrl));
    errors.collect(ros.propertyValidator('active', ros.validateBoolean)(properties.active));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('productVersionName', ros.requiredValidator)(properties.productVersionName));
    errors.collect(ros.propertyValidator('productVersionName', ros.validateString)(properties.productVersionName));
    errors.collect(ros.propertyValidator('productId', ros.requiredValidator)(properties.productId));
    errors.collect(ros.propertyValidator('productId', ros.validateString)(properties.productId));
    errors.collect(ros.propertyValidator('templateType', ros.requiredValidator)(properties.templateType));
    if(properties.templateType && (typeof properties.templateType) !== 'object') {
        errors.collect(ros.propertyValidator('templateType', ros.validateAllowedValues)({
          data: properties.templateType,
          allowedValues: ["RosTerraformTemplate","RosStandardTemplate"],
        }));
    }
    errors.collect(ros.propertyValidator('templateType', ros.validateString)(properties.templateType));
    return errors.wrap('supplied properties not correct for "RosProductVersionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::ProductVersion` resource
 *
 * @param properties - the TypeScript properties of a `RosProductVersionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServiceCatalog::ProductVersion` resource.
 */
// @ts-ignore TS6133
function rosProductVersionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProductVersionPropsValidator(properties).assertSuccess();
    }
    return {
      'ProductId': ros.stringToRosTemplate(properties.productId),
      'ProductVersionName': ros.stringToRosTemplate(properties.productVersionName),
      'TemplateType': ros.stringToRosTemplate(properties.templateType),
      'TemplateUrl': ros.stringToRosTemplate(properties.templateUrl),
      'Active': ros.booleanToRosTemplate(properties.active),
      'Description': ros.stringToRosTemplate(properties.description),
      'Guidance': ros.stringToRosTemplate(properties.guidance),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServiceCatalog::ProductVersion`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductVersion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
export class RosProductVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServiceCatalog::ProductVersion";

    /**
     * @Attribute Active: Specifies whether the product version is active.
     */
    public readonly attrActive: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the product version.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the product version.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Guidance: The recommendation information.
     */
    public readonly attrGuidance: ros.IResolvable;

    /**
     * @Attribute ProductId: The ID of the product to which the product version belongs.
     */
    public readonly attrProductId: ros.IResolvable;

    /**
     * @Attribute ProductVersionId: The ID of the product version.
     */
    public readonly attrProductVersionId: ros.IResolvable;

    /**
     * @Attribute ProductVersionName: The name of the product version.
     */
    public readonly attrProductVersionName: ros.IResolvable;

    /**
     * @Attribute TemplateType: The type of the product template.
     */
    public readonly attrTemplateType: ros.IResolvable;

    /**
     * @Attribute TemplateUrl: The URL of the template.
     */
    public readonly attrTemplateUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productId: The ID of the product to which the product version belongs.
     */
    public productId: string | ros.IResolvable;

    /**
     * @Property productVersionName: The name of the product version.
     */
    public productVersionName: string | ros.IResolvable;

    /**
     * @Property templateType: The type of the product template. Valid values:
     * * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
     * * RosStandardTemplate: the standard ROS template.
     */
    public templateType: string | ros.IResolvable;

    /**
     * @Property templateUrl: The URL of the template.
     */
    public templateUrl: string | ros.IResolvable;

    /**
     * @Property active: Specifies whether the product version is active.
     */
    public active: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the product version. The value must be 1 to 128 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property guidance: The recommendation information. Valid values: 
     * * Default: No recommendation information is provided. This is the default value.
     * * Recommended: the recommendation version.
     * * Latest: the latest version.
     * * Deprecated: the version that is about to be discontinued.
     */
    public guidance: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductVersionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProductVersion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActive = this.getAtt('Active');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrGuidance = this.getAtt('Guidance');
        this.attrProductId = this.getAtt('ProductId');
        this.attrProductVersionId = this.getAtt('ProductVersionId');
        this.attrProductVersionName = this.getAtt('ProductVersionName');
        this.attrTemplateType = this.getAtt('TemplateType');
        this.attrTemplateUrl = this.getAtt('TemplateUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.productId = props.productId;
        this.productVersionName = props.productVersionName;
        this.templateType = props.templateType;
        this.templateUrl = props.templateUrl;
        this.active = props.active;
        this.description = props.description;
        this.guidance = props.guidance;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            productId: this.productId,
            productVersionName: this.productVersionName,
            templateType: this.templateType,
            templateUrl: this.templateUrl,
            active: this.active,
            description: this.description,
            guidance: this.guidance,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProductVersionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
