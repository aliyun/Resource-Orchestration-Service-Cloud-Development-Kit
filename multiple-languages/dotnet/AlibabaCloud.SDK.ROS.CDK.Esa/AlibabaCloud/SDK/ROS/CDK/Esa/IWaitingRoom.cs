using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `WaitingRoom`.</summary>
    [JsiiInterface(nativeType: typeof(IWaitingRoom), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoom")]
    public interface IWaitingRoom : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CookieName: Custom Cookie name.</summary>
        [JsiiProperty(name: "attrCookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCookieName
        {
            get;
        }

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

        /// <summary>Attribute HostNameAndPath: Host name and path.</summary>
        [JsiiProperty(name: "attrHostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostNameAndPath
        {
            get;
        }

        /// <summary>Attribute JsonResponseEnable: The JSON response.</summary>
        /// <remarks>
        /// If the accept request header contains "application/json", JSON data is returned.
        /// </remarks>
        [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJsonResponseEnable
        {
            get;
        }

        /// <summary>Attribute Language: The language of the waiting room page.</summary>
        /// <remarks>
        /// When the waiting room type is the default type, it needs to be passed in.
        /// </remarks>
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

        /// <summary>Attribute QueueAllEnable: All in line.</summary>
        [JsiiProperty(name: "attrQueueAllEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueAllEnable
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

        /// <summary>Attribute SessionDuration: Session duration in minutes.</summary>
        [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSessionDuration
        {
            get;
        }

        /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
        [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTotalActiveUsers
        {
            get;
        }

        /// <summary>Attribute WaitingRoomId: The waiting room ID.</summary>
        [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomId
        {
            get;
        }

        /// <summary>Attribute WaitingRoomName: The name of the waiting room.</summary>
        [JsiiProperty(name: "attrWaitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomName
        {
            get;
        }

        /// <summary>Attribute WaitingRoomType: Waiting room type, support:.</summary>
        [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps Props
        {
            get;
        }

        /// <summary>Represents a `WaitingRoom`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoom), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoom")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoom
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CookieName: Custom Cookie name.</summary>
            [JsiiProperty(name: "attrCookieName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCookieName
            {
                get => GetInstanceProperty<object>()!;
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

            /// <summary>Attribute HostNameAndPath: Host name and path.</summary>
            [JsiiProperty(name: "attrHostNameAndPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostNameAndPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JsonResponseEnable: The JSON response.</summary>
            /// <remarks>
            /// If the accept request header contains "application/json", JSON data is returned.
            /// </remarks>
            [JsiiProperty(name: "attrJsonResponseEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJsonResponseEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Language: The language of the waiting room page.</summary>
            /// <remarks>
            /// When the waiting room type is the default type, it needs to be passed in.
            /// </remarks>
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

            /// <summary>Attribute QueueAllEnable: All in line.</summary>
            [JsiiProperty(name: "attrQueueAllEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueAllEnable
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

            /// <summary>Attribute SessionDuration: Session duration in minutes.</summary>
            [JsiiProperty(name: "attrSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TotalActiveUsers: Total number of active users.</summary>
            [JsiiProperty(name: "attrTotalActiveUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTotalActiveUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomId: The waiting room ID.</summary>
            [JsiiProperty(name: "attrWaitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomName: The name of the waiting room.</summary>
            [JsiiProperty(name: "attrWaitingRoomName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomType: Waiting room type, support:.</summary>
            [JsiiProperty(name: "attrWaitingRoomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomProps>()!;
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
