using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>A ROS resource type:  `ALIYUN::OOS::Execution`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oos.Execution), fullyQualifiedName: "@alicloud/ros-cdk-oos.Execution", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oos.ExecutionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Execution : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::OOS::Execution`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Execution(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oos.IExecutionProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Execution(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Execution(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.</summary>
        [JsiiProperty(name: "attrCounters", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCounters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        /// You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrCurlCli", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCurlCli
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExecutionId: Execution ID.</summary>
        [JsiiProperty(name: "attrExecutionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrExecutionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Outputs: Execution output.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOutputs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrPowerShellCurlCli", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPowerShellCurlCli
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Status: Execution status.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StatusMessage: Execution status information.</summary>
        [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatusMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.</summary>
        /// <remarks>
        /// You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        /// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        /// </remarks>
        [JsiiProperty(name: "attrWindowsCurlCli", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrWindowsCurlCli
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
