using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS resource type:  `ALIYUN::ECS::InstanceGroupClone`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.InstanceGroupClone), fullyQualifiedName: "@alicloud/ros-cdk-ecs.InstanceGroupClone", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceGroupCloneProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class InstanceGroupClone : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECS::InstanceGroupClone`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public InstanceGroupClone(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupCloneProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InstanceGroupClone(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InstanceGroupClone(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute HostNames: Host names of created instance.</summary>
        [JsiiProperty(name: "attrHostNames", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostNames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerIps: Inner IP address list of the specified instance.</summary>
        /// <remarks>
        /// Only for classical instance.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceIds: The instance id list of created ecs instance.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The order id list of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIps: Private IP address list of created ecs instance.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIps: Public IP address list of created ecs instance.</summary>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneIds: Zone id of created instance.</summary>
        [JsiiProperty(name: "attrZoneIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneIds
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
