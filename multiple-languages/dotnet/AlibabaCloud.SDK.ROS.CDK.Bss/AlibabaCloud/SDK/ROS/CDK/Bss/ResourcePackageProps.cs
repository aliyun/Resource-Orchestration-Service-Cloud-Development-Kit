using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BSS::ResourcePackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-bss.ResourcePackageProps")]
    public class ResourcePackageProps : AlibabaCloud.SDK.ROS.CDK.Bss.IResourcePackageProps
    {
        /// <summary>Property duration: The validity of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Duration
        {
            get;
            set;
        }

        /// <summary>Property packageType: The type of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PackageType
        {
            get;
            set;
        }

        /// <summary>Property productCode: The code of the specified product.</summary>
        /// <remarks>
        /// The value is the same as the value of ProductType returned by QueryProductList.
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ProductCode
        {
            get;
            set;
        }

        /// <summary>Property specification: The size of the specified resource package.</summary>
        /// <remarks>
        /// The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Specification
        {
            get;
            set;
        }

        /// <summary>Property effectiveDate: The effective date of the specified resource package.</summary>
        /// <remarks>
        /// The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EffectiveDate
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: The validity of the specified resource package.</summary>
        /// <remarks>
        /// Default value: Month. Valid values: Month, Year
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PricingCycle
        {
            get;
            set;
        }
    }
}
