using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>A ROS resource type:  `ALIYUN::OTS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ots.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ots.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ots.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::OTS::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ots.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute InstanceName: Instance name.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateEndpoint: Private endpoint.</summary>
        [JsiiProperty(name: "attrPrivateEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicEndpoint: Public endpoint.</summary>
        [JsiiProperty(name: "attrPublicEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcEndpoint: Vpc endpoint.</summary>
        [JsiiProperty(name: "attrVpcEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
