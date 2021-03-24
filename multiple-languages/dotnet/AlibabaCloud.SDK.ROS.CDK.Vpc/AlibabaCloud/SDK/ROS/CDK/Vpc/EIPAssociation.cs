using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS resource type:  `ALIYUN::VPC::EIPAssociation`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.EIPAssociation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPAssociation", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.EIPAssociationProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class EIPAssociation : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VPC::EIPAssociation`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public EIPAssociation(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPAssociationProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EIPAssociation(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EIPAssociation(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.</summary>
        /// <remarks>
        /// Returned only for VPC elastic IP addresses.
        /// </remarks>
        [JsiiProperty(name: "attrAllocationId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAllocationId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EipAddress: IP address of created EIP.</summary>
        [JsiiProperty(name: "attrEipAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEipAddress
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
