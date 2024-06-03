using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `BasicAcceleratorIpEndpointRelation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBasicAcceleratorIpEndpointRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelationProps")]
    public interface IBasicAcceleratorIpEndpointRelationProps
    {
        /// <summary>Property accelerateIpId: The ID of the accelerated IP address.</summary>
        [JsiiProperty(name: "accelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccelerateIpId
        {
            get;
        }

        /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property endpointId: The ID of the endpoint.</summary>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointId
        {
            get;
        }

        /// <summary>Properties for defining a `BasicAcceleratorIpEndpointRelation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBasicAcceleratorIpEndpointRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorIpEndpointRelationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accelerateIpId: The ID of the accelerated IP address.</summary>
            [JsiiProperty(name: "accelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccelerateIpId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointId: The ID of the endpoint.</summary>
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
