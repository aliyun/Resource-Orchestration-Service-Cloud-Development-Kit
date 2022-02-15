using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::SiteMonitor`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosSiteMonitor), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSiteMonitor", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosSiteMonitorProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSiteMonitor : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::SiteMonitor`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSiteMonitor(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosSiteMonitorProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSiteMonitor(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSiteMonitor(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosSiteMonitor))!;

        /// <remarks>
        /// <strong>Attribute</strong>: TaskId: The ID of the site monitoring task.
        /// </remarks>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTaskId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: address: The URL or IP address monitored by the monitoring task.
        /// </remarks>
        [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Address
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
        /// <strong>Property</strong>: taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
        /// It can contain letters, digits, and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TaskName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
        /// UDP, DNS, SMTP, POP3, and FTP.
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TaskType
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: alertIds:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alertIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? AlertIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
        /// minutes. Default value: 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Interval
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ispCities: The information about detection points, which is specified in a JSON array. Example:
        /// [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
        /// Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
        /// points that can be used to create site monitoring tasks. For more information, see
        /// DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
        /// points for site monitoring.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ispCities", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? IspCities
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: optionsJson: The extended options of the protocol that is used by the site monitoring task. The
        /// options vary based on the protocol.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "optionsJson", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? OptionsJson
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IIspCitiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty")]
        public interface IIspCitiesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: city:
            /// </remarks>
            [JsiiProperty(name: "city", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object City
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: isp:
            /// </remarks>
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Isp
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IIspCitiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosSiteMonitor.IIspCitiesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: city:
                /// </remarks>
                [JsiiProperty(name: "city", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object City
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: isp:
                /// </remarks>
                [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Isp
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty")]
        public class IspCitiesProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosSiteMonitor.IIspCitiesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: city:
            /// </remarks>
            [JsiiProperty(name: "city", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object City
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isp:
            /// </remarks>
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Isp
            {
                get;
                set;
            }
        }
    }
}
