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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ArchitectureType: Architecture type.
     */
    readonly attrArchitectureType: ros.IResolvable;
    /**
     * Attribute Bandwidth: Bandwidth.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute Capacity: Capacity.
     */
    readonly attrCapacity: ros.IResolvable;
    /**
     * Attribute CloudType: Cloud category.
     */
    readonly attrCloudType: ros.IResolvable;
    /**
     * Attribute Config: Config.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    readonly attrConnectionDomain: ros.IResolvable;
    /**
     * Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DBInstanceId: Database instance id.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Attribute DBInstanceName: Instance name.
     */
    readonly attrDbInstanceName: ros.IResolvable;
    /**
     * Attribute EndTime: End time.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * Attribute EngineVersion: Engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable;
    /**
     * Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    readonly attrInstanceReleaseProtection: ros.IResolvable;
    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute IsRds: is RDS.
     */
    readonly attrIsRds: ros.IResolvable;
    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    readonly attrMaintainEndTime: ros.IResolvable;
    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable;
    /**
     * Attribute NetworkType: Network type.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * Attribute PackageType: Package type.
     */
    readonly attrPackageType: ros.IResolvable;
    /**
     * Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute Port: Port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Attribute PrivateIp: Private IP.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * Attribute Qps: QPS.
     */
    readonly attrQps: ros.IResolvable;
    /**
     * Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    readonly attrReadOnlyCount: ros.IResolvable;
    /**
     * Attribute ReplacateId: Replacate id.
     */
    readonly attrReplacateId: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecondaryZoneId: The ID of the standby zone. You can call the [DescribeZones](~~ 94527 ~~) operation.
     */
    readonly attrSecondaryZoneId: ros.IResolvable;
    /**
     * Attribute SecurityGroupId: Security group id.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable;
    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    readonly attrSecurityIpGroupName: ros.IResolvable;
    /**
     * Attribute SecurityIps: Security IPs.
     */
    readonly attrSecurityIps: ros.IResolvable;
    /**
     * Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    readonly attrShardCount: ros.IResolvable;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute VSwitchId: Vswitch id.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    readonly attrVpcAuthMode: ros.IResolvable;
    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * Attribute VpcId: Vpc id.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: Zone id.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
