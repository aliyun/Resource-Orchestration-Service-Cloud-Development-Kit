using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS resource type:  `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.AnycastEIPAssociation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPAssociation", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class AnycastEIPAssociation : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public AnycastEIPAssociation(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AnycastEIPAssociation(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AnycastEIPAssociation(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AnycastId: Anycast EIP instance ID.</summary>
        [JsiiProperty(name: "attrAnycastId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAnycastId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BindInstanceId: The ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBindInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBindInstanceRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BindInstanceType: The cloud resource instance type to be bound.</summary>
        [JsiiProperty(name: "attrBindInstanceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBindInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
