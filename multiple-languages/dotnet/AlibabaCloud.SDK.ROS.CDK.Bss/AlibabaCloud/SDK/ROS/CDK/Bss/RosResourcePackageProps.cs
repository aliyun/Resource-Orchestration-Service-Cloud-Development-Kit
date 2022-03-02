using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BSS::ResourcePackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-bss.RosResourcePackageProps")]
    public class RosResourcePackageProps : AlibabaCloud.SDK.ROS.CDK.Bss.IRosResourcePackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PackageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProductCode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Specification
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EffectiveDate
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }
    }
}
