using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps")]
    public interface IRosBackendServerAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        string LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        /// </remarks>
        [JsiiProperty(name: "backendServerList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? BackendServerList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of ECS instance, which will attached to load balancer.
        /// </remarks>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
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

        /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosBackendServerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
            public string LoadBalancerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServerList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? BackendServerList
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: backendServers: The list of ECS instance, which will attached to load balancer.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
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
