// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export interface RosAppProps {

    /**
     * @Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    readonly appIcon: string | ros.IResolvable;

    /**
     * @Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * @Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    readonly appWorkspaceId: string | ros.IResolvable;

    /**
     * @Property template: Application Template.
     */
    readonly template: RosApp.TemplateProperty | ros.IResolvable;

    /**
     * @Property appDescription: Description of application.
     */
    readonly appDescription?: string | ros.IResolvable;

    /**
     * @Property appType: The application type. Web applications and Copilot applications are supported.
     * - **Web**:Web application.
     * - **Copilot**:Copilot application.
     */
    readonly appType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppProps`
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the result of the validation.
 */
function RosAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appDescription', ros.validateString)(properties.appDescription));
    errors.collect(ros.propertyValidator('appIcon', ros.requiredValidator)(properties.appIcon));
    errors.collect(ros.propertyValidator('appIcon', ros.validateString)(properties.appIcon));
    errors.collect(ros.propertyValidator('appWorkspaceId', ros.requiredValidator)(properties.appWorkspaceId));
    errors.collect(ros.propertyValidator('appWorkspaceId', ros.validateString)(properties.appWorkspaceId));
    if(properties.appType && (typeof properties.appType) !== 'object') {
        errors.collect(ros.propertyValidator('appType', ros.validateAllowedValues)({
          data: properties.appType,
          allowedValues: ["Web","Copilot"],
        }));
    }
    errors.collect(ros.propertyValidator('appType', ros.validateString)(properties.appType));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('template', ros.requiredValidator)(properties.template));
    errors.collect(ros.propertyValidator('template', RosApp_TemplatePropertyValidator)(properties.template));
    return errors.wrap('supplied properties not correct for "RosAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MOBI::App` resource
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MOBI::App` resource.
 */
// @ts-ignore TS6133
function rosAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppPropsValidator(properties).assertSuccess();
    }
    return {
      'AppIcon': ros.stringToRosTemplate(properties.appIcon),
      'AppName': ros.stringToRosTemplate(properties.appName),
      'AppWorkspaceId': ros.stringToRosTemplate(properties.appWorkspaceId),
      'Template': rosAppTemplatePropertyToRosTemplate(properties.template),
      'AppDescription': ros.stringToRosTemplate(properties.appDescription),
      'AppType': ros.stringToRosTemplate(properties.appType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MOBI::App`.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MOBI::App";

    /**
     * @Attribute AppDescription: Description of application.
     */
    public readonly attrAppDescription: ros.IResolvable;

    /**
     * @Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    public readonly attrAppIcon: ros.IResolvable;

    /**
     * @Attribute AppId: Application ID.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute AppName: The application name.
     */
    public readonly attrAppName: ros.IResolvable;

    /**
     * @Attribute AppType: The application type. Web applications and Copilot applications are supported.
     */
    public readonly attrAppType: ros.IResolvable;

    /**
     * @Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    public readonly attrAppWorkspaceId: ros.IResolvable;

    /**
     * @Attribute CreateTime: Create time of application.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: Modified time of application.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    public appIcon: string | ros.IResolvable;

    /**
     * @Property appName: The application name.
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    public appWorkspaceId: string | ros.IResolvable;

    /**
     * @Property template: Application Template.
     */
    public template: RosApp.TemplateProperty | ros.IResolvable;

    /**
     * @Property appDescription: Description of application.
     */
    public appDescription: string | ros.IResolvable | undefined;

    /**
     * @Property appType: The application type. Web applications and Copilot applications are supported.
     * - **Web**:Web application.
     * - **Copilot**:Copilot application.
     */
    public appType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppDescription = this.getAtt('AppDescription');
        this.attrAppIcon = this.getAtt('AppIcon');
        this.attrAppId = this.getAtt('AppId');
        this.attrAppName = this.getAtt('AppName');
        this.attrAppType = this.getAtt('AppType');
        this.attrAppWorkspaceId = this.getAtt('AppWorkspaceId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrModifiedTime = this.getAtt('ModifiedTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appIcon = props.appIcon;
        this.appName = props.appName;
        this.appWorkspaceId = props.appWorkspaceId;
        this.template = props.template;
        this.appDescription = props.appDescription;
        this.appType = props.appType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appIcon: this.appIcon,
            appName: this.appName,
            appWorkspaceId: this.appWorkspaceId,
            template: this.template,
            appDescription: this.appDescription,
            appType: this.appType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface TemplateProperty {
        /**
         * @Property actualParameters: Actual Parameters. Take the Enterprise official website template as an example, you do not need to fill in this parameter.
         */
        readonly actualParameters?: string | ros.IResolvable;
        /**
         * @Property connectionsContent: Connector configuration. When creating an application, you need to rely on connectors to integrate external systems and services.
     * The connector magic pen platform provides a wealth of connectors, such as MySQL connectors, HTTP connectors, and hundreds of application connectors.
     * Take the Enterprise official website template as an example, the MySQL Connector depends on, so you need to replace the MySQL connection information in the following string.
         */
        readonly connectionsContent: string | ros.IResolvable;
        /**
         * @Property templateId: The application Template number. For specific templates, you can view all templates in the template market on the product console. The product console address is https:\/\/mobinext.console.aliyun.com.
         */
        readonly templateId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TemplateProperty`
 *
 * @param properties - the TypeScript properties of a `TemplateProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_TemplatePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actualParameters', ros.validateString)(properties.actualParameters));
    errors.collect(ros.propertyValidator('connectionsContent', ros.requiredValidator)(properties.connectionsContent));
    errors.collect(ros.propertyValidator('connectionsContent', ros.validateString)(properties.connectionsContent));
    errors.collect(ros.propertyValidator('templateId', ros.requiredValidator)(properties.templateId));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "TemplateProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MOBI::App.Template` resource
 *
 * @param properties - the TypeScript properties of a `TemplateProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MOBI::App.Template` resource.
 */
// @ts-ignore TS6133
function rosAppTemplatePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_TemplatePropertyValidator(properties).assertSuccess();
    return {
      'ActualParameters': ros.stringToRosTemplate(properties.actualParameters),
      'ConnectionsContent': ros.stringToRosTemplate(properties.connectionsContent),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
    };
}
