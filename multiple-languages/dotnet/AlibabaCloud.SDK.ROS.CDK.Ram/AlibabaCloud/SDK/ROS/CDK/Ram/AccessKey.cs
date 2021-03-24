using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>A ROS resource type:  `ALIYUN::RAM::AccessKey`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ram.AccessKey), fullyQualifiedName: "@alicloud/ros-cdk-ram.AccessKey", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.AccessKeyProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class AccessKey : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::RAM::AccessKey`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public AccessKey(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ram.IAccessKeyProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AccessKey(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AccessKey(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccessKeyId: Id of access key.</summary>
        [JsiiProperty(name: "attrAccessKeyId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAccessKeyId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AccessKeySecret: Secret of access key.</summary>
        [JsiiProperty(name: "attrAccessKeySecret", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAccessKeySecret
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Status: Status of access key.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
