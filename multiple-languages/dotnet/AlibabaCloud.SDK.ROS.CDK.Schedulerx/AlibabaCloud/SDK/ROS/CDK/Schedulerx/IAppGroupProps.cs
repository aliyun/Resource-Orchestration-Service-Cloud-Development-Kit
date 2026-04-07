using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Schedulerx
{
    /// <summary>Properties for defining a `AppGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAppGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.AppGroupProps")]
    public interface IAppGroupProps
    {
        /// <summary>Property appName: The application name.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <summary>Property groupId: The group ID of the application group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property namespace: The namespace of the application group.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property appKey: The application key.</summary>
        [JsiiProperty(name: "appKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appType: The type of the application.</summary>
        [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appVersion: The version of the application.</summary>
        [JsiiProperty(name: "appVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the application group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableLog: Whether to enable log.</summary>
        [JsiiProperty(name: "enableLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableLog
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxJobs: The maximum number of jobs.</summary>
        [JsiiProperty(name: "maxJobs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxJobs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property monitorConfig: The monitor configuration in JSON format.</summary>
        [JsiiProperty(name: "monitorConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MonitorConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property monitorContacts: The monitor contacts in JSON format.</summary>
        [JsiiProperty(name: "monitorContacts", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MonitorContacts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceName: The name of the namespace.</summary>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceSource: The namespace source of the job.</summary>
        [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notificationPolicyName: The notification policy name.</summary>
        [JsiiProperty(name: "notificationPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotificationPolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduleBusyWorkers: Whether to schedule busy workers.</summary>
        [JsiiProperty(name: "scheduleBusyWorkers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduleBusyWorkers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AppGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAppGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.AppGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Schedulerx.IAppGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: The application name.</summary>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The group ID of the application group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespace: The namespace of the application group.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appKey: The application key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appType: The type of the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appVersion: The version of the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the application group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableLog: Whether to enable log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxJobs: The maximum number of jobs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxJobs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxJobs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property monitorConfig: The monitor configuration in JSON format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "monitorConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? MonitorConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property monitorContacts: The monitor contacts in JSON format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "monitorContacts", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MonitorContacts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceName: The name of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceSource: The namespace source of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notificationPolicyName: The notification policy name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "notificationPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotificationPolicyName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduleBusyWorkers: Whether to schedule busy workers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleBusyWorkers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleBusyWorkers
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
