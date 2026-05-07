// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosServiceObservability`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
 */
export interface RosServiceObservabilityProps {

    /**
     * @Property type: The type of service observability.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property workspace: The workspace name.
     */
    readonly workspace: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceObservabilityProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceObservabilityProps`
 *
 * @returns the result of the validation.
 */
function RosServiceObservabilityPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["rum","apm"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('workspace', ros.requiredValidator)(properties.workspace));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServiceObservabilityProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS2::ServiceObservability` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceObservabilityProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS2::ServiceObservability` resource.
 */
// @ts-ignore TS6133
function rosServiceObservabilityPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceObservabilityPropsValidator(properties).assertSuccess();
    }
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS2::ServiceObservability`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceObservability` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
 */
export class RosServiceObservability extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS2::ServiceObservability";

    /**
     * @Attribute EntryPointInfo: The entry point info of service observability.
     */
    public readonly attrEntryPointInfo: ros.IResolvable;

    /**
     * @Attribute FeeType: The fee type of service observability.
     */
    public readonly attrFeeType: ros.IResolvable;

    /**
     * @Attribute Quotas: The quotas of service observability.
     */
    public readonly attrQuotas: ros.IResolvable;

    /**
     * @Attribute Settings: The settings of service observability.
     */
    public readonly attrSettings: ros.IResolvable;

    /**
     * @Attribute Status: The status of service observability.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute Type: The type of service observability.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute Workspace: The name of workspace.
     */
    public readonly attrWorkspace: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property type: The type of service observability.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property workspace: The workspace name.
     */
    public workspace: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosServiceObservabilityProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceObservability.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEntryPointInfo = this.getAtt('EntryPointInfo');
        this.attrFeeType = this.getAtt('FeeType');
        this.attrQuotas = this.getAtt('Quotas');
        this.attrSettings = this.getAtt('Settings');
        this.attrStatus = this.getAtt('Status');
        this.attrType = this.getAtt('Type');
        this.attrWorkspace = this.getAtt('Workspace');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.workspace = props.workspace;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            type: this.type,
            workspace: this.workspace,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceObservabilityPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
