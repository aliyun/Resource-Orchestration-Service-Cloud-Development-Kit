using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Represents a `EnvPodMonitor`.</summary>
    [JsiiInterface(nativeType: typeof(IEnvPodMonitor), fullyQualifiedName: "@alicloud/ros-cdk-arms.IEnvPodMonitor")]
    public interface IEnvPodMonitor : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigYaml: The YAML configuration string of the PodMonitor.</summary>
        [JsiiProperty(name: "attrConfigYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigYaml
        {
            get;
        }

        /// <summary>Attribute EnvironmentId: The ID of the environment instance.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentId
        {
            get;
        }

        /// <summary>Attribute EnvPodMonitorName: The name of the PodMonitor.</summary>
        [JsiiProperty(name: "attrEnvPodMonitorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvPodMonitorName
        {
            get;
        }

        /// <summary>Attribute Namespace: The namespace of the PodMonitor.</summary>
        [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespace
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.EnvPodMonitorProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.IEnvPodMonitorProps Props
        {
            get;
        }

        /// <summary>Represents a `EnvPodMonitor`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvPodMonitor), fullyQualifiedName: "@alicloud/ros-cdk-arms.IEnvPodMonitor")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IEnvPodMonitor
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigYaml: The YAML configuration string of the PodMonitor.</summary>
            [JsiiProperty(name: "attrConfigYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigYaml
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentId: The ID of the environment instance.</summary>
            [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvPodMonitorName: The name of the PodMonitor.</summary>
            [JsiiProperty(name: "attrEnvPodMonitorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvPodMonitorName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Namespace: The namespace of the PodMonitor.</summary>
            [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.EnvPodMonitorProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.IEnvPodMonitorProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.IEnvPodMonitorProps>()!;
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
