import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './redis.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export interface InstanceProps {
    /**
     * Property dbInstanceId: Database instance id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute ArchitectureType: Architecture type.
     */
    readonly attrArchitectureType: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: Bandwidth.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute Capacity: Capacity.
     */
    readonly attrCapacity: ros.IResolvable | string;
    /**
     * Attribute CloudType: Cloud category.
     */
    readonly attrCloudType: ros.IResolvable | string;
    /**
     * Attribute Config: Config.
     */
    readonly attrConfig: ros.IResolvable | string;
    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    readonly attrConnectionDomain: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: Database instance id.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DBInstanceName: Instance name.
     */
    readonly attrDbInstanceName: ros.IResolvable | string;
    /**
     * Attribute EndTime: End time.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: Engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    readonly attrInstanceReleaseProtection: ros.IResolvable | string;
    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute IsRds: is RDS.
     */
    readonly attrIsRds: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute NetworkType: Network type.
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute PackageType: Package type.
     */
    readonly attrPackageType: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute Port: Port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute PrivateIp: Private IP.
     */
    readonly attrPrivateIp: ros.IResolvable | string;
    /**
     * Attribute Qps: QPS.
     */
    readonly attrQps: ros.IResolvable | string;
    /**
     * Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    readonly attrReadOnlyCount: ros.IResolvable | string;
    /**
     * Attribute ReplacateId: Replacate id.
     */
    readonly attrReplacateId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondaryZoneId: The ID of the standby zone.
     */
    readonly attrSecondaryZoneId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group id.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable | string;
    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    readonly attrSecurityIpGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityIps: Security IPs.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
    /**
     * Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    readonly attrShardCount: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Vswitch id.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    readonly attrVpcAuthMode: ros.IResolvable | string;
    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable | string;
    /**
     * Attribute VpcId: Vpc id.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone id.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Instance`, which is used to query the information about a Tair (Redis OSS-compatible) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ArchitectureType: Architecture type.
     */
    readonly attrArchitectureType: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: Bandwidth.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute Capacity: Capacity.
     */
    readonly attrCapacity: ros.IResolvable | string;
    /**
     * Attribute CloudType: Cloud category.
     */
    readonly attrCloudType: ros.IResolvable | string;
    /**
     * Attribute Config: Config.
     */
    readonly attrConfig: ros.IResolvable | string;
    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    readonly attrConnectionDomain: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: Database instance id.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DBInstanceName: Instance name.
     */
    readonly attrDbInstanceName: ros.IResolvable | string;
    /**
     * Attribute EndTime: End time.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: Engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    readonly attrInstanceReleaseProtection: ros.IResolvable | string;
    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute IsRds: is RDS.
     */
    readonly attrIsRds: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute NetworkType: Network type.
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute PackageType: Package type.
     */
    readonly attrPackageType: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute Port: Port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute PrivateIp: Private IP.
     */
    readonly attrPrivateIp: ros.IResolvable | string;
    /**
     * Attribute Qps: QPS.
     */
    readonly attrQps: ros.IResolvable | string;
    /**
     * Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    readonly attrReadOnlyCount: ros.IResolvable | string;
    /**
     * Attribute ReplacateId: Replacate id.
     */
    readonly attrReplacateId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondaryZoneId: The ID of the standby zone.
     */
    readonly attrSecondaryZoneId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group id.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable | string;
    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    readonly attrSecurityIpGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityIps: Security IPs.
     */
    readonly attrSecurityIps: ros.IResolvable | string;
    /**
     * Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    readonly attrShardCount: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Vswitch id.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    readonly attrVpcAuthMode: ros.IResolvable | string;
    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable | string;
    /**
     * Attribute VpcId: Vpc id.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone id.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
