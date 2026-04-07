using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosAccessStrategy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosAccessStrategyProps")]
    public interface IRosAccessStrategyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: defaultAddrPool: The default address pool of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "defaultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object DefaultAddrPool
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultAddrPoolType: The type of the default address pool.
        /// </remarks>
        [JsiiProperty(name: "defaultAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefaultAddrPoolType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
        /// </remarks>
        [JsiiProperty(name: "defaultMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefaultMinAvailableAddrNum
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the Dns instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: strategyMode: The mode of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "strategyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StrategyMode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: strategyName: The name of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "strategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StrategyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessMode: The access mode of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "accessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
        /// </remarks>
        [JsiiProperty(name: "defaultLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultLatencyOptimization
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultLbaStrategy: The load balancing strategy of the default address pool.
        /// </remarks>
        [JsiiProperty(name: "defaultLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultLbaStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
        /// </remarks>
        [JsiiProperty(name: "defaultMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultMaxReturnAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverAddrPool: The failover address pool of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "failoverAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverAddrPool
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverAddrPoolType: The type of the failover address pool.
        /// </remarks>
        [JsiiProperty(name: "failoverAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverAddrPoolType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
        /// </remarks>
        [JsiiProperty(name: "failoverLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverLatencyOptimization
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverLbaStrategy: The load balancing strategy of the failover address pool.
        /// </remarks>
        [JsiiProperty(name: "failoverLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverLbaStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
        /// </remarks>
        [JsiiProperty(name: "failoverMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverMaxReturnAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
        /// </remarks>
        [JsiiProperty(name: "failoverMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverMinAvailableAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lines: The lines of the access strategy.
        /// </remarks>
        [JsiiProperty(name: "lines", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lines
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAccessStrategy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosAccessStrategyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosAccessStrategyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultAddrPool: The default address pool of the access strategy.
            /// </remarks>
            [JsiiProperty(name: "defaultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object DefaultAddrPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultAddrPoolType: The type of the default address pool.
            /// </remarks>
            [JsiiProperty(name: "defaultAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefaultAddrPoolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
            /// </remarks>
            [JsiiProperty(name: "defaultMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefaultMinAvailableAddrNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the Dns instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: strategyMode: The mode of the access strategy.
            /// </remarks>
            [JsiiProperty(name: "strategyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StrategyMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: strategyName: The name of the access strategy.
            /// </remarks>
            [JsiiProperty(name: "strategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StrategyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessMode: The access mode of the access strategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLatencyOptimization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultLbaStrategy: The load balancing strategy of the default address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLbaStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultMaxReturnAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverAddrPool: The failover address pool of the access strategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FailoverAddrPool
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverAddrPoolType: The type of the failover address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverAddrPoolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverLatencyOptimization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverLbaStrategy: The load balancing strategy of the failover address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverLbaStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverMaxReturnAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failoverMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverMinAvailableAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lines: The lines of the access strategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lines", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Lines
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
