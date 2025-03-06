using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Represents a `DBClusterEndpoint`.</summary>
    [JsiiInterface(nativeType: typeof(IDBClusterEndpoint), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IDBClusterEndpoint")]
    public interface IDBClusterEndpoint : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Addresses: The address items of the db cluster endpoint.</summary>
        [JsiiProperty(name: "attrAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddresses
        {
            get;
        }

        /// <summary>Attribute ConnectionString: The first connection string of the db cluster endpoint.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionString
        {
            get;
        }

        /// <summary>Attribute DBEndpointId: DB cluster endpoint ID.</summary>
        /// <remarks>
        /// E.g. pe-xxxxxxxx.
        /// </remarks>
        [JsiiProperty(name: "attrDbEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbEndpointId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterEndpointProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointProps Props
        {
            get;
        }

        /// <summary>Represents a `DBClusterEndpoint`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterEndpoint), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IDBClusterEndpoint")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpoint
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Addresses: The address items of the db cluster endpoint.</summary>
            [JsiiProperty(name: "attrAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionString: The first connection string of the db cluster endpoint.</summary>
            [JsiiProperty(name: "attrConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBEndpointId: DB cluster endpoint ID.</summary>
            /// <remarks>
            /// E.g. pe-xxxxxxxx.
            /// </remarks>
            [JsiiProperty(name: "attrDbEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterEndpointProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointProps>()!;
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
