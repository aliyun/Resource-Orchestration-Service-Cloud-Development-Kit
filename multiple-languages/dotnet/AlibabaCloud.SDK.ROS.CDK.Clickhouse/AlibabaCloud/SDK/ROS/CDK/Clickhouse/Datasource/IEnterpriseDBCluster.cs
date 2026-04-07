using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Represents a `EnterpriseDBCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBCluster")]
    public interface IEnterpriseDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Category: Type, value description: enterprise: Enterprise Edition.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute ChargeType: The billing method.</summary>
        /// <remarks>
        /// Enterprise Edition clusters use the pay-as-you-go billing method.
        /// </remarks>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChargeType
        {
            get;
        }

        /// <summary>Attribute ComputingGroupIds: The list of computing group IDs.</summary>
        [JsiiProperty(name: "attrComputingGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrComputingGroupIds
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the cluster.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DBInstanceId: The cluster ID.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute Description: The cluster description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DisabledPorts: The specified database port is disabled.</summary>
        /// <remarks>
        /// Multiple ports separated by commas (,) are supported.
        /// </remarks>
        [JsiiProperty(name: "attrDisabledPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisabledPorts
        {
            get;
        }

        /// <summary>Attribute Endpoints: List of Endpoint details.</summary>
        [JsiiProperty(name: "attrEndpoints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpoints
        {
            get;
        }

        /// <summary>Attribute Engine: The engine type.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngine
        {
            get;
        }

        /// <summary>Attribute EngineMinorVersion: The minor version number of the cluster engine.</summary>
        [JsiiProperty(name: "attrEngineMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineMinorVersion
        {
            get;
        }

        /// <summary>Attribute EngineVersion: The engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineVersion
        {
            get;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceNetworkType
        {
            get;
        }

        /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainEndTime
        {
            get;
        }

        /// <summary>Attribute MaintainStartTime: The maintainable time start time.</summary>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainStartTime
        {
            get;
        }

        /// <summary>Attribute MultiZones: The information about the zones.</summary>
        [JsiiProperty(name: "attrMultiZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMultiZones
        {
            get;
        }

        /// <summary>Attribute NodeCount: The number of nodes.</summary>
        /// <remarks>
        /// The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        /// </remarks>
        [JsiiProperty(name: "attrNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeCount
        {
            get;
        }

        /// <summary>Attribute Nodes: The Node information.</summary>
        [JsiiProperty(name: "attrNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodes
        {
            get;
        }

        /// <summary>Attribute NodeScaleMax: The maximum value of serverless node auto scaling.</summary>
        [JsiiProperty(name: "attrNodeScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeScaleMax
        {
            get;
        }

        /// <summary>Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.</summary>
        [JsiiProperty(name: "attrNodeScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeScaleMin
        {
            get;
        }

        /// <summary>Attribute ObjectStoreSize: The size of the object storage space.</summary>
        [JsiiProperty(name: "attrObjectStoreSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrObjectStoreSize
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute ScaleMax: The maximum capacity for elastic scaling.</summary>
        [JsiiProperty(name: "attrScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScaleMax
        {
            get;
        }

        /// <summary>Attribute ScaleMin: The minimum capacity for elastic scaling.</summary>
        [JsiiProperty(name: "attrScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScaleMin
        {
            get;
        }

        /// <summary>Attribute StorageQuota: Storage Pre-purchased Capacity (GB).</summary>
        [JsiiProperty(name: "attrStorageQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageQuota
        {
            get;
        }

        /// <summary>Attribute StorageSize: The size of the storage space.</summary>
        /// <remarks>
        /// Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageSize
        {
            get;
        }

        /// <summary>Attribute StorageType: The storage type.</summary>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageType
        {
            get;
        }

        /// <summary>Attribute Tags: The details of the tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: The VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VswitchId: The VSwitch ID.</summary>
        [JsiiProperty(name: "attrVswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVswitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `EnterpriseDBCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Category: Type, value description: enterprise: Enterprise Edition.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChargeType: The billing method.</summary>
            /// <remarks>
            /// Enterprise Edition clusters use the pay-as-you-go billing method.
            /// </remarks>
            [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ComputingGroupIds: The list of computing group IDs.</summary>
            [JsiiProperty(name: "attrComputingGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrComputingGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the cluster.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceId: The cluster ID.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The cluster description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisabledPorts: The specified database port is disabled.</summary>
            /// <remarks>
            /// Multiple ports separated by commas (,) are supported.
            /// </remarks>
            [JsiiProperty(name: "attrDisabledPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisabledPorts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Endpoints: List of Endpoint details.</summary>
            [JsiiProperty(name: "attrEndpoints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpoints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Engine: The engine type.</summary>
            [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineMinorVersion: The minor version number of the cluster engine.</summary>
            [JsiiProperty(name: "attrEngineMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineMinorVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineVersion: The engine version.</summary>
            [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
            [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
            [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainStartTime: The maintainable time start time.</summary>
            [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MultiZones: The information about the zones.</summary>
            [JsiiProperty(name: "attrMultiZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMultiZones
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeCount: The number of nodes.</summary>
            /// <remarks>
            /// The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
            /// </remarks>
            [JsiiProperty(name: "attrNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Nodes: The Node information.</summary>
            [JsiiProperty(name: "attrNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeScaleMax: The maximum value of serverless node auto scaling.</summary>
            [JsiiProperty(name: "attrNodeScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeScaleMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.</summary>
            [JsiiProperty(name: "attrNodeScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeScaleMin
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ObjectStoreSize: The size of the object storage space.</summary>
            [JsiiProperty(name: "attrObjectStoreSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrObjectStoreSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScaleMax: The maximum capacity for elastic scaling.</summary>
            [JsiiProperty(name: "attrScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScaleMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScaleMin: The minimum capacity for elastic scaling.</summary>
            [JsiiProperty(name: "attrScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScaleMin
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageQuota: Storage Pre-purchased Capacity (GB).</summary>
            [JsiiProperty(name: "attrStorageQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageQuota
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageSize: The size of the storage space.</summary>
            /// <remarks>
            /// Unit: GB.
            /// </remarks>
            [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageType: The storage type.</summary>
            [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The details of the tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The VPC ID.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VswitchId: The VSwitch ID.</summary>
            [JsiiProperty(name: "attrVswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVswitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The zone ID.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps>()!;
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
