using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.UserDefineRegionProps")]
    public class UserDefineRegionProps : AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps
    {
        /// <summary>Property regionName: Logical region (or namespace) name.</summary>
        [JsiiProperty(name: "regionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RegionName
        {
            get;
            set;
        }

        /// <summary>Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").</summary>
        [JsiiProperty(name: "regionTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RegionTag
        {
            get;
            set;
        }

        /// <summary>Property debugEnable: Whether debug is enable.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DebugEnable
        {
            get;
            set;
        }

        /// <summary>Property description: Logic region (or namespace) description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
