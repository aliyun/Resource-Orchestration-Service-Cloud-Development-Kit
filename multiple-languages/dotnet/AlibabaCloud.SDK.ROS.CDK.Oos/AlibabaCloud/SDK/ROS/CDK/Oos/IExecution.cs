using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Represents a `Execution`.</summary>
    [JsiiInterface(nativeType: typeof(IExecution), fullyQualifiedName: "@alicloud/ros-cdk-oos.IExecution")]
    public interface IExecution : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.</summary>
        [JsiiProperty(name: "attrCounters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCounters
        {
            get;
        }

        /// <summary>Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        /// You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCurlCli
        {
            get;
        }

        /// <summary>Attribute ExecutionId: Execution ID.</summary>
        [JsiiProperty(name: "attrExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExecutionId
        {
            get;
        }

        /// <summary>Attribute Outputs: Execution output.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOutputs
        {
            get;
        }

        /// <summary>Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrPowerShellCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPowerShellCurlCli
        {
            get;
        }

        /// <summary>Attribute Status: Execution status.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        /// <summary>Attribute StatusMessage: Execution status information.</summary>
        [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatusMessage
        {
            get;
        }

        /// <summary>Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrWindowsCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWindowsCurlCli
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.ExecutionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps Props
        {
            get;
        }

        /// <summary>Represents a `Execution`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IExecution), fullyQualifiedName: "@alicloud/ros-cdk-oos.IExecution")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IExecution
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.</summary>
            [JsiiProperty(name: "attrCounters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCounters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
            /// <remarks>
            /// You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
            /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
            /// You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
            /// </remarks>
            [JsiiProperty(name: "attrCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCurlCli
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExecutionId: Execution ID.</summary>
            [JsiiProperty(name: "attrExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExecutionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Outputs: Execution output.</summary>
            [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOutputs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
            /// <remarks>
            /// You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
            /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
            /// </remarks>
            [JsiiProperty(name: "attrPowerShellCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPowerShellCurlCli
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: Execution status.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StatusMessage: Execution status information.</summary>
            [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatusMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
            /// <remarks>
            /// You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
            /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
            /// </remarks>
            [JsiiProperty(name: "attrWindowsCurlCli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWindowsCurlCli
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.ExecutionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps>()!;
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
