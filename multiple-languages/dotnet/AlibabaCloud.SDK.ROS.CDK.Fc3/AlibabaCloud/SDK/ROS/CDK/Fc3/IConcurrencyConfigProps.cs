using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `ConcurrencyConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConcurrencyConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ConcurrencyConfigProps")]
    public interface IConcurrencyConfigProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <summary>Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions.</summary>
        /// <remarks>
        /// Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
        /// </remarks>
        [JsiiProperty(name: "reservedConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReservedConcurrency
        {
            get;
        }

        /// <summary>Properties for defining a `ConcurrencyConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConcurrencyConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ConcurrencyConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IConcurrencyConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions.</summary>
            /// <remarks>
            /// Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
            /// </remarks>
            [JsiiProperty(name: "reservedConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReservedConcurrency
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
