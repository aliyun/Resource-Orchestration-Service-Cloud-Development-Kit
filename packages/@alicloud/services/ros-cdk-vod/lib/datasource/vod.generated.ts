// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosEditingProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
 */
export interface RosEditingProjectProps {

    /**
     * @Property editingProjectId: The ID of the online editing project.
     */
    readonly editingProjectId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEditingProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectProps`
 *
 * @returns the result of the validation.
 */
function RosEditingProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('editingProjectId', ros.requiredValidator)(properties.editingProjectId));
    errors.collect(ros.propertyValidator('editingProjectId', ros.validateString)(properties.editingProjectId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEditingProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProject` resource
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProject` resource.
 */
// @ts-ignore TS6133
function rosEditingProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEditingProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'EditingProjectId': ros.stringToRosTemplate(properties.editingProjectId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProject`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
 */
export class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProject";

    /**
     * @Attribute CreateTime: The time when the online editing project was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EditingProjectId: The ID of the online editing project.
     */
    public readonly attrEditingProjectId: ros.IResolvable;

    /**
     * @Attribute EditingProjectName: The name of the online editing project.
     */
    public readonly attrEditingProjectName: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: The last time when the online editing project was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute Timeline: The timeline of the online editing project.
     */
    public readonly attrTimeline: ros.IResolvable;

    /**
     * @Attribute Title: The title of the online editing project.
     */
    public readonly attrTitle: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property editingProjectId: The ID of the online editing project.
     */
    public editingProjectId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEditingProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEditingProjectId = this.getAtt('EditingProjectId');
        this.attrEditingProjectName = this.getAtt('EditingProjectName');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrTimeline = this.getAtt('Timeline');
        this.attrTitle = this.getAtt('Title');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.editingProjectId = props.editingProjectId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            editingProjectId: this.editingProjectId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEditingProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEditingProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export interface RosEditingProjectsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property title: The title of the online editing project.
     */
    readonly title?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEditingProjectsProps`
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectsProps`
 *
 * @returns the result of the validation.
 */
function RosEditingProjectsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEditingProjectsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProjects` resource
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProjects` resource.
 */
// @ts-ignore TS6133
function rosEditingProjectsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEditingProjectsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Title': ros.stringToRosTemplate(properties.title),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProjects`, which is used to query the basic information about online editing projects.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export class RosEditingProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProjects";

    /**
     * @Attribute EditingProjectIds: The list of editing project IDs.
     */
    public readonly attrEditingProjectIds: ros.IResolvable;

    /**
     * @Attribute EditingProjects: The list of editing projects.
     */
    public readonly attrEditingProjects: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property title: The title of the online editing project.
     */
    public title: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEditingProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEditingProjectIds = this.getAtt('EditingProjectIds');
        this.attrEditingProjects = this.getAtt('EditingProjects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.title = props.title;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            title: this.title,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEditingProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMessageCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
 */
export interface RosMessageCallbackProps {

    /**
     * @Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMessageCallbackProps`
 *
 * @param properties - the TypeScript properties of a `RosMessageCallbackProps`
 *
 * @returns the result of the validation.
 */
function RosMessageCallbackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMessageCallbackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::MessageCallback` resource
 *
 * @param properties - the TypeScript properties of a `RosMessageCallbackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::MessageCallback` resource.
 */
// @ts-ignore TS6133
function rosMessageCallbackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMessageCallbackPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::MessageCallback`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
 */
export class RosMessageCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::MessageCallback";

    /**
     * @Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute AuthKey: The cryptographic key. This parameter is returned only for HTTP callbacks.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * @Attribute AuthSwitch: Indicates whether callback authentication is enabled. This parameter is returned only for HTTP callbacks.
     */
    public readonly attrAuthSwitch: ros.IResolvable;

    /**
     * @Attribute CallbackType: The callback method.
     */
    public readonly attrCallbackType: ros.IResolvable;

    /**
     * @Attribute CallbackUrl: The callback URL. This parameter is returned only for HTTP callbacks.
     */
    public readonly attrCallbackUrl: ros.IResolvable;

    /**
     * @Attribute EventTypeList: The type of the callback event.
     */
    public readonly attrEventTypeList: ros.IResolvable;

    /**
     * @Attribute MnsEndpoint: The public endpoint of MNS. This parameter is returned only for MNS callbacks.
     */
    public readonly attrMnsEndpoint: ros.IResolvable;

    /**
     * @Attribute MnsQueueName: The name of the Message Service (MNS) queue. This parameter is returned only for MNS callbacks.
     */
    public readonly attrMnsQueueName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The ID of the application.
     */
    public appId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosMessageCallbackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMessageCallback.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrAuthKey = this.getAtt('AuthKey');
        this.attrAuthSwitch = this.getAtt('AuthSwitch');
        this.attrCallbackType = this.getAtt('CallbackType');
        this.attrCallbackUrl = this.getAtt('CallbackUrl');
        this.attrEventTypeList = this.getAtt('EventTypeList');
        this.attrMnsEndpoint = this.getAtt('MnsEndpoint');
        this.attrMnsQueueName = this.getAtt('MnsQueueName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMessageCallbackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMessageCallbacks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
 */
export interface RosMessageCallbacksProps {

    /**
     * @Property appId: The ID of the application.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMessageCallbacksProps`
 *
 * @param properties - the TypeScript properties of a `RosMessageCallbacksProps`
 *
 * @returns the result of the validation.
 */
function RosMessageCallbacksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMessageCallbacksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::MessageCallbacks` resource
 *
 * @param properties - the TypeScript properties of a `RosMessageCallbacksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::MessageCallbacks` resource.
 */
// @ts-ignore TS6133
function rosMessageCallbacksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMessageCallbacksPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::MessageCallbacks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallbacks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
 */
export class RosMessageCallbacks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::MessageCallbacks";

    /**
     * @Attribute AppIds: The list of app IDs.
     */
    public readonly attrAppIds: ros.IResolvable;

    /**
     * @Attribute MessageCallbacks: The list of message callbacks.
     */
    public readonly attrMessageCallbacks: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The ID of the application.
     */
    public appId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosMessageCallbacksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMessageCallbacks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppIds = this.getAtt('AppIds');
        this.attrMessageCallbacks = this.getAtt('MessageCallbacks');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMessageCallbacksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
export interface RosStorageProps {

    /**
     * @Property storageLocation: The ID of the Storage.
     */
    readonly storageLocation: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStorageProps`
 *
 * @param properties - the TypeScript properties of a `RosStorageProps`
 *
 * @returns the result of the validation.
 */
function RosStoragePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storageLocation', ros.requiredValidator)(properties.storageLocation));
    errors.collect(ros.propertyValidator('storageLocation', ros.validateString)(properties.storageLocation));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosStorageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::Storage` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::Storage` resource.
 */
// @ts-ignore TS6133
function rosStoragePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStoragePropsValidator(properties).assertSuccess();
    }
    return {
      'StorageLocation': ros.stringToRosTemplate(properties.storageLocation),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::Storage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Storage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
export class RosStorage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::Storage";

    /**
     * @Attribute CreateTime: The creation time of the Storage.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DefaultUpload: Whether to upload by default.
     */
    public readonly attrDefaultUpload: ros.IResolvable;

    /**
     * @Attribute GmtModified: Modification time.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * @Attribute GroupId: Storage Group Id.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute StorageAcl: Storage ACL.
     */
    public readonly attrStorageAcl: ros.IResolvable;

    /**
     * @Attribute StorageLocation: The ID of the Storage.
     */
    public readonly attrStorageLocation: ros.IResolvable;

    /**
     * @Attribute StorageUsage: Storage Use.
     */
    public readonly attrStorageUsage: ros.IResolvable;

    /**
     * @Attribute Type: The storage class.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property storageLocation: The ID of the Storage.
     */
    public storageLocation: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosStorageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStorage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDefaultUpload = this.getAtt('DefaultUpload');
        this.attrGmtModified = this.getAtt('GmtModified');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStorageAcl = this.getAtt('StorageAcl');
        this.attrStorageLocation = this.getAtt('StorageLocation');
        this.attrStorageUsage = this.getAtt('StorageUsage');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.storageLocation = props.storageLocation;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            storageLocation: this.storageLocation,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStoragePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
 */
export interface RosStoragesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStoragesProps`
 *
 * @param properties - the TypeScript properties of a `RosStoragesProps`
 *
 * @returns the result of the validation.
 */
function RosStoragesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosStoragesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::Storages` resource
 *
 * @param properties - the TypeScript properties of a `RosStoragesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::Storages` resource.
 */
// @ts-ignore TS6133
function rosStoragesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStoragesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::Storages`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Storages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
 */
export class RosStorages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::Storages";

    /**
     * @Attribute StorageLocations: The list of storage locations.
     */
    public readonly attrStorageLocations: ros.IResolvable;

    /**
     * @Attribute Storages: The list of storages.
     */
    public readonly attrStorages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStoragesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStorages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrStorageLocations = this.getAtt('StorageLocations');
        this.attrStorages = this.getAtt('Storages');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStoragesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
