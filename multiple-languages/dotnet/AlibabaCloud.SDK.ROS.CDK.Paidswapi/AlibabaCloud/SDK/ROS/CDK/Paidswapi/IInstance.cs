using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidswapi
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Accessibility: Whether the workspace is visible to others.</summary>
        [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessibility
        {
            get;
        }

        /// <summary>Attribute Datasets: A collection of datasets.</summary>
        [JsiiProperty(name: "attrDatasets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatasets
        {
            get;
        }

        /// <summary>Attribute EcsSpec: The ECS specification of the instance.</summary>
        [JsiiProperty(name: "attrEcsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEcsSpec
        {
            get;
        }

        /// <summary>Attribute EnvironmentVariables: Environment variable.</summary>
        [JsiiProperty(name: "attrEnvironmentVariables", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentVariables
        {
            get;
        }

        /// <summary>Attribute ImageUrl: The mirror address.</summary>
        [JsiiProperty(name: "attrImageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageUrl
        {
            get;
        }

        /// <summary>Attribute InstanceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: The instance name.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute InstanceUrl: The instance address.</summary>
        [JsiiProperty(name: "attrInstanceUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceUrl
        {
            get;
        }

        /// <summary>Attribute JupyterlabUrl: The jupyterlab address.</summary>
        [JsiiProperty(name: "attrJupyterlabUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJupyterlabUrl
        {
            get;
        }

        /// <summary>Attribute Labels: User-defined labels.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLabels
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute TerminalUrl: The terminal address.</summary>
        [JsiiProperty(name: "attrTerminalUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTerminalUrl
        {
            get;
        }

        /// <summary>Attribute UserVpc: User vpc configuration.</summary>
        [JsiiProperty(name: "attrUserVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserVpc
        {
            get;
        }

        /// <summary>Attribute WebIDEUrl: The web IDE address.</summary>
        [JsiiProperty(name: "attrWebIdeUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWebIdeUrl
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: The Id of the workspace.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paidswapi.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Paidswapi.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-paidswapi.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidswapi.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Accessibility: Whether the workspace is visible to others.</summary>
            [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Datasets: A collection of datasets.</summary>
            [JsiiProperty(name: "attrDatasets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatasets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EcsSpec: The ECS specification of the instance.</summary>
            [JsiiProperty(name: "attrEcsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEcsSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentVariables: Environment variable.</summary>
            [JsiiProperty(name: "attrEnvironmentVariables", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentVariables
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageUrl: The mirror address.</summary>
            [JsiiProperty(name: "attrImageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The instance name.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceUrl: The instance address.</summary>
            [JsiiProperty(name: "attrInstanceUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JupyterlabUrl: The jupyterlab address.</summary>
            [JsiiProperty(name: "attrJupyterlabUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJupyterlabUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Labels: User-defined labels.</summary>
            [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLabels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TerminalUrl: The terminal address.</summary>
            [JsiiProperty(name: "attrTerminalUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTerminalUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserVpc: User vpc configuration.</summary>
            [JsiiProperty(name: "attrUserVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserVpc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WebIDEUrl: The web IDE address.</summary>
            [JsiiProperty(name: "attrWebIdeUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWebIdeUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: The Id of the workspace.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paidswapi.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Paidswapi.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Paidswapi.IInstanceProps>()!;
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
