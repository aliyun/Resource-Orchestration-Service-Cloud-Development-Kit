using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>A ROS resource type:  `ALIYUN::ECI::ContainerGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Eci.ContainerGroup), fullyQualifiedName: "@alicloud/ros-cdk-eci.ContainerGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-eci.ContainerGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ContainerGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECI::ContainerGroup`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ContainerGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
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
        [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrContainerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContainerGroupName: The name of the container group.</summary>
        [JsiiProperty(name: "attrContainerGroupName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrContainerGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EniInstanceId: ENI instance ID.</summary>
        [JsiiProperty(name: "attrEniInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEniInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetIp: Internet IP.</summary>
        [JsiiProperty(name: "attrInternetIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetIp: Intranet IP.</summary>
        [JsiiProperty(name: "attrIntranetIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ipv6Address: Ipv6 address.</summary>
        [JsiiProperty(name: "attrIpv6Address", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpv6Address
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionId: The ID of the region in which the instance resides.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group to which the instance belongs.</summary>
        /// <remarks>
        /// Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The ID of the VSwitch.</summary>
        /// <remarks>
        /// Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the instance resides.</summary>
        /// <remarks>
        /// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
