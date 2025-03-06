using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource
{
    /// <summary>Represents a `DbInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IDbInstance), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstance")]
    public interface IDbInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionString
        {
            get;
        }

        /// <summary>Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CurrentMinorVersion: The current kernel image version.</summary>
        [JsiiProperty(name: "attrCurrentMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCurrentMinorVersion
        {
            get;
        }

        /// <summary>Attribute DbInstanceCategory: The category of the db instance.</summary>
        [JsiiProperty(name: "attrDbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceCategory
        {
            get;
        }

        /// <summary>Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.</summary>
        [JsiiProperty(name: "attrDbInstanceCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceCpu
        {
            get;
        }

        /// <summary>Attribute DbInstanceDescription: According to the practical example or notes.</summary>
        [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceDescription
        {
            get;
        }

        /// <summary>Attribute DbInstanceId: The ID of the GDB Instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.</summary>
        [JsiiProperty(name: "attrDbInstanceIpArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceIpArray
        {
            get;
        }

        /// <summary>Attribute DbInstanceMemory: Instance memory, which is measured in MB.</summary>
        [JsiiProperty(name: "attrDbInstanceMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceMemory
        {
            get;
        }

        /// <summary>Attribute DbInstanceNetworkType: The network type of the db instance.</summary>
        [JsiiProperty(name: "attrDbInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceNetworkType
        {
            get;
        }

        /// <summary>Attribute DbInstanceStorageType: Cloud Disk.</summary>
        [JsiiProperty(name: "attrDbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceStorageType
        {
            get;
        }

        /// <summary>Attribute DbInstanceType: The type of the db instance.</summary>
        [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceType
        {
            get;
        }

        /// <summary>Attribute DbNodeClass: The class of the db node.</summary>
        [JsiiProperty(name: "attrDbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeClass
        {
            get;
        }

        /// <summary>Attribute DbNodeCount: The count of the db node.</summary>
        [JsiiProperty(name: "attrDbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeCount
        {
            get;
        }

        /// <summary>Attribute DbNodeStorage: Instance storage space, which is measured in GB.</summary>
        [JsiiProperty(name: "attrDbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeStorage
        {
            get;
        }

        /// <summary>Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.</summary>
        [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbVersion
        {
            get;
        }

        /// <summary>Attribute EcsSecurityGroupRelations: Security group information array.</summary>
        [JsiiProperty(name: "attrEcsSecurityGroupRelations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEcsSecurityGroupRelations
        {
            get;
        }

        /// <summary>Attribute Expired: The expire status of the db instance.</summary>
        [JsiiProperty(name: "attrExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpired
        {
            get;
        }

        /// <summary>Attribute ExpireTime: The instance after it expires time for subscription instance.</summary>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute LatestMinorVersion: The latest kernel image version.</summary>
        [JsiiProperty(name: "attrLatestMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestMinorVersion
        {
            get;
        }

        /// <summary>Attribute LockMode: Instance lock state.</summary>
        [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLockMode
        {
            get;
        }

        /// <summary>Attribute LockReason: An instance is locked the reason.</summary>
        [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLockReason
        {
            get;
        }

        /// <summary>Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.</summary>
        [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainTime
        {
            get;
        }

        /// <summary>Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute Port: Application Port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPort
        {
            get;
        }

        /// <summary>Attribute PublicConnectionString: The public connection string ID of the DB instance.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicConnectionString
        {
            get;
        }

        /// <summary>Attribute PublicPort: The public port ID of the DB instance.</summary>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicPort
        {
            get;
        }

        /// <summary>Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.</summary>
        [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReadOnlyDbInstanceIds
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: Resource Group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the GDB Instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: The vpc id of the db instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The vswitch id of the DB instance.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The zone ID of the instance.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.datasource.DbInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `DbInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDbInstance), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.</summary>
            [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CurrentMinorVersion: The current kernel image version.</summary>
            [JsiiProperty(name: "attrCurrentMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCurrentMinorVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceCategory: The category of the db instance.</summary>
            [JsiiProperty(name: "attrDbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.</summary>
            [JsiiProperty(name: "attrDbInstanceCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceDescription: According to the practical example or notes.</summary>
            [JsiiProperty(name: "attrDbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceId: The ID of the GDB Instance.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.</summary>
            [JsiiProperty(name: "attrDbInstanceIpArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceIpArray
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceMemory: Instance memory, which is measured in MB.</summary>
            [JsiiProperty(name: "attrDbInstanceMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceMemory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceNetworkType: The network type of the db instance.</summary>
            [JsiiProperty(name: "attrDbInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceStorageType: Cloud Disk.</summary>
            [JsiiProperty(name: "attrDbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstanceType: The type of the db instance.</summary>
            [JsiiProperty(name: "attrDbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeClass: The class of the db node.</summary>
            [JsiiProperty(name: "attrDbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeCount: The count of the db node.</summary>
            [JsiiProperty(name: "attrDbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbNodeStorage: Instance storage space, which is measured in GB.</summary>
            [JsiiProperty(name: "attrDbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.</summary>
            [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EcsSecurityGroupRelations: Security group information array.</summary>
            [JsiiProperty(name: "attrEcsSecurityGroupRelations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEcsSecurityGroupRelations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Expired: The expire status of the db instance.</summary>
            [JsiiProperty(name: "attrExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpired
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: The instance after it expires time for subscription instance.</summary>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestMinorVersion: The latest kernel image version.</summary>
            [JsiiProperty(name: "attrLatestMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestMinorVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LockMode: Instance lock state.</summary>
            [JsiiProperty(name: "attrLockMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLockMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LockReason: An instance is locked the reason.</summary>
            [JsiiProperty(name: "attrLockReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLockReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.</summary>
            [JsiiProperty(name: "attrMaintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Port: Application Port.</summary>
            [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicConnectionString: The public connection string ID of the DB instance.</summary>
            [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicPort: The public port ID of the DB instance.</summary>
            [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.</summary>
            [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReadOnlyDbInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: Resource Group ID.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the GDB Instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The vpc id of the db instance.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The vswitch id of the DB instance.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The zone ID of the instance.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.datasource.DbInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstanceProps>()!;
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
