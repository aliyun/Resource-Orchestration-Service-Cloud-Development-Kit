using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Represents a `ClusterApplicationResources`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterApplicationResources), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IClusterApplicationResources")]
    public interface IClusterApplicationResources : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Response: Query result of kubernetes resource(s).</summary>
        [JsiiProperty(name: "attrResponse", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResponse
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterApplicationResourcesProps Props
        {
            get;
        }

        /// <summary>Represents a `ClusterApplicationResources`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterApplicationResources), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IClusterApplicationResources")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterApplicationResources
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Response: Query result of kubernetes resource(s).</summary>
            [JsiiProperty(name: "attrResponse", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResponse
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterApplicationResourcesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterApplicationResourcesProps>()!;
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
