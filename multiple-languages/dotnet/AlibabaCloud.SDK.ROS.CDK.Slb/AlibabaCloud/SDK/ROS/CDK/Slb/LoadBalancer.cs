using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS resource type:  `ALIYUN::SLB::LoadBalancer`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.LoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancer", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.LoadBalancerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class LoadBalancer : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::SLB::LoadBalancer`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public LoadBalancer(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.ILoadBalancerProps? props = null, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected LoadBalancer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected LoadBalancer(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AddressType: The address type of the load balancer.</summary>
        /// <remarks>
        /// "intranet" or "internet".
        /// </remarks>
        [JsiiProperty(name: "attrAddressType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAddressType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpAddress: The ip address of the load balancer.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LoadBalancerId: The id of load balance created.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkType: The network type of the load balancer.</summary>
        /// <remarks>
        /// "vpc" or "classic" network.
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
