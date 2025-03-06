using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Represents a `ClusterHelmApplication`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterHelmApplication), fullyQualifiedName: "@alicloud/ros-cdk-cs.IClusterHelmApplication")]
    public interface IClusterHelmApplication : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.</summary>
        [JsiiProperty(name: "attrWaitUntilData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitUntilData
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.ClusterHelmApplicationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cs.IClusterHelmApplicationProps Props
        {
            get;
        }

        /// <summary>Represents a `ClusterHelmApplication`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterHelmApplication), fullyQualifiedName: "@alicloud/ros-cdk-cs.IClusterHelmApplication")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterHelmApplication
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.</summary>
            [JsiiProperty(name: "attrWaitUntilData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitUntilData
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.ClusterHelmApplicationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cs.IClusterHelmApplicationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.IClusterHelmApplicationProps>()!;
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
