using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>A ROS resource type:  `ALIYUN::OSS::Bucket`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.Bucket", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.BucketProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Bucket : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::OSS::Bucket`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Bucket(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bucket(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bucket(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DomainName: The public DNS name of the specified bucket.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternalDomainName: The internal DNS name of the specified bucket.</summary>
        [JsiiProperty(name: "attrInternalDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternalDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: The name of Bucket.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
