using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>A ROS resource type:  `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Hbr.RestoreJob), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RestoreJob", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RestoreJobProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RestoreJob : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::HBR::RestoreJob`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public RestoreJob(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Hbr.IRestoreJobProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RestoreJob(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RestoreJob(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ErrorMessage: Error message of restore job.</summary>
        [JsiiProperty(name: "attrErrorMessage", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrErrorMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RestoreId: Restore job ID.</summary>
        [JsiiProperty(name: "attrRestoreId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRestoreId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RestoreType: Restore type.</summary>
        [JsiiProperty(name: "attrRestoreType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRestoreType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceType: Source type.</summary>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Status: Restore job status.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
