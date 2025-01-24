using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Service`, which is used to create an Elastic Algorithm Service (EAS) service in Machine Learning Platform for AI (PAI).</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Pai.Service), fullyQualifiedName: "@alicloud/ros-cdk-pai.Service", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-pai.ServiceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Service : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Pai.IService
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Service(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.IServiceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.IServiceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Service(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Service(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccessToken: Service Request authentication token.</summary>
        [JsiiProperty(name: "attrAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAccessToken
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.</summary>
        [JsiiProperty(name: "attrCallerUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCallerUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cpu: Number of service CPU cores.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: Creation time of the service.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CurrentVersion: Current running version of the service.</summary>
        [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCurrentVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExtraData: Service Extra Information.</summary>
        [JsiiProperty(name: "attrExtraData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExtraData
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Gpu: Number of service GPU cards.</summary>
        [JsiiProperty(name: "attrGpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Image: Service Deployment Mirroring.</summary>
        [JsiiProperty(name: "attrImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetEndpoint: Public network Endpoint of the service.</summary>
        [JsiiProperty(name: "attrInternetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetEndpoint: The intranet Endpoint of the service.</summary>
        [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Labels: Service Tag.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLabels
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LatestVersion: The latest version of the service.</summary>
        [JsiiProperty(name: "attrLatestVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLatestVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Memory: Memory of service (MB).</summary>
        [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Message: Latest information on services.</summary>
        [JsiiProperty(name: "attrMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Namespace: The namespace to which the service belongs.</summary>
        [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNamespace
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ParentUid: Primary account ID of the creator.</summary>
        [JsiiProperty(name: "attrParentUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrParentUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PendingInstance: Number of instances where the service is not currently ready.</summary>
        [JsiiProperty(name: "attrPendingInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPendingInstance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Reason: Service deployment failure reason.</summary>
        [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReason
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Resource: The ID of the resource group to which the service belongs.</summary>
        [JsiiProperty(name: "attrResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResource
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceAlias: Name of the resource group where the service resides.</summary>
        [JsiiProperty(name: "attrResourceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceAlias
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Role: Grouping Service Role.</summary>
        [JsiiProperty(name: "attrRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRole
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RoleAttrs: Grouping Service Role Properties.</summary>
        [JsiiProperty(name: "attrRoleAttrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRoleAttrs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RunningInstance: Number of instances in service running.</summary>
        [JsiiProperty(name: "attrRunningInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRunningInstance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SafetyLock: Service Security Lock Status.</summary>
        [JsiiProperty(name: "attrSafetyLock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSafetyLock
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceConfig: Service configuration information.</summary>
        [JsiiProperty(name: "attrServiceConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceGroup: Group to which the service belongs.</summary>
        [JsiiProperty(name: "attrServiceGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceGroup
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceName: Service Name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceUid: Unique Service ID.</summary>
        [JsiiProperty(name: "attrServiceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TotalInstance: Total number of instances required by the service.</summary>
        [JsiiProperty(name: "attrTotalInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTotalInstance
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdateTime: Service Last Updated.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Weight: Packet Service Traffic Weight.</summary>
        [JsiiProperty(name: "attrWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWeight
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ServiceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Pai.IServiceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.IServiceProps>()!;
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
