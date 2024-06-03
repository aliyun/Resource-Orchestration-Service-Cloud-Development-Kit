using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `EndpointGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEndpointGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupsProps")]
    public interface IEndpointGroupsProps
    {
        /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property endpointGroupConfigurations: The configurations of the endpoint groups.</summary>
        [JsiiProperty(name: "endpointGroupConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointGroupConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EndpointGroupConfigurations
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the region to which the endpoint group belongs.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `EndpointGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEndpointGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IEndpointGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointGroupConfigurations: The configurations of the endpoint groups.</summary>
            [JsiiProperty(name: "endpointGroupConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointGroupConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointGroupConfigurations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The ID of the region to which the endpoint group belongs.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
