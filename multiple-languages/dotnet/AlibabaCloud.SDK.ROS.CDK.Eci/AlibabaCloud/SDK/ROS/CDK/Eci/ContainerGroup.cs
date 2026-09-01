using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ECI::ContainerGroup`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContainerGroup`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Eci.ContainerGroup), fullyQualifiedName: "@alicloud/ros-cdk-eci.ContainerGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-eci.ContainerGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ContainerGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroup
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ContainerGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ContainerGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ContainerGroup(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ContainerGroupId: The ID of the container group.</summary>
        [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContainerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContainerGroupName: The name of the container group.</summary>
        [JsiiProperty(name: "attrContainerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContainerGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EniInstanceId: ENI instance ID.</summary>
        [JsiiProperty(name: "attrEniInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEniInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetIp: Internet IP.</summary>
        [JsiiProperty(name: "attrInternetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetIp: Intranet IP.</summary>
        [JsiiProperty(name: "attrIntranetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ipv6Address: Ipv6 address.</summary>
        [JsiiProperty(name: "attrIpv6Address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpv6Address
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionId: The ID of the region in which the instance resides.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group to which the instance belongs.</summary>
        /// <remarks>
        /// Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The ID of the VSwitch.</summary>
        /// <remarks>
        /// Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the instance resides.</summary>
        /// <remarks>
        /// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.ContainerGroupProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps>()!;
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
