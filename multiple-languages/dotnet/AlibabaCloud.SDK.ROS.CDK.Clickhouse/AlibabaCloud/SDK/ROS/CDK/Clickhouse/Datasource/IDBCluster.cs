using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Represents a `DBCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IDBCluster")]
    public interface IDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AliUid: Alibaba Cloud account.</summary>
        [JsiiProperty(name: "attrAliUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAliUid
        {
            get;
        }

        /// <summary>Attribute Bid: The ID of the business process flow.</summary>
        [JsiiProperty(name: "attrBid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBid
        {
            get;
        }

        /// <summary>Attribute Category: Copy configuration, value description:.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute CommodityCode: Buy Product Code.</summary>
        [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommodityCode
        {
            get;
        }

        /// <summary>Attribute ConnectionString: Connection string.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionString
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DBClusterId: Instance ID.</summary>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterId
        {
            get;
        }

        /// <summary>Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.</summary>
        [JsiiProperty(name: "attrDbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterIpArrayName
        {
            get;
        }

        /// <summary>Attribute DBClusterName: The cluster description information.</summary>
        [JsiiProperty(name: "attrDbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterName
        {
            get;
        }

        /// <summary>Attribute DbClusterNetworkType: Network type.</summary>
        /// <remarks>
        /// Currently, only VPC is supported.
        /// </remarks>
        [JsiiProperty(name: "attrDbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterNetworkType
        {
            get;
        }

        /// <summary>Attribute DBClusterType: Instance type.</summary>
        [JsiiProperty(name: "attrDbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterType
        {
            get;
        }

        /// <summary>Attribute DbNodeClass: Set the node type.</summary>
        [JsiiProperty(name: "attrDbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeClass
        {
            get;
        }

        /// <summary>Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.</summary>
        [JsiiProperty(name: "attrDbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeCount
        {
            get;
        }

        /// <summary>Attribute DbNodeStorage: Single-node storage space.</summary>
        /// <remarks>
        /// Value range: 100 GB to 32000GB.
        /// </remarks>
        [JsiiProperty(name: "attrDbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeStorage
        {
            get;
        }

        /// <summary>Attribute EncryptionKey: Key management service KMS key ID.</summary>
        [JsiiProperty(name: "attrEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncryptionKey
        {
            get;
        }

        /// <summary>Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.</summary>
        [JsiiProperty(name: "attrEncryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncryptionType
        {
            get;
        }

        /// <summary>Attribute Engine: Engine.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngine
        {
            get;
        }

        /// <summary>Attribute EngineVersion: The engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineVersion
        {
            get;
        }

        /// <summary>Attribute ExpireTime: The expiration time.</summary>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute IsExpired: If the instance has expired.</summary>
        [JsiiProperty(name: "attrIsExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsExpired
        {
            get;
        }

        /// <summary>Attribute LockMode: The lock mode.</summary>
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLockMode
        {
            get;
        }

        /// <summary>Attribute LockReason: Lock reason.</summary>
        [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLockReason
        {
            get;
        }

        /// <summary>Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.</summary>
        [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainTime
        {
            get;
        }

        /// <summary>Attribute PaymentType: The paymen type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute Port: Connection port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPort
        {
            get;
        }

        /// <summary>Attribute PublicConnectionString: A public IP address for the connection.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicConnectionString
        {
            get;
        }

        /// <summary>Attribute PublicIpAddr: Public IP address.</summary>
        [JsiiProperty(name: "attrPublicIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddr
        {
            get;
        }

        /// <summary>Attribute PublicPort: Public network port.</summary>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicPort
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute ScaleOutStatus: Scale state.</summary>
        [JsiiProperty(name: "attrScaleOutStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScaleOutStatus
        {
            get;
        }

        /// <summary>Attribute SecurityIps: The whitelist supports the following two formats:.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIps
        {
            get;
        }

        /// <summary>Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.</summary>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageType
        {
            get;
        }

        /// <summary>Attribute SupportBackup: Support fallback scheme.</summary>
        [JsiiProperty(name: "attrSupportBackup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSupportBackup
        {
            get;
        }

        /// <summary>Attribute SupportHttpsPort: The system supports http port number.</summary>
        [JsiiProperty(name: "attrSupportHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSupportHttpsPort
        {
            get;
        }

        /// <summary>Attribute SupportMysqlPort: Supports Mysql, and those of the ports.</summary>
        [JsiiProperty(name: "attrSupportMysqlPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSupportMysqlPort
        {
            get;
        }

        /// <summary>Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.</summary>
        [JsiiProperty(name: "attrSupportOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSupportOss
        {
            get;
        }

        /// <summary>Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcCloudInstanceId
        {
            get;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VpcIpAddr: VPC IP address.</summary>
        [JsiiProperty(name: "attrVpcIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcIpAddr
        {
            get;
        }

        /// <summary>Attribute VSwitchId: Switch ID.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: On behalf of the zone resource attribute field.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `DBCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IDBCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AliUid: Alibaba Cloud account.</summary>
            [JsiiProperty(name: "attrAliUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAliUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bid: The ID of the business process flow.</summary>
            [JsiiProperty(name: "attrBid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Category: Copy configuration, value description:.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommodityCode: Buy Product Code.</summary>
            [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommodityCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionString: Connection string.</summary>
            [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterId: Instance ID.</summary>
            [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.</summary>
            [JsiiProperty(name: "attrDbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterIpArrayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterName: The cluster description information.</summary>
            [JsiiProperty(name: "attrDbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbClusterNetworkType: Network type.</summary>
            /// <remarks>
            /// Currently, only VPC is supported.
            /// </remarks>
            [JsiiProperty(name: "attrDbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterType: Instance type.</summary>
            [JsiiProperty(name: "attrDbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeClass: Set the node type.</summary>
            [JsiiProperty(name: "attrDbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.</summary>
            [JsiiProperty(name: "attrDbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeStorage: Single-node storage space.</summary>
            /// <remarks>
            /// Value range: 100 GB to 32000GB.
            /// </remarks>
            [JsiiProperty(name: "attrDbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EncryptionKey: Key management service KMS key ID.</summary>
            [JsiiProperty(name: "attrEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncryptionKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.</summary>
            [JsiiProperty(name: "attrEncryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncryptionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Engine: Engine.</summary>
            [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineVersion: The engine version.</summary>
            [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: The expiration time.</summary>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsExpired: If the instance has expired.</summary>
            [JsiiProperty(name: "attrIsExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsExpired
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LockMode: The lock mode.</summary>
            [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLockMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LockReason: Lock reason.</summary>
            [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLockReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.</summary>
            [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The paymen type of the resource.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Port: Connection port.</summary>
            [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicConnectionString: A public IP address for the connection.</summary>
            [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddr: Public IP address.</summary>
            [JsiiProperty(name: "attrPublicIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicPort: Public network port.</summary>
            [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScaleOutStatus: Scale state.</summary>
            [JsiiProperty(name: "attrScaleOutStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScaleOutStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIps: The whitelist supports the following two formats:.</summary>
            [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.</summary>
            [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SupportBackup: Support fallback scheme.</summary>
            [JsiiProperty(name: "attrSupportBackup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSupportBackup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SupportHttpsPort: The system supports http port number.</summary>
            [JsiiProperty(name: "attrSupportHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSupportHttpsPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SupportMysqlPort: Supports Mysql, and those of the ports.</summary>
            [JsiiProperty(name: "attrSupportMysqlPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSupportMysqlPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.</summary>
            [JsiiProperty(name: "attrSupportOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSupportOss
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.</summary>
            [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcCloudInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: VPC ID.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcIpAddr: VPC IP address.</summary>
            [JsiiProperty(name: "attrVpcIpAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcIpAddr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: Switch ID.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: On behalf of the zone resource attribute field.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
