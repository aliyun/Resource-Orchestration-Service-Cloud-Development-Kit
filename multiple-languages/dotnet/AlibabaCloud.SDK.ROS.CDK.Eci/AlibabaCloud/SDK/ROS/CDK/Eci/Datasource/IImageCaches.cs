using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>Represents a `ImageCaches`.</summary>
    [JsiiInterface(nativeType: typeof(IImageCaches), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.IImageCaches")]
    public interface IImageCaches : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ImageCacheIds: The list of image cache IDs.</summary>
        [JsiiProperty(name: "attrImageCacheIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCacheIds
        {
            get;
        }

        /// <summary>Attribute ImageCaches: The list of image caches.</summary>
        [JsiiProperty(name: "attrImageCaches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCaches
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCachesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCachesProps Props
        {
            get;
        }

        /// <summary>Represents a `ImageCaches`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImageCaches), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.IImageCaches")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCaches
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ImageCacheIds: The list of image cache IDs.</summary>
            [JsiiProperty(name: "attrImageCacheIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCacheIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCaches: The list of image caches.</summary>
            [JsiiProperty(name: "attrImageCaches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCaches
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCachesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCachesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCachesProps>()!;
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
