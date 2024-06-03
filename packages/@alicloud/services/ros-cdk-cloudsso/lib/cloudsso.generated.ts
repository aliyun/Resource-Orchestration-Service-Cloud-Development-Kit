// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessAssignment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export interface RosAccessAssignmentProps {

    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property principalId: The ID of the CloudSSO identity.
     * - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
     * - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
     */
    readonly principalId: string | ros.IResolvable;

    /**
     * @Property principalType: The type of the CloudSSO identity. Valid values: User, Group
     */
    readonly principalType: string | ros.IResolvable;

    /**
     * @Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;

    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessAssignmentProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessAssignmentProps`
 *
 * @returns the result of the validation.
 */
function RosAccessAssignmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('principalId', ros.requiredValidator)(properties.principalId));
    errors.collect(ros.propertyValidator('principalId', ros.validateString)(properties.principalId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if(properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
          data: properties.targetType,
          allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    if(properties.principalType && (typeof properties.principalType) !== 'object') {
        errors.collect(ros.propertyValidator('principalType', ros.validateAllowedValues)({
          data: properties.principalType,
          allowedValues: ["User","Group"],
        }));
    }
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosAccessAssignmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessAssignment` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessAssignmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessAssignment` resource.
 */
// @ts-ignore TS6133
function rosAccessAssignmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessAssignmentPropsValidator(properties).assertSuccess();
    }
    return {
      AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      PrincipalId: ros.stringToRosTemplate(properties.principalId),
      PrincipalType: ros.stringToRosTemplate(properties.principalType),
      TargetId: ros.stringToRosTemplate(properties.targetId),
      TargetType: ros.stringToRosTemplate(properties.targetType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessAssignment`, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessAssignment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export class RosAccessAssignment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessAssignment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    public accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property principalId: The ID of the CloudSSO identity.
     * - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
     * - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
     */
    public principalId: string | ros.IResolvable;

    /**
     * @Property principalType: The type of the CloudSSO identity. Valid values: User, Group
     */
    public principalType: string | ros.IResolvable;

    /**
     * @Property targetId: The ID of the task object.
     */
    public targetId: string | ros.IResolvable;

    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    public targetType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessAssignmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessAssignment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.principalId = props.principalId;
        this.principalType = props.principalType;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            principalId: this.principalId,
            principalType: this.principalType,
            targetId: this.targetId,
            targetType: this.targetType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessAssignmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccessConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export interface RosAccessConfigurationProps {

    /**
     * @Property accessConfigurationName: The name of the access configuration.
     * The name can contain letters, digits, and hyphens (-).
     * The name can be up to 32 characters in length.
     */
    readonly accessConfigurationName: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property description: The description of the access configuration.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
     */
    readonly relayState?: string | ros.IResolvable;

    /**
     * @Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * Unit: seconds.
     * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
     * Default value: 3600. The value indicates 1 hour.
     */
    readonly sessionDuration?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosAccessConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.sessionDuration && (typeof properties.sessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('sessionDuration', ros.validateRange)({
            data: properties.sessionDuration,
            min: 900,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('sessionDuration', ros.validateNumber)(properties.sessionDuration));
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.requiredValidator)(properties.accessConfigurationName));
    if(properties.accessConfigurationName && (typeof properties.accessConfigurationName) !== 'object') {
        errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateAllowedPattern)({
          data: properties.accessConfigurationName,
          reg: /^[a-zA-Z0-9-]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateString)(properties.accessConfigurationName));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('relayState', ros.validateString)(properties.relayState));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "RosAccessConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAccessConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      AccessConfigurationName: ros.stringToRosTemplate(properties.accessConfigurationName),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      Description: ros.stringToRosTemplate(properties.description),
      RelayState: ros.stringToRosTemplate(properties.relayState),
      SessionDuration: ros.numberToRosTemplate(properties.sessionDuration),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfiguration`, which is used to create an access configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export class RosAccessConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfiguration";

    /**
     * @Attribute AccessConfigurationId: The ID of the access configuration.
     */
    public readonly attrAccessConfigurationId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessConfigurationName: The name of the access configuration.
     * The name can contain letters, digits, and hyphens (-).
     * The name can be up to 32 characters in length.
     */
    public accessConfigurationName: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property description: The description of the access configuration.
     * The description can be up to 1,024 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
     */
    public relayState: string | ros.IResolvable | undefined;

    /**
     * @Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * Unit: seconds.
     * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
     * Default value: 3600. The value indicates 1 hour.
     */
    public sessionDuration: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessConfigurationId = this.getAtt('AccessConfigurationId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationName = props.accessConfigurationName;
        this.directoryId = props.directoryId;
        this.description = props.description;
        this.relayState = props.relayState;
        this.sessionDuration = props.sessionDuration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessConfigurationName: this.accessConfigurationName,
            directoryId: this.directoryId,
            description: this.description,
            relayState: this.relayState,
            sessionDuration: this.sessionDuration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccessConfigurationProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export interface RosAccessConfigurationProvisionProps {

    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;

    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessConfigurationProvisionProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProvisionProps`
 *
 * @returns the result of the validation.
 */
function RosAccessConfigurationProvisionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if(properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
          data: properties.targetType,
          allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosAccessConfigurationProvisionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfigurationProvision` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProvisionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfigurationProvision` resource.
 */
// @ts-ignore TS6133
function rosAccessConfigurationProvisionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessConfigurationProvisionPropsValidator(properties).assertSuccess();
    }
    return {
      AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      TargetId: ros.stringToRosTemplate(properties.targetId),
      TargetType: ros.stringToRosTemplate(properties.targetType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfigurationProvision`, which is used to provision an access configuration for an account in your resource directory.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfigurationProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export class RosAccessConfigurationProvision extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfigurationProvision";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    public accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property targetId: The ID of the task object.
     */
    public targetId: string | ros.IResolvable;

    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    public targetType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessConfigurationProvisionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessConfigurationProvision.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            targetId: this.targetId,
            targetType: this.targetType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessConfigurationProvisionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
export interface RosDirectoryProps {

    /**
     * @Property directoryName: The name of the directory. The name must be globally unique.
     * The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
     * The name must be 2 to 64 characters in length.
     * **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
     */
    readonly directoryName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosDirectoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryName', ros.validateString)(properties.directoryName));
    return errors.wrap('supplied properties not correct for "RosDirectoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Directory` resource
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Directory` resource.
 */
// @ts-ignore TS6133
function rosDirectoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryName: ros.stringToRosTemplate(properties.directoryName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Directory`, which is used to create a directory.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
export class RosDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Directory";

    /**
     * @Attribute DirectoryId: The ID of the directory.
     */
    public readonly attrDirectoryId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryName: The name of the directory. The name must be globally unique.
     * The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
     * The name must be 2 to 64 characters in length.
     * **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
     */
    public directoryName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDirectoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDirectoryId = this.getAtt('DirectoryId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryName = props.directoryName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryName: this.directoryName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export interface RosGroupProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the group.
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property description: The description of the group.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if(properties.groupName && (typeof properties.groupName) !== 'object') {
        errors.collect(ros.propertyValidator('groupName', ros.validateAllowedPattern)({
          data: properties.groupName,
          reg: /^[a-zA-Z0-9._-]{1,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Group`, which is used to create a group in CloudSSO.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Group";

    /**
     * @Attribute GroupId: The ID of the group.
     */
    public readonly attrGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the group.
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property description: The description of the group.
     * The description can be up to 1,024 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.groupName = props.groupName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            groupName: this.groupName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPermissionPolicyToAccessConfigurationAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export interface RosPermissionPolicyToAccessConfigurationAdditionProps {

    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property permissionPolicyName: The name of the permission policy.
     * - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
     * - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
     */
    readonly permissionPolicyName: string | ros.IResolvable;

    /**
     * @Property permissionPolicyType: The type of the permission policy. Valid values:
     * - System: system policy. Resource Access Management (RAM) system policies are reused.
     * - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
     */
    readonly permissionPolicyType: string | ros.IResolvable;

    /**
     * @Property inlinePolicyDocument: The configurations of the inline policy.
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    readonly inlinePolicyDocument?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosPermissionPolicyToAccessConfigurationAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('inlinePolicyDocument', ros.hashValidator(ros.validateAny))(properties.inlinePolicyDocument));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('permissionPolicyName', ros.requiredValidator)(properties.permissionPolicyName));
    errors.collect(ros.propertyValidator('permissionPolicyName', ros.validateString)(properties.permissionPolicyName));
    errors.collect(ros.propertyValidator('permissionPolicyType', ros.requiredValidator)(properties.permissionPolicyType));
    if(properties.permissionPolicyType && (typeof properties.permissionPolicyType) !== 'object') {
        errors.collect(ros.propertyValidator('permissionPolicyType', ros.validateAllowedValues)({
          data: properties.permissionPolicyType,
          allowedValues: ["System","Inline"],
        }));
    }
    errors.collect(ros.propertyValidator('permissionPolicyType', ros.validateString)(properties.permissionPolicyType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    return errors.wrap('supplied properties not correct for "RosPermissionPolicyToAccessConfigurationAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition` resource.
 */
// @ts-ignore TS6133
function rosPermissionPolicyToAccessConfigurationAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPermissionPolicyToAccessConfigurationAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      PermissionPolicyName: ros.stringToRosTemplate(properties.permissionPolicyName),
      PermissionPolicyType: ros.stringToRosTemplate(properties.permissionPolicyType),
      InlinePolicyDocument: ros.hashMapper(ros.objectToRosTemplate)(properties.inlinePolicyDocument),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition`, which is used to add a policy to an access configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `PermissionPolicyToAccessConfigurationAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export class RosPermissionPolicyToAccessConfigurationAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    public accessConfigurationId: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property permissionPolicyName: The name of the permission policy.
     * - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
     * - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
     */
    public permissionPolicyName: string | ros.IResolvable;

    /**
     * @Property permissionPolicyType: The type of the permission policy. Valid values:
     * - System: system policy. Resource Access Management (RAM) system policies are reused.
     * - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
     */
    public permissionPolicyType: string | ros.IResolvable;

    /**
     * @Property inlinePolicyDocument: The configurations of the inline policy.
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    public inlinePolicyDocument: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPermissionPolicyToAccessConfigurationAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPermissionPolicyToAccessConfigurationAddition.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.permissionPolicyName = props.permissionPolicyName;
        this.permissionPolicyType = props.permissionPolicyType;
        this.inlinePolicyDocument = props.inlinePolicyDocument;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            permissionPolicyName: this.permissionPolicyName,
            permissionPolicyType: this.permissionPolicyType,
            inlinePolicyDocument: this.inlinePolicyDocument,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPermissionPolicyToAccessConfigurationAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSAMLIdentityProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export interface RosSAMLIdentityProviderProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
     * The file is provided by the IdP that supports SAML 2.0.
     */
    readonly encodedMetadataDocument?: string | ros.IResolvable;

    /**
     * @Property entityId: The entity ID of the IdP.
     */
    readonly entityId?: string | ros.IResolvable;

    /**
     * @Property loginUrl: The logon URL of the IdP.
     */
    readonly loginUrl?: string | ros.IResolvable;

    /**
     * @Property ssoStatus: The status of SSO logon. Valid values:
     * - Enabled
     * - Disabled (default)
     */
    readonly ssoStatus?: string | ros.IResolvable;

    /**
     * @Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
     * - true: yes
     * - false: no (default)
     */
    readonly wantRequestSigned?: boolean | ros.IResolvable;

    /**
     * @Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
     */
    readonly x509Certificate?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSAMLIdentityProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosSAMLIdentityProviderProps`
 *
 * @returns the result of the validation.
 */
function RosSAMLIdentityProviderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entityId', ros.validateString)(properties.entityId));
    if(properties.ssoStatus && (typeof properties.ssoStatus) !== 'object') {
        errors.collect(ros.propertyValidator('ssoStatus', ros.validateAllowedValues)({
          data: properties.ssoStatus,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('ssoStatus', ros.validateString)(properties.ssoStatus));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('encodedMetadataDocument', ros.validateString)(properties.encodedMetadataDocument));
    errors.collect(ros.propertyValidator('wantRequestSigned', ros.validateBoolean)(properties.wantRequestSigned));
    errors.collect(ros.propertyValidator('loginUrl', ros.validateString)(properties.loginUrl));
    errors.collect(ros.propertyValidator('x509Certificate', ros.validateString)(properties.x509Certificate));
    return errors.wrap('supplied properties not correct for "RosSAMLIdentityProviderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SAMLIdentityProvider` resource
 *
 * @param properties - the TypeScript properties of a `RosSAMLIdentityProviderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SAMLIdentityProvider` resource.
 */
// @ts-ignore TS6133
function rosSAMLIdentityProviderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSAMLIdentityProviderPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      EncodedMetadataDocument: ros.stringToRosTemplate(properties.encodedMetadataDocument),
      EntityId: ros.stringToRosTemplate(properties.entityId),
      LoginUrl: ros.stringToRosTemplate(properties.loginUrl),
      SSOStatus: ros.stringToRosTemplate(properties.ssoStatus),
      WantRequestSigned: ros.booleanToRosTemplate(properties.wantRequestSigned),
      X509Certificate: ros.stringToRosTemplate(properties.x509Certificate),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SAMLIdentityProvider`, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLIdentityProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export class RosSAMLIdentityProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SAMLIdentityProvider";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
     * The file is provided by the IdP that supports SAML 2.0.
     */
    public encodedMetadataDocument: string | ros.IResolvable | undefined;

    /**
     * @Property entityId: The entity ID of the IdP.
     */
    public entityId: string | ros.IResolvable | undefined;

    /**
     * @Property loginUrl: The logon URL of the IdP.
     */
    public loginUrl: string | ros.IResolvable | undefined;

    /**
     * @Property ssoStatus: The status of SSO logon. Valid values:
     * - Enabled
     * - Disabled (default)
     */
    public ssoStatus: string | ros.IResolvable | undefined;

    /**
     * @Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
     * - true: yes
     * - false: no (default)
     */
    public wantRequestSigned: boolean | ros.IResolvable | undefined;

    /**
     * @Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
     */
    public x509Certificate: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSAMLIdentityProviderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSAMLIdentityProvider.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.encodedMetadataDocument = props.encodedMetadataDocument;
        this.entityId = props.entityId;
        this.loginUrl = props.loginUrl;
        this.ssoStatus = props.ssoStatus;
        this.wantRequestSigned = props.wantRequestSigned;
        this.x509Certificate = props.x509Certificate;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            encodedMetadataDocument: this.encodedMetadataDocument,
            entityId: this.entityId,
            loginUrl: this.loginUrl,
            ssoStatus: this.ssoStatus,
            wantRequestSigned: this.wantRequestSigned,
            x509Certificate: this.x509Certificate,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSAMLIdentityProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSCIMServerCredential`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export interface RosSCIMServerCredentialProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property status: The new status of the SCIM credential. Valid values:
     * - Enabled: The SCIM credential is enabled.
     * - Disabled: The SCIM credential is disabled.
     * The default value is Enabled.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSCIMServerCredentialProps`
 *
 * @param properties - the TypeScript properties of a `RosSCIMServerCredentialProps`
 *
 * @returns the result of the validation.
 */
function RosSCIMServerCredentialPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    return errors.wrap('supplied properties not correct for "RosSCIMServerCredentialProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMServerCredential` resource
 *
 * @param properties - the TypeScript properties of a `RosSCIMServerCredentialProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMServerCredential` resource.
 */
// @ts-ignore TS6133
function rosSCIMServerCredentialPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSCIMServerCredentialPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`, which is used to create a System for Cross-domain Identity Management (SCIM) credential.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMServerCredential` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export class RosSCIMServerCredential extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMServerCredential";

    /**
     * @Attribute CredentialId: The ID of the SCIM credential.
     */
    public readonly attrCredentialId: ros.IResolvable;

    /**
     * @Attribute CredentialSecret: The secret of the SCIM credential.
     */
    public readonly attrCredentialSecret: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property status: The new status of the SCIM credential. Valid values:
     * - Enabled: The SCIM credential is enabled.
     * - Disabled: The SCIM credential is disabled.
     * The default value is Enabled.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSCIMServerCredentialProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSCIMServerCredential.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCredentialId = this.getAtt('CredentialId');
        this.attrCredentialSecret = this.getAtt('CredentialSecret');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSCIMServerCredentialPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSCIMSynchronization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export interface RosSCIMSynchronizationProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    readonly scimSynchronizationStatus?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSCIMSynchronizationProps`
 *
 * @param properties - the TypeScript properties of a `RosSCIMSynchronizationProps`
 *
 * @returns the result of the validation.
 */
function RosSCIMSynchronizationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if(properties.scimSynchronizationStatus && (typeof properties.scimSynchronizationStatus) !== 'object') {
        errors.collect(ros.propertyValidator('scimSynchronizationStatus', ros.validateAllowedValues)({
          data: properties.scimSynchronizationStatus,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('scimSynchronizationStatus', ros.validateString)(properties.scimSynchronizationStatus));
    return errors.wrap('supplied properties not correct for "RosSCIMSynchronizationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMSynchronization` resource
 *
 * @param properties - the TypeScript properties of a `RosSCIMSynchronizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMSynchronization` resource.
 */
// @ts-ignore TS6133
function rosSCIMSynchronizationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSCIMSynchronizationPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      SCIMSynchronizationStatus: ros.stringToRosTemplate(properties.scimSynchronizationStatus),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMSynchronization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export class RosSCIMSynchronization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMSynchronization";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    public scimSynchronizationStatus: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSCIMSynchronizationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSCIMSynchronization.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.scimSynchronizationStatus = props.scimSynchronizationStatus;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            scimSynchronizationStatus: this.scimSynchronizationStatus,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSCIMSynchronizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export interface RosUserProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: @_-.
     * The name can be up to 64 characters in length.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * @Property description: The description of the user.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property displayName: The display name of the user.
     * The name can be up to 256 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;

    /**
     * @Property email: The email address of the user. The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * @Property firstName: The first name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly firstName?: string | ros.IResolvable;

    /**
     * @Property lastName: The last name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly lastName?: string | ros.IResolvable;

    /**
     * @Property status: The status of the user. Valid values:
     * - Enabled: The logon of the user is enabled. This is the default value.
     * - Disabled: The logon of the user is disabled.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    if(properties.userName && (typeof properties.userName) !== 'object') {
        errors.collect(ros.propertyValidator('userName', ros.validateAllowedPattern)({
          data: properties.userName,
          reg: /^[a-zA-Z0-9@._-]{1,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.email && (Array.isArray(properties.email) || (typeof properties.email) === 'string')) {
        errors.collect(ros.propertyValidator('email', ros.validateLength)({
            data: properties.email.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    if(properties.firstName && (Array.isArray(properties.firstName) || (typeof properties.firstName) === 'string')) {
        errors.collect(ros.propertyValidator('firstName', ros.validateLength)({
            data: properties.firstName.length,
            min: undefined,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('firstName', ros.validateString)(properties.firstName));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if(properties.lastName && (Array.isArray(properties.lastName) || (typeof properties.lastName) === 'string')) {
        errors.collect(ros.propertyValidator('lastName', ros.validateLength)({
            data: properties.lastName.length,
            min: undefined,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('lastName', ros.validateString)(properties.lastName));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      UserName: ros.stringToRosTemplate(properties.userName),
      Description: ros.stringToRosTemplate(properties.description),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      Email: ros.stringToRosTemplate(properties.email),
      FirstName: ros.stringToRosTemplate(properties.firstName),
      LastName: ros.stringToRosTemplate(properties.lastName),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::User`, which is used to create a user.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::User";

    /**
     * @Attribute UserId: The ID of the user.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: @_-.
     * The name can be up to 64 characters in length.
     */
    public userName: string | ros.IResolvable;

    /**
     * @Property description: The description of the user.
     * The description can be up to 1,024 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property displayName: The display name of the user.
     * The name can be up to 256 characters in length.
     */
    public displayName: string | ros.IResolvable | undefined;

    /**
     * @Property email: The email address of the user. The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property firstName: The first name of the user.
     * The name can be up to 64 characters in length.
     */
    public firstName: string | ros.IResolvable | undefined;

    /**
     * @Property lastName: The last name of the user.
     * The name can be up to 64 characters in length.
     */
    public lastName: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the user. Valid values:
     * - Enabled: The logon of the user is enabled. This is the default value.
     * - Disabled: The logon of the user is disabled.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.userName = props.userName;
        this.description = props.description;
        this.displayName = props.displayName;
        this.email = props.email;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            userName: this.userName,
            description: this.description,
            displayName: this.displayName,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export interface RosUserProvisionProps {

    /**
     * @Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
     * - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
     */
    readonly deletionStrategy: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
     * - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
     */
    readonly duplicationStrategy: string | ros.IResolvable;

    /**
     * @Property principalId: The ID of the principal. Valid values:
     * - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
     * - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
     */
    readonly principalId: string | ros.IResolvable;

    /**
     * @Property principalType: The type of the principal. Valid values:
     * - User: The principal is a cloud SSO user.
     * - Group: The principal is a cloud SSO group.
     */
    readonly principalType: string | ros.IResolvable;

    /**
     * @Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
     */
    readonly targetId: string | ros.IResolvable;

    /**
     * @Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
     */
    readonly targetType: string | ros.IResolvable;

    /**
     * @Property description: The description of the user.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserProvisionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProvisionProps`
 *
 * @returns the result of the validation.
 */
function RosUserProvisionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('principalId', ros.requiredValidator)(properties.principalId));
    errors.collect(ros.propertyValidator('principalId', ros.validateString)(properties.principalId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if(properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
          data: properties.targetType,
          allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('duplicationStrategy', ros.requiredValidator)(properties.duplicationStrategy));
    if(properties.duplicationStrategy && (typeof properties.duplicationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('duplicationStrategy', ros.validateAllowedValues)({
          data: properties.duplicationStrategy,
          allowedValues: ["KeepBoth","TakeOver"],
        }));
    }
    errors.collect(ros.propertyValidator('duplicationStrategy', ros.validateString)(properties.duplicationStrategy));
    errors.collect(ros.propertyValidator('deletionStrategy', ros.requiredValidator)(properties.deletionStrategy));
    if(properties.deletionStrategy && (typeof properties.deletionStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('deletionStrategy', ros.validateAllowedValues)({
          data: properties.deletionStrategy,
          allowedValues: ["Delete","Keep"],
        }));
    }
    errors.collect(ros.propertyValidator('deletionStrategy', ros.validateString)(properties.deletionStrategy));
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    if(properties.principalType && (typeof properties.principalType) !== 'object') {
        errors.collect(ros.propertyValidator('principalType', ros.validateAllowedValues)({
          data: properties.principalType,
          allowedValues: ["User","Group"],
        }));
    }
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosUserProvisionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserProvision` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProvisionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserProvision` resource.
 */
// @ts-ignore TS6133
function rosUserProvisionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserProvisionPropsValidator(properties).assertSuccess();
    }
    return {
      DeletionStrategy: ros.stringToRosTemplate(properties.deletionStrategy),
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      DuplicationStrategy: ros.stringToRosTemplate(properties.duplicationStrategy),
      PrincipalId: ros.stringToRosTemplate(properties.principalId),
      PrincipalType: ros.stringToRosTemplate(properties.principalType),
      TargetId: ros.stringToRosTemplate(properties.targetId),
      TargetType: ros.stringToRosTemplate(properties.targetType),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserProvision`, which is used to create a Resource Access Management (RAM) user provisioning.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export class RosUserProvision extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserProvision";

    /**
     * @Attribute UserProvisionId: The ID of the user provisioning.
     */
    public readonly attrUserProvisionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
     * - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
     */
    public deletionStrategy: string | ros.IResolvable;

    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
     * - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
     */
    public duplicationStrategy: string | ros.IResolvable;

    /**
     * @Property principalId: The ID of the principal. Valid values:
     * - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
     * - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
     */
    public principalId: string | ros.IResolvable;

    /**
     * @Property principalType: The type of the principal. Valid values:
     * - User: The principal is a cloud SSO user.
     * - Group: The principal is a cloud SSO group.
     */
    public principalType: string | ros.IResolvable;

    /**
     * @Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
     */
    public targetId: string | ros.IResolvable;

    /**
     * @Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
     */
    public targetType: string | ros.IResolvable;

    /**
     * @Property description: The description of the user.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProvisionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserProvision.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserProvisionId = this.getAtt('UserProvisionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deletionStrategy = props.deletionStrategy;
        this.directoryId = props.directoryId;
        this.duplicationStrategy = props.duplicationStrategy;
        this.principalId = props.principalId;
        this.principalType = props.principalType;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deletionStrategy: this.deletionStrategy,
            directoryId: this.directoryId,
            duplicationStrategy: this.duplicationStrategy,
            principalId: this.principalId,
            principalType: this.principalType,
            targetId: this.targetId,
            targetType: this.targetType,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserProvisionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export interface RosUserToGroupAdditionProps {

    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * @Property groupId: The ID of the group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * @Property userId: The ID of the user.
     */
    readonly userId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserToGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosUserToGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('userId', ros.requiredValidator)(properties.userId));
    errors.collect(ros.propertyValidator('userId', ros.validateString)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosUserToGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserToGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserToGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosUserToGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserToGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      DirectoryId: ros.stringToRosTemplate(properties.directoryId),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      UserId: ros.stringToRosTemplate(properties.userId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserToGroupAddition`, which is used to add a user to a group.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserToGroupAddition";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property directoryId: The ID of the directory.
     */
    public directoryId: string | ros.IResolvable;

    /**
     * @Property groupId: The ID of the group.
     */
    public groupId: string | ros.IResolvable;

    /**
     * @Property userId: The ID of the user.
     */
    public userId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserToGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.groupId = props.groupId;
        this.userId = props.userId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            directoryId: this.directoryId,
            groupId: this.groupId,
            userId: this.userId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserToGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
