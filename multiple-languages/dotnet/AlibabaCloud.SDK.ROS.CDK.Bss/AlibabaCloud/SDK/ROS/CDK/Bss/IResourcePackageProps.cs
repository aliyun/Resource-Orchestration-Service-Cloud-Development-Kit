using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    /// <summary>Properties for defining a `ResourcePackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-bss.ResourcePackageProps")]
    public interface IResourcePackageProps
    {
        /// <summary>Property duration: The validity of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Duration
        {
            get;
        }

        /// <summary>Property packageType: The type of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageType
        {
            get;
        }

        /// <summary>Property productCode: The code of the specified product.</summary>
        /// <remarks>
        /// The value is the same as the value of ProductType returned by QueryProductList.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductCode
        {
            get;
        }

        /// <summary>Property specification: The size of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Specification
        {
            get;
        }

        /// <summary>Property effectiveDate: The effective date of the specified resource package.</summary>
        /// <remarks>
        /// The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        /// </remarks>
        [JsiiProperty(name: "effectiveDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EffectiveDate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: The validity of the specified resource package.</summary>
        /// <remarks>
        /// Default value: Month. Valid values: Month, Year
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ResourcePackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-bss.ResourcePackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bss.IResourcePackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property duration: The validity of the specified resource package.</summary>
            /// <remarks>
            /// The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
            /// </remarks>
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Duration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property packageType: The type of the specified resource package.</summary>
            /// <remarks>
            /// The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
            /// </remarks>
            [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property productCode: The code of the specified product.</summary>
            /// <remarks>
            /// The value is the same as the value of ProductType returned by QueryProductList.
            /// </remarks>
            [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property specification: The size of the specified resource package.</summary>
            /// <remarks>
            /// The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
            /// </remarks>
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Specification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property effectiveDate: The effective date of the specified resource package.</summary>
            /// <remarks>
            /// The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectiveDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EffectiveDate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The validity of the specified resource package.</summary>
            /// <remarks>
            /// Default value: Month. Valid values: Month, Year
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
