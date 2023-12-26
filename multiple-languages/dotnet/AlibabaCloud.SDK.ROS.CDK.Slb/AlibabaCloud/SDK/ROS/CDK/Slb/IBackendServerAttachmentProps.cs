using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `BackendServerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.BackendServerAttachmentProps")]
    public interface IBackendServerAttachmentProps
    {
        /// <summary>Property loadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.</summary>
        [JsiiProperty(name: "backendServerList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServerList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backendServerWeightList: The comma delimited weight list.</summary>
        /// <remarks>
        /// If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        /// </remarks>
        [JsiiProperty(name: "backendServerWeightList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServerWeightList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BackendServerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.BackendServerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The id of load balancer.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendServerList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServerList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backendServerWeightList: The comma delimited weight list.</summary>
            /// <remarks>
            /// If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServerWeightList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackendServerWeightList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
