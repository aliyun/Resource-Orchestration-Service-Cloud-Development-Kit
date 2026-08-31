import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './milvus.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export interface InstanceProps {
    /**
     * Property components: The component specifications of the instance.
     */
    readonly components: Array<RosInstance.ComponentsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
     */
    readonly dbAdminPassword: string | ros.IResolvable;
    /**
     * Property dbVersion: The database engine version.
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property paymentType: The billing method of the instance.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property vpcId: The VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchIds: The vSwitch configurations.
     */
    readonly vSwitchIds: Array<RosInstance.VSwitchIdsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property zoneId: The primary zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property aiFunction: Whether the AI function is enabled.
     */
    readonly aiFunction?: boolean | ros.IResolvable;
    /**
     * Property autoBackup: Whether automatic backup is enabled.
     */
    readonly autoBackup?: boolean | ros.IResolvable;
    /**
     * Property autoPay: Whether the order is automatically paid.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property autoRenew: Whether the subscription is automatically renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property backupRestoreInfo: The backup restore information.
     */
    readonly backupRestoreInfo?: RosInstance.BackupRestoreInfoProperty | ros.IResolvable;
    /**
     * Property configuration: The instance configuration in YAML format.
     */
    readonly configuration?: string | ros.IResolvable;
    /**
     * Property encrypted: Whether OSS encryption is enabled.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * Property ha: Whether high availability is enabled.
     */
    readonly ha?: boolean | ros.IResolvable;
    /**
     * Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    readonly isMultiAzStorage?: boolean | ros.IResolvable;
    /**
     * Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * Property loadReplicas: The number of load replicas.
     */
    readonly loadReplicas?: number | ros.IResolvable;
    /**
     * Property multiZoneMode: The multi-zone deployment mode.
     */
    readonly multiZoneMode?: string | ros.IResolvable;
    /**
     * Property paymentDuration: The subscription duration.
     */
    readonly paymentDuration?: number | ros.IResolvable;
    /**
     * Property paymentDurationUnit: The unit of the subscription duration.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;
    /**
     * Property promotionNo: The promotion number.
     */
    readonly promotionNo?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Milvus::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
