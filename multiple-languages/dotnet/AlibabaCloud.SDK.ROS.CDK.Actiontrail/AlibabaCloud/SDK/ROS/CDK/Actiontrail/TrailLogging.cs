using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>A ROS resource type:  `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Actiontrail.TrailLogging), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailLogging", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-actiontrail.TrailLoggingProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class TrailLogging : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public TrailLogging(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrailLogging(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrailLogging(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute IsLogging: Indicates whether the trail is logging API invocations.</summary>
        [JsiiProperty(name: "attrIsLogging", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIsLogging
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.</summary>
        [JsiiProperty(name: "attrLatestDeliveryError", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLatestDeliveryError
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.</summary>
        [JsiiProperty(name: "attrLatestDeliveryTime", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLatestDeliveryTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StartLoggingTime: The most recent date and time when the user enables the trail.</summary>
        [JsiiProperty(name: "attrStartLoggingTime", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStartLoggingTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StopLoggingTime: The most recent date and time when the user disables the trail.</summary>
        [JsiiProperty(name: "attrStopLoggingTime", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStopLoggingTime
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
