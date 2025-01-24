using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Represents a `SearchIndex`.</summary>
    [JsiiInterface(nativeType: typeof(ISearchIndex), fullyQualifiedName: "@alicloud/ros-cdk-ots.ISearchIndex")]
    public interface ISearchIndex : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute IndexName: Index name.</summary>
        [JsiiProperty(name: "attrIndexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIndexName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ots.SearchIndexProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndexProps Props
        {
            get;
        }

        /// <summary>Represents a `SearchIndex`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISearchIndex), fullyQualifiedName: "@alicloud/ros-cdk-ots.ISearchIndex")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndex
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute IndexName: Index name.</summary>
            [JsiiProperty(name: "attrIndexName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIndexName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ots.SearchIndexProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndexProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ots.ISearchIndexProps>()!;
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
