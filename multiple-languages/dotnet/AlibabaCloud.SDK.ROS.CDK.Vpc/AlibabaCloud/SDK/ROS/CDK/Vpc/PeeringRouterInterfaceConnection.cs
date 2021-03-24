using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.PeeringRouterInterfaceConnection), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnection", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class PeeringRouterInterfaceConnection : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public PeeringRouterInterfaceConnection(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceConnectionProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PeeringRouterInterfaceConnection(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PeeringRouterInterfaceConnection(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute OppositeInterfaceId: The receiver RouterInterface ID.</summary>
        [JsiiProperty(name: "attrOppositeInterfaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOppositeInterfaceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RouterInterfaceId: The initiator RouterInterface ID.</summary>
        [JsiiProperty(name: "attrRouterInterfaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRouterInterfaceId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
