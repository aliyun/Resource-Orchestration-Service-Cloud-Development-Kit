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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::EditingProject`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-editingproject
 */
export declare class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::EditingProject";
    /**
     * @Attribute CreateTime: The time when the online editing project was created.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EditingProjectId: The ID of the online editing project.
     */
    readonly attrEditingProjectId: ros.IResolvable;
    /**
     * @Attribute EditingProjectName: The name of the online editing project.
     */
    readonly attrEditingProjectName: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: The last time when the online editing project was modified.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * @Attribute Timeline: The timeline of the online editing project.
     */
    readonly attrTimeline: ros.IResolvable;
    /**
     * @Attribute Title: The title of the online editing project.
     */
    readonly attrTitle: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property title: The title of the online editing project.
     */
    title: string | ros.IResolvable;
    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    editingProjectName: string | ros.IResolvable | undefined;
    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    timeline: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::MessageCallback`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
export declare class RosMessageCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::MessageCallback";
    /**
     * @Attribute AppId: appid.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AuthKey: auth key.
     */
    readonly attrAuthKey: ros.IResolvable;
    /**
     * @Attribute AuthSwitch: auth swith.
     */
    readonly attrAuthSwitch: ros.IResolvable;
    /**
     * @Attribute CallbackType: callback type.
     */
    readonly attrCallbackType: ros.IResolvable;
    /**
     * @Attribute CallbackUrl: url.
     */
    readonly attrCallbackUrl: ros.IResolvable;
    /**
     * @Attribute EventTypeList: event type.
     */
    readonly attrEventTypeList: ros.IResolvable;
    /**
     * @Attribute MnsEndpoint: mns endpoint.
     */
    readonly attrMnsEndpoint: ros.IResolvable;
    /**
     * @Attribute MnsQueueName: queue name.
     */
    readonly attrMnsQueueName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property callbackType: Callback method.
     */
    callbackType: string | ros.IResolvable;
    /**
     * @Property appId: App ID. If it is not passed, it is the ID of the default
     * application of the system, with a fixed value: app-1000000.
     */
    appId: string | ros.IResolvable | undefined;
    /**
     * @Property authKey: Authentication Key, up to 32 characters, must contain both uppercase
     * and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
     */
    authKey: string | ros.IResolvable | undefined;
    /**
     * @Property authSwitch: The authentication switch of the HTTP callback,
     * this parameter is valid when the callback method is set to HTTP.
     */
    authSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property callbackUrl: Callback address. When the callback method is HTTP,
     * this parameter needs to be set. The length of the callback address
     * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
     */
    callbackUrl: string | ros.IResolvable | undefined;
    /**
     * @Property eventTypeList: Callback event type. When the value is empty, all message notifications are turned off,
     * and when the value is ALL, all message notifications are turned on.
     * You can also specify to enable certain message notifications,
     * and use a comma (,) to separate multiple event types.
     */
    eventTypeList: string | ros.IResolvable | undefined;
    /**
     * @Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the
     * message queue public network endpoint. You can log in to the message service
     * console and click the Get Endpoint button in the upper right corner to get it.
     */
    mnsEndpoint: string | ros.IResolvable | undefined;
    /**
     * @Property mnsQueueName: The name of the message queue, which can be viewed in the queue
     * list by logging in to the message service console.
     * When the callback method is MNS, this parameter needs to be set.
     */
    mnsQueueName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMessageCallbackProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VOD::Storage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Storage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
export declare class RosStorage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::Storage";
    /**
     * @Attribute CreateTime: The creation time of the storage.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DefaultUpload: Whether to upload by default.
     */
    readonly attrDefaultUpload: ros.IResolvable;
    /**
     * @Attribute GmtModified: Modification time.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * @Attribute GroupId: Group id.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute StorageAcl: Storage ACL.
     */
    readonly attrStorageAcl: ros.IResolvable;
    /**
     * @Attribute StorageLocation: Storage address.
     */
    readonly attrStorageLocation: ros.IResolvable;
    /**
     * @Attribute StorageUsage: Storage usage.
     */
    readonly attrStorageUsage: ros.IResolvable;
    /**
     * @Attribute Type: Storage type.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property storageLocation: Storage address.
     */
    storageLocation: string | ros.IResolvable;
    /**
     * @Property storageType: Storage Type.
     */
    storageType: string | ros.IResolvable;
    /**
     * @Property defaultUpload: Whether to upload by default.
     */
    defaultUpload: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
