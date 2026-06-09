// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export interface RosApplicationProps {

    /**
     * @Property applicationId: The first ID of the resource.
     */
    readonly applicationId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('applicationId', ros.requiredValidator)(properties.applicationId));
    errors.collect(ros.propertyValidator('applicationId', ros.validateString)(properties.applicationId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::BPStudio::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::BPStudio::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'ApplicationId': ros.stringToRosTemplate(properties.applicationId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::BPStudio::Application`, which is used to query the information about an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::BPStudio::Application";

    /**
     * @Attribute ApplicationId: The first ID of the resource.
     */
    public readonly attrApplicationId: ros.IResolvable;

    /**
     * @Attribute ApplicationName: Application name.
     */
    public readonly attrApplicationName: ros.IResolvable;

    /**
     * @Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    public readonly attrImageUrl: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Status: The status of the resource.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property applicationId: The first ID of the resource.
     */
    public applicationId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApplicationId = this.getAtt('ApplicationId');
        this.attrApplicationName = this.getAtt('ApplicationName');
        this.attrImageUrl = this.getAtt('ImageUrl');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.applicationId = props.applicationId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            applicationId: this.applicationId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export interface RosTemplateProps {

    /**
     * @Property templateId: The first ID of the resource.
     */
    readonly templateId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('templateId', ros.requiredValidator)(properties.templateId));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::BPStudio::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::BPStudio::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::BPStudio::Template`, which is used to query the information about a template, such as the architecture diagram.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::BPStudio::Template";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Template description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ImageUrl: Representative resource picture address.
     */
    public readonly attrImageUrl: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute TemplateId: The first ID of the resource.
     */
    public readonly attrTemplateId: ros.IResolvable;

    /**
     * @Attribute TemplateName: The name of the resource.
     */
    public readonly attrTemplateName: ros.IResolvable;

    /**
     * @Attribute TopoUrl: Represents resource file address.
     */
    public readonly attrTopoUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property templateId: The first ID of the resource.
     */
    public templateId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrImageUrl = this.getAtt('ImageUrl');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTemplateId = this.getAtt('TemplateId');
        this.attrTemplateName = this.getAtt('TemplateName');
        this.attrTopoUrl = this.getAtt('TopoUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.templateId = props.templateId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            templateId: this.templateId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
