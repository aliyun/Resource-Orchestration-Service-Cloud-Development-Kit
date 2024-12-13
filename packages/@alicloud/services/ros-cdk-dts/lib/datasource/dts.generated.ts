// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosJobMonitorRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export interface RosJobMonitorRuleProps {

    /**
     * @Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly dtsJobId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosJobMonitorRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosJobMonitorRuleProps`
 *
 * @returns the result of the validation.
 */
function RosJobMonitorRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsJobId', ros.requiredValidator)(properties.dtsJobId));
    errors.collect(ros.propertyValidator('dtsJobId', ros.validateString)(properties.dtsJobId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosJobMonitorRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::JobMonitorRule` resource
 *
 * @param properties - the TypeScript properties of a `RosJobMonitorRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::JobMonitorRule` resource.
 */
// @ts-ignore TS6133
function rosJobMonitorRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosJobMonitorRulePropsValidator(properties).assertSuccess();
    }
    return {
      'DtsJobId': ros.stringToRosTemplate(properties.dtsJobId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::JobMonitorRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `JobMonitorRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export class RosJobMonitorRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::JobMonitorRule";

    /**
     * @Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    public readonly attrDelayRuleTime: ros.IResolvable;

    /**
     * @Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    public readonly attrDtsJobId: ros.IResolvable;

    /**
     * @Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * @Attribute Phone: The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
     */
    public readonly attrPhone: ros.IResolvable;

    /**
     * @Attribute State: Indicates whether the monitoring rule is enabled.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * @Attribute Times: The number of cycles for the incremental validation task.
     */
    public readonly attrTimes: ros.IResolvable;

    /**
     * @Attribute Type: The type of the monitoring rule.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    public dtsJobId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosJobMonitorRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosJobMonitorRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDelayRuleTime = this.getAtt('DelayRuleTime');
        this.attrDtsJobId = this.getAtt('DtsJobId');
        this.attrPeriod = this.getAtt('Period');
        this.attrPhone = this.getAtt('Phone');
        this.attrState = this.getAtt('State');
        this.attrTimes = this.getAtt('Times');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsJobId = props.dtsJobId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsJobId: this.dtsJobId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosJobMonitorRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosJobMonitorRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export interface RosJobMonitorRulesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosJobMonitorRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosJobMonitorRulesProps`
 *
 * @returns the result of the validation.
 */
function RosJobMonitorRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosJobMonitorRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::JobMonitorRules` resource
 *
 * @param properties - the TypeScript properties of a `RosJobMonitorRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::JobMonitorRules` resource.
 */
// @ts-ignore TS6133
function rosJobMonitorRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosJobMonitorRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::JobMonitorRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `JobMonitorRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export class RosJobMonitorRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::JobMonitorRules";

    /**
     * @Attribute DtsJobIds: The list of dts job IDs.
     */
    public readonly attrDtsJobIds: ros.IResolvable;

    /**
     * @Attribute JobMonitorRules: The list of job monitor rules.
     */
    public readonly attrJobMonitorRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    constructor(scope: ros.Construct, id: string, props: RosJobMonitorRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosJobMonitorRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsJobIds = this.getAtt('DtsJobIds');
        this.attrJobMonitorRules = this.getAtt('JobMonitorRules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosJobMonitorRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface RosMigrationInstancesProps {

    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMigrationInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosMigrationInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosMigrationInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMigrationInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationInstances` resource.
 */
// @ts-ignore TS6133
function rosMigrationInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationInstances`, which is used to query information about Data Transmission Service (DTS) tasks.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export class RosMigrationInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationInstances";

    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable;

    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    public readonly attrMigrationInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosMigrationInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceIds = this.getAtt('DtsInstanceIds');
        this.attrMigrationInstances = this.getAtt('MigrationInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMigrationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export interface RosMigrationJobProps {

    /**
     * @Property dtsInstanceId: The ID of the synchronization instance.
     */
    readonly dtsInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMigrationJobProps`
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobProps`
 *
 * @returns the result of the validation.
 */
function RosMigrationJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.requiredValidator)(properties.dtsInstanceId));
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMigrationJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationJob` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationJob` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationJobPropsValidator(properties).assertSuccess();
    }
    return {
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export class RosMigrationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationJob";

    /**
     * @Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DestinationEndpointEngineName: The target database engine type.
     */
    public readonly attrDestinationEndpointEngineName: ros.IResolvable;

    /**
     * @Attribute DestinationSourceEndpointRegion: The target database engine type.
     */
    public readonly attrDestinationSourceEndpointRegion: ros.IResolvable;

    /**
     * @Attribute DtsInstanceId: The ID of the synchronization instance.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute SourceEndpointEngineName: The type of the source instance database engine.
     */
    public readonly attrSourceEndpointEngineName: ros.IResolvable;

    /**
     * @Attribute SourceEndpointRegion: The type of the source instance database engine.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: The ID of the synchronization instance.
     */
    public dtsInstanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDestinationEndpointEngineName = this.getAtt('DestinationEndpointEngineName');
        this.attrDestinationSourceEndpointRegion = this.getAtt('DestinationSourceEndpointRegion');
        this.attrDtsInstanceId = this.getAtt('DtsInstanceId');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrSourceEndpointEngineName = this.getAtt('SourceEndpointEngineName');
        this.attrSourceEndpointRegion = this.getAtt('SourceEndpointRegion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMigrationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export interface RosMigrationJobsProps {

    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMigrationJobsProps`
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobsProps`
 *
 * @returns the result of the validation.
 */
function RosMigrationJobsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMigrationJobsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationJobs` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationJobs` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationJobsPropsValidator(properties).assertSuccess();
    }
    return {
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationJobs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJobs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export class RosMigrationJobs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationJobs";

    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable;

    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    public readonly attrMigrationInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationJobs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceIds = this.getAtt('DtsInstanceIds');
        this.attrMigrationInstances = this.getAtt('MigrationInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationJobsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSynchronizationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export interface RosSynchronizationJobProps {

    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSynchronizationJobProps`
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobProps`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.requiredValidator)(properties.dtsInstanceId));
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSynchronizationJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::SynchronizationJob` resource
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::SynchronizationJob` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSynchronizationJobPropsValidator(properties).assertSuccess();
    }
    return {
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::SynchronizationJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export class RosSynchronizationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::SynchronizationJob";

    /**
     * @Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DestinationEndpointEngineName: The target database engine type.
     */
    public readonly attrDestinationEndpointEngineName: ros.IResolvable;

    /**
     * @Attribute DestinationEndpointRegion: Region of source instance.
     */
    public readonly attrDestinationEndpointRegion: ros.IResolvable;

    /**
     * @Attribute DtsInstanceId: Synchronization instance ID.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    public readonly attrSourceEndpointEngineName: ros.IResolvable;

    /**
     * @Attribute SourceEndpointRegion: Region of source instance.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    public dtsInstanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSynchronizationJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDestinationEndpointEngineName = this.getAtt('DestinationEndpointEngineName');
        this.attrDestinationEndpointRegion = this.getAtt('DestinationEndpointRegion');
        this.attrDtsInstanceId = this.getAtt('DtsInstanceId');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrSourceEndpointEngineName = this.getAtt('SourceEndpointEngineName');
        this.attrSourceEndpointRegion = this.getAtt('SourceEndpointRegion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSynchronizationJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSynchronizationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export interface RosSynchronizationJobsProps {

    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSynchronizationJobsProps`
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobsProps`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJobsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSynchronizationJobsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::SynchronizationJobs` resource
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::SynchronizationJobs` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSynchronizationJobsPropsValidator(properties).assertSuccess();
    }
    return {
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::SynchronizationJobs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJobs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export class RosSynchronizationJobs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::SynchronizationJobs";

    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable;

    /**
     * @Attribute SynchronizationInstances: The list of synchronization instances.
     */
    public readonly attrSynchronizationInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSynchronizationJobs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceIds = this.getAtt('DtsInstanceIds');
        this.attrSynchronizationInstances = this.getAtt('SynchronizationInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSynchronizationJobsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
