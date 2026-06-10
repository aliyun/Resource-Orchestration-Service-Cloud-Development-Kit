// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export interface RosApplicationProps {

    /**
     * @Property imageUrl: The Picture in the OSS Storage Address.
     */
    readonly imageUrl: string | ros.IResolvable;

    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId: string | ros.IResolvable;

    /**
     * @Property topoUrl: Topo. Json Files in OSS Address.
     */
    readonly topoUrl: string | ros.IResolvable;

    /**
     * @Property applicationName: The name of the resource.
     */
    readonly applicationName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('topoUrl', ros.requiredValidator)(properties.topoUrl));
    errors.collect(ros.propertyValidator('topoUrl', ros.validateString)(properties.topoUrl));
    errors.collect(ros.propertyValidator('imageUrl', ros.requiredValidator)(properties.imageUrl));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('templateId', ros.requiredValidator)(properties.templateId));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BPStudio::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BPStudio::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'ImageUrl': ros.stringToRosTemplate(properties.imageUrl),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
      'TopoUrl': ros.stringToRosTemplate(properties.topoUrl),
      'ApplicationName': ros.stringToRosTemplate(properties.applicationName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BPStudio::Application`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BPStudio::Application";

    /**
     * @Attribute ApplicationId: The ID of the application.
     */
    public readonly attrApplicationId: ros.IResolvable;

    /**
     * @Attribute ApplicationName: Product Application.
     */
    public readonly attrApplicationName: ros.IResolvable;

    /**
     * @Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    public readonly attrImageUrl: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute TemplateId: The ID of the template.
     */
    public readonly attrTemplateId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageUrl: The Picture in the OSS Storage Address.
     */
    public imageUrl: string | ros.IResolvable;

    /**
     * @Property templateId: The ID of the template.
     */
    public templateId: string | ros.IResolvable;

    /**
     * @Property topoUrl: Topo. Json Files in OSS Address.
     */
    public topoUrl: string | ros.IResolvable;

    /**
     * @Property applicationName: The name of the resource.
     */
    public applicationName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

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
        this.attrTemplateId = this.getAtt('TemplateId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageUrl = props.imageUrl;
        this.templateId = props.templateId;
        this.topoUrl = props.topoUrl;
        this.applicationName = props.applicationName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageUrl: this.imageUrl,
            templateId: this.templateId,
            topoUrl: this.topoUrl,
            applicationName: this.applicationName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
