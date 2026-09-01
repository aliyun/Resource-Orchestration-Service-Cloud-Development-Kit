using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CEN::Flowlog`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowlog`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cen.Flowlog), fullyQualifiedName: "@alicloud/ros-cdk-cen.Flowlog", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cen.FlowlogProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Flowlog : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlog
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Flowlog(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlogProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlogProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Flowlog(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Flowlog(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCenId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The time when the flow log was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the flow log.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FlowLogId: The ID of the flow log.</summary>
        [JsiiProperty(name: "attrFlowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFlowLogId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FlowLogName: The flow log name.</summary>
        [JsiiProperty(name: "attrFlowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFlowLogName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FlowLogVersion: The flow log version.</summary>
        [JsiiProperty(name: "attrFlowLogVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFlowLogVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Interval: The time window for collecting log data.</summary>
        [JsiiProperty(name: "attrInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogFormatString: The strings that define the fields in the flow log.</summary>
        [JsiiProperty(name: "attrLogFormatString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLogFormatString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogStoreName: The Logstore that stores the captured traffic data.</summary>
        [JsiiProperty(name: "attrLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLogStoreName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProjectName: The project that stores the captured traffic data.</summary>
        [JsiiProperty(name: "attrProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProjectName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tag of the flow log.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterAttachmentId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.FlowlogProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlogProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.IFlowlogProps>()!;
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
