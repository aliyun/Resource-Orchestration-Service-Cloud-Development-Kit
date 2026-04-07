using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::HoneypotProbe`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHoneypotProbe`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Threatdetection.HoneypotProbe), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotProbe", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotProbeProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class HoneypotProbe : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbe
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public HoneypotProbe(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected HoneypotProbe(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected HoneypotProbe(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.</summary>
        [JsiiProperty(name: "attrArp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ControlNodeId: The ID of the management node.</summary>
        [JsiiProperty(name: "attrControlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrControlNodeId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisplayName: The name of the probe.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDisplayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HoneypotBindList: The configuration of the probe.</summary>
        [JsiiProperty(name: "attrHoneypotBindList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHoneypotBindList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HoneypotProbeId: The ID of the probe.</summary>
        [JsiiProperty(name: "attrHoneypotProbeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHoneypotProbeId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ping: Specifies whether to enable ping scan.</summary>
        [JsiiProperty(name: "attrPing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPing
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProbeType: The type of the probe.</summary>
        [JsiiProperty(name: "attrProbeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProbeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProbeVersion: The version of the probe.</summary>
        [JsiiProperty(name: "attrProbeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProbeVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceIpList: Listen to the IP address list.</summary>
        [JsiiProperty(name: "attrServiceIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceIpList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Uuid: The UUID of the instance.</summary>
        [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotProbeProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps>()!;
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
