using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2.Datasource
{
    /// <summary>Represents a `ServiceObservability`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceObservability), fullyQualifiedName: "@alicloud/ros-cdk-cms2.datasource.IServiceObservability")]
    public interface IServiceObservability : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EntryPointInfo: The entry point info of service observability.</summary>
        [JsiiProperty(name: "attrEntryPointInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEntryPointInfo
        {
            get;
        }

        /// <summary>Attribute FeeType: The fee type of service observability.</summary>
        [JsiiProperty(name: "attrFeeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFeeType
        {
            get;
        }

        /// <summary>Attribute Quotas: The quotas of service observability.</summary>
        [JsiiProperty(name: "attrQuotas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQuotas
        {
            get;
        }

        /// <summary>Attribute Settings: The settings of service observability.</summary>
        [JsiiProperty(name: "attrSettings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSettings
        {
            get;
        }

        /// <summary>Attribute Status: The status of service observability.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        /// <summary>Attribute Type: The type of service observability.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute Workspace: The name of workspace.</summary>
        [JsiiProperty(name: "attrWorkspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspace
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.datasource.ServiceObservabilityProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms2.Datasource.IServiceObservabilityProps Props
        {
            get;
        }

        /// <summary>Represents a `ServiceObservability`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceObservability), fullyQualifiedName: "@alicloud/ros-cdk-cms2.datasource.IServiceObservability")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.Datasource.IServiceObservability
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EntryPointInfo: The entry point info of service observability.</summary>
            [JsiiProperty(name: "attrEntryPointInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEntryPointInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FeeType: The fee type of service observability.</summary>
            [JsiiProperty(name: "attrFeeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFeeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Quotas: The quotas of service observability.</summary>
            [JsiiProperty(name: "attrQuotas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQuotas
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Settings: The settings of service observability.</summary>
            [JsiiProperty(name: "attrSettings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSettings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The status of service observability.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of service observability.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Workspace: The name of workspace.</summary>
            [JsiiProperty(name: "attrWorkspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspace
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.datasource.ServiceObservabilityProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms2.Datasource.IServiceObservabilityProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.Datasource.IServiceObservabilityProps>()!;
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
