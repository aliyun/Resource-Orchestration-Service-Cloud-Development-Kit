using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `WaitingRoomEvent`.</summary>
    [JsiiInterface(nativeType: typeof(IWaitingRoomEvent), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoomEvent")]
    public interface IWaitingRoomEvent : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.</summary>
        /// <remarks>
        /// The incoming content needs to be base64 encoded.
        /// </remarks>
        [JsiiProperty(name: "attrCustomPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomPageHtml
        {
            get;
        }

        /// <summary>Attribute Description: Waiting room description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DisableSessionRenewalEnable: Disable session renewal.</summary>
        [JsiiProperty(name: "attrDisableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisableSessionRenewalEnable
        {
            get;
        }

        /// <summary>Attribute EndTime: The timestamp of the end time of the event.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute JsonResponseEnable: JSON response switch.</summary>
        [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJsonResponseEnable
        {
            get;
        }

        /// <summary>Attribute Language: Default language setting.</summary>
        [JsiiProperty(name: "attrLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLanguage
        {
            get;
        }

        /// <summary>Attribute NewUsersPerMinute: Number of new users per minute.</summary>
        [JsiiProperty(name: "attrNewUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNewUsersPerMinute
        {
            get;
        }

        /// <summary>Attribute PreQueueEnable: Pre-queue switch.</summary>
        [JsiiProperty(name: "attrPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreQueueEnable
        {
            get;
        }

        /// <summary>Attribute PreQueueStartTime: Pre-queue start time.</summary>
        [JsiiProperty(name: "attrPreQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPreQueueStartTime
        {
            get;
        }

        /// <summary>Attribute QueuingMethod: Way of queuing.</summary>
        [JsiiProperty(name: "attrQueuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueuingMethod
        {
            get;
        }

        /// <summary>Attribute QueuingStatusCode: Waiting room status code.</summary>
        [JsiiProperty(name: "attrQueuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueuingStatusCode
        {
            get;
        }

        /// <summary>Attribute RandomPreQueueEnable: Random queue switch.</summary>
        [JsiiProperty(name: "attrRandomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRandomPreQueueEnable
        {
            get;
        }

        /// <summary>Attribute SessionDuration: User session duration in minutes.</summary>
        [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSessionDuration
        {
            get;
        }

        /// <summary>Attribute StartTime: The timestamp of the event start time.</summary>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartTime
        {
            get;
        }

        /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
        [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTotalActiveUsers
        {
            get;
        }

        /// <summary>Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.</summary>
        [JsiiProperty(name: "attrWaitingRoomEventId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomEventId
        {
            get;
        }

        /// <summary>Attribute WaitingRoomEventName: Event name, custom event description.</summary>
        [JsiiProperty(name: "attrWaitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomEventName
        {
            get;
        }

        /// <summary>Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
        /// <remarks>
        /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
        /// </remarks>
        [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomId
        {
            get;
        }

        /// <summary>Attribute WaitingRoomType: Waiting room type.</summary>
        [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomEventProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps Props
        {
            get;
        }

        /// <summary>Represents a `WaitingRoomEvent`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoomEvent), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoomEvent")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEvent
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.</summary>
            /// <remarks>
            /// The incoming content needs to be base64 encoded.
            /// </remarks>
            [JsiiProperty(name: "attrCustomPageHtml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomPageHtml
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Waiting room description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisableSessionRenewalEnable: Disable session renewal.</summary>
            [JsiiProperty(name: "attrDisableSessionRenewalEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisableSessionRenewalEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTime: The timestamp of the end time of the event.</summary>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JsonResponseEnable: JSON response switch.</summary>
            [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJsonResponseEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Language: Default language setting.</summary>
            [JsiiProperty(name: "attrLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NewUsersPerMinute: Number of new users per minute.</summary>
            [JsiiProperty(name: "attrNewUsersPerMinute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNewUsersPerMinute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreQueueEnable: Pre-queue switch.</summary>
            [JsiiProperty(name: "attrPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreQueueEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PreQueueStartTime: Pre-queue start time.</summary>
            [JsiiProperty(name: "attrPreQueueStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPreQueueStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueuingMethod: Way of queuing.</summary>
            [JsiiProperty(name: "attrQueuingMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueuingMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueuingStatusCode: Waiting room status code.</summary>
            [JsiiProperty(name: "attrQueuingStatusCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueuingStatusCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RandomPreQueueEnable: Random queue switch.</summary>
            [JsiiProperty(name: "attrRandomPreQueueEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRandomPreQueueEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SessionDuration: User session duration in minutes.</summary>
            [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartTime: The timestamp of the event start time.</summary>
            [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
            [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.</summary>
            [JsiiProperty(name: "attrWaitingRoomEventId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomEventId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomEventName: Event name, custom event description.</summary>
            [JsiiProperty(name: "attrWaitingRoomEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomEventName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
            /// <remarks>
            /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
            /// </remarks>
            [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomType: Waiting room type.</summary>
            [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomEventProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomEventProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
