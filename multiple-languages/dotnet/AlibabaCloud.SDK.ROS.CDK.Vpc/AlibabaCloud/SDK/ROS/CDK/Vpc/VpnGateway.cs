using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS resource type:  `ALIYUN::VPC::VpnGateway`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.VpnGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnGateway", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.VpnGatewayProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class VpnGateway : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VPC::VpnGateway`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public VpnGateway(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnGatewayProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected VpnGateway(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected VpnGateway(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute InternetIp: The public IP address of the VPN gateway.</summary>
        [JsiiProperty(name: "attrInternetIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Spec: The specification of the VPN gateway.</summary>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.</summary>
        [JsiiProperty(name: "attrSslMaxConnections", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSslMaxConnections
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "attrVpnGatewayId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpnGatewayId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
