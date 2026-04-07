using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Represents a `TranscodeJob`.</summary>
    [JsiiInterface(nativeType: typeof(ITranscodeJob), fullyQualifiedName: "@alicloud/ros-cdk-mps.ITranscodeJob")]
    public interface ITranscodeJob : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute JobIds: The IDs of the jobs.</summary>
        [JsiiProperty(name: "attrJobIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJobIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mps.TranscodeJobProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mps.ITranscodeJobProps Props
        {
            get;
        }

        /// <summary>Represents a `TranscodeJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITranscodeJob), fullyQualifiedName: "@alicloud/ros-cdk-mps.ITranscodeJob")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.ITranscodeJob
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute JobIds: The IDs of the jobs.</summary>
            [JsiiProperty(name: "attrJobIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJobIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mps.TranscodeJobProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mps.ITranscodeJobProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mps.ITranscodeJobProps>()!;
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
