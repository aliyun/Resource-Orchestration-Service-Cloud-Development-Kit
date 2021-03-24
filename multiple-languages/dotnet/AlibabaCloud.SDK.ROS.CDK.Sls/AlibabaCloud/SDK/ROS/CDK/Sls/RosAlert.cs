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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
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
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
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
        [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Project
        {
            get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "condition", typeJson: "{\"primitive\":\"string\"}")]
            string Condition
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
            /// </remarks>
            [JsiiProperty(name: "dashboard", typeJson: "{\"primitive\":\"string\"}")]
            string Dashboard
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
            [JsiiProperty(name: "throttling", typeJson: "{\"primitive\":\"string\"}")]
            string Throttling
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
            [JsiiProperty(name: "notifyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? NotifyThreshold
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
                [JsiiProperty(name: "condition", typeJson: "{\"primitive\":\"string\"}")]
                public string Condition
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
                /// </remarks>
                [JsiiProperty(name: "dashboard", typeJson: "{\"primitive\":\"string\"}")]
                public string Dashboard
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "throttling", typeJson: "{\"primitive\":\"string\"}")]
                public string Throttling
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "notifyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? NotifyThreshold
                {
                    get => GetInstanceProperty<double?>();
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
            [JsiiProperty(name: "condition", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Condition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dashboard: Alarm associated dashboard.
            /// </remarks>
            [JsiiProperty(name: "dashboard", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Dashboard
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryList:
            /// </remarks>
            [JsiiProperty(name: "queryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.QueryListProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object QueryList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: throttling: Notification interval, default is no interval.
            /// </remarks>
            [JsiiProperty(name: "throttling", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Throttling
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: notificationList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notificationList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
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
            [JsiiProperty(name: "notifyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? NotifyThreshold
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
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
            string DisplayName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Alert name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
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
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: state:
            /// </remarks>
            [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? State
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Type
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
                [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
                public string DisplayName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Alert name.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: state:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? State
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Type
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty\"}]}}", isOverride: true)]
            public object Configuration
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Alert name display in console. The name length is 1-64 characters.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string DisplayName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Alert name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: schedule: The interval at which Log Service evaluates the alert rule. 
            /// Note During an alert rule evaluation, if a query returns more than 100 log entries, 
            /// Log Service checks only the first 100 log entries.
            /// </remarks>
            [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty\"}]}}", isOverride: true)]
            public object Schedule
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the alert.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: state:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? State
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Type
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of an alert notification
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Content
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
            [JsiiProperty(name: "serviceUri", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceUri
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
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: content: The content of an alert notification
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Content
                {
                    get => GetInstanceProperty<string?>();
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
                [JsiiProperty(name: "serviceUri", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceUri
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of an alert notification
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Content
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: emailList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "emailList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EmailList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mobileList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mobileList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MobileList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceUri: The webhook URL of the DingTalk chatbot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceUri", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceUri
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
            [JsiiProperty(name: "chartTitle", typeJson: "{\"primitive\":\"string\"}")]
            string ChartTitle
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: end:
            /// </remarks>
            [JsiiProperty(name: "end", typeJson: "{\"primitive\":\"string\"}")]
            string End
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStore:
            /// </remarks>
            [JsiiProperty(name: "logStore", typeJson: "{\"primitive\":\"string\"}")]
            string LogStore
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: query:
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"primitive\":\"string\"}")]
            string Query
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: start:
            /// </remarks>
            [JsiiProperty(name: "start", typeJson: "{\"primitive\":\"string\"}")]
            string Start
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeSpanType:
            /// </remarks>
            [JsiiProperty(name: "timeSpanType", typeJson: "{\"primitive\":\"string\"}")]
            string TimeSpanType
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
                [JsiiProperty(name: "chartTitle", typeJson: "{\"primitive\":\"string\"}")]
                public string ChartTitle
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: end:
                /// </remarks>
                [JsiiProperty(name: "end", typeJson: "{\"primitive\":\"string\"}")]
                public string End
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: logStore:
                /// </remarks>
                [JsiiProperty(name: "logStore", typeJson: "{\"primitive\":\"string\"}")]
                public string LogStore
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: query:
                /// </remarks>
                [JsiiProperty(name: "query", typeJson: "{\"primitive\":\"string\"}")]
                public string Query
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: start:
                /// </remarks>
                [JsiiProperty(name: "start", typeJson: "{\"primitive\":\"string\"}")]
                public string Start
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: timeSpanType:
                /// </remarks>
                [JsiiProperty(name: "timeSpanType", typeJson: "{\"primitive\":\"string\"}")]
                public string TimeSpanType
                {
                    get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "chartTitle", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ChartTitle
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: end:
            /// </remarks>
            [JsiiProperty(name: "end", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string End
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStore:
            /// </remarks>
            [JsiiProperty(name: "logStore", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string LogStore
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: query:
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Query
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: start:
            /// </remarks>
            [JsiiProperty(name: "start", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Start
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeSpanType:
            /// </remarks>
            [JsiiProperty(name: "timeSpanType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string TimeSpanType
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpression:
            /// </remarks>
            [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? CronExpression
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dayOfWeek:
            /// </remarks>
            [JsiiProperty(name: "dayOfWeek", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? DayOfWeek
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: delay:
            /// </remarks>
            [JsiiProperty(name: "delay", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Delay
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hour:
            /// </remarks>
            [JsiiProperty(name: "hour", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Hour
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: Execution interval
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Interval
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
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: cronExpression:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? CronExpression
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dayOfWeek:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dayOfWeek", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? DayOfWeek
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: delay:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "delay", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Delay
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hour:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hour", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Hour
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: interval: Execution interval
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Interval
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpression:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? CronExpression
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dayOfWeek:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dayOfWeek", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? DayOfWeek
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: delay:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delay", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Delay
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hour:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hour", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Hour
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: Execution interval
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Interval
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: runImmediately:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RunImmediately
            {
                get;
                set;
            }
        }
    }
}
