using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.DBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.DBCluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBCluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBCluster
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DBCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBCluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AliUid: Alibaba Cloud account.</summary>
        [JsiiProperty(name: "attrAliUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAliUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Bid: The ID of the business process flow.</summary>
        [JsiiProperty(name: "attrBid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Category: Copy configuration, value description:.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCategory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CommodityCode: Buy Product Code.</summary>
        [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCommodityCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionString: Connection string.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterId: Instance ID.</summary>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.</summary>
        [JsiiProperty(name: "attrDbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterIpArrayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterName: The cluster description information.</summary>
        [JsiiProperty(name: "attrDbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbClusterNetworkType: Network type.</summary>
        /// <remarks>
        /// Currently, only VPC is supported.
        /// </remarks>
        [JsiiProperty(name: "attrDbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterType: Instance type.</summary>
        [JsiiProperty(name: "attrDbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbNodeClass: Set the node type.</summary>
        [JsiiProperty(name: "attrDbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbNodeClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.</summary>
        [JsiiProperty(name: "attrDbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbNodeCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DbNodeStorage: Single-node storage space.</summary>
        /// <remarks>
        /// Value range: 100 GB to 32000GB.
        /// </remarks>
        [JsiiProperty(name: "attrDbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbNodeStorage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EncryptionKey: Key management service KMS key ID.</summary>
        [JsiiProperty(name: "attrEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEncryptionKey
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.</summary>
        [JsiiProperty(name: "attrEncryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEncryptionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Engine: Engine.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngine
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineVersion: The engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngineVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpireTime: The expiration time.</summary>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpireTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsExpired: If the instance has expired.</summary>
        [JsiiProperty(name: "attrIsExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsExpired
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LockMode: The lock mode.</summary>
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLockMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LockReason: Lock reason.</summary>
        [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLockReason
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.</summary>
        [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The paymen type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Port: Connection port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicConnectionString: A public IP address for the connection.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIpAddr: Public IP address.</summary>
        [JsiiProperty(name: "attrPublicIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicIpAddr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicPort: Public network port.</summary>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScaleOutStatus: Scale state.</summary>
        [JsiiProperty(name: "attrScaleOutStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScaleOutStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIps: The whitelist supports the following two formats:.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.</summary>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupportBackup: Support fallback scheme.</summary>
        [JsiiProperty(name: "attrSupportBackup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupportBackup
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupportHttpsPort: The system supports http port number.</summary>
        [JsiiProperty(name: "attrSupportHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupportHttpsPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupportMysqlPort: Supports Mysql, and those of the ports.</summary>
        [JsiiProperty(name: "attrSupportMysqlPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupportMysqlPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.</summary>
        [JsiiProperty(name: "attrSupportOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupportOss
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcCloudInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcIpAddr: VPC IP address.</summary>
        [JsiiProperty(name: "attrVpcIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcIpAddr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: Switch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: On behalf of the zone resource attribute field.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
