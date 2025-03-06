using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Represents a `DedicatedBlockStorageClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedBlockStorageClusters), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDedicatedBlockStorageClusters")]
    public interface IDedicatedBlockStorageClusters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.</summary>
        [JsiiProperty(name: "attrDedicatedBlockStorageClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedBlockStorageClusterIds
        {
            get;
        }

        /// <summary>Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.</summary>
        [JsiiProperty(name: "attrDedicatedBlockStorageClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedBlockStorageClusters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DedicatedBlockStorageClustersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDedicatedBlockStorageClustersProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedBlockStorageClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedBlockStorageClusters), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDedicatedBlockStorageClusters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDedicatedBlockStorageClusters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.</summary>
            [JsiiProperty(name: "attrDedicatedBlockStorageClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedBlockStorageClusterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.</summary>
            [JsiiProperty(name: "attrDedicatedBlockStorageClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedBlockStorageClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DedicatedBlockStorageClustersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDedicatedBlockStorageClustersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDedicatedBlockStorageClustersProps>()!;
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
