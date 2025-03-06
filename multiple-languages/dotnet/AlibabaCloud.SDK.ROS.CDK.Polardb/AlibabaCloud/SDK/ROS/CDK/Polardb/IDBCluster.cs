using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Represents a `DBCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IDBCluster")]
    public interface IDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute ClusterConnectionString: The cluster connection string of the db cluster.</summary>
        [JsiiProperty(name: "attrClusterConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterConnectionString
        {
            get;
        }

        /// <summary>Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.</summary>
        [JsiiProperty(name: "attrClusterEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterEndpointId
        {
            get;
        }

        /// <summary>Attribute ColdStorageInstanceId: The ID of the cold storage instance.</summary>
        [JsiiProperty(name: "attrColdStorageInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrColdStorageInstanceId
        {
            get;
        }

        /// <summary>Attribute CustomConnectionStrings: The custom connection strings of the db cluster.</summary>
        [JsiiProperty(name: "attrCustomConnectionStrings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomConnectionStrings
        {
            get;
        }

        /// <summary>Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.</summary>
        [JsiiProperty(name: "attrCustomEndpointIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomEndpointIds
        {
            get;
        }

        /// <summary>Attribute DBClusterDescription: The description of the db cluster.</summary>
        [JsiiProperty(name: "attrDbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterDescription
        {
            get;
        }

        /// <summary>Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.</summary>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterId
        {
            get;
        }

        /// <summary>Attribute DBNodeIds: The ID list of cluster nodes.</summary>
        [JsiiProperty(name: "attrDbNodeIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeIds
        {
            get;
        }

        /// <summary>Attribute OrderId: The Order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        /// <summary>Attribute PrimaryConnectionString: The primary connection string of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryConnectionString
        {
            get;
        }

        /// <summary>Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryConnectionStrings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryConnectionStrings
        {
            get;
        }

        /// <summary>Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryEndpointId
        {
            get;
        }

        /// <summary>Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryEndpointIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryEndpointIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `DBCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IDBCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterConnectionString: The cluster connection string of the db cluster.</summary>
            [JsiiProperty(name: "attrClusterConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.</summary>
            [JsiiProperty(name: "attrClusterEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ColdStorageInstanceId: The ID of the cold storage instance.</summary>
            [JsiiProperty(name: "attrColdStorageInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrColdStorageInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CustomConnectionStrings: The custom connection strings of the db cluster.</summary>
            [JsiiProperty(name: "attrCustomConnectionStrings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomConnectionStrings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.</summary>
            [JsiiProperty(name: "attrCustomEndpointIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomEndpointIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterDescription: The description of the db cluster.</summary>
            [JsiiProperty(name: "attrDbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.</summary>
            [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBNodeIds: The ID list of cluster nodes.</summary>
            [JsiiProperty(name: "attrDbNodeIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: The Order ID.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryConnectionString: The primary connection string of the db cluster.</summary>
            [JsiiProperty(name: "attrPrimaryConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.</summary>
            [JsiiProperty(name: "attrPrimaryConnectionStrings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryConnectionStrings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.</summary>
            [JsiiProperty(name: "attrPrimaryEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.</summary>
            [JsiiProperty(name: "attrPrimaryEndpointIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryEndpointIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps>()!;
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
