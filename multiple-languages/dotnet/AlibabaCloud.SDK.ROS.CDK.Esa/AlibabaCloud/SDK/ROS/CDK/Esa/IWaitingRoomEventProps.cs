using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `WaitingRoomEvent`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWaitingRoomEventProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomEventProps")]
    public interface IWaitingRoomEventProps
    {
        /// <summary>Property endTime: The timestamp of the end time of the event.</summary>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <summary>Property newUsersPerMinute: Number of new users per minute.</summary>
        [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewUsersPerMinute
        {
            get;
        }

        /// <summary>Property queuingMethod: Way of queuing.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><c>random</c>: random.</description>
        /// <description><c>fifo</c>: first in, first out.</description>
        /// <description><c>passthrough</c>: through.</description>
        /// <description><c>reject-all</c>: reject all.</description>
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
        [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueuingStatusCode
        {
            get;
        }

        /// <summary>Property sessionDuration: User session duration in minutes.</summary>
        [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SessionDuration
        {
            get;
        }

        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property startTime: The timestamp of the event start time.</summary>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <summary>Property totalActiveUsers: Total number of active users.</summary>
        [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TotalActiveUsers
        {
            get;
        }

        /// <summary>Property waitingRoomEventName: Event name, custom event description.</summary>
        [JsiiProperty(name: "waitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomEventName
        {
            get;
        }

        /// <summary>Property waitingRoomType: Waiting room type.</summary>
        /// <remarks>
        /// The following types are supported:
        ///
        /// <list type="bullet">
        /// <description><c>default</c>: the default type.</description>
        /// <description><c>custom</c>: custom type.</description>
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

        /// <summary>Property disableSessionRenewalEnable: Disable session renewal.</summary>
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

        /// <summary>Property jsonResponseEnable: JSON response switch.</summary>
        /// <remarks>
        /// Value:
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

        /// <summary>Property language: Default language setting.</summary>
        /// <remarks>
        /// Values include:
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

        /// <summary>Property preQueueEnable: Pre-queue switch.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
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

        /// <summary>Property preQueueStartTime: Pre-queue start time.</summary>
        [JsiiProperty(name: "preQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreQueueStartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property randomPreQueueEnable: Random queue switch.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
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

        /// <summary>Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
        /// <remarks>
        /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
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

        /// <summary>Properties for defining a `WaitingRoomEvent`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoomEventProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomEventProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endTime: The timestamp of the end time of the event.</summary>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property newUsersPerMinute: Number of new users per minute.</summary>
            [JsiiProperty(name: "newUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewUsersPerMinute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queuingMethod: Way of queuing.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><c>random</c>: random.</description>
            /// <description><c>fifo</c>: first in, first out.</description>
            /// <description><c>passthrough</c>: through.</description>
            /// <description><c>reject-all</c>: reject all.</description>
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
            [JsiiProperty(name: "queuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueuingStatusCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sessionDuration: User session duration in minutes.</summary>
            [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property startTime: The timestamp of the event start time.</summary>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property totalActiveUsers: Total number of active users.</summary>
            [JsiiProperty(name: "totalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property waitingRoomEventName: Event name, custom event description.</summary>
            [JsiiProperty(name: "waitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomEventName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property waitingRoomType: Waiting room type.</summary>
            /// <remarks>
            /// The following types are supported:
            ///
            /// <list type="bullet">
            /// <description><c>default</c>: the default type.</description>
            /// <description><c>custom</c>: custom type.</description>
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

            /// <summary>Property disableSessionRenewalEnable: Disable session renewal.</summary>
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

            /// <summary>Property jsonResponseEnable: JSON response switch.</summary>
            /// <remarks>
            /// Value:
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

            /// <summary>Property language: Default language setting.</summary>
            /// <remarks>
            /// Values include:
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

            /// <summary>Property preQueueEnable: Pre-queue switch.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreQueueEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preQueueStartTime: Pre-queue start time.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "preQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreQueueStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property randomPreQueueEnable: Random queue switch.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "randomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RandomPreQueueEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
            /// <remarks>
            /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
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
