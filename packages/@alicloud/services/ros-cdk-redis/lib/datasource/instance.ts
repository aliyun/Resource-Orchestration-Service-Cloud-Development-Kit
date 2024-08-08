import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ArchitectureType: Architecture type.
     */
    public readonly attrArchitectureType: ros.IResolvable;

    /**
     * Attribute Bandwidth: Bandwidth.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute Capacity: Capacity.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * Attribute CloudType: Cloud category.
     */
    public readonly attrCloudType: ros.IResolvable;

    /**
     * Attribute Config: Config.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * Attribute CreateTime: Create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DBInstanceId: Database instance id.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute DBInstanceName: Instance name.
     */
    public readonly attrDbInstanceName: ros.IResolvable;

    /**
     * Attribute EndTime: End time.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * Attribute EngineVersion: Engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    public readonly attrHasRenewChangeOrder: ros.IResolvable;

    /**
     * Attribute InstanceClass: Instance class.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    public readonly attrInstanceReleaseProtection: ros.IResolvable;

    /**
     * Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute IsRds: is RDS.
     */
    public readonly attrIsRds: ros.IResolvable;

    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    public readonly attrMaintainEndTime: ros.IResolvable;

    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    public readonly attrMaintainStartTime: ros.IResolvable;

    /**
     * Attribute NetworkType: Network type.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute PackageType: Package type.
     */
    public readonly attrPackageType: ros.IResolvable;

    /**
     * Attribute PaymentType: Payment type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Port: Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PrivateIp: Private IP.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * Attribute Qps: QPS.
     */
    public readonly attrQps: ros.IResolvable;

    /**
     * Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    public readonly attrReadOnlyCount: ros.IResolvable;

    /**
     * Attribute ReplacateId: Replacate id.
     */
    public readonly attrReplacateId: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecondaryZoneId: The ID of the standby zone. You can call the [DescribeZones](~~ 94527 ~~) operation.
     */
    public readonly attrSecondaryZoneId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: Security group id.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    public readonly attrSecurityIpGroupAttribute: ros.IResolvable;

    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    public readonly attrSecurityIpGroupName: ros.IResolvable;

    /**
     * Attribute SecurityIps: Security IPs.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    public readonly attrShardCount: ros.IResolvable;

    /**
     * Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VSwitchId: Vswitch id.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    public readonly attrVpcAuthMode: ros.IResolvable;

    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * Attribute VpcId: Vpc id.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: Zone id.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrArchitectureType = rosInstance.attrArchitectureType;
        this.attrBandwidth = rosInstance.attrBandwidth;
        this.attrCapacity = rosInstance.attrCapacity;
        this.attrCloudType = rosInstance.attrCloudType;
        this.attrConfig = rosInstance.attrConfig;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrDbInstanceId = rosInstance.attrDbInstanceId;
        this.attrDbInstanceName = rosInstance.attrDbInstanceName;
        this.attrEndTime = rosInstance.attrEndTime;
        this.attrEngineVersion = rosInstance.attrEngineVersion;
        this.attrHasRenewChangeOrder = rosInstance.attrHasRenewChangeOrder;
        this.attrInstanceClass = rosInstance.attrInstanceClass;
        this.attrInstanceReleaseProtection = rosInstance.attrInstanceReleaseProtection;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrIsRds = rosInstance.attrIsRds;
        this.attrMaintainEndTime = rosInstance.attrMaintainEndTime;
        this.attrMaintainStartTime = rosInstance.attrMaintainStartTime;
        this.attrNetworkType = rosInstance.attrNetworkType;
        this.attrPackageType = rosInstance.attrPackageType;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPort = rosInstance.attrPort;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrQps = rosInstance.attrQps;
        this.attrReadOnlyCount = rosInstance.attrReadOnlyCount;
        this.attrReplacateId = rosInstance.attrReplacateId;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSecondaryZoneId = rosInstance.attrSecondaryZoneId;
        this.attrSecurityGroupId = rosInstance.attrSecurityGroupId;
        this.attrSecurityIpGroupAttribute = rosInstance.attrSecurityIpGroupAttribute;
        this.attrSecurityIpGroupName = rosInstance.attrSecurityIpGroupName;
        this.attrSecurityIps = rosInstance.attrSecurityIps;
        this.attrShardCount = rosInstance.attrShardCount;
        this.attrTags = rosInstance.attrTags;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcAuthMode = rosInstance.attrVpcAuthMode;
        this.attrVpcCloudInstanceId = rosInstance.attrVpcCloudInstanceId;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
