using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WaitingRoomEvent`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitingRoomEvent`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.WaitingRoomEvent), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomEvent", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomEventProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class WaitingRoomEvent : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEvent
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public WaitingRoomEvent(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitingRoomEvent(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitingRoomEvent(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.</summary>
        /// <remarks>
        /// The incoming content needs to be base64 encoded.
        /// </remarks>
        [JsiiProperty(name: "attrCustomPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCustomPageHtml
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: Waiting room description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisableSessionRenewalEnable: Disable session renewal.</summary>
        [JsiiProperty(name: "attrDisableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDisableSessionRenewalEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EndTime: The timestamp of the end time of the event.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JsonResponseEnable: JSON response switch.</summary>
        [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrJsonResponseEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Language: Default language setting.</summary>
        [JsiiProperty(name: "attrLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLanguage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NewUsersPerMinute: Number of new users per minute.</summary>
        [JsiiProperty(name: "attrNewUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNewUsersPerMinute
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PreQueueEnable: Pre-queue switch.</summary>
        [JsiiProperty(name: "attrPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPreQueueEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PreQueueStartTime: Pre-queue start time.</summary>
        [JsiiProperty(name: "attrPreQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPreQueueStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueuingMethod: Way of queuing.</summary>
        [JsiiProperty(name: "attrQueuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueuingMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueuingStatusCode: Waiting room status code.</summary>
        [JsiiProperty(name: "attrQueuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueuingStatusCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RandomPreQueueEnable: Random queue switch.</summary>
        [JsiiProperty(name: "attrRandomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRandomPreQueueEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SessionDuration: User session duration in minutes.</summary>
        [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSessionDuration
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StartTime: The timestamp of the event start time.</summary>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
        [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTotalActiveUsers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.</summary>
        [JsiiProperty(name: "attrWaitingRoomEventId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomEventId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomEventName: Event name, custom event description.</summary>
        [JsiiProperty(name: "attrWaitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomEventName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
        /// <remarks>
        /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
        /// </remarks>
        [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomType: Waiting room type.</summary>
        [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomEventProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
