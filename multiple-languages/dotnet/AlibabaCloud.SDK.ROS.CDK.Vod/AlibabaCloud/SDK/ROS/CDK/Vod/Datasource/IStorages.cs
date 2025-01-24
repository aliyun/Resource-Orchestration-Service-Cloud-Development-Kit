using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Represents a `Storages`.</summary>
    [JsiiInterface(nativeType: typeof(IStorages), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IStorages")]
    public interface IStorages : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute StorageLocations: The list of storage locations.</summary>
        [JsiiProperty(name: "attrStorageLocations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageLocations
        {
            get;
        }

        /// <summary>Attribute Storages: The list of storages.</summary>
        [JsiiProperty(name: "attrStorages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorages
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.StoragesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IStoragesProps Props
        {
            get;
        }

        /// <summary>Represents a `Storages`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStorages), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IStorages")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IStorages
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute StorageLocations: The list of storage locations.</summary>
            [JsiiProperty(name: "attrStorageLocations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageLocations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Storages: The list of storages.</summary>
            [JsiiProperty(name: "attrStorages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorages
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.StoragesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IStoragesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IStoragesProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
