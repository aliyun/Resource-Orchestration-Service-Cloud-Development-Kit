using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ECS::InstanceGroupClone`, which is used to create clones of an Elastic Compute Service (ECS) instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceGroupClone`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.InstanceGroupClone), fullyQualifiedName: "@alicloud/ros-cdk-ecs.InstanceGroupClone", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceGroupCloneProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class InstanceGroupClone : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupClone
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public InstanceGroupClone(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupCloneProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupCloneProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
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

        /// <summary>Attribute HostNames: Host names of created instances.</summary>
        [JsiiProperty(name: "attrHostNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostNames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerIps: Inner IP address list of the specified instances.</summary>
        /// <remarks>
        /// Only for classical instances.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInnerIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceIds: The instance id list of created ecs instances.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.</summary>
        /// <remarks>
        /// Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpv6Addresses
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.</summary>
        /// <remarks>
        /// Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpv6AddressIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The order id list of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIps: Private IP address list of created ecs instances.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivateIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIps: Public IP address list of created ecs instances.</summary>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneIds: Zone id of created instances.</summary>
        [JsiiProperty(name: "attrZoneIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneIds
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InstanceGroupCloneProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupCloneProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceGroupCloneProps>()!;
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
