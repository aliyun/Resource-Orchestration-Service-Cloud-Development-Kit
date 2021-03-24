using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>A ROS resource type:  `ALIYUN::VS::Group`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vs.Group), fullyQualifiedName: "@alicloud/ros-cdk-vs.Group", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vs.GroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Group : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::VS::Group`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Group(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Group(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Group(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute GbId: GB ID space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GbIp: GB signaling server address space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GbPort: GB Port space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Id: Space ID.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
