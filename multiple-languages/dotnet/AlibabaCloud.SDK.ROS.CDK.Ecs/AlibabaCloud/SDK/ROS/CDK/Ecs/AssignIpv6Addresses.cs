using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS resource type:  `ALIYUN::ECS::AssignIpv6Addresses`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.AssignIpv6Addresses), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AssignIpv6Addresses", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.AssignIpv6AddressesProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class AssignIpv6Addresses : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECS::AssignIpv6Addresses`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public AssignIpv6Addresses(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignIpv6AddressesProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssignIpv6Addresses(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AssignIpv6Addresses(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Ipv6Addresses: Assigned IPv6 addresses.</summary>
        [JsiiProperty(name: "attrIpv6Addresses", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpv6Addresses
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ipv6AddressIds: Assigned IPv6 address IDs.</summary>
        [JsiiProperty(name: "attrIpv6AddressIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpv6AddressIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkInterfaceId: Elastic network interface ID.</summary>
        [JsiiProperty(name: "attrNetworkInterfaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNetworkInterfaceId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
