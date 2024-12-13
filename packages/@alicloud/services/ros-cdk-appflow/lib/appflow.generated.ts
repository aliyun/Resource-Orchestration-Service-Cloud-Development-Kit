// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export interface RosFlowProps {

    /**
     * @Property flowName: The name of the flow.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property flowDesc: The description of the flow.
     */
    readonly flowDesc?: string | ros.IResolvable;

    /**
     * @Property flowId: The ID of the flow.
     */
    readonly flowId?: string | ros.IResolvable;

    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    readonly flowStatus?: string | ros.IResolvable;

    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    readonly launchFlow?: boolean | ros.IResolvable;

    /**
     * @Property parameters: The parameters of the flow.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property template: The template of the flow.
     */
    readonly template?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the result of the validation.
 */
function RosFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowId', ros.validateString)(properties.flowId));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('flowDesc', ros.validateString)(properties.flowDesc));
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    errors.collect(ros.propertyValidator('launchFlow', ros.validateBoolean)(properties.launchFlow));
    if(properties.flowStatus && (typeof properties.flowStatus) !== 'object') {
        errors.collect(ros.propertyValidator('flowStatus', ros.validateAllowedValues)({
          data: properties.flowStatus,
          allowedValues: ["Enable","Disable"],
        }));
    }
    errors.collect(ros.propertyValidator('flowStatus', ros.validateString)(properties.flowStatus));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    errors.collect(ros.propertyValidator('template', ros.hashValidator(ros.validateAny))(properties.template));
    return errors.wrap('supplied properties not correct for "RosFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Flow` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Flow` resource.
 */
// @ts-ignore TS6133
function rosFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'FlowDesc': ros.stringToRosTemplate(properties.flowDesc),
      'FlowId': ros.stringToRosTemplate(properties.flowId),
      'FlowStatus': ros.stringToRosTemplate(properties.flowStatus),
      'LaunchFlow': ros.booleanToRosTemplate(properties.launchFlow),
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'Template': ros.hashMapper(ros.objectToRosTemplate)(properties.template),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Flow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Flow";

    /**
     * @Attribute FlowId: The ID of the flow.
     */
    public readonly attrFlowId: ros.IResolvable;

    /**
     * @Attribute WebhookAddress: The webhook address of the flow.
     */
    public readonly attrWebhookAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowName: The name of the flow.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property flowDesc: The description of the flow.
     */
    public flowDesc: string | ros.IResolvable | undefined;

    /**
     * @Property flowId: The ID of the flow.
     */
    public flowId: string | ros.IResolvable | undefined;

    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    public flowStatus: string | ros.IResolvable | undefined;

    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    public launchFlow: boolean | ros.IResolvable | undefined;

    /**
     * @Property parameters: The parameters of the flow.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property template: The template of the flow.
     */
    public template: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateId: The ID of the template.
     */
    public templateId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowId = this.getAtt('FlowId');
        this.attrWebhookAddress = this.getAtt('WebhookAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowName = props.flowName;
        this.flowDesc = props.flowDesc;
        this.flowId = props.flowId;
        this.flowStatus = props.flowStatus;
        this.launchFlow = props.launchFlow;
        this.parameters = props.parameters;
        this.template = props.template;
        this.templateId = props.templateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowName: this.flowName,
            flowDesc: this.flowDesc,
            flowId: this.flowId,
            flowStatus: this.flowStatus,
            launchFlow: this.launchFlow,
            parameters: this.parameters,
            template: this.template,
            templateId: this.templateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface RosUserAuthConfigProps {

    /**
     * @Property authConfig: AuthConfig
     */
    readonly authConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property authConfigName: The name of the config.
     */
    readonly authConfigName: string | ros.IResolvable;

    /**
     * @Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserAuthConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigProps`
 *
 * @returns the result of the validation.
 */
function RosUserAuthConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authConfig', ros.requiredValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfig', ros.hashValidator(ros.validateAny))(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfigName', ros.requiredValidator)(properties.authConfigName));
    errors.collect(ros.propertyValidator('authConfigName', ros.validateString)(properties.authConfigName));
    errors.collect(ros.propertyValidator('connectorId', ros.requiredValidator)(properties.connectorId));
    errors.collect(ros.propertyValidator('connectorId', ros.validateString)(properties.connectorId));
    return errors.wrap('supplied properties not correct for "RosUserAuthConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::UserAuthConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::UserAuthConfig` resource.
 */
// @ts-ignore TS6133
function rosUserAuthConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserAuthConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.authConfig),
      'AuthConfigName': ros.stringToRosTemplate(properties.authConfigName),
      'ConnectorId': ros.stringToRosTemplate(properties.connectorId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export class RosUserAuthConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::UserAuthConfig";

    /**
     * @Attribute AuthConfig: AuthConfig
     */
    public readonly attrAuthConfig: ros.IResolvable;

    /**
     * @Attribute AuthConfigId: The id of the config.
     */
    public readonly attrAuthConfigId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authConfig: AuthConfig
     */
    public authConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property authConfigName: The name of the config.
     */
    public authConfigName: string | ros.IResolvable;

    /**
     * @Property connectorId: The id of connector.
     */
    public connectorId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserAuthConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthConfig = this.getAtt('AuthConfig');
        this.attrAuthConfigId = this.getAtt('AuthConfigId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authConfig = props.authConfig;
        this.authConfigName = props.authConfigName;
        this.connectorId = props.connectorId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authConfig: this.authConfig,
            authConfigName: this.authConfigName,
            connectorId: this.connectorId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserAuthConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
