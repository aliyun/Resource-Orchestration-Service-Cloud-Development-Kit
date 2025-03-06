using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Represents a `DrdsInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IDrdsInstance), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsInstance")]
    public interface IDrdsInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CommodityCode: The commodity code of the service.</summary>
        [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommodityCode
        {
            get;
        }

        /// <summary>Attribute CreateTime: The timestamp that indicates when the instance is created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DrdsInstanceId: The ID of the Drds instance.</summary>
        [JsiiProperty(name: "attrDrdsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDrdsInstanceId
        {
            get;
        }

        /// <summary>Attribute ExpireDate: The timestamp that indicates when the instance expires.</summary>
        [JsiiProperty(name: "attrExpireDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireDate
        {
            get;
        }

        /// <summary>Attribute InstanceSeries: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// starter: Starter Edition
        /// enterprise: Enterprise Edition
        /// standard: Standard Edition
        /// </remarks>
        [JsiiProperty(name: "attrInstanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceSeries
        {
            get;
        }

        /// <summary>Attribute InstanceSpec: The specification of the instance.</summary>
        [JsiiProperty(name: "attrInstanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceSpec
        {
            get;
        }

        /// <summary>Attribute InstRole: The role of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// MASTER: The instance is a primary instance.
        /// SLAVE: The instance is a read-only instance to analyze complex queries.
        /// SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
        /// </remarks>
        [JsiiProperty(name: "attrInstRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstRole
        {
            get;
        }

        /// <summary>Attribute Label: The tag of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// NORMAL: The instance is a standard instance.
        /// HA: The instance is a high-availability (HA) instance.
        /// VPC: The instance is a VPC-based instance.
        /// </remarks>
        [JsiiProperty(name: "attrLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLabel
        {
            get;
        }

        /// <summary>Attribute MachineType: The machine type of the instance.</summary>
        /// <remarks>
        /// Valid value: ecs.
        /// </remarks>
        [JsiiProperty(name: "attrMachineType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMachineType
        {
            get;
        }

        /// <summary>Attribute MasterInstanceId: The ID of the primary instance.</summary>
        [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterInstanceId
        {
            get;
        }

        /// <summary>Attribute MysqlVersion: Engine version.</summary>
        [JsiiProperty(name: "attrMysqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMysqlVersion
        {
            get;
        }

        /// <summary>Attribute NetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute OrderInstanceId: The ID of the purchased instance.</summary>
        [JsiiProperty(name: "attrOrderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderInstanceId
        {
            get;
        }

        /// <summary>Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.</summary>
        [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReadOnlyDbInstanceIds
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute StorageType: The storage type of the Drds database.</summary>
        /// <remarks>
        /// Valid values:
        /// RDS
        /// PolarDB
        /// </remarks>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageType
        {
            get;
        }

        /// <summary>Attribute Type: The type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PUBLIC: The returned instance is a shared instance.
        /// PRIVATE: The returned instance is a dedicated instance.
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute Version: The version of the instance.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersion
        {
            get;
        }

        /// <summary>Attribute VersionAction: Indicates whether the version of the instance can be upgraded.</summary>
        [JsiiProperty(name: "attrVersionAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionAction
        {
            get;
        }

        /// <summary>Attribute Vips: The list of returned virtual IP addresses (VIPs).</summary>
        [JsiiProperty(name: "attrVips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVips
        {
            get;
        }

        /// <summary>Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcCloudInstanceId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the resource is located.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `DrdsInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDrdsInstance), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CommodityCode: The commodity code of the service.</summary>
            [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommodityCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The timestamp that indicates when the instance is created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the instance.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DrdsInstanceId: The ID of the Drds instance.</summary>
            [JsiiProperty(name: "attrDrdsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDrdsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireDate: The timestamp that indicates when the instance expires.</summary>
            [JsiiProperty(name: "attrExpireDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceSeries: The edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// starter: Starter Edition
            /// enterprise: Enterprise Edition
            /// standard: Standard Edition
            /// </remarks>
            [JsiiProperty(name: "attrInstanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceSeries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceSpec: The specification of the instance.</summary>
            [JsiiProperty(name: "attrInstanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstRole: The role of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// MASTER: The instance is a primary instance.
            /// SLAVE: The instance is a read-only instance to analyze complex queries.
            /// SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
            /// </remarks>
            [JsiiProperty(name: "attrInstRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstRole
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Label: The tag of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// NORMAL: The instance is a standard instance.
            /// HA: The instance is a high-availability (HA) instance.
            /// VPC: The instance is a VPC-based instance.
            /// </remarks>
            [JsiiProperty(name: "attrLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLabel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MachineType: The machine type of the instance.</summary>
            /// <remarks>
            /// Valid value: ecs.
            /// </remarks>
            [JsiiProperty(name: "attrMachineType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMachineType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterInstanceId: The ID of the primary instance.</summary>
            [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MysqlVersion: Engine version.</summary>
            [JsiiProperty(name: "attrMysqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMysqlVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// CLASSIC
            /// VPC
            /// </remarks>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderInstanceId: The ID of the purchased instance.</summary>
            [JsiiProperty(name: "attrOrderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.</summary>
            [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReadOnlyDbInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageType: The storage type of the Drds database.</summary>
            /// <remarks>
            /// Valid values:
            /// RDS
            /// PolarDB
            /// </remarks>
            [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PUBLIC: The returned instance is a shared instance.
            /// PRIVATE: The returned instance is a dedicated instance.
            /// </remarks>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Version: The version of the instance.</summary>
            [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionAction: Indicates whether the version of the instance can be upgraded.</summary>
            [JsiiProperty(name: "attrVersionAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Vips: The list of returned virtual IP addresses (VIPs).</summary>
            [JsiiProperty(name: "attrVips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVips
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.</summary>
            [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcCloudInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The ID of the zone in which the resource is located.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps>()!;
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
