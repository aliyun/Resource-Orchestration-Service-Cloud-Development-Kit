using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `DeliverTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DeliverTaskProps")]
    public interface IDeliverTaskProps
    {
        /// <summary>Property deliver: The deliver of the CDN deliver task.</summary>
        [JsiiProperty(name: "deliver", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Deliver
        {
            get;
        }

        /// <summary>Property name: The name of the CDN deliver task.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property reports: The reports of the CDN deliver task.</summary>
        [JsiiProperty(name: "reports", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Reports
        {
            get;
        }

        /// <summary>Property schedule: The schedule of the CDN deliver task.</summary>
        [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Schedule
        {
            get;
        }

        /// <summary>Property domainNames: The domain name of the CDN deliver task.</summary>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DeliverTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DeliverTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IDeliverTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deliver: The deliver of the CDN deliver task.</summary>
            [JsiiProperty(name: "deliver", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Deliver
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the CDN deliver task.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property reports: The reports of the CDN deliver task.</summary>
            [JsiiProperty(name: "reports", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Reports
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property schedule: The schedule of the CDN deliver task.</summary>
            [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Schedule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainNames: The domain name of the CDN deliver task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainNames
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
