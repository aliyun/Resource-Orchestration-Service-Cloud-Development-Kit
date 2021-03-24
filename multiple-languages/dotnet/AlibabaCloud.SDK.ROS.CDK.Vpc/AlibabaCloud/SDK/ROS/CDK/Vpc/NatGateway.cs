using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS resource type:  `ALIYUN::VPC::NatGateway`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.NatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatGateway", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.NatGatewayProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class NatGateway : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VPC::NatGateway`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public NatGateway(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NatGateway(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NatGateway(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ForwardTableId: The forward table id.</summary>
        [JsiiProperty(name: "attrForwardTableId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrForwardTableId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NatGatewayId: The Id of created NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNatGatewayId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SNatTableId: The SNAT table id.</summary>
        [JsiiProperty(name: "attrSNatTableId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSNatTableId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
