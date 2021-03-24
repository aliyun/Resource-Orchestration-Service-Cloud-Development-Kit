using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    /// <summary>A ROS resource type:  `ALIYUN::ACM::Namespace`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Acm.Namespace), fullyQualifiedName: "@alicloud/ros-cdk-acm.Namespace", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-acm.NamespaceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Namespace : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ACM::Namespace`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Namespace(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Acm.INamespaceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Namespace(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Namespace(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Endpoint: Endpoint.</summary>
        [JsiiProperty(name: "attrEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NamespaceId: ID namespace.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNamespaceId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
