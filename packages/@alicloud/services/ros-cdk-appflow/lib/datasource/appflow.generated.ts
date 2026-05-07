// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosUserAuthConfigs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export interface RosUserAuthConfigsProps {

    /**
     * @Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;

    /**
     * @Property authConfigNames: The names of the config.
     */
    readonly authConfigNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserAuthConfigsProps`
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigsProps`
 *
 * @returns the result of the validation.
 */
function RosUserAuthConfigsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.authConfigNames && (Array.isArray(properties.authConfigNames) || (typeof properties.authConfigNames) === 'string')) {
        errors.collect(ros.propertyValidator('authConfigNames', ros.validateLength)({
            data: properties.authConfigNames.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('authConfigNames', ros.listValidator(ros.validateString))(properties.authConfigNames));
    errors.collect(ros.propertyValidator('connectorId', ros.requiredValidator)(properties.connectorId));
    errors.collect(ros.propertyValidator('connectorId', ros.validateString)(properties.connectorId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosUserAuthConfigsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::AppFlow::UserAuthConfigs` resource
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::AppFlow::UserAuthConfigs` resource.
 */
// @ts-ignore TS6133
function rosUserAuthConfigsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserAuthConfigsPropsValidator(properties).assertSuccess();
    }
    return {
      'ConnectorId': ros.stringToRosTemplate(properties.connectorId),
      'AuthConfigNames': ros.listMapper(ros.stringToRosTemplate)(properties.authConfigNames),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::AppFlow::UserAuthConfigs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfigs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export class RosUserAuthConfigs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::AppFlow::UserAuthConfigs";

    /**
     * @Attribute AuthConfigIds: The list of auth config ids.
     */
    public readonly attrAuthConfigIds: ros.IResolvable;

    /**
     * @Attribute AuthConfigs: The list of auth configs
     */
    public readonly attrAuthConfigs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectorId: The id of connector.
     */
    public connectorId: string | ros.IResolvable;

    /**
     * @Property authConfigNames: The names of the config.
     */
    public authConfigNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserAuthConfigs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthConfigIds = this.getAtt('AuthConfigIds');
        this.attrAuthConfigs = this.getAtt('AuthConfigs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectorId = props.connectorId;
        this.authConfigNames = props.authConfigNames;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectorId: this.connectorId,
            authConfigNames: this.authConfigNames,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserAuthConfigsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
