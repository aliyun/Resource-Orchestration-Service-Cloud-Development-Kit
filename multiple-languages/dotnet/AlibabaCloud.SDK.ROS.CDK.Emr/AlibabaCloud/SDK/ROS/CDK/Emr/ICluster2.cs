using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Represents a `Cluster2`.</summary>
    [JsiiInterface(nativeType: typeof(ICluster2), fullyQualifiedName: "@alicloud/ros-cdk-emr.ICluster2")]
    public interface ICluster2 : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApplicationLinks: ApplicationLinks of cluster.</summary>
        [JsiiProperty(name: "attrApplicationLinks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApplicationLinks
        {
            get;
        }

        /// <summary>Attribute ClusterId: Cluster ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.Cluster2Props\"}")]
        AlibabaCloud.SDK.ROS.CDK.Emr.ICluster2Props Props
        {
            get;
        }

        /// <summary>Represents a `Cluster2`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICluster2), fullyQualifiedName: "@alicloud/ros-cdk-emr.ICluster2")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.ICluster2
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApplicationLinks: ApplicationLinks of cluster.</summary>
            [JsiiProperty(name: "attrApplicationLinks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApplicationLinks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterId: Cluster ID.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.Cluster2Props\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Emr.ICluster2Props Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.ICluster2Props>()!;
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
