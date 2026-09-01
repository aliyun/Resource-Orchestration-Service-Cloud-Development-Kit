import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export interface RosInstanceProps {
    /**
     * @Property components: The component specifications of the instance.
     */
    readonly components: Array<RosInstance.ComponentsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
     */
    readonly dbAdminPassword: string | ros.IResolvable;
    /**
     * @Property dbVersion: The database engine version.
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the instance.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The vSwitch configurations.
     */
    readonly vSwitchIds: Array<RosInstance.VSwitchIdsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The primary zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property aiFunction: Whether the AI function is enabled.
     */
    readonly aiFunction?: boolean | ros.IResolvable;
    /**
     * @Property autoBackup: Whether automatic backup is enabled.
     */
    readonly autoBackup?: boolean | ros.IResolvable;
    /**
     * @Property autoPay: Whether the order is automatically paid.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether the subscription is automatically renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backupRestoreInfo: The backup restore information.
     */
    readonly backupRestoreInfo?: RosInstance.BackupRestoreInfoProperty | ros.IResolvable;
    /**
     * @Property configuration: The instance configuration in YAML format.
     */
    readonly configuration?: string | ros.IResolvable;
    /**
     * @Property encrypted: Whether OSS encryption is enabled.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property ha: Whether high availability is enabled.
     */
    readonly ha?: boolean | ros.IResolvable;
    /**
     * @Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    readonly isMultiAzStorage?: boolean | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property loadReplicas: The number of load replicas.
     */
    readonly loadReplicas?: number | ros.IResolvable;
    /**
     * @Property multiZoneMode: The multi-zone deployment mode.
     */
    readonly multiZoneMode?: string | ros.IResolvable;
    /**
     * @Property paymentDuration: The subscription duration.
     */
    readonly paymentDuration?: number | ros.IResolvable;
    /**
     * @Property paymentDurationUnit: The unit of the subscription duration.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;
    /**
     * @Property promotionNo: The promotion number.
     */
    readonly promotionNo?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Milvus::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Milvus::Instance";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property components: The component specifications of the instance.
     */
    components: Array<RosInstance.ComponentsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
     */
    dbAdminPassword: string | ros.IResolvable;
    /**
     * @Property dbVersion: The database engine version.
     */
    dbVersion: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the instance.
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The vSwitch configurations.
     */
    vSwitchIds: Array<RosInstance.VSwitchIdsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The primary zone ID of the instance.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property aiFunction: Whether the AI function is enabled.
     */
    aiFunction: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoBackup: Whether automatic backup is enabled.
     */
    autoBackup: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether the order is automatically paid.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether the subscription is automatically renewed.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupRestoreInfo: The backup restore information.
     */
    backupRestoreInfo: RosInstance.BackupRestoreInfoProperty | ros.IResolvable | undefined;
    /**
     * @Property configuration: The instance configuration in YAML format.
     */
    configuration: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether OSS encryption is enabled.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property ha: Whether high availability is enabled.
     */
    ha: boolean | ros.IResolvable | undefined;
    /**
     * @Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    isMultiAzStorage: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property loadReplicas: The number of load replicas.
     */
    loadReplicas: number | ros.IResolvable | undefined;
    /**
     * @Property multiZoneMode: The multi-zone deployment mode.
     */
    multiZoneMode: string | ros.IResolvable | undefined;
    /**
     * @Property paymentDuration: The subscription duration.
     */
    paymentDuration: number | ros.IResolvable | undefined;
    /**
     * @Property paymentDurationUnit: The unit of the subscription duration.
     */
    paymentDurationUnit: string | ros.IResolvable | undefined;
    /**
     * @Property promotionNo: The promotion number.
     */
    promotionNo: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface BackupRestoreInfoProperty {
        /**
         * @Property backupId: The backup ID.
         */
        readonly backupId?: string | ros.IResolvable;
        /**
         * @Property sourceClusterId: The source cluster ID.
         */
        readonly sourceClusterId?: string | ros.IResolvable;
        /**
         * @Property backupName: The backup name.
         */
        readonly backupName?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ComponentsProperty {
        /**
         * @Property cuType: The compute unit type.
         */
        readonly cuType?: string | ros.IResolvable;
        /**
         * @Property type: The component type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property cuNum: The number of compute units.
         */
        readonly cuNum: number | ros.IResolvable;
        /**
         * @Property diskSizeType: The disk size type.
         */
        readonly diskSizeType?: string | ros.IResolvable;
        /**
         * @Property replica: The number of component replicas.
         */
        readonly replica: number | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface VSwitchIdsProperty {
        /**
         * @Property zoneId: The zone ID of the vSwitch.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vswId: The vSwitch ID.
         */
        readonly vswId: string | ros.IResolvable;
    }
}
