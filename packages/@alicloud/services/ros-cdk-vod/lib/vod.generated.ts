// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosEditingProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-editingproject
 */
export interface RosEditingProjectProps {

    /**
     * @Property title: The title of the online editing project.
     */
    readonly title: string | ros.IResolvable;

    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    readonly editingProjectName?: string | ros.IResolvable;

    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    readonly timeline?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('editingProjectName', ros.validateString)(properties.editingProjectName));
    errors.collect(ros.propertyValidator('timeline', ros.validateString)(properties.timeline));
    errors.collect(ros.propertyValidator('title', ros.requiredValidator)(properties.title));
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    return errors.wrap('supplied properties not correct for "RosEditingProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VOD::EditingProject` resource
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VOD::EditingProject` resource.
 */
// @ts-ignore TS6133
function rosEditingProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEditingProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Title: ros.stringToRosTemplate(properties.title),
      EditingProjectName: ros.stringToRosTemplate(properties.editingProjectName),
      Timeline: ros.stringToRosTemplate(properties.timeline),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::EditingProject`, which is used to create an online editing project.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-editingproject
 */
export class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::EditingProject";

    /**
     * @Attribute CreateTime: The time when the online editing project was created.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * @Attribute ModifiedTime: The last time when the online editing project was modified.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * @Property title: The title of the online editing project.
     */
    public title: string | ros.IResolvable;

    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    public editingProjectName: string | ros.IResolvable | undefined;

    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    public timeline: string | ros.IResolvable | undefined;

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
        this.title = props.title;
        this.editingProjectName = props.editingProjectName;
        this.timeline = props.timeline;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            title: this.title,
            editingProjectName: this.editingProjectName,
            timeline: this.timeline,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEditingProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMessageCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
export interface RosMessageCallbackProps {

    /**
     * @Property callbackType: Callback method.
     */
    readonly callbackType: string | ros.IResolvable;

    /**
     * @Property appId: App ID. If it is not passed, it is the ID of the default 
     * application of the system, with a fixed value: app-1000000.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * @Property authKey: Authentication Key, up to 32 characters, must contain both uppercase 
     * and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
     */
    readonly authKey?: string | ros.IResolvable;

    /**
     * @Property authSwitch: The authentication switch of the HTTP callback, 
     * this parameter is valid when the callback method is set to HTTP.
     */
    readonly authSwitch?: string | ros.IResolvable;

    /**
     * @Property callbackUrl: Callback address. When the callback method is HTTP, 
     * this parameter needs to be set. The length of the callback address 
     * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
     */
    readonly callbackUrl?: string | ros.IResolvable;

    /**
     * @Property eventTypeList: Callback event type. When the value is empty, all message notifications are turned off, 
     * and when the value is ALL, all message notifications are turned on. 
     * You can also specify to enable certain message notifications, 
     * and use a comma (,) to separate multiple event types.
     */
    readonly eventTypeList?: string | ros.IResolvable;

    /**
     * @Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the 
     * message queue public network endpoint. You can log in to the message service 
     * console and click the Get Endpoint button in the upper right corner to get it.
     */
    readonly mnsEndpoint?: string | ros.IResolvable;

    /**
     * @Property mnsQueueName: The name of the message queue, which can be viewed in the queue 
     * list by logging in to the message service console. 
     * When the callback method is MNS, this parameter needs to be set.
     */
    readonly mnsQueueName?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('mnsEndpoint', ros.validateString)(properties.mnsEndpoint));
    errors.collect(ros.propertyValidator('callbackUrl', ros.validateString)(properties.callbackUrl));
    errors.collect(ros.propertyValidator('authSwitch', ros.validateString)(properties.authSwitch));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('callbackType', ros.requiredValidator)(properties.callbackType));
    errors.collect(ros.propertyValidator('callbackType', ros.validateString)(properties.callbackType));
    errors.collect(ros.propertyValidator('eventTypeList', ros.validateString)(properties.eventTypeList));
    errors.collect(ros.propertyValidator('mnsQueueName', ros.validateString)(properties.mnsQueueName));
    errors.collect(ros.propertyValidator('authKey', ros.validateString)(properties.authKey));
    return errors.wrap('supplied properties not correct for "RosMessageCallbackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VOD::MessageCallback` resource
 *
 * @param properties - the TypeScript properties of a `RosMessageCallbackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VOD::MessageCallback` resource.
 */
// @ts-ignore TS6133
function rosMessageCallbackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMessageCallbackPropsValidator(properties).assertSuccess();
    }
    return {
      CallbackType: ros.stringToRosTemplate(properties.callbackType),
      AppId: ros.stringToRosTemplate(properties.appId),
      AuthKey: ros.stringToRosTemplate(properties.authKey),
      AuthSwitch: ros.stringToRosTemplate(properties.authSwitch),
      CallbackUrl: ros.stringToRosTemplate(properties.callbackUrl),
      EventTypeList: ros.stringToRosTemplate(properties.eventTypeList),
      MnsEndpoint: ros.stringToRosTemplate(properties.mnsEndpoint),
      MnsQueueName: ros.stringToRosTemplate(properties.mnsQueueName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::MessageCallback`, which is used to configure the callback method, callback URL, and event types for an event notification.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
export class RosMessageCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::MessageCallback";

    /**
     * @Attribute AppId: appid.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute AuthKey: auth key.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * @Attribute AuthSwitch: auth swith.
     */
    public readonly attrAuthSwitch: ros.IResolvable;

    /**
     * @Attribute CallbackType: callback type.
     */
    public readonly attrCallbackType: ros.IResolvable;

    /**
     * @Attribute CallbackUrl: url.
     */
    public readonly attrCallbackUrl: ros.IResolvable;

    /**
     * @Attribute EventTypeList: event type.
     */
    public readonly attrEventTypeList: ros.IResolvable;

    /**
     * @Attribute MnsEndpoint: mns endpoint.
     */
    public readonly attrMnsEndpoint: ros.IResolvable;

    /**
     * @Attribute MnsQueueName: queue name.
     */
    public readonly attrMnsQueueName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property callbackType: Callback method.
     */
    public callbackType: string | ros.IResolvable;

    /**
     * @Property appId: App ID. If it is not passed, it is the ID of the default 
     * application of the system, with a fixed value: app-1000000.
     */
    public appId: string | ros.IResolvable | undefined;

    /**
     * @Property authKey: Authentication Key, up to 32 characters, must contain both uppercase 
     * and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
     */
    public authKey: string | ros.IResolvable | undefined;

    /**
     * @Property authSwitch: The authentication switch of the HTTP callback, 
     * this parameter is valid when the callback method is set to HTTP.
     */
    public authSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property callbackUrl: Callback address. When the callback method is HTTP, 
     * this parameter needs to be set. The length of the callback address 
     * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
     */
    public callbackUrl: string | ros.IResolvable | undefined;

    /**
     * @Property eventTypeList: Callback event type. When the value is empty, all message notifications are turned off, 
     * and when the value is ALL, all message notifications are turned on. 
     * You can also specify to enable certain message notifications, 
     * and use a comma (,) to separate multiple event types.
     */
    public eventTypeList: string | ros.IResolvable | undefined;

    /**
     * @Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the 
     * message queue public network endpoint. You can log in to the message service 
     * console and click the Get Endpoint button in the upper right corner to get it.
     */
    public mnsEndpoint: string | ros.IResolvable | undefined;

    /**
     * @Property mnsQueueName: The name of the message queue, which can be viewed in the queue 
     * list by logging in to the message service console. 
     * When the callback method is MNS, this parameter needs to be set.
     */
    public mnsQueueName: string | ros.IResolvable | undefined;

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
        this.callbackType = props.callbackType;
        this.appId = props.appId;
        this.authKey = props.authKey;
        this.authSwitch = props.authSwitch;
        this.callbackUrl = props.callbackUrl;
        this.eventTypeList = props.eventTypeList;
        this.mnsEndpoint = props.mnsEndpoint;
        this.mnsQueueName = props.mnsQueueName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            callbackType: this.callbackType,
            appId: this.appId,
            authKey: this.authKey,
            authSwitch: this.authSwitch,
            callbackUrl: this.callbackUrl,
            eventTypeList: this.eventTypeList,
            mnsEndpoint: this.mnsEndpoint,
            mnsQueueName: this.mnsQueueName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMessageCallbackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
export interface RosStorageProps {

    /**
     * @Property storageLocation: Storage address.
     */
    readonly storageLocation: string | ros.IResolvable;

    /**
     * @Property storageType: Storage Type.
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * @Property defaultUpload: Whether to upload by default.
     */
    readonly defaultUpload?: boolean | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('storageType', ros.requiredValidator)(properties.storageType));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('defaultUpload', ros.validateBoolean)(properties.defaultUpload));
    errors.collect(ros.propertyValidator('storageLocation', ros.requiredValidator)(properties.storageLocation));
    errors.collect(ros.propertyValidator('storageLocation', ros.validateString)(properties.storageLocation));
    return errors.wrap('supplied properties not correct for "RosStorageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VOD::Storage` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VOD::Storage` resource.
 */
// @ts-ignore TS6133
function rosStoragePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStoragePropsValidator(properties).assertSuccess();
    }
    return {
      StorageLocation: ros.stringToRosTemplate(properties.storageLocation),
      StorageType: ros.stringToRosTemplate(properties.storageType),
      DefaultUpload: ros.booleanToRosTemplate(properties.defaultUpload),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::Storage`, which is used to add an Object Storage Service (OSS) bucket in ApsaraVideo VOD (VOD).
 * @Note This class does not contain additional functions, so it is recommended to use the `Storage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
export class RosStorage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::Storage";

    /**
     * @Attribute CreateTime: The creation time of the storage.
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
     * @Attribute GroupId: Group id.
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
     * @Attribute StorageLocation: Storage address.
     */
    public readonly attrStorageLocation: ros.IResolvable;

    /**
     * @Attribute StorageUsage: Storage usage.
     */
    public readonly attrStorageUsage: ros.IResolvable;

    /**
     * @Attribute Type: Storage type.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property storageLocation: Storage address.
     */
    public storageLocation: string | ros.IResolvable;

    /**
     * @Property storageType: Storage Type.
     */
    public storageType: string | ros.IResolvable;

    /**
     * @Property defaultUpload: Whether to upload by default.
     */
    public defaultUpload: boolean | ros.IResolvable | undefined;

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
        this.storageType = props.storageType;
        this.defaultUpload = props.defaultUpload;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            storageLocation: this.storageLocation,
            storageType: this.storageType,
            defaultUpload: this.defaultUpload,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStoragePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
