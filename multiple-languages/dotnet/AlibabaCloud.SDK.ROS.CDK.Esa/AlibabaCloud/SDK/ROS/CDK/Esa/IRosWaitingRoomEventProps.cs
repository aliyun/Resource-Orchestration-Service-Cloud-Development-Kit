using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosWaitingRoomEvent`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWaitingRoomEventProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomEventProps")]
    public interface IRosWaitingRoomEventProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endTime: The timestamp of the end time of the event.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: newUsersPerMinute: Number of new users per minute.
        /// </remarks>
        [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewUsersPerMinute
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queuingMethod: Way of queuing. Value:
        /// - `random`: random.
        /// - `fifo`: first in, first out.
        /// - `passthrough`: through.
        /// - `reject-all`: reject all.
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
        [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingStatusCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sessionDuration: User session duration in minutes.
        /// </remarks>
        [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SessionDuration
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: startTime: The timestamp of the event start time.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: totalActiveUsers: Total number of active users.
        /// </remarks>
        [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalActiveUsers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomEventName: Event name, custom event description.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomEventName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomType: Waiting room type. The following types are supported:
        /// - `default`: the default type.
        /// - `custom`: custom type.
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
        /// <strong>Property</strong>: disableSessionRenewalEnable: Disable session renewal. Value:
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
        /// <strong>Property</strong>: jsonResponseEnable: JSON response switch. Value:
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
        /// <strong>Property</strong>: language: Default language setting. Values include:
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
        /// <strong>Property</strong>: preQueueEnable: Pre-queue switch.
        /// - `on`: open.
        /// - `off`: closed.
        /// </remarks>
        [JsiiProperty(name: "preQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreQueueEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: preQueueStartTime: Pre-queue start time.
        /// </remarks>
        [JsiiProperty(name: "preQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreQueueStartTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: randomPreQueueEnable: Random queue switch.
        /// - `on`: open.
        /// - `off`: closed.
        /// </remarks>
        [JsiiProperty(name: "randomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RandomPreQueueEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitingRoomId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWaitingRoomEvent`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWaitingRoomEventProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomEventProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosWaitingRoomEventProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endTime: The timestamp of the end time of the event.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: newUsersPerMinute: Number of new users per minute.
            /// </remarks>
            [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewUsersPerMinute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queuingMethod: Way of queuing. Value:
            /// - `random`: random.
            /// - `fifo`: first in, first out.
            /// - `passthrough`: through.
            /// - `reject-all`: reject all.
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
            [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingStatusCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sessionDuration: User session duration in minutes.
            /// </remarks>
            [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: startTime: The timestamp of the event start time.
            /// </remarks>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: totalActiveUsers: Total number of active users.
            /// </remarks>
            [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomEventName: Event name, custom event description.
            /// </remarks>
            [JsiiProperty(name: "waitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomEventName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomType: Waiting room type. The following types are supported:
            /// - `default`: the default type.
            /// - `custom`: custom type.
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
            /// <strong>Property</strong>: disableSessionRenewalEnable: Disable session renewal. Value:
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
            /// <strong>Property</strong>: jsonResponseEnable: JSON response switch. Value:
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
            /// <strong>Property</strong>: language: Default language setting. Values include:
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
            /// <strong>Property</strong>: preQueueEnable: Pre-queue switch.
            /// - `on`: open.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreQueueEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: preQueueStartTime: Pre-queue start time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreQueueStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: randomPreQueueEnable: Random queue switch.
            /// - `on`: open.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "randomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RandomPreQueueEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitingRoomId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
