using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `AccessStrategy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.AccessStrategyProps")]
    public interface IAccessStrategyProps
    {
        /// <summary>Property defaultAddrPool: The default address pool of the access strategy.</summary>
        [JsiiProperty(name: "defaultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object DefaultAddrPool
        {
            get;
        }

        /// <summary>Property defaultAddrPoolType: The type of the default address pool.</summary>
        [JsiiProperty(name: "defaultAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefaultAddrPoolType
        {
            get;
        }

        /// <summary>Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.</summary>
        [JsiiProperty(name: "defaultMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefaultMinAvailableAddrNum
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the Dns instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property strategyMode: The mode of the access strategy.</summary>
        [JsiiProperty(name: "strategyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StrategyMode
        {
            get;
        }

        /// <summary>Property strategyName: The name of the access strategy.</summary>
        [JsiiProperty(name: "strategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StrategyName
        {
            get;
        }

        /// <summary>Property accessMode: The access mode of the access strategy.</summary>
        [JsiiProperty(name: "accessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.</summary>
        [JsiiProperty(name: "defaultLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultLatencyOptimization
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultLbaStrategy: The load balancing strategy of the default address pool.</summary>
        [JsiiProperty(name: "defaultLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultLbaStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.</summary>
        [JsiiProperty(name: "defaultMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultMaxReturnAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverAddrPool: The failover address pool of the access strategy.</summary>
        [JsiiProperty(name: "failoverAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverAddrPool
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverAddrPoolType: The type of the failover address pool.</summary>
        [JsiiProperty(name: "failoverAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverAddrPoolType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.</summary>
        [JsiiProperty(name: "failoverLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverLatencyOptimization
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverLbaStrategy: The load balancing strategy of the failover address pool.</summary>
        [JsiiProperty(name: "failoverLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverLbaStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.</summary>
        [JsiiProperty(name: "failoverMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverMaxReturnAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.</summary>
        [JsiiProperty(name: "failoverMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailoverMinAvailableAddrNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lines: The lines of the access strategy.</summary>
        [JsiiProperty(name: "lines", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lines
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AccessStrategy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessStrategyProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.AccessStrategyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IAccessStrategyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property defaultAddrPool: The default address pool of the access strategy.</summary>
            [JsiiProperty(name: "defaultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object DefaultAddrPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultAddrPoolType: The type of the default address pool.</summary>
            [JsiiProperty(name: "defaultAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefaultAddrPoolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.</summary>
            [JsiiProperty(name: "defaultMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefaultMinAvailableAddrNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the Dns instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property strategyMode: The mode of the access strategy.</summary>
            [JsiiProperty(name: "strategyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StrategyMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property strategyName: The name of the access strategy.</summary>
            [JsiiProperty(name: "strategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StrategyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessMode: The access mode of the access strategy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLatencyOptimization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultLbaStrategy: The load balancing strategy of the default address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLbaStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "defaultMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultMaxReturnAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverAddrPool: The failover address pool of the access strategy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FailoverAddrPool
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverAddrPoolType: The type of the failover address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverAddrPoolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverAddrPoolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverLatencyOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverLatencyOptimization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverLbaStrategy: The load balancing strategy of the failover address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverLbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverLbaStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverMaxReturnAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverMaxReturnAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failoverMinAvailableAddrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailoverMinAvailableAddrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lines: The lines of the access strategy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lines", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Lines
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
