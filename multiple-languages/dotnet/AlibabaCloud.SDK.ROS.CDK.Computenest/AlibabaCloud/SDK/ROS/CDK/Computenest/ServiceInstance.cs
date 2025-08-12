using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Computenest.ServiceInstance), fullyQualifiedName: "@alicloud/ros-cdk-computenest.ServiceInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-computenest.ServiceInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ServiceInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ServiceInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps props, bool? enableResourcePropertyConstraint = null)
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

        /// <summary>Attribute Components: Additional billing items.</summary>
        [JsiiProperty(name: "attrComponents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrComponents
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: Creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.</summary>
        [JsiiProperty(name: "attrEnableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableInstanceOps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.</summary>
        [JsiiProperty(name: "attrEnableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnableUserPrometheus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.</summary>
        [JsiiProperty(name: "attrIsOperated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsOperated
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LicenseEndTime: License expiration time.</summary>
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

        /// <summary>Attribute NetworkConfig: Network configuration information.</summary>
        [JsiiProperty(name: "attrNetworkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Output: Create the output Field returned by the service instance.</summary>
        [JsiiProperty(name: "attrOutput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOutput
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Outputs: Create the output Field returned by the service instance.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOutputs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Parameters: The parameters entered by the deployment service instance.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrParameters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PredefinedParameterName: Package name.</summary>
        [JsiiProperty(name: "attrPredefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPredefinedParameterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Progress: The deployment progress of the service instance.</summary>
        /// <remarks>
        /// Unit:%.
        /// </remarks>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProgress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Service: Service details.</summary>
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

        /// <summary>Attribute ServiceType: Service type.</summary>
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

        /// <summary>Attribute StatusDetail: The status description of the deployment instance.</summary>
        [JsiiProperty(name: "attrStatusDetail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStatusDetail
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SupplierUid: Service provider AliUid.</summary>
        [JsiiProperty(name: "attrSupplierUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSupplierUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: User-defined labels.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TemplateName: Template name.</summary>
        [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTemplateName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdateTime: Update time.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: AliUid of the user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.ServiceInstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps>()!;
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
