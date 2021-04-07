using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.SavedsearchProps")]
    public class SavedsearchProps : AlibabaCloud.SDK.ROS.CDK.Sls.ISavedsearchProps
    {
        /// <summary>Property detail:.</summary>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}", isOverride: true)]
        public object Detail
        {
            get;
            set;
        }

        /// <summary>Property project: Project name.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Project
        {
            get;
            set;
        }
    }
}
