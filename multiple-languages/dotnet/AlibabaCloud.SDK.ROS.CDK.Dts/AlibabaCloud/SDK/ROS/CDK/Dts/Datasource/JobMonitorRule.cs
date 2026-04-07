using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRule`, which type is used to query an alert rule of a Data Transmission Service (DTS) task.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.JobMonitorRule), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.JobMonitorRule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class JobMonitorRule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public JobMonitorRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected JobMonitorRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected JobMonitorRule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DelayRuleTime: The threshold that triggers the alert.</summary>
        [JsiiProperty(name: "attrDelayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDelayRuleTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.</summary>
        [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDtsJobId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Period: The statistical period for incremental validation tasks, in minutes.</summary>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Phone: The mobile phone numbers that receive alert notifications.</summary>
        /// <remarks>
        /// Multiple mobile numbers are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "attrPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPhone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute State: Indicates whether the monitoring rule is enabled.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Times: The number of cycles for the incremental validation task.</summary>
        [JsiiProperty(name: "attrTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTimes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Type: The type of the monitoring rule.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
