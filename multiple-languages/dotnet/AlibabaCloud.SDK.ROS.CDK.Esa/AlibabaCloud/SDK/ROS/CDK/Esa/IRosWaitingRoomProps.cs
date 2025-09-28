using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosWaitingRoom`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWaitingRoomProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomProps")]
    public interface IRosWaitingRoomProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cookieName: The name of the custom cookie.
        /// </remarks>
        [JsiiProperty(name: "cookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CookieName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostNameAndPath: The hostname and path.
        /// </remarks>
        [JsiiProperty(name: "hostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object HostNameAndPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: newUsersPerMinute: The maximum number of new users per minute.
        /// </remarks>
        [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewUsersPerMinute
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queuingMethod: The queuing method. Value:
        /// - `random`: Users gain access to the origin randomly, regardless of the arrival time.
        /// - `fifo`: Users gain access to the origin in order of arrival.
        /// - `Passthrough`: Users pass through the waiting room and go straight to the origin.
        /// - `Reject-all`: Users are blocked from reaching the origin.
        /// </remarks>
        [JsiiProperty(name: "queuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingMethod
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queuingStatusCode: Waiting room status code. Value:
        /// - `200`
        /// - `202`
        /// - `429`.
        /// </remarks>
        [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingStatusCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
        /// </remarks>
        [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SessionDuration
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: Waiting room enabled status. Value:
        /// - 'on': Enable waiting room
        /// - 'off': Disabled waiting room
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: totalActiveUsers: The maximum number of active users.
        /// </remarks>
        [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalActiveUsers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomName: The name of the waiting room.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomType: The type of the waiting room, support:
        /// - `default`: Indicates the default type.
        /// - `custom`: indicates a custom type.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
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

        /// <remarks>
        /// <strong>Property</strong>: description: Waiting room description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
        /// - `on`: open.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
        /// - `on`: open.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
        /// - `enus`: English.
        /// - `zhcn`: Simplified Chinese.
        /// - `zhhk`: Traditional Chinese.
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

        /// <remarks>
        /// <strong>Property</strong>: queueAllEnable: Specifies whether to queue all requests. Value:
        /// - `on`: open.
        /// - `off`: closed.
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

        /// <summary>Properties for defining a `RosWaitingRoom`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWaitingRoomProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosWaitingRoomProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieName: The name of the custom cookie.
            /// </remarks>
            [JsiiProperty(name: "cookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CookieName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostNameAndPath: The hostname and path.
            /// </remarks>
            [JsiiProperty(name: "hostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWaitingRoom.HostNameAndPathProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object HostNameAndPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: newUsersPerMinute: The maximum number of new users per minute.
            /// </remarks>
            [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewUsersPerMinute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queuingMethod: The queuing method. Value:
            /// - `random`: Users gain access to the origin randomly, regardless of the arrival time.
            /// - `fifo`: Users gain access to the origin in order of arrival.
            /// - `Passthrough`: Users pass through the waiting room and go straight to the origin.
            /// - `Reject-all`: Users are blocked from reaching the origin.
            /// </remarks>
            [JsiiProperty(name: "queuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queuingStatusCode: Waiting room status code. Value:
            /// - `200`
            /// - `202`
            /// - `429`.
            /// </remarks>
            [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingStatusCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
            /// </remarks>
            [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: Waiting room enabled status. Value:
            /// - 'on': Enable waiting room
            /// - 'off': Disabled waiting room
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: totalActiveUsers: The maximum number of active users.
            /// </remarks>
            [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomName: The name of the waiting room.
            /// </remarks>
            [JsiiProperty(name: "waitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomType: The type of the waiting room, support:
            /// - `default`: Indicates the default type.
            /// - `custom`: indicates a custom type.
            /// </remarks>
            [JsiiProperty(name: "waitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomPageHtml
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Waiting room description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
            /// - `on`: open.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableSessionRenewalEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
            /// - `on`: open.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JsonResponseEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
            /// - `enus`: English.
            /// - `zhcn`: Simplified Chinese.
            /// - `zhhk`: Traditional Chinese.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Language
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queueAllEnable: Specifies whether to queue all requests. Value:
            /// - `on`: open.
            /// - `off`: closed.
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
