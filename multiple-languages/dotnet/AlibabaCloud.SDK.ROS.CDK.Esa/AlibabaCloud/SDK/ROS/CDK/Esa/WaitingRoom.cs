using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WaitingRoom`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitingRoom`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.WaitingRoom), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoom", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class WaitingRoom : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoom
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public WaitingRoom(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitingRoom(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitingRoom(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CookieName: Custom Cookie name.</summary>
        [JsiiProperty(name: "attrCookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCookieName
        {
            get => GetInstanceProperty<object>()!;
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

        /// <summary>Attribute HostNameAndPath: Host name and path.</summary>
        [JsiiProperty(name: "attrHostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostNameAndPath
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JsonResponseEnable: The JSON response.</summary>
        /// <remarks>
        /// If the accept request header contains "application/json", JSON data is returned.
        /// </remarks>
        [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrJsonResponseEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Language: The language of the waiting room page.</summary>
        /// <remarks>
        /// When the waiting room type is the default type, it needs to be passed in.
        /// </remarks>
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

        /// <summary>Attribute QueueAllEnable: All in line.</summary>
        [JsiiProperty(name: "attrQueueAllEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueueAllEnable
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

        /// <summary>Attribute SessionDuration: Session duration in minutes.</summary>
        [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSessionDuration
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
        [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTotalActiveUsers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomId: The waiting room ID.</summary>
        [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomName: The name of the waiting room.</summary>
        [JsiiProperty(name: "attrWaitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WaitingRoomType: Waiting room type, support:.</summary>
        [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWaitingRoomType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps>()!;
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
