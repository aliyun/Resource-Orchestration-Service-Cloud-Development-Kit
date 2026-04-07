using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Represents a `EnterpriseDBClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusters), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBClusters")]
    public interface IEnterpriseDBClusters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DBInstanceIds: The list of DB instance IDs.</summary>
        [JsiiProperty(name: "attrDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceIds
        {
            get;
        }

        /// <summary>Attribute EnterpriseDBClusters: The list of enterprise DB clusters.</summary>
        [JsiiProperty(name: "attrEnterpriseDbClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnterpriseDbClusters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClustersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClustersProps Props
        {
            get;
        }

        /// <summary>Represents a `EnterpriseDBClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusters), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBClusters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DBInstanceIds: The list of DB instance IDs.</summary>
            [JsiiProperty(name: "attrDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnterpriseDBClusters: The list of enterprise DB clusters.</summary>
            [JsiiProperty(name: "attrEnterpriseDbClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnterpriseDbClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClustersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClustersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClustersProps>()!;
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
