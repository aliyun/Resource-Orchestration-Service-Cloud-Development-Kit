using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`, which type is used to query the information about a service instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.ServiceInstance), fullyQualifiedName: "@alicloud/ros-cdk-computenest.datasource.ServiceInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-computenest.datasource.ServiceInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ServiceInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ServiceInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ServiceInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ServiceInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Components: Cloud Marketplace additional billing items.</summary>
        [JsiiProperty(name: "attrComponents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrComponents
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The time when the serviceInstance was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.</summary>
        [JsiiProperty(name: "attrEnableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableInstanceOps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.</summary>
        [JsiiProperty(name: "attrEnableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableUserPrometheus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsOperated: Indicates whether the hosted O&amp;M feature is enabled for the service instance.</summary>
        [JsiiProperty(name: "attrIsOperated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsOperated
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LicenseEndTime: The expiration time of licence.</summary>
        [JsiiProperty(name: "attrLicenseEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLicenseEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MarketInstanceId: The ID of the cloud marketplace instance.</summary>
        [JsiiProperty(name: "attrMarketInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMarketInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkConfig: The network configurations.</summary>
        [JsiiProperty(name: "attrNetworkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Outputs: The outputs returned from creating the service instance.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOutputs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Parameters: The parameters configured for the service instance.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrParameters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredefinedParameterName: The name of the package .</summary>
        [JsiiProperty(name: "attrPredefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredefinedParameterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Progress: The deployment progress of the service instance.</summary>
        /// <remarks>
        /// Unit: percentage.
        /// </remarks>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProgress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Service: The information about the service to which the service instance belongs.</summary>
        [JsiiProperty(name: "attrService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrService
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceInstanceId: The ID of the service instance.</summary>
        [JsiiProperty(name: "attrServiceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceInstanceName: The name of the resource.</summary>
        [JsiiProperty(name: "attrServiceInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceType: The type of the service.</summary>
        [JsiiProperty(name: "attrServiceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Source: The source of the service instance.</summary>
        [JsiiProperty(name: "attrSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSource
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StatusDetail: The description of the deployment state of the service instance.</summary>
        [JsiiProperty(name: "attrStatusDetail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStatusDetail
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.</summary>
        [JsiiProperty(name: "attrSupplierUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupplierUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags of the service instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TemplateName: The name of the template.</summary>
        [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTemplateName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdateTime: The time when the serviceInstance was last updated.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: The AliUid of the user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.datasource.ServiceInstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstanceProps>()!;
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
