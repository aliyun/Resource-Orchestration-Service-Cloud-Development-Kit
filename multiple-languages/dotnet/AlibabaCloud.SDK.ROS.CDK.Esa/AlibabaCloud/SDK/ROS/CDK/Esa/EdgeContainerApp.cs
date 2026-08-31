using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEdgeContainerApp`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.EdgeContainerApp), fullyQualifiedName: "@alicloud/ros-cdk-esa.EdgeContainerApp", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.EdgeContainerAppProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class EdgeContainerApp : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerApp
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public EdgeContainerApp(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EdgeContainerApp(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EdgeContainerApp(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AppStatus: The status of the application.</summary>
        [JsiiProperty(name: "attrAppStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAppStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The time when the application was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainName: The domain name that is associated with the application.</summary>
        /// <remarks>
        /// If no domain name is associated with the application, the value is an empty string.
        /// </remarks>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EdgeContainerAppName: The name of the application.</summary>
        [JsiiProperty(name: "attrEdgeContainerAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEdgeContainerAppName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GatewayType: The type of the gateway.</summary>
        [JsiiProperty(name: "attrGatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGatewayType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.</summary>
        [JsiiProperty(name: "attrHealthCheckFailTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckFailTimes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckHost: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckHost
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.</summary>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckHttpCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckMethod: The HTTP request method for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckPort: The port used for health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535. Default value: 80.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.</summary>
        [JsiiProperty(name: "attrHealthCheckSuccTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckSuccTimes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
        [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckType: The health check type.</summary>
        [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckUri: The URI used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckUri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QuicCid: Indicates whether QUIC is enabled.</summary>
        [JsiiProperty(name: "attrQuicCid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQuicCid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Remarks: The remarks.</summary>
        /// <remarks>
        /// This parameter is empty by default.
        /// </remarks>
        [JsiiProperty(name: "attrRemarks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemarks
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServicePort: The server port.</summary>
        [JsiiProperty(name: "attrServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServicePort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TargetPort: The backend port, which is also the service port of the application.</summary>
        [JsiiProperty(name: "attrTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTargetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdateTime: The time when the application was last modified.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VersionCount: The number of versions of the application.</summary>
        [JsiiProperty(name: "attrVersionCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersionCount
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.EdgeContainerAppProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps>()!;
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
