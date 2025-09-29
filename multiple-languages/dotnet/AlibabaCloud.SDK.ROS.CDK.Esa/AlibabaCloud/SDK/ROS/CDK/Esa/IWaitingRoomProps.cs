using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `WaitingRoom`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWaitingRoomProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomProps")]
    public interface IWaitingRoomProps
    {
        /// <summary>Property cookieName: The name of the custom cookie.</summary>
        [JsiiProperty(name: "cookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CookieName
        {
            get;
        }

        /// <summary>Property hostNameAndPath: The hostname and path.</summary>
        [JsiiProperty(name: "hostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object HostNameAndPath
        {
            get;
        }

        /// <summary>Property newUsersPerMinute: The maximum number of new users per minute.</summary>
        [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewUsersPerMinute
        {
            get;
        }

        /// <summary>Property queuingMethod: The queuing method.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><c>random</c>: Users gain access to the origin randomly, regardless of the arrival time.</description>
        /// <description><c>fifo</c>: Users gain access to the origin in order of arrival.</description>
        /// <description><c>Passthrough</c>: Users pass through the waiting room and go straight to the origin.</description>
        /// <description><c>Reject-all</c>: Users are blocked from reaching the origin.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "queuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingMethod
        {
            get;
        }

        /// <summary>Property queuingStatusCode: Waiting room status code.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><c>200</c></description>
        /// <description><c>202</c></description>
        /// <description><c>429</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingStatusCode
        {
            get;
        }

        /// <summary>Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.</summary>
        /// <remarks>
        /// Unit: minutes.
        /// </remarks>
        [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SessionDuration
        {
            get;
        }

        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property status: Waiting room enabled status.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>'on': Enable waiting room</description>
        /// <description>'off': Disabled waiting room</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <summary>Property totalActiveUsers: The maximum number of active users.</summary>
        [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalActiveUsers
        {
            get;
        }

        /// <summary>Property waitingRoomName: The name of the waiting room.</summary>
        [JsiiProperty(name: "waitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomName
        {
            get;
        }

        /// <summary>Property waitingRoomType: The type of the waiting room, support: - `default`: Indicates the default type.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>custom</c>: indicates a custom type.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "waitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomType
        {
            get;
        }

        /// <summary>Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.</summary>
        /// <remarks>
        /// The incoming content needs to be base64 encoded.
        /// </remarks>
        [JsiiProperty(name: "customPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomPageHtml
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Waiting room description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableSessionRenewalEnable: Specifies whether to disable session renewal.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "disableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableSessionRenewalEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jsonResponseEnable: The JSON response.</summary>
        /// <remarks>
        /// If the accept request header contains "application/json", JSON data is returned. Value:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "jsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JsonResponseEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property language: The language of the waiting room page.</summary>
        /// <remarks>
        /// When the waiting room type is the default type, it needs to be passed in. The following types are supported:
        ///
        /// <list type="bullet">
        /// <description><c>enus</c>: English.</description>
        /// <description><c>zhcn</c>: Simplified Chinese.</description>
        /// <description><c>zhhk</c>: Traditional Chinese.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Language
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueAllEnable: Specifies whether to queue all requests.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "queueAllEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueAllEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `WaitingRoom`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoomProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cookieName: The name of the custom cookie.</summary>
            [JsiiProperty(name: "cookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CookieName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostNameAndPath: The hostname and path.</summary>
            [JsiiProperty(name: "hostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object HostNameAndPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property newUsersPerMinute: The maximum number of new users per minute.</summary>
            [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewUsersPerMinute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queuingMethod: The queuing method.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><c>random</c>: Users gain access to the origin randomly, regardless of the arrival time.</description>
            /// <description><c>fifo</c>: Users gain access to the origin in order of arrival.</description>
            /// <description><c>Passthrough</c>: Users pass through the waiting room and go straight to the origin.</description>
            /// <description><c>Reject-all</c>: Users are blocked from reaching the origin.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "queuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queuingStatusCode: Waiting room status code.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><c>200</c></description>
            /// <description><c>202</c></description>
            /// <description><c>429</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingStatusCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.</summary>
            /// <remarks>
            /// Unit: minutes.
            /// </remarks>
            [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property status: Waiting room enabled status.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>'on': Enable waiting room</description>
            /// <description>'off': Disabled waiting room</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property totalActiveUsers: The maximum number of active users.</summary>
            [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property waitingRoomName: The name of the waiting room.</summary>
            [JsiiProperty(name: "waitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property waitingRoomType: The type of the waiting room, support: - `default`: Indicates the default type.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>custom</c>: indicates a custom type.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "waitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.</summary>
            /// <remarks>
            /// The incoming content needs to be base64 encoded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomPageHtml
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Waiting room description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disableSessionRenewalEnable: Specifies whether to disable session renewal.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableSessionRenewalEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jsonResponseEnable: The JSON response.</summary>
            /// <remarks>
            /// If the accept request header contains "application/json", JSON data is returned. Value:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JsonResponseEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property language: The language of the waiting room page.</summary>
            /// <remarks>
            /// When the waiting room type is the default type, it needs to be passed in. The following types are supported:
            ///
            /// <list type="bullet">
            /// <description><c>enus</c>: English.</description>
            /// <description><c>zhcn</c>: Simplified Chinese.</description>
            /// <description><c>zhhk</c>: Traditional Chinese.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Language
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueAllEnable: Specifies whether to queue all requests.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueAllEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueAllEnable
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
