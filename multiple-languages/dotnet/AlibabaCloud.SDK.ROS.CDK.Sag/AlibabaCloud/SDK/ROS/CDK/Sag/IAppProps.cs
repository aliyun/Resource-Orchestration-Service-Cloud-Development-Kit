using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::App`.</summary>
    [JsiiInterface(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.AppProps")]
    public interface IAppProps
    {
        /// <summary>Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.</summary>
        /// <remarks>
        /// Default value:
        /// false. Valid values:
        /// true: automatically pays the bills of SAG APP instances.
        /// false: does not automatically pay the bills of SAG APP instances.
        /// If you set the parameter to false, after you call this operation, go to Billing Management
        /// of the SAG console to complete the payment, the instance can be created.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AutoPay
        {
            get;
        }

        /// <summary>Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.</summary>
        /// <remarks>
        /// Unit: GB. Set the value to 5.
        /// Note The system allows each client account to use 5 GB traffic plan for free.
        /// </remarks>
        [JsiiProperty(name: "dataPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataPlan
        {
            get;
        }

        /// <summary>Property period: The subscription period of the SAG APP instance.</summary>
        /// <remarks>
        /// Unit: months.
        /// Valid values: 1~9, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property userCount: The quota of client accounts for the SAG APP instance.</summary>
        /// <remarks>
        /// Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        /// </remarks>
        [JsiiProperty(name: "userCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserCount
        {
            get;
        }

        /// <summary>Property chargeType: The billing method of the SAG APP instance.</summary>
        /// <remarks>
        /// Set the value to PREPAY.
        /// This value indicates that the SAG APP instance is a subscription resource.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::App`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.AppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.</summary>
            /// <remarks>
            /// Default value:
            /// false. Valid values:
            /// true: automatically pays the bills of SAG APP instances.
            /// false: does not automatically pay the bills of SAG APP instances.
            /// If you set the parameter to false, after you call this operation, go to Billing Management
            /// of the SAG console to complete the payment, the instance can be created.
            /// </remarks>
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AutoPay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.</summary>
            /// <remarks>
            /// Unit: GB. Set the value to 5.
            /// Note The system allows each client account to use 5 GB traffic plan for free.
            /// </remarks>
            [JsiiProperty(name: "dataPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataPlan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period: The subscription period of the SAG APP instance.</summary>
            /// <remarks>
            /// Unit: months.
            /// Valid values: 1~9, 12, 24, and 36.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userCount: The quota of client accounts for the SAG APP instance.</summary>
            /// <remarks>
            /// Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
            /// </remarks>
            [JsiiProperty(name: "userCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property chargeType: The billing method of the SAG APP instance.</summary>
            /// <remarks>
            /// Set the value to PREPAY.
            /// This value indicates that the SAG APP instance is a subscription resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
