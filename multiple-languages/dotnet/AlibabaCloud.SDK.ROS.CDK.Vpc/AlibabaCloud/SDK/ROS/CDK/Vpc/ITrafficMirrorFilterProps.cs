using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `TrafficMirrorFilter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps")]
    public interface ITrafficMirrorFilterProps
    {
        /// <summary>Property egressRules: Egress rules.</summary>
        [JsiiProperty(name: "egressRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.EgressRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EgressRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ingressRules: Ingress rules.</summary>
        [JsiiProperty(name: "ingressRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.IngressRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficMirrorFilterDescription: The description of the filter.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorFilterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficMirrorFilterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.</summary>
        [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficMirrorFilterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TrafficMirrorFilter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property egressRules: Egress rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "egressRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.EgressRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EgressRules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ingressRules: Ingress rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ingressRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.IngressRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IngressRules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficMirrorFilterDescription: The description of the filter.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorFilterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorFilterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorFilterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
