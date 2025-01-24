using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Represents a `Environment`.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-arms.IEnvironment")]
    public interface IEnvironment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EnvironmentId: The id of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentId
        {
            get;
        }

        /// <summary>Attribute EnvironmentName: The name of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentName
        {
            get;
        }

        /// <summary>Attribute EnvironmentSubType: The subtype of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentSubType
        {
            get;
        }

        /// <summary>Attribute EnvironmentType: The type of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentType
        {
            get;
        }

        /// <summary>Attribute FeePackage: The payable resource plan.</summary>
        [JsiiProperty(name: "attrFeePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFeePackage
        {
            get;
        }

        /// <summary>Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.</summary>
        [JsiiProperty(name: "attrGrafanaWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaWorkspaceId
        {
            get;
        }

        /// <summary>Attribute ManagedType: Specifies whether agents or exporters are managed.</summary>
        [JsiiProperty(name: "attrManagedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrManagedType
        {
            get;
        }

        /// <summary>Attribute PrometheusInstanceId: The ID of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrometheusInstanceId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.EnvironmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironmentProps Props
        {
            get;
        }

        /// <summary>Represents a `Environment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-arms.IEnvironment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EnvironmentId: The id of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentName: The name of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentSubType: The subtype of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentSubType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentType: The type of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FeePackage: The payable resource plan.</summary>
            [JsiiProperty(name: "attrFeePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFeePackage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.</summary>
            [JsiiProperty(name: "attrGrafanaWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ManagedType: Specifies whether agents or exporters are managed.</summary>
            [JsiiProperty(name: "attrManagedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrManagedType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrometheusInstanceId: The ID of the Prometheus instance.</summary>
            [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrometheusInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.EnvironmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironmentProps>()!;
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
