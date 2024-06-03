using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosBasicAcceleratorIpEndpointRelation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBasicAcceleratorIpEndpointRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelationProps")]
    public interface IRosBasicAcceleratorIpEndpointRelationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accelerateIpId: The ID of the accelerated IP address.
        /// </remarks>
        [JsiiProperty(name: "accelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccelerateIpId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointId: The ID of the endpoint.
        /// </remarks>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <summary>Properties for defining a `RosBasicAcceleratorIpEndpointRelation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBasicAcceleratorIpEndpointRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBasicAcceleratorIpEndpointRelationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accelerateIpId: The ID of the accelerated IP address.
            /// </remarks>
            [JsiiProperty(name: "accelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccelerateIpId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointId: The ID of the endpoint.
            /// </remarks>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
