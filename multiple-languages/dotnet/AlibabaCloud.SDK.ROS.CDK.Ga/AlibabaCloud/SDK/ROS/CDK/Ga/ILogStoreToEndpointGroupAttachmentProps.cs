using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `LogStoreToEndpointGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILogStoreToEndpointGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.LogStoreToEndpointGroupAttachmentProps")]
    public interface ILogStoreToEndpointGroupAttachmentProps
    {
        /// <summary>Property acceleratorId: Global Acceleration Instance ID.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property endpointGroupIds: Endpoint Group ID List.</summary>
        [JsiiProperty(name: "endpointGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EndpointGroupIds
        {
            get;
        }

        /// <summary>Property listenerId: Listener ID.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Property slsLogStoreName: SLS log library name.</summary>
        [JsiiProperty(name: "slsLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogStoreName
        {
            get;
        }

        /// <summary>Property slsProjectName: SLS project name.</summary>
        [JsiiProperty(name: "slsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProjectName
        {
            get;
        }

        /// <summary>Property slsRegionId: SLS Region ID.</summary>
        [JsiiProperty(name: "slsRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsRegionId
        {
            get;
        }

        /// <summary>Properties for defining a `LogStoreToEndpointGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILogStoreToEndpointGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.LogStoreToEndpointGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.ILogStoreToEndpointGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: Global Acceleration Instance ID.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointGroupIds: Endpoint Group ID List.</summary>
            [JsiiProperty(name: "endpointGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: Listener ID.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsLogStoreName: SLS log library name.</summary>
            [JsiiProperty(name: "slsLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsProjectName: SLS project name.</summary>
            [JsiiProperty(name: "slsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property slsRegionId: SLS Region ID.</summary>
            [JsiiProperty(name: "slsRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsRegionId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
