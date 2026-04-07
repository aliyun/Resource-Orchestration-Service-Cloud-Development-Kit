using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Prometheus`, which is used to query the information about a Prometheus instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheus`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.Prometheus), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.Prometheus", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.PrometheusProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Prometheus : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheus
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Prometheus(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Prometheus(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Prometheus(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClusterId: The ID of the Prometheus instance.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterType: The type of the instance.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GrafanaInstanceId: The ID of the Grafana workspace.</summary>
        [JsiiProperty(name: "attrGrafanaInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGrafanaInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The billing method.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrometheusName: The name of the instance.</summary>
        [JsiiProperty(name: "attrPrometheusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrometheusName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group.</summary>
        /// <remarks>
        /// This parameter is returned only for Prometheus instances for ECS.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.</summary>
        [JsiiProperty(name: "attrSubClustersJson", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSubClustersJson
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags of the instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: The user ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The VPC ID.</summary>
        /// <remarks>
        /// This parameter is returned only for Prometheus instances for ECS.
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The vSwitch ID.</summary>
        /// <remarks>
        /// This parameter is returned only for Prometheus instances for ECS.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.PrometheusProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IPrometheusProps>()!;
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
