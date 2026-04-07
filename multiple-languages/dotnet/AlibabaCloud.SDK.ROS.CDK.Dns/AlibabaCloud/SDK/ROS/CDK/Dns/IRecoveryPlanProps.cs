using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RecoveryPlan`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRecoveryPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RecoveryPlanProps")]
    public interface IRecoveryPlanProps
    {
        /// <summary>Property faultAddrPool: The fault address pool of the recovery plan.</summary>
        /// <remarks>
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "faultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object FaultAddrPool
        {
            get;
        }

        /// <summary>Property name: The name of the recovery plan.</summary>
        /// <remarks>
        /// The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property lang: The language of the request.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: The remark of the recovery plan.</summary>
        /// <remarks>
        /// The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RecoveryPlan`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRecoveryPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RecoveryPlanProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRecoveryPlanProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property faultAddrPool: The fault address pool of the recovery plan.</summary>
            /// <remarks>
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiProperty(name: "faultAddrPool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object FaultAddrPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the recovery plan.</summary>
            /// <remarks>
            /// The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lang: The language of the request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: The remark of the recovery plan.</summary>
            /// <remarks>
            /// The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
