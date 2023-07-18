// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::SAE::Applications`
 */
export interface RosApplicationsProps {

    /**
     * @Property appName: The name of application.
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * @Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    readonly fieldType?: string | ros.IResolvable;

    /**
     * @Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    readonly fieldValue?: string | ros.IResolvable;

    /**
     * @Property namespaceId: The ID of namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplicationsProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationsProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('fieldValue', ros.validateString)(properties.fieldValue));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('fieldType', ros.validateString)(properties.fieldType));
    return errors.wrap('supplied properties not correct for "RosApplicationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SAE::Applications` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SAE::Applications` resource.
 */
// @ts-ignore TS6133
function rosApplicationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationsPropsValidator(properties).assertSuccess();
    }
    return {
      AppName: ros.stringToRosTemplate(properties.appName),
      FieldType: ros.stringToRosTemplate(properties.fieldType),
      FieldValue: ros.stringToRosTemplate(properties.fieldValue),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::SAE::Applications`
 */
export class RosApplications extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Applications";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ApplicationIds: The list of application IDs.
     */
    public readonly attrApplicationIds: ros.IResolvable;

    /**
     * @Attribute Applications: The list of applications.
     */
    public readonly attrApplications: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The name of application.
     */
    public appName: string | ros.IResolvable | undefined;

    /**
     * @Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    public fieldType: string | ros.IResolvable | undefined;

    /**
     * @Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    public fieldValue: string | ros.IResolvable | undefined;

    /**
     * @Property namespaceId: The ID of namespace.
     */
    public namespaceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::SAE::Applications`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplications.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApplicationIds = this.getAtt('ApplicationIds');
        this.attrApplications = this.getAtt('Applications');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.fieldType = props.fieldType;
        this.fieldValue = props.fieldValue;
        this.namespaceId = props.namespaceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            fieldType: this.fieldType,
            fieldValue: this.fieldValue,
            namespaceId: this.namespaceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::SAE::Namespaces`
 */
export interface RosNamespacesProps {
}

/**
 * Determine whether the given properties match those of a `RosNamespacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosNamespacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SAE::Namespaces` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SAE::Namespaces` resource.
 */
// @ts-ignore TS6133
function rosNamespacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacesPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::SAE::Namespaces`
 */
export class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Namespaces";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NamespaceIds: The list of namespace names.
     */
    public readonly attrNamespaceIds: ros.IResolvable;

    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::SAE::Namespaces`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceIds = this.getAtt('NamespaceIds');
        this.attrNamespaces = this.getAtt('Namespaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
