using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosLogStoreToEndpointGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLogStoreToEndpointGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosLogStoreToEndpointGroupAttachmentProps")]
    public interface IRosLogStoreToEndpointGroupAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: Global Acceleration Instance ID.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointGroupIds: Endpoint Group ID List.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EndpointGroupIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: Listener ID.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsLogStoreName: SLS log library name.
        /// </remarks>
        [JsiiProperty(name: "slsLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogStoreName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProjectName: SLS project name.
        /// </remarks>
        [JsiiProperty(name: "slsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsRegionId: SLS Region ID.
        /// </remarks>
        [JsiiProperty(name: "slsRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsRegionId
        {
            get;
        }

        /// <summary>Properties for defining a `RosLogStoreToEndpointGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLogStoreToEndpointGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosLogStoreToEndpointGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosLogStoreToEndpointGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: Global Acceleration Instance ID.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointGroupIds: Endpoint Group ID List.
            /// </remarks>
            [JsiiProperty(name: "endpointGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: Listener ID.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsLogStoreName: SLS log library name.
            /// </remarks>
            [JsiiProperty(name: "slsLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProjectName: SLS project name.
            /// </remarks>
            [JsiiProperty(name: "slsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsRegionId: SLS Region ID.
            /// </remarks>
            [JsiiProperty(name: "slsRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsRegionId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
