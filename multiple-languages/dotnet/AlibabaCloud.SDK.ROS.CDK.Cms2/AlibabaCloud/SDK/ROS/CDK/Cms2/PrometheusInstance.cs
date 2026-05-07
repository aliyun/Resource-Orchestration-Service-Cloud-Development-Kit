using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms2.PrometheusInstance), fullyQualifiedName: "@alicloud/ros-cdk-cms2.PrometheusInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms2.PrometheusInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class PrometheusInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public PrometheusInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PrometheusInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PrometheusInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrHttpApiInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpApiInterUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrHttpApiIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHttpApiIntraUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrometheusInstanceId: The ID of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrometheusInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPushGatewayInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPushGatewayInterUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrPushGatewayIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPushGatewayIntraUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteReadInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemoteReadInterUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteReadIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemoteReadIntraUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteWriteInterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemoteWriteInterUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrRemoteWriteIntraUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemoteWriteIntraUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.PrometheusInstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps>()!;
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
