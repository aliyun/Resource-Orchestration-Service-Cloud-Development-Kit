using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adblake
{
    /// <summary>Represents a `DBCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-adblake.IDBCluster")]
    public interface IDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConnectionString: The public endpoint that is used to connect to the cluster.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionString
        {
            get;
        }

        /// <summary>Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.</summary>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusterId
        {
            get;
        }

        /// <summary>Attribute OrderId: The order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-adblake.DBClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Adblake.IDBClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `DBCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-adblake.IDBCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adblake.IDBCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConnectionString: The public endpoint that is used to connect to the cluster.</summary>
            [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.</summary>
            [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: The order ID.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-adblake.DBClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Adblake.IDBClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Adblake.IDBClusterProps>()!;
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
