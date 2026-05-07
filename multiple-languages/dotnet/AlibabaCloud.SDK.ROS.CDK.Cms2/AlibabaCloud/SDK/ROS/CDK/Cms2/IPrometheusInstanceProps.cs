using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `PrometheusInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrometheusInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.PrometheusInstanceProps")]
    public interface IPrometheusInstanceProps
    {
        /// <summary>Property prometheusInstanceName: The name of the Prometheus instance.</summary>
        [JsiiProperty(name: "prometheusInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrometheusInstanceName
        {
            get;
        }

        /// <summary>Property archiveDuration: The archive duration of the Prometheus instance.</summary>
        [JsiiProperty(name: "archiveDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArchiveDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.</summary>
        [JsiiProperty(name: "authFreeReadPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthFreeReadPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.</summary>
        [JsiiProperty(name: "authFreeWritePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthFreeWritePolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.</summary>
        [JsiiProperty(name: "basicMetricQueryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BasicMetricQueryLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.</summary>
        [JsiiProperty(name: "enableAuthFreeRead", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAuthFreeRead
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.</summary>
        [JsiiProperty(name: "enableAuthFreeWrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAuthFreeWrite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.</summary>
        [JsiiProperty(name: "enableAuthToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAuthToken
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentType: The payment type of the Prometheus instance.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the Prometheus instance.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageDuration: The storage duration of the Prometheus instance.</summary>
        [JsiiProperty(name: "storageDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspace: The workspace of the Prometheus instance.</summary>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Workspace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PrometheusInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrometheusInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.PrometheusInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IPrometheusInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property prometheusInstanceName: The name of the Prometheus instance.</summary>
            [JsiiProperty(name: "prometheusInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrometheusInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property archiveDuration: The archive duration of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "archiveDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArchiveDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authFreeReadPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthFreeReadPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authFreeWritePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthFreeWritePolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "basicMetricQueryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BasicMetricQueryLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAuthFreeRead", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAuthFreeRead
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAuthFreeWrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAuthFreeWrite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAuthToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAuthToken
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentType: The payment type of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageDuration: The storage duration of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspace: The workspace of the Prometheus instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Workspace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
