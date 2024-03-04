using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosAccessConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProps")]
    public interface IRosAccessConfigurationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessConfigurationName: The name of the access configuration.
        /// The name can contain letters, digits, and hyphens (-).
        /// The name can be up to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accessConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessConfigurationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: directoryId: The ID of the directory.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the access configuration.
        /// The description can be up to 1,024 characters in length.
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
        /// <strong>Property</strong>: relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
        /// The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        /// </remarks>
        [JsiiProperty(name: "relayState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RelayState
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
        /// Unit: seconds.
        /// Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
        /// Default value: 3600. The value indicates 1 hour.
        /// </remarks>
        [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SessionDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAccessConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosAccessConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessConfigurationName: The name of the access configuration.
            /// The name can contain letters, digits, and hyphens (-).
            /// The name can be up to 32 characters in length.
            /// </remarks>
            [JsiiProperty(name: "accessConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessConfigurationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: The ID of the directory.
            /// </remarks>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the access configuration.
            /// The description can be up to 1,024 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
            /// The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "relayState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RelayState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
            /// Unit: seconds.
            /// Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
            /// Default value: 3600. The value indicates 1 hour.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SessionDuration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
