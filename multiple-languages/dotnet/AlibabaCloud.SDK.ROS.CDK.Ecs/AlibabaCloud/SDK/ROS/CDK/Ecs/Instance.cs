using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS resource type:  `ALIYUN::ECS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ecs.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECS::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute HostName: Host name of created instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerIp: Inner IP address of the specified instance.</summary>
        /// <remarks>
        /// Only for classical instance.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The instance id of created ecs instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.</summary>
        [JsiiProperty(name: "attrPrimaryNetworkInterfaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrimaryNetworkInterfaceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIp: Private IP address of created ecs instance.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIp: Public IP address of created ecs instance.</summary>
        [JsiiProperty(name: "attrPublicIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: Zone id of created instance.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
