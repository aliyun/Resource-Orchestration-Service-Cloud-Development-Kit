using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS resource type:  `ALIYUN::ECS::DiskAttachment`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.DiskAttachment), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskAttachment", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.DiskAttachmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DiskAttachment : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ECS::DiskAttachment`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public DiskAttachment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskAttachmentProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DiskAttachment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DiskAttachment(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Device: The device where the volume is exposed on ecs instance.</summary>
        [JsiiProperty(name: "attrDevice", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDevice
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskId: The disk id of created disk.</summary>
        [JsiiProperty(name: "attrDiskId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDiskId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Status: The disk status now.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
