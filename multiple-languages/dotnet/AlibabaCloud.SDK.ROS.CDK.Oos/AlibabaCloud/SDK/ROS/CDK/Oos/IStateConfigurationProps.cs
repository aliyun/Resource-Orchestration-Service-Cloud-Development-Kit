using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `StateConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStateConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.StateConfigurationProps")]
    public interface IStateConfigurationProps
    {
        /// <summary>Property scheduleExpression: The schedule expression.</summary>
        /// <remarks>
        /// The interval between two schedules must be a minimum of 30 minutes.
        /// </remarks>
        [JsiiProperty(name: "scheduleExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduleExpression
        {
            get;
        }

        /// <summary>Property scheduleType: The schedule type.</summary>
        /// <remarks>
        /// Set the value to rate.
        /// </remarks>
        [JsiiProperty(name: "scheduleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduleType
        {
            get;
        }

        /// <summary>Property targets: The resources to be queried.</summary>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Targets
        {
            get;
        }

        /// <summary>Property templateName: The name of the template.</summary>
        /// <remarks>
        /// The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateName
        {
            get;
        }

        /// <summary>Property configureMode: The configuration mode.</summary>
        /// <remarks>
        /// Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
        /// </remarks>
        [JsiiProperty(name: "configureMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigureMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the desired-state configuration.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The parameters.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateVersion: The version number of the template.</summary>
        /// <remarks>
        /// If you do not specify this parameter, the latest version of the template is used.
        /// </remarks>
        [JsiiProperty(name: "templateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `StateConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStateConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.StateConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IStateConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scheduleExpression: The schedule expression.</summary>
            /// <remarks>
            /// The interval between two schedules must be a minimum of 30 minutes.
            /// </remarks>
            [JsiiProperty(name: "scheduleExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduleExpression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scheduleType: The schedule type.</summary>
            /// <remarks>
            /// Set the value to rate.
            /// </remarks>
            [JsiiProperty(name: "scheduleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targets: The resources to be queried.</summary>
            [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Targets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property templateName: The name of the template.</summary>
            /// <remarks>
            /// The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property configureMode: The configuration mode.</summary>
            /// <remarks>
            /// Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configureMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigureMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the desired-state configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tag value and the key mapping, the label of the key number can be up to 20.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <summary>Property templateVersion: The version number of the template.</summary>
            /// <remarks>
            /// If you do not specify this parameter, the latest version of the template is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
