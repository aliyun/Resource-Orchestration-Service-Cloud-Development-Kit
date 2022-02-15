using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::Alert`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlertProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAlert : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::Alert`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAlert(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosAlertProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAlert(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAlert(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Name: Alert name.
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail:
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.DetailProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Detail
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: project: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Project
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty")]
        public interface IConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: condition: he condition that is required to trigger an alert.
            /// Log Service triggers an alert if the trigger condition is met.
            /// For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Condition
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
            /// </remarks>
            [JsiiProperty(name: "dashboard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Dashboard
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryList:
            /// </remarks>
            [JsiiProperty(name: "queryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.QueryListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object QueryList
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: throttling: Notification interval, default is no interval.
            /// </remarks>
            [JsiiProperty(name: "throttling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Throttling
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationList:
            /// </remarks>
            [JsiiProperty(name: "notificationList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NotificationList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyThreshold: The notification threshold,
            /// which will not be notified until the number of triggers is reached.
            /// </remarks>
            [JsiiProperty(name: "notifyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NotifyThreshold
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: condition: he condition that is required to trigger an alert.
                /// Log Service triggers an alert if the trigger condition is met.
                /// For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
                /// </remarks>
                [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Condition
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
                /// </remarks>
                [JsiiProperty(name: "dashboard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Dashboard
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: queryList:
                /// </remarks>
                [JsiiProperty(name: "queryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.QueryListProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object QueryList
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: throttling: Notification interval, default is no interval.
                /// </remarks>
                [JsiiProperty(name: "throttling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Throttling
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: notificationList:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "notificationList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? NotificationList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: notifyThreshold: The notification threshold,
                /// which will not be notified until the number of triggers is reached.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "notifyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NotifyThreshold
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty")]
        public class ConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: condition: he condition that is required to trigger an alert.
            /// Log Service triggers an alert if the trigger condition is met.
            /// For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Condition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
            /// </remarks>
            [JsiiProperty(name: "dashboard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Dashboard
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryList:
            /// </remarks>
            [JsiiProperty(name: "queryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.QueryListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object QueryList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: throttling: Notification interval, default is no interval.
            /// </remarks>
            [JsiiProperty(name: "throttling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Throttling
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NotificationList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyThreshold: The notification threshold,
            /// which will not be notified until the number of triggers is reached.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyThreshold
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDetailProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.DetailProperty")]
        public interface IDetailProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configuration:
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty\"}]}}")]
            object Configuration
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Alert name display in console. The name length is 1-64 characters.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object DisplayName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Alert name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: schedule: The interval at which Log Service evaluates the alert rule.
            /// Note During an alert rule evaluation, if a query returns more than 100 log entries,
            /// Log Service checks only the first 100 log entries.
            /// </remarks>
            [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty\"}]}}")]
            object Schedule
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the alert.
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
            /// <strong>Property</strong>: state:
            /// </remarks>
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? State
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDetailProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.DetailProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IDetailProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: configuration:
                /// </remarks>
                [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty\"}]}}")]
                public object Configuration
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: displayName: Alert name display in console. The name length is 1-64 characters.
                /// </remarks>
                [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object DisplayName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Alert name.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Name
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: schedule: The interval at which Log Service evaluates the alert rule.
                /// Note During an alert rule evaluation, if a query returns more than 100 log entries,
                /// Log Service checks only the first 100 log entries.
                /// </remarks>
                [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty\"}]}}")]
                public object Schedule
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the alert.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: state:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? State
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAlert.DetailProperty")]
        public class DetailProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IDetailProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configuration:
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty\"}]}}")]
            public object Configuration
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Alert name display in console. The name length is 1-64 characters.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Alert name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: schedule: The interval at which Log Service evaluates the alert rule.
            /// Note During an alert rule evaluation, if a query returns more than 100 log entries,
            /// Log Service checks only the first 100 log entries.
            /// </remarks>
            [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty\"}]}}")]
            public object Schedule
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the alert.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: state:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? State
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(INotificationListProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty")]
        public interface INotificationListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type: This topic describes how to configure a notification method.
            /// Log Service can send alert notifications by using one or more methods.
            /// Available notification methods include emails, DingTalk chatbot webhooks,
            /// custom webhooks, and Alibaba Cloud Message Center.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of an alert notification
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Content
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: emailList:
            /// </remarks>
            [JsiiProperty(name: "emailList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EmailList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mobileList:
            /// </remarks>
            [JsiiProperty(name: "mobileList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MobileList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceUri: The webhook URL of the DingTalk chatbot.
            /// </remarks>
            [JsiiProperty(name: "serviceUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ServiceUri
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INotificationListProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.INotificationListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: type: This topic describes how to configure a notification method.
                /// Log Service can send alert notifications by using one or more methods.
                /// Available notification methods include emails, DingTalk chatbot webhooks,
                /// custom webhooks, and Alibaba Cloud Message Center.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: content: The content of an alert notification
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Content
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: emailList:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "emailList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EmailList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mobileList:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mobileList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MobileList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceUri: The webhook URL of the DingTalk chatbot.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ServiceUri
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty")]
        public class NotificationListProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.INotificationListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type: This topic describes how to configure a notification method.
            /// Log Service can send alert notifications by using one or more methods.
            /// Available notification methods include emails, DingTalk chatbot webhooks,
            /// custom webhooks, and Alibaba Cloud Message Center.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of an alert notification
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: emailList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "emailList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EmailList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mobileList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mobileList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MobileList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceUri: The webhook URL of the DingTalk chatbot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceUri
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IQueryListProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.QueryListProperty")]
        public interface IQueryListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: chartTitle:
            /// </remarks>
            [JsiiProperty(name: "chartTitle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ChartTitle
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: end:
            /// </remarks>
            [JsiiProperty(name: "end", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object End
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStore:
            /// </remarks>
            [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object LogStore
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: query:
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Query
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: start:
            /// </remarks>
            [JsiiProperty(name: "start", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Start
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeSpanType:
            /// </remarks>
            [JsiiProperty(name: "timeSpanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object TimeSpanType
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IQueryListProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.QueryListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IQueryListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: chartTitle:
                /// </remarks>
                [JsiiProperty(name: "chartTitle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ChartTitle
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: end:
                /// </remarks>
                [JsiiProperty(name: "end", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object End
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: logStore:
                /// </remarks>
                [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object LogStore
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: query:
                /// </remarks>
                [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Query
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: start:
                /// </remarks>
                [JsiiProperty(name: "start", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Start
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: timeSpanType:
                /// </remarks>
                [JsiiProperty(name: "timeSpanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object TimeSpanType
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAlert.QueryListProperty")]
        public class QueryListProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IQueryListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: chartTitle:
            /// </remarks>
            [JsiiProperty(name: "chartTitle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChartTitle
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: end:
            /// </remarks>
            [JsiiProperty(name: "end", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object End
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStore:
            /// </remarks>
            [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStore
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: query:
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Query
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: start:
            /// </remarks>
            [JsiiProperty(name: "start", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Start
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeSpanType:
            /// </remarks>
            [JsiiProperty(name: "timeSpanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TimeSpanType
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IScheduleProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty")]
        public interface IScheduleProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpression:
            /// </remarks>
            [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CronExpression
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dayOfWeek:
            /// </remarks>
            [JsiiProperty(name: "dayOfWeek", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DayOfWeek
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: delay:
            /// </remarks>
            [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Delay
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hour:
            /// </remarks>
            [JsiiProperty(name: "hour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Hour
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: Execution interval
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Interval
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: runImmediately:
            /// </remarks>
            [JsiiProperty(name: "runImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RunImmediately
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScheduleProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IScheduleProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: type:
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: cronExpression:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CronExpression
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dayOfWeek:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dayOfWeek", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DayOfWeek
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: delay:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Delay
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hour:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Hour
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: interval: Execution interval
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Interval
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: runImmediately:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "runImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RunImmediately
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty")]
        public class ScheduleProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAlert.IScheduleProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpression:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CronExpression
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dayOfWeek:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dayOfWeek", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DayOfWeek
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: delay:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Delay
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hour:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hour", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Hour
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: Execution interval
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Interval
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: runImmediately:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RunImmediately
            {
                get;
                set;
            }
        }
    }
}
