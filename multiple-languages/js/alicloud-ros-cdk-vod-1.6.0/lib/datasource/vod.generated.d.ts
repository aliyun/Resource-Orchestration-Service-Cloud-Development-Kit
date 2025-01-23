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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProject`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
 */
export declare class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProject";
    /**
     * @Attribute CreateTime: The time when the online editing project was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * @Attribute ModifiedTime: The last time when the online editing project was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * @Property editingProjectId: The ID of the online editing project.
     */
    editingProjectId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProjects`, which is used to query the basic information about online editing projects.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export declare class RosEditingProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProjects";
    /**
     * @Attribute EditingProjectIds: The list of editing project IDs.
     */
    readonly attrEditingProjectIds: ros.IResolvable;
    /**
     * @Attribute EditingProjects: The list of editing projects.
     */
    readonly attrEditingProjects: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property title: The title of the online editing project.
     */
    title: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectsProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::MessageCallback`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallback` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
 */
export declare class RosMessageCallback extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::MessageCallback";
    /**
     * @Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AuthKey: The cryptographic key. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthKey: ros.IResolvable;
    /**
     * @Attribute AuthSwitch: Indicates whether callback authentication is enabled. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthSwitch: ros.IResolvable;
    /**
     * @Attribute CallbackType: The callback method.
     */
    readonly attrCallbackType: ros.IResolvable;
    /**
     * @Attribute CallbackUrl: The callback URL. This parameter is returned only for HTTP callbacks.
     */
    readonly attrCallbackUrl: ros.IResolvable;
    /**
     * @Attribute EventTypeList: The type of the callback event.
     */
    readonly attrEventTypeList: ros.IResolvable;
    /**
     * @Attribute MnsEndpoint: The public endpoint of MNS. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsEndpoint: ros.IResolvable;
    /**
     * @Attribute MnsQueueName: The name of the Message Service (MNS) queue. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsQueueName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The ID of the application.
     */
    appId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::MessageCallbacks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageCallbacks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
 */
export declare class RosMessageCallbacks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::MessageCallbacks";
    /**
     * @Attribute AppIds: The list of app IDs.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * @Attribute MessageCallbacks: The list of message callbacks.
     */
    readonly attrMessageCallbacks: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The ID of the application.
     */
    appId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMessageCallbacksProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::Storage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Storage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
export declare class RosStorage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::Storage";
    /**
     * @Attribute CreateTime: The creation time of the Storage.
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
     * @Attribute GroupId: Storage Group Id.
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
     * @Attribute StorageLocation: The ID of the Storage.
     */
    readonly attrStorageLocation: ros.IResolvable;
    /**
     * @Attribute StorageUsage: Storage Use.
     */
    readonly attrStorageUsage: ros.IResolvable;
    /**
     * @Attribute Type: The storage class.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property storageLocation: The ID of the Storage.
     */
    storageLocation: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::Storages`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Storages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
 */
export declare class RosStorages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::Storages";
    /**
     * @Attribute StorageLocations: The list of storage locations.
     */
    readonly attrStorageLocations: ros.IResolvable;
    /**
     * @Attribute Storages: The list of storages.
     */
    readonly attrStorages: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStoragesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
