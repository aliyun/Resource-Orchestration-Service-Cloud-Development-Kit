using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosMappingProps")]
    public class RosMappingProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosMappingProps
    {
        /// <summary>Mapping of key to a set of corresponding set of named values.</summary>
        /// <remarks>
        /// The key identifies a map of name-value pairs and must be unique within the mapping.
        /// 
        /// For example, if you want to set values based on a region, you can create a mapping
        /// that uses the region name as a key and contains the values you want to specify for
        /// each specific region.
        /// 
        /// <strong>Default</strong>: - No mapping.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mapping", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, object>>? Mapping
        {
            get;
            set;
        }
    }
}
