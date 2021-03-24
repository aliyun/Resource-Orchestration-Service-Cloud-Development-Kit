using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>A ROS resource type:  `ALIYUN::SAE::SlbBinding`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sae.SlbBinding), fullyQualifiedName: "@alicloud/ros-cdk-sae.SlbBinding", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sae.SlbBindingProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class SlbBinding : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::SAE::SlbBinding`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public SlbBinding(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected SlbBinding(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected SlbBinding(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AppId: Successful application deployment target ID.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAppId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.</summary>
        [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrChangeOrderId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
