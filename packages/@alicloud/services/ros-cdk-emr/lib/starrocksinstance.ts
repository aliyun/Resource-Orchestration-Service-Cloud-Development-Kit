import * as ros from '@alicloud/ros-cdk-core';
import { RosStarRocksInstance } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStarRocksInstance as StarRocksInstanceProperty };

/**
 * Properties for defining a `StarRocksInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
export interface StarRocksInstanceProps {

    /**
     * Property adminPassword: Password of admin user.
     */
    readonly adminPassword: string | ros.IResolvable;

    /**
     * Property clusterZoneId: Primary ZoneId of StarRocks instance.
     */
    readonly clusterZoneId: string | ros.IResolvable;

    /**
     * Property instanceName: The name of the StarRocks instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property packageType: The package type of the instance:
     * - **trial: Starter Edition
     * - **official: Standard
     */
    readonly packageType: string | ros.IResolvable;

    /**
     * Property payType: The pay type of the StarRocks instance:
     * - **prePaid
     * - **postPaid
     *
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property runMode: The run mode of the instance:
     * - **shared_nothing: Storage and calculation.
     * - **shared_data: Storage and calculation separation.
     * - **lakehouse: Data lake analysis.
     */
    readonly runMode: string | ros.IResolvable;

    /**
     * Property version: The version of the StarRocks instance.
     */
    readonly version: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC ID of the StarRocks instance.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property autoRenew: Whether to enable automatic renewal. This is only meaningful when payType is set to PrePaid. Disabled by default.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property backendNodeGroups: List of BE or CN compute group information.
     */
    readonly backendNodeGroups?: Array<RosStarRocksInstance.BackendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property duration: Duration of purchase. It is only meaningful when PayType is set to PrePaid.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property encrypted: Whether encrypted.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * Property frontendNodeGroups: List of FE Node Group Information.
     */
    readonly frontendNodeGroups?: Array<RosStarRocksInstance.FrontendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property observerNodeGroups: list of Observer calculates group information.
     */
    readonly observerNodeGroups?: Array<RosStarRocksInstance.ObserverNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property orderId: Order ID.
     */
    readonly orderId?: number | ros.IResolvable;

    /**
     * Property ossAccessingRoleName: Role name used for password-free access to OSS.
     */
    readonly ossAccessingRoleName?: string | ros.IResolvable;

    /**
     * Property pricingCycle: The duration unit for purchasing:
     * - Month
     * - Year
     * This is only meaningful when PayType is set to PrePaid.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property promotionOptionNo: Promotion ID.
     */
    readonly promotionOptionNo?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property resourceType: Resource type.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property tags: Tags of StarRocks.
     */
    readonly tags?: RosStarRocksInstance.TagsProperty[];

    /**
     * Property vswitches: The VSwitches info of the StarRocks instance.
     */
    readonly vswitches?: Array<RosStarRocksInstance.VswitchesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `StarRocksInstance`.
 */
export interface IStarRocksInstance extends ros.IResource {
    readonly props: StarRocksInstanceProps;

    /**
     * Attribute AclId: Access control ID.
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute Architecture: Architecture of StarRocks instance.
     */
    readonly attrArchitecture: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the StarRocks instance.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
     */
    readonly attrEnableAutoMinorVersionUpgrade: ros.IResolvable | string;

    /**
     * Attribute EnableSsl: Enable SSL.
     */
    readonly attrEnableSsl: ros.IResolvable | string;

    /**
     * Attribute EnabledAuditLoader: Whether enable audit loader.
     */
    readonly attrEnabledAuditLoader: ros.IResolvable | string;

    /**
     * Attribute Encrypted: Whether encrypted.
     */
    readonly attrEncrypted: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: StarRocks Instance expire time.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the StarRocks instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the StarRocks instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute IsolateLeader: Whether leader FE is isolated.
     */
    readonly attrIsolateLeader: ros.IResolvable | string;

    /**
     * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    readonly attrKmsKeyId: ros.IResolvable | string;

    /**
     * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
     */
    readonly attrMaintainablePeriod: ros.IResolvable | string;

    /**
     * Attribute MinorVersion: StarRocks Instance minor version.
     */
    readonly attrMinorVersion: ros.IResolvable | string;

    /**
     * Attribute MonitorType: Monitor Type.
     */
    readonly attrMonitorType: ros.IResolvable | string;

    /**
     * Attribute OssLocation: OSS Location.
     */
    readonly attrOssLocation: ros.IResolvable | string;

    /**
     * Attribute PackageType: The package type of the StarRocks instance.
     */
    readonly attrPackageType: ros.IResolvable | string;

    /**
     * Attribute PayType: The pay type of the StarRocks instance.
     */
    readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute RunMode: The run mode of the StarRocks instance.
     */
    readonly attrRunMode: ros.IResolvable | string;

    /**
     * Attribute RunningTime: StarRocks Instance running time.
     */
    readonly attrRunningTime: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupManaged: Whether security group is managed.
     */
    readonly attrSecurityGroupManaged: ros.IResolvable | string;

    /**
     * Attribute SgId: Security Group ID of StarRocks instance.
     */
    readonly attrSgId: ros.IResolvable | string;

    /**
     * Attribute Tags: Tag list of the StarRocks instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the StarRocks instance.
     */
    readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID of the StarRocks instance.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute Vswitches: The VSwitches info of the StarRocks instance.
     */
    readonly attrVswitches: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::StarRocksInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStarRocksInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
export class StarRocksInstance extends ros.Resource implements IStarRocksInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StarRocksInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclId: Access control ID.
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute Architecture: Architecture of StarRocks instance.
     */
    public readonly attrArchitecture: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the StarRocks instance.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
     */
    public readonly attrEnableAutoMinorVersionUpgrade: ros.IResolvable | string;

    /**
     * Attribute EnableSsl: Enable SSL.
     */
    public readonly attrEnableSsl: ros.IResolvable | string;

    /**
     * Attribute EnabledAuditLoader: Whether enable audit loader.
     */
    public readonly attrEnabledAuditLoader: ros.IResolvable | string;

    /**
     * Attribute Encrypted: Whether encrypted.
     */
    public readonly attrEncrypted: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: StarRocks Instance expire time.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the StarRocks instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the StarRocks instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute IsolateLeader: Whether leader FE is isolated.
     */
    public readonly attrIsolateLeader: ros.IResolvable | string;

    /**
     * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    public readonly attrKmsKeyId: ros.IResolvable | string;

    /**
     * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
     */
    public readonly attrMaintainablePeriod: ros.IResolvable | string;

    /**
     * Attribute MinorVersion: StarRocks Instance minor version.
     */
    public readonly attrMinorVersion: ros.IResolvable | string;

    /**
     * Attribute MonitorType: Monitor Type.
     */
    public readonly attrMonitorType: ros.IResolvable | string;

    /**
     * Attribute OssLocation: OSS Location.
     */
    public readonly attrOssLocation: ros.IResolvable | string;

    /**
     * Attribute PackageType: The package type of the StarRocks instance.
     */
    public readonly attrPackageType: ros.IResolvable | string;

    /**
     * Attribute PayType: The pay type of the StarRocks instance.
     */
    public readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute RunMode: The run mode of the StarRocks instance.
     */
    public readonly attrRunMode: ros.IResolvable | string;

    /**
     * Attribute RunningTime: StarRocks Instance running time.
     */
    public readonly attrRunningTime: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupManaged: Whether security group is managed.
     */
    public readonly attrSecurityGroupManaged: ros.IResolvable | string;

    /**
     * Attribute SgId: Security Group ID of StarRocks instance.
     */
    public readonly attrSgId: ros.IResolvable | string;

    /**
     * Attribute Tags: Tag list of the StarRocks instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the StarRocks instance.
     */
    public readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID of the StarRocks instance.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute Vswitches: The VSwitches info of the StarRocks instance.
     */
    public readonly attrVswitches: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StarRocksInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStarRocksInstance = new RosStarRocksInstance(this, id,  {
            clusterZoneId: props.clusterZoneId,
            resourceGroupId: props.resourceGroupId,
            kmsKeyId: props.kmsKeyId,
            promotionOptionNo: props.promotionOptionNo,
            pricingCycle: props.pricingCycle,
            encrypted: props.encrypted,
            autoRenew: props.autoRenew,
            resourceType: props.resourceType,
            duration: props.duration,
            payType: props.payType,
            orderId: props.orderId,
            frontendNodeGroups: props.frontendNodeGroups,
            vswitches: props.vswitches,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            version: props.version,
            runMode: props.runMode,
            packageType: props.packageType,
            observerNodeGroups: props.observerNodeGroups,
            ossAccessingRoleName: props.ossAccessingRoleName,
            tags: props.tags,
            backendNodeGroups: props.backendNodeGroups,
            adminPassword: props.adminPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStarRocksInstance;
        this.attrAclId = rosStarRocksInstance.attrAclId;
        this.attrArchitecture = rosStarRocksInstance.attrArchitecture;
        this.attrCreateTime = rosStarRocksInstance.attrCreateTime;
        this.attrEnableAutoMinorVersionUpgrade = rosStarRocksInstance.attrEnableAutoMinorVersionUpgrade;
        this.attrEnableSsl = rosStarRocksInstance.attrEnableSsl;
        this.attrEnabledAuditLoader = rosStarRocksInstance.attrEnabledAuditLoader;
        this.attrEncrypted = rosStarRocksInstance.attrEncrypted;
        this.attrExpireTime = rosStarRocksInstance.attrExpireTime;
        this.attrInstanceId = rosStarRocksInstance.attrInstanceId;
        this.attrInstanceName = rosStarRocksInstance.attrInstanceName;
        this.attrIsolateLeader = rosStarRocksInstance.attrIsolateLeader;
        this.attrKmsKeyId = rosStarRocksInstance.attrKmsKeyId;
        this.attrMaintainablePeriod = rosStarRocksInstance.attrMaintainablePeriod;
        this.attrMinorVersion = rosStarRocksInstance.attrMinorVersion;
        this.attrMonitorType = rosStarRocksInstance.attrMonitorType;
        this.attrOssLocation = rosStarRocksInstance.attrOssLocation;
        this.attrPackageType = rosStarRocksInstance.attrPackageType;
        this.attrPayType = rosStarRocksInstance.attrPayType;
        this.attrResourceGroupId = rosStarRocksInstance.attrResourceGroupId;
        this.attrRunMode = rosStarRocksInstance.attrRunMode;
        this.attrRunningTime = rosStarRocksInstance.attrRunningTime;
        this.attrSecurityGroupManaged = rosStarRocksInstance.attrSecurityGroupManaged;
        this.attrSgId = rosStarRocksInstance.attrSgId;
        this.attrTags = rosStarRocksInstance.attrTags;
        this.attrVersion = rosStarRocksInstance.attrVersion;
        this.attrVpcId = rosStarRocksInstance.attrVpcId;
        this.attrVswitches = rosStarRocksInstance.attrVswitches;
    }
}
